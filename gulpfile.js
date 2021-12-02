const gulp = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const css2js = require("gulp-css2js");
const rollup = require("rollup");
const svelte = require("rollup-plugin-svelte");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const { terser } = require("rollup-plugin-terser");
const serve = require("rollup-plugin-serve");
const livereload = require("rollup-plugin-livereload");
const jest = require("jest");

const pkg = require("./package.json");

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase());

const banner = `/*!
* ${pkg.name} v${pkg.version}
* Released under the ${pkg.license} License.
*/`;

const skipTests = process.argv.includes("--skip-tests");

gulp.task("build:styles", () => {
  return gulp
    .src("src/styles/index.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(autoprefixer())
    .pipe(css2js())
    .pipe(concat("styles.js"))
    .pipe(gulp.dest("src/lib/"));
});

gulp.task("build:rollup", async () => {
  const bundle = await rollup.rollup({
    input: "src/index.js",
    plugins: [nodeResolve(), svelte()],
  });

  await bundle.write({ file: pkg.module, format: "es", banner });
  await bundle.write({ file: pkg.main, format: "umd", name, banner });
  await bundle.write({
    file: pkg.main.replace(".js", ".min.js"),
    format: "iife",
    name,
    banner,
    plugins: [terser()],
  });
});

gulp.task("build:test", async () => {
  const {
    results: { success },
  } = await jest.runCLI({}, ["spec"]);

  if (!success) {
    process.exit(1);
  }
});

gulp.task(
  "build",
  gulp.series(
    skipTests
      ? ["build:styles", "build:rollup"]
      : ["build:styles", "build:test", "build:rollup"]
  )
);

gulp.task("dev:stage", () => {
  return gulp
    .src(["package.json", "src/**/*", "dist/**/*",], {
      base: "./",
    })
    .pipe(gulp.dest("stage/node_modules/" + pkg.name));
});

gulp.task(
  "dev",
  gulp.series("build", "dev:stage", async function watch() {
    gulp.watch(["src/**/*"], gulp.series("build:rollup", "dev:stage"));
    gulp.watch(["src/styles/*"], gulp.series("build", "dev:stage"));
    rollup
      .watch({
        watch: {
          include: "stage/**/*",
        },
        input: "stage/src/main.js",
        output: {
          sourcemap: true,
          format: "iife",
          name: "app",
          file: "stage/public/bundle/bundle.js",
        },
        plugins: [
          nodeResolve({
            mainFields: ['svelte', 'module', 'main'],
            dedupe: ["svelte"],
          }),
          svelte({
            compilerOptions: {
              dev: true,
            },
          }),
          serve("stage/public"),
          livereload("stage/public"),
        ],
      })
      .on("event", ({ result }) => {
        if (result) {
          result.close();
        }
      });
  })
);
