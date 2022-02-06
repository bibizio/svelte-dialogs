var app = (function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var _typeof$2 = {exports: {}};

  (function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };

      module.exports["default"] = module.exports, module.exports.__esModule = true;
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  }(_typeof$2));

  var _typeof$1 = /*@__PURE__*/getDefaultExportFromCjs(_typeof$2.exports);

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function noop() {}

  var identity = function identity(x) {
    return x;
  };

  function assign(tar, src) {
    // @ts-ignore
    for (var k in src) {
      tar[k] = src[k];
    }

    return tar;
  }

  function run(fn) {
    return fn();
  }

  function blank_object() {
    return Object.create(null);
  }

  function run_all(fns) {
    fns.forEach(run);
  }

  function is_function(thing) {
    return typeof thing === 'function';
  }

  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
  }

  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }

  function subscribe(store) {
    if (store == null) {
      return noop;
    }

    for (var _len = arguments.length, callbacks = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      callbacks[_key - 1] = arguments[_key];
    }

    var unsub = store.subscribe.apply(store, callbacks);
    return unsub.unsubscribe ? function () {
      return unsub.unsubscribe();
    } : unsub;
  }

  function get_store_value(store) {
    var value;
    subscribe(store, function (_) {
      return value = _;
    })();
    return value;
  }

  function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
  }

  function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
      var slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
      return definition[0](slot_ctx);
    }
  }

  function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
  }

  function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
      var lets = definition[2](fn(dirty));

      if ($$scope.dirty === undefined) {
        return lets;
      }

      if (_typeof(lets) === 'object') {
        var merged = [];
        var len = Math.max($$scope.dirty.length, lets.length);

        for (var i = 0; i < len; i += 1) {
          merged[i] = $$scope.dirty[i] | lets[i];
        }

        return merged;
      }

      return $$scope.dirty | lets;
    }

    return $$scope.dirty;
  }

  function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
      var slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
      slot.p(slot_context, slot_changes);
    }
  }

  function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
      var dirty = [];
      var length = $$scope.ctx.length / 32;

      for (var i = 0; i < length; i++) {
        dirty[i] = -1;
      }

      return dirty;
    }

    return -1;
  }

  function exclude_internal_props(props) {
    var result = {};

    for (var k in props) {
      if (k[0] !== '$') result[k] = props[k];
    }

    return result;
  }

  function compute_rest_props(props, keys) {
    var rest = {};
    keys = new Set(keys);

    for (var k in props) {
      if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];
    }

    return rest;
  }

  function compute_slots(slots) {
    var result = {};

    for (var key in slots) {
      result[key] = true;
    }

    return result;
  }

  function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
  }

  var is_client = typeof window !== 'undefined';
  var now = is_client ? function () {
    return window.performance.now();
  } : function () {
    return Date.now();
  };
  var raf = is_client ? function (cb) {
    return requestAnimationFrame(cb);
  } : noop; // used internally for testing

  var tasks = new Set();

  function run_tasks(now) {
    tasks.forEach(function (task) {
      if (!task.c(now)) {
        tasks.delete(task);
        task.f();
      }
    });
    if (tasks.size !== 0) raf(run_tasks);
  }
  /**
   * Creates a new task that runs on each raf frame
   * until it returns a falsy value or is aborted
   */


  function loop(callback) {
    var task;
    if (tasks.size === 0) raf(run_tasks);
    return {
      promise: new Promise(function (fulfill) {
        tasks.add(task = {
          c: callback,
          f: fulfill
        });
      }),
      abort: function abort() {
        tasks.delete(task);
      }
    };
  } // Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM

  function append(target, node) {
    target.appendChild(node);
  }

  function get_root_for_style(node) {
    if (!node) return document;
    var root = node.getRootNode ? node.getRootNode() : node.ownerDocument;

    if (root && root.host) {
      return root;
    }

    return node.ownerDocument;
  }

  function append_empty_stylesheet(node) {
    var style_element = element('style');
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element;
  }

  function append_stylesheet(node, style) {
    append(node.head || node, style);
  }

  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }

  function detach(node) {
    node.parentNode.removeChild(node);
  }

  function destroy_each(iterations, detaching) {
    for (var i = 0; i < iterations.length; i += 1) {
      if (iterations[i]) iterations[i].d(detaching);
    }
  }

  function element(name) {
    return document.createElement(name);
  }

  function text(data) {
    return document.createTextNode(data);
  }

  function space() {
    return text(' ');
  }

  function empty() {
    return text('');
  }

  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return function () {
      return node.removeEventListener(event, handler, options);
    };
  }

  function prevent_default(fn) {
    return function (event) {
      event.preventDefault(); // @ts-ignore

      return fn.call(this, event);
    };
  }

  function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
  }

  function set_attributes(node, attributes) {
    // @ts-ignore
    var descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

    for (var key in attributes) {
      if (attributes[key] == null) {
        node.removeAttribute(key);
      } else if (key === 'style') {
        node.style.cssText = attributes[key];
      } else if (key === '__value') {
        node.value = node[key] = attributes[key];
      } else if (descriptors[key] && descriptors[key].set) {
        node[key] = attributes[key];
      } else {
        attr(node, key, attributes[key]);
      }
    }
  }

  function children(element) {
    return Array.from(element.childNodes);
  }

  function set_data(text, data) {
    data = '' + data;
    if (text.wholeText !== data) text.data = data;
  }

  function set_input_value(input, value) {
    input.value = value == null ? '' : value;
  }

  function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
  }

  function custom_event(type, detail) {
    var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, bubbles, false, detail);
    return e;
  }

  var HtmlTag = /*#__PURE__*/function () {
    function HtmlTag() {
      _classCallCheck(this, HtmlTag);

      this.e = this.n = null;
    }

    _createClass(HtmlTag, [{
      key: "c",
      value: function c(html) {
        this.h(html);
      }
    }, {
      key: "m",
      value: function m(html, target) {
        var anchor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        if (!this.e) {
          this.e = element(target.nodeName);
          this.t = target;
          this.c(html);
        }

        this.i(anchor);
      }
    }, {
      key: "h",
      value: function h(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
      }
    }, {
      key: "i",
      value: function i(anchor) {
        for (var i = 0; i < this.n.length; i += 1) {
          insert(this.t, this.n[i], anchor);
        }
      }
    }, {
      key: "p",
      value: function p(html) {
        this.d();
        this.h(html);
        this.i(this.a);
      }
    }, {
      key: "d",
      value: function d() {
        this.n.forEach(detach);
      }
    }]);

    return HtmlTag;
  }();

  var active_docs = new Set();
  var active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

  function hash(str) {
    var hash = 5381;
    var i = str.length;

    while (i--) {
      hash = (hash << 5) - hash ^ str.charCodeAt(i);
    }

    return hash >>> 0;
  }

  function create_rule(node, a, b, duration, delay, ease, fn) {
    var uid = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var step = 16.666 / duration;
    var keyframes = '{\n';

    for (var p = 0; p <= 1; p += step) {
      var t = a + (b - a) * ease(p);
      keyframes += p * 100 + "%{".concat(fn(t, 1 - t), "}\n");
    }

    var rule = keyframes + "100% {".concat(fn(b, 1 - b), "}\n}");
    var name = "__svelte_".concat(hash(rule), "_").concat(uid);
    var doc = get_root_for_style(node);
    active_docs.add(doc);
    var stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = append_empty_stylesheet(node).sheet);
    var current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});

    if (!current_rules[name]) {
      current_rules[name] = true;
      stylesheet.insertRule("@keyframes ".concat(name, " ").concat(rule), stylesheet.cssRules.length);
    }

    var animation = node.style.animation || '';
    node.style.animation = "".concat(animation ? "".concat(animation, ", ") : '').concat(name, " ").concat(duration, "ms linear ").concat(delay, "ms 1 both");
    active += 1;
    return name;
  }

  function delete_rule(node, name) {
    var previous = (node.style.animation || '').split(', ');
    var next = previous.filter(name ? function (anim) {
      return anim.indexOf(name) < 0;
    } // remove specific animation
    : function (anim) {
      return anim.indexOf('__svelte') === -1;
    } // remove all Svelte animations
    );
    var deleted = previous.length - next.length;

    if (deleted) {
      node.style.animation = next.join(', ');
      active -= deleted;
      if (!active) clear_rules();
    }
  }

  function clear_rules() {
    raf(function () {
      if (active) return;
      active_docs.forEach(function (doc) {
        var stylesheet = doc.__svelte_stylesheet;
        var i = stylesheet.cssRules.length;

        while (i--) {
          stylesheet.deleteRule(i);
        }

        doc.__svelte_rules = {};
      });
      active_docs.clear();
    });
  }

  var current_component;

  function set_current_component(component) {
    current_component = component;
  }

  function get_current_component() {
    if (!current_component) throw new Error('Function called outside component initialization');
    return current_component;
  }

  function createEventDispatcher() {
    var component = get_current_component();
    return function (type, detail) {
      var callbacks = component.$$.callbacks[type];

      if (callbacks) {
        // TODO are there situations where events could be dispatched
        // in a server (non-DOM) environment?
        var event = custom_event(type, detail);
        callbacks.slice().forEach(function (fn) {
          fn.call(component, event);
        });
      }
    };
  }

  function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
  }

  function getContext(key) {
    return get_current_component().$$.context.get(key);
  }
  // shorthand events, or if we want to implement
  // a real bubbling mechanism


  function bubble(component, event) {
    var _this2 = this;

    var callbacks = component.$$.callbacks[event.type];

    if (callbacks) {
      // @ts-ignore
      callbacks.slice().forEach(function (fn) {
        return fn.call(_this2, event);
      });
    }
  }

  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;

  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }

  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }

  function add_flush_callback(fn) {
    flush_callbacks.push(fn);
  }

  var flushing = false;
  var seen_callbacks = new Set();

  function flush() {
    if (flushing) return;
    flushing = true;

    do {
      // first, call beforeUpdate functions
      // and update components
      for (var i = 0; i < dirty_components.length; i += 1) {
        var component = dirty_components[i];
        set_current_component(component);
        update(component.$$);
      }

      set_current_component(null);
      dirty_components.length = 0;

      while (binding_callbacks.length) {
        binding_callbacks.pop()();
      } // then, once components are updated, call
      // afterUpdate functions. This may cause
      // subsequent updates...


      for (var _i4 = 0; _i4 < render_callbacks.length; _i4 += 1) {
        var callback = render_callbacks[_i4];

        if (!seen_callbacks.has(callback)) {
          // ...so guard against infinite loops
          seen_callbacks.add(callback);
          callback();
        }
      }

      render_callbacks.length = 0;
    } while (dirty_components.length);

    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }

    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
  }

  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      var dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }

  var promise;

  function wait() {
    if (!promise) {
      promise = Promise.resolve();
      promise.then(function () {
        promise = null;
      });
    }

    return promise;
  }

  function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event("".concat(direction ? 'intro' : 'outro').concat(kind)));
  }

  var outroing = new Set();
  var outros;

  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros // parent group

    };
  }

  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }

    outros = outros.p;
  }

  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }

  function transition_out(block, local, detach, callback) {
    if (block && block.o) {
      if (outroing.has(block)) return;
      outroing.add(block);
      outros.c.push(function () {
        outroing.delete(block);

        if (callback) {
          if (detach) block.d(1);
          callback();
        }
      });
      block.o(local);
    }
  }

  var null_transition = {
    duration: 0
  };

  function create_in_transition(node, fn, params) {
    var config = fn(node, params);
    var running = false;
    var animation_name;
    var task;
    var uid = 0;

    function cleanup() {
      if (animation_name) delete_rule(node, animation_name);
    }

    function go() {
      var _ref = config || null_transition,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 300 : _ref$duration,
          _ref$easing = _ref.easing,
          easing = _ref$easing === void 0 ? identity : _ref$easing,
          _ref$tick = _ref.tick,
          tick = _ref$tick === void 0 ? noop : _ref$tick,
          css = _ref.css;

      if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
      tick(0, 1);
      var start_time = now() + delay;
      var end_time = start_time + duration;
      if (task) task.abort();
      running = true;
      add_render_callback(function () {
        return dispatch(node, true, 'start');
      });
      task = loop(function (now) {
        if (running) {
          if (now >= end_time) {
            tick(1, 0);
            dispatch(node, true, 'end');
            cleanup();
            return running = false;
          }

          if (now >= start_time) {
            var t = easing((now - start_time) / duration);
            tick(t, 1 - t);
          }
        }

        return running;
      });
    }

    var started = false;
    return {
      start: function start() {
        if (started) return;
        started = true;
        delete_rule(node);

        if (is_function(config)) {
          config = config();
          wait().then(go);
        } else {
          go();
        }
      },
      invalidate: function invalidate() {
        started = false;
      },
      end: function end() {
        if (running) {
          cleanup();
          running = false;
        }
      }
    };
  }

  function create_out_transition(node, fn, params) {
    var config = fn(node, params);
    var running = true;
    var animation_name;
    var group = outros;
    group.r += 1;

    function go() {
      var _ref2 = config || null_transition,
          _ref2$delay = _ref2.delay,
          delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
          _ref2$duration = _ref2.duration,
          duration = _ref2$duration === void 0 ? 300 : _ref2$duration,
          _ref2$easing = _ref2.easing,
          easing = _ref2$easing === void 0 ? identity : _ref2$easing,
          _ref2$tick = _ref2.tick,
          tick = _ref2$tick === void 0 ? noop : _ref2$tick,
          css = _ref2.css;

      if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
      var start_time = now() + delay;
      var end_time = start_time + duration;
      add_render_callback(function () {
        return dispatch(node, false, 'start');
      });
      loop(function (now) {
        if (running) {
          if (now >= end_time) {
            tick(0, 1);
            dispatch(node, false, 'end');

            if (! --group.r) {
              // this will result in `end()` being called,
              // so we don't need to clean up here
              run_all(group.c);
            }

            return false;
          }

          if (now >= start_time) {
            var t = easing((now - start_time) / duration);
            tick(1 - t, t);
          }
        }

        return running;
      });
    }

    if (is_function(config)) {
      wait().then(function () {
        // @ts-ignore
        config = config();
        go();
      });
    } else {
      go();
    }

    return {
      end: function end(reset) {
        if (reset && config.tick) {
          config.tick(1, 0);
        }

        if (running) {
          if (animation_name) delete_rule(node, animation_name);
          running = false;
        }
      }
    };
  }

  function get_spread_update(levels, updates) {
    var update = {};
    var to_null_out = {};
    var accounted_for = {
      $$scope: 1
    };
    var i = levels.length;

    while (i--) {
      var o = levels[i];
      var n = updates[i];

      if (n) {
        for (var key in o) {
          if (!(key in n)) to_null_out[key] = 1;
        }

        for (var _key3 in n) {
          if (!accounted_for[_key3]) {
            update[_key3] = n[_key3];
            accounted_for[_key3] = 1;
          }
        }

        levels[i] = n;
      } else {
        for (var _key4 in o) {
          accounted_for[_key4] = 1;
        }
      }
    }

    for (var _key5 in to_null_out) {
      if (!(_key5 in update)) update[_key5] = undefined;
    }

    return update;
  }

  function get_spread_object(spread_props) {
    return _typeof(spread_props) === 'object' && spread_props !== null ? spread_props : {};
  } // source: https://html.spec.whatwg.org/multipage/indices.html

  function bind(component, name, callback) {
    var index = component.$$.props[name];

    if (index !== undefined) {
      component.$$.bound[index] = callback;
      callback(component.$$.ctx[index]);
    }
  }

  function create_component(block) {
    block && block.c();
  }

  function mount_component(component, target, anchor, customElement) {
    var _component$$$ = component.$$,
        fragment = _component$$$.fragment,
        on_mount = _component$$$.on_mount,
        on_destroy = _component$$$.on_destroy,
        after_update = _component$$$.after_update;
    fragment && fragment.m(target, anchor);

    if (!customElement) {
      // onMount happens before the initial afterUpdate
      add_render_callback(function () {
        var new_on_destroy = on_mount.map(run).filter(is_function);

        if (on_destroy) {
          on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
        } else {
          // Edge case - component was destroyed immediately,
          // most likely as a result of a binding initialising
          run_all(new_on_destroy);
        }

        component.$$.on_mount = [];
      });
    }

    after_update.forEach(add_render_callback);
  }

  function destroy_component(component, detaching) {
    var $$ = component.$$;

    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
      // preserve final state?)

      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }

  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }

    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }

  function init(component, options, instance, create_fragment, not_equal, props, append_styles) {
    var dirty = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [-1];
    var parent_component = current_component;
    set_current_component(component);
    var $$ = component.$$ = {
      fragment: null,
      ctx: null,
      // state
      props: props,
      update: noop,
      not_equal: not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
      // everything else
      callbacks: blank_object(),
      dirty: dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    var ready = false;
    $$.ctx = instance ? instance(component, options.props || {}, function (i, ret) {
      var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
        if (ready) make_dirty(component, i);
      }

      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update); // `false` as a special case of no DOM component

    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

    if (options.target) {
      if (options.hydrate) {
        var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        $$.fragment && $$.fragment.c();
      }

      if (options.intro) transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      flush();
    }

    set_current_component(parent_component);
  }
  /**
   * Base class for Svelte components. Used when dev=false.
   */


  var SvelteComponent = /*#__PURE__*/function () {
    function SvelteComponent() {
      _classCallCheck(this, SvelteComponent);
    }

    _createClass(SvelteComponent, [{
      key: "$destroy",
      value: function $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
    }, {
      key: "$on",
      value: function $on(type, callback) {
        var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return function () {
          var index = callbacks.indexOf(callback);
          if (index !== -1) callbacks.splice(index, 1);
        };
      }
    }, {
      key: "$set",
      value: function $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    }]);

    return SvelteComponent;
  }();

  "undefined" != typeof document && function (e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
      n.innerHTML = t;
    } catch (e) {
      n.innerText = t;
    }
  }(document, "@charset \"UTF-8\";\n" + ".dialog__overlay {\n" + "  z-index: 1000;\n" + "  background: rgba(128, 128, 128, 0.5);\n" + "  position: fixed;\n" + "  top: 0;\n" + "  left: 0;\n" + "  width: 100vw;\n" + "  height: 100vh;\n" + "  display: flex;\n" + "  justify-content: center;\n" + "  align-items: center;\n" + "}\n" + "\n" + ".dialog__container {\n" + "  z-index: 1010;\n" + "  position: fixed;\n" + "  min-width: 25vw;\n" + "  max-width: 50vw;\n" + "  max-height: 100vh;\n" + "  padding: 2rem;\n" + "  border-radius: 1rem;\n" + "  background-color: #fff;\n" + "}\n" + "\n" + ".dialog__close-button {\n" + "  box-sizing: border-box;\n" + "  position: absolute;\n" + "  top: 0.5rem;\n" + "  right: 0.5rem;\n" + "  height: 1.5rem;\n" + "  width: 1.5rem;\n" + "  padding: 0;\n" + "  border: none;\n" + "  cursor: pointer;\n" + "  background: transparent;\n" + "  border-radius: 1rem;\n" + "  background: #cccccc;\n" + "}\n" + ".dialog__close-button:after {\n" + "  color: white;\n" + "  content: \"✕\";\n" + "}\n" + ".dialog__close-button:hover {\n" + "  background: rgba(202, 47, 63, 0.8);\n" + "}\n" + ".dialog__close-button:focus {\n" + "  background: rgba(202, 47, 63, 0.8);\n" + "}\n" + "\n" + ".dialog__header {\n" + "  text-align: center;\n" + "}\n" + "\n" + ".dialog__title {\n" + "  font-size: large;\n" + "  font-weight: bold;\n" + "  line-height: 1.5;\n" + "  margin: 0;\n" + "}\n" + "\n" + ".dialog-content__divider {\n" + "  border: 1px solid grey;\n" + "}\n" + "\n" + ".dialog__body {\n" + "  box-sizing: border-box;\n" + "  text-align: center;\n" + "  padding-top: 1rem;\n" + "  min-height: 10vh;\n" + "  max-height: 80vh;\n" + "  overflow-y: auto;\n" + "}\n" + ".dialog__body::-webkit-scrollbar {\n" + "  width: 5px;\n" + "}\n" + ".dialog__body::-webkit-scrollbar-track {\n" + "  box-shadow: inset 0 0 5px rgba(204, 204, 204, 0.8);\n" + "  border-radius: 10px;\n" + "}\n" + ".dialog__body::-webkit-scrollbar-thumb {\n" + "  border-radius: 10px;\n" + "  box-shadow: inset 0 0 5px #cccccc;\n" + "}\n" + "\n" + ".dialog__footer {\n" + "  margin-top: 1rem;\n" + "  display: flex;\n" + "}\n" + "\n" + ".dialog__footer--space-evenly {\n" + "  justify-content: space-evenly;\n" + "}\n" + "\n" + ".dialog__footer--space-between {\n" + "  justify-content: space-between;\n" + "}\n" + "\n" + ".dialog__form.touched .dialog__input:invalid {\n" + "  border: 2px solid rgba(202, 47, 63, 0.5);\n" + "  outline: 0;\n" + "}\n" + ".dialog__form.touched .dialog__input:invalid:focus, .dialog__form.touched .dialog__input:invalid:focus-visible {\n" + "  border: 2px solid #ca2f3f;\n" + "  outline: 0;\n" + "}\n" + "\n" + ".dialog__input-label {\n" + "  display: block;\n" + "  width: -webkit-fit-content;\n" + "  width: -moz-fit-content;\n" + "  width: fit-content;\n" + "  margin-left: 1rem;\n" + "  text-align: left;\n" + "  position: relative;\n" + "  top: 8px;\n" + "  padding: 0 5px;\n" + "  background: #fff;\n" + "}\n" + "\n" + ".dialog__input {\n" + "  box-sizing: border-box;\n" + "  margin: 0;\n" + "}\n" + ".dialog__input:not([type=checkbox]) {\n" + "  width: 100%;\n" + "  padding: 1rem;\n" + "  background-color: #fff;\n" + "  border: 2px solid #ccc;\n" + "  border-radius: 1rem;\n" + "}\n" + ".dialog__input[type=checkbox] {\n" + "  width: auto;\n" + "  display: block;\n" + "  margin-top: -7px;\n" + "  text-align: left;\n" + "}\n" + ".dialog__input[type=color] {\n" + "  min-height: 3.5rem;\n" + "}\n" + ".dialog__input[type=file]::-webkit-file-upload-button {\n" + "  display: none;\n" + "}\n" + ".dialog__input[type=file]::file-selector-button {\n" + "  display: none;\n" + "}\n" + ".dialog__input:focus:not(:invalid) {\n" + "  border: 2px solid #333;\n" + "}\n" + "\n" + ".dialog_button {\n" + "  box-sizing: border-box;\n" + "  display: inline-block;\n" + "  cursor: pointer;\n" + "  font-size: 1rem;\n" + "  padding: 0.5rem;\n" + "  margin: 0 0.5rem;\n" + "  min-width: 6rem;\n" + "  text-align: center;\n" + "  white-space: nowrap;\n" + "  vertical-align: middle;\n" + "  -webkit-user-select: none;\n" + "     -moz-user-select: none;\n" + "      -ms-user-select: none;\n" + "          user-select: none;\n" + "  border: 0.1rem solid transparent;\n" + "  border-radius: 0.5rem;\n" + "}\n" + ".dialog_button:disabled {\n" + "  cursor: default;\n" + "  opacity: 0.5;\n" + "}\n" + ".dialog_button:focus {\n" + "  border: 0.1rem solid transparent;\n" + "}\n" + "\n" + ".dialog_button--primary {\n" + "  background-color: #cccccc;\n" + "}\n" + ".dialog_button--primary:hover {\n" + "  background-color: rgba(204, 204, 204, 0.8);\n" + "}\n" + ".dialog_button--primary:not(:disabled):active {\n" + "  background-color: #cccccc;\n" + "}\n" + ".dialog_button--primary:focus {\n" + "  box-shadow: 0 0 0 3px rgba(204, 204, 204, 0.5);\n" + "}\n" + "\n" + ".dialog_button--decline {\n" + "  color: #fff;\n" + "  background-color: #ca2f3f;\n" + "}\n" + ".dialog_button--decline:hover {\n" + "  background-color: rgba(202, 47, 63, 0.8);\n" + "}\n" + ".dialog_button--decline:not(:disabled):active {\n" + "  background-color: #ca2f3f;\n" + "}\n" + ".dialog_button--decline:focus {\n" + "  box-shadow: 0 0 0 3px rgba(202, 47, 63, 0.5);\n" + "}");

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function cubicInOut(t) {
    return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
  }

  function cubicOut(t) {
    var f = t - 1.0;
    return f * f * f + 1.0;
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  function __rest(s, e) {
    var t = {};

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }

    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  }

  function blur(node) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? 400 : _ref$duration,
        _ref$easing = _ref.easing,
        easing = _ref$easing === void 0 ? cubicInOut : _ref$easing,
        _ref$amount = _ref.amount,
        amount = _ref$amount === void 0 ? 5 : _ref$amount,
        _ref$opacity = _ref.opacity,
        opacity = _ref$opacity === void 0 ? 0 : _ref$opacity;

    var style = getComputedStyle(node);
    var target_opacity = +style.opacity;
    var f = style.filter === 'none' ? '' : style.filter;
    var od = target_opacity * (1 - opacity);
    return {
      delay: delay,
      duration: duration,
      easing: easing,
      css: function css(_t, u) {
        return "opacity: ".concat(target_opacity - od * u, "; filter: ").concat(f, " blur(").concat(u * amount, "px);");
      }
    };
  }

  function fade(node) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$delay = _ref2.delay,
        delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
        _ref2$duration = _ref2.duration,
        duration = _ref2$duration === void 0 ? 400 : _ref2$duration,
        _ref2$easing = _ref2.easing,
        easing = _ref2$easing === void 0 ? identity : _ref2$easing;

    var o = +getComputedStyle(node).opacity;
    return {
      delay: delay,
      duration: duration,
      easing: easing,
      css: function css(t) {
        return "opacity: ".concat(t * o);
      }
    };
  }

  function fly(node) {
    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref3$delay = _ref3.delay,
        delay = _ref3$delay === void 0 ? 0 : _ref3$delay,
        _ref3$duration = _ref3.duration,
        duration = _ref3$duration === void 0 ? 400 : _ref3$duration,
        _ref3$easing = _ref3.easing,
        easing = _ref3$easing === void 0 ? cubicOut : _ref3$easing,
        _ref3$x = _ref3.x,
        x = _ref3$x === void 0 ? 0 : _ref3$x,
        _ref3$y = _ref3.y,
        y = _ref3$y === void 0 ? 0 : _ref3$y,
        _ref3$opacity = _ref3.opacity,
        opacity = _ref3$opacity === void 0 ? 0 : _ref3$opacity;

    var style = getComputedStyle(node);
    var target_opacity = +style.opacity;
    var transform = style.transform === 'none' ? '' : style.transform;
    var od = target_opacity * (1 - opacity);
    return {
      delay: delay,
      duration: duration,
      easing: easing,
      css: function css(t, u) {
        return "\n\t\t\ttransform: ".concat(transform, " translate(").concat((1 - t) * x, "px, ").concat((1 - t) * y, "px);\n\t\t\topacity: ").concat(target_opacity - od * u);
      }
    };
  }

  function slide(node) {
    var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref4$delay = _ref4.delay,
        delay = _ref4$delay === void 0 ? 0 : _ref4$delay,
        _ref4$duration = _ref4.duration,
        duration = _ref4$duration === void 0 ? 400 : _ref4$duration,
        _ref4$easing = _ref4.easing,
        easing = _ref4$easing === void 0 ? cubicOut : _ref4$easing;

    var style = getComputedStyle(node);
    var opacity = +style.opacity;
    var height = parseFloat(style.height);
    var padding_top = parseFloat(style.paddingTop);
    var padding_bottom = parseFloat(style.paddingBottom);
    var margin_top = parseFloat(style.marginTop);
    var margin_bottom = parseFloat(style.marginBottom);
    var border_top_width = parseFloat(style.borderTopWidth);
    var border_bottom_width = parseFloat(style.borderBottomWidth);
    return {
      delay: delay,
      duration: duration,
      easing: easing,
      css: function css(t) {
        return 'overflow: hidden;' + "opacity: ".concat(Math.min(t * 20, 1) * opacity, ";") + "height: ".concat(t * height, "px;") + "padding-top: ".concat(t * padding_top, "px;") + "padding-bottom: ".concat(t * padding_bottom, "px;") + "margin-top: ".concat(t * margin_top, "px;") + "margin-bottom: ".concat(t * margin_bottom, "px;") + "border-top-width: ".concat(t * border_top_width, "px;") + "border-bottom-width: ".concat(t * border_bottom_width, "px;");
      }
    };
  }

  function scale(node) {
    var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref5$delay = _ref5.delay,
        delay = _ref5$delay === void 0 ? 0 : _ref5$delay,
        _ref5$duration = _ref5.duration,
        duration = _ref5$duration === void 0 ? 400 : _ref5$duration,
        _ref5$easing = _ref5.easing,
        easing = _ref5$easing === void 0 ? cubicOut : _ref5$easing,
        _ref5$start = _ref5.start,
        start = _ref5$start === void 0 ? 0 : _ref5$start,
        _ref5$opacity = _ref5.opacity,
        opacity = _ref5$opacity === void 0 ? 0 : _ref5$opacity;

    var style = getComputedStyle(node);
    var target_opacity = +style.opacity;
    var transform = style.transform === 'none' ? '' : style.transform;
    var sd = 1 - start;
    var od = target_opacity * (1 - opacity);
    return {
      delay: delay,
      duration: duration,
      easing: easing,
      css: function css(_t, u) {
        return "\n\t\t\ttransform: ".concat(transform, " scale(").concat(1 - sd * u, ");\n\t\t\topacity: ").concat(target_opacity - od * u, "\n\t\t");
      }
    };
  }

  function draw(node) {
    var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref6$delay = _ref6.delay,
        delay = _ref6$delay === void 0 ? 0 : _ref6$delay,
        speed = _ref6.speed,
        duration = _ref6.duration,
        _ref6$easing = _ref6.easing,
        easing = _ref6$easing === void 0 ? cubicInOut : _ref6$easing;

    var len = node.getTotalLength();
    var style = getComputedStyle(node);

    if (style.strokeLinecap !== 'butt') {
      len += parseInt(style.strokeWidth);
    }

    if (duration === undefined) {
      if (speed === undefined) {
        duration = 800;
      } else {
        duration = len / speed;
      }
    } else if (typeof duration === 'function') {
      duration = duration(len);
    }

    return {
      delay: delay,
      duration: duration,
      easing: easing,
      css: function css(t, u) {
        return "stroke-dasharray: ".concat(t * len, " ").concat(u * len);
      }
    };
  }

  function crossfade(_a) {
    var fallback = _a.fallback,
        defaults = __rest(_a, ["fallback"]);

    var to_receive = new Map();
    var to_send = new Map();

    function crossfade(from, node, params) {
      var _assign = assign(assign({}, defaults), params),
          _assign$delay = _assign.delay,
          delay = _assign$delay === void 0 ? 0 : _assign$delay,
          _assign$duration = _assign.duration,
          duration = _assign$duration === void 0 ? function (d) {
        return Math.sqrt(d) * 30;
      } : _assign$duration,
          _assign$easing = _assign.easing,
          easing = _assign$easing === void 0 ? cubicOut : _assign$easing;

      var to = node.getBoundingClientRect();
      var dx = from.left - to.left;
      var dy = from.top - to.top;
      var dw = from.width / to.width;
      var dh = from.height / to.height;
      var d = Math.sqrt(dx * dx + dy * dy);
      var style = getComputedStyle(node);
      var transform = style.transform === 'none' ? '' : style.transform;
      var opacity = +style.opacity;
      return {
        delay: delay,
        duration: is_function(duration) ? duration(d) : duration,
        easing: easing,
        css: function css(t, u) {
          return "\n\t\t\t\topacity: ".concat(t * opacity, ";\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ").concat(transform, " translate(").concat(u * dx, "px,").concat(u * dy, "px) scale(").concat(t + (1 - t) * dw, ", ").concat(t + (1 - t) * dh, ");\n\t\t\t");
        }
      };
    }

    function transition(items, counterparts, intro) {
      return function (node, params) {
        items.set(params.key, {
          rect: node.getBoundingClientRect()
        });
        return function () {
          if (counterparts.has(params.key)) {
            var _counterparts$get = counterparts.get(params.key),
                rect = _counterparts$get.rect;

            counterparts.delete(params.key);
            return crossfade(rect, node, params);
          } // if the node is disappearing altogether
          // (i.e. wasn't claimed by the other list)
          // then we need to supply an outro


          items.delete(params.key);
          return fallback && fallback(node, params, intro);
        };
      };
    }

    return [transition(to_send, to_receive, false), transition(to_receive, to_send, true)];
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
  }

  var closeSym = Symbol("close");
  var optsSym = Symbol("opts");

  var getFromContext = function getFromContext(key) {
    try {
      return getContext(key);
    } catch (cause) {
      throw new Error("Context element ".concat(key.description, " can be retrieved only on component initialization"), {
        cause: cause
      });
    }
  };

  var getClose = function getClose() {
    return getFromContext(closeSym);
  };
  var setClose = function setClose(close) {
    return setContext(closeSym, close);
  };
  var getOptions = function getOptions() {
    return getFromContext(optsSym);
  };
  var setOptions = function setOptions(opts) {
    return setContext(optsSym, opts);
  };

  function _createSuper$e(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$e(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$e() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var get_footer_slot_changes = function get_footer_slot_changes(dirty) {
    return {};
  };

  var get_footer_slot_context = function get_footer_slot_context(ctx) {
    return {};
  };

  var get_body_slot_changes = function get_body_slot_changes(dirty) {
    return {};
  };

  var get_body_slot_context = function get_body_slot_context(ctx) {
    return {};
  };

  var get_header_slot_changes = function get_header_slot_changes(dirty) {
    return {};
  };

  var get_header_slot_context = function get_header_slot_context(ctx) {
    return {};
  }; // (12:4) {#if opts.title && ($$slots.body || opts.text)}


  function create_if_block_1$1(ctx) {
    var hr;
    return {
      c: function c() {
        hr = element("hr");
        attr(hr, "class", /*opts*/
        ctx[0].dividerClass);
        attr(hr, "data-testid", "dialog-content__divider");
      },
      m: function m(target, anchor) {
        insert(target, hr, anchor);
      },
      p: noop,
      d: function d(detaching) {
        if (detaching) detach(hr);
      }
    };
  } // (8:22)      


  function fallback_block_1(ctx) {
    var h2;
    var raw_value =
    /*opts*/
    ctx[0].title + "";
    var t;
    var if_block_anchor;
    var if_block =
    /*opts*/
    ctx[0].title && (
    /*$$slots*/
    ctx[1].body ||
    /*opts*/
    ctx[0].text) && create_if_block_1$1(ctx);
    return {
      c: function c() {
        h2 = element("h2");
        t = space();
        if (if_block) if_block.c();
        if_block_anchor = empty();
        attr(h2, "id", /*opts*/
        ctx[0].titleId);
        attr(h2, "class", /*opts*/
        ctx[0].titleClass);
        attr(h2, "data-testid", "dialog-content__title");
      },
      m: function m(target, anchor) {
        insert(target, h2, anchor);
        h2.innerHTML = raw_value;
        insert(target, t, anchor);
        if (if_block) if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p: function p(ctx, dirty) {
        if (
        /*opts*/
        ctx[0].title && (
        /*$$slots*/
        ctx[1].body ||
        /*opts*/
        ctx[0].text)) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block_1$1(ctx);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d: function d(detaching) {
        if (detaching) detach(h2);
        if (detaching) detach(t);
        if (if_block) if_block.d(detaching);
        if (detaching) detach(if_block_anchor);
      }
    };
  } // (18:0) {#if $$slots.body || opts.text}


  function create_if_block$4(ctx) {
    var div;
    var current;
    var body_slot_template =
    /*#slots*/
    ctx[3].body;
    var body_slot = create_slot(body_slot_template, ctx,
    /*$$scope*/
    ctx[2], get_body_slot_context);
    var body_slot_or_fallback = body_slot || fallback_block(ctx);
    return {
      c: function c() {
        div = element("div");
        if (body_slot_or_fallback) body_slot_or_fallback.c();
        attr(div, "class", /*opts*/
        ctx[0].bodyClass);
        attr(div, "data-testid", "dialog-content__body");
      },
      m: function m(target, anchor) {
        insert(target, div, anchor);

        if (body_slot_or_fallback) {
          body_slot_or_fallback.m(div, null);
        }

        current = true;
      },
      p: function p(ctx, dirty) {
        if (body_slot) {
          if (body_slot.p && (!current || dirty &
          /*$$scope*/
          4)) {
            update_slot_base(body_slot, body_slot_template, ctx,
            /*$$scope*/
            ctx[2], !current ? get_all_dirty_from_scope(
            /*$$scope*/
            ctx[2]) : get_slot_changes(body_slot_template,
            /*$$scope*/
            ctx[2], dirty, get_body_slot_changes), get_body_slot_context);
          }
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(body_slot_or_fallback, local);
        current = true;
      },
      o: function o(local) {
        transition_out(body_slot_or_fallback, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(div);
        if (body_slot_or_fallback) body_slot_or_fallback.d(detaching);
      }
    };
  } // (20:22) {@html opts.text}


  function fallback_block(ctx) {
    var html_tag;
    var raw_value =
    /*opts*/
    ctx[0].text + "";
    var html_anchor;
    return {
      c: function c() {
        html_tag = new HtmlTag();
        html_anchor = empty();
        html_tag.a = html_anchor;
      },
      m: function m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, html_anchor, anchor);
      },
      p: noop,
      d: function d(detaching) {
        if (detaching) detach(html_anchor);
        if (detaching) html_tag.d();
      }
    };
  }

  function create_fragment$e(ctx) {
    var header;
    var t0;
    var t1;
    var footer;
    var current;
    var header_slot_template =
    /*#slots*/
    ctx[3].header;
    var header_slot = create_slot(header_slot_template, ctx,
    /*$$scope*/
    ctx[2], get_header_slot_context);
    var header_slot_or_fallback = header_slot || fallback_block_1(ctx);
    var if_block = (
    /*$$slots*/
    ctx[1].body ||
    /*opts*/
    ctx[0].text) && create_if_block$4(ctx);
    var footer_slot_template =
    /*#slots*/
    ctx[3].footer;
    var footer_slot = create_slot(footer_slot_template, ctx,
    /*$$scope*/
    ctx[2], get_footer_slot_context);
    return {
      c: function c() {
        header = element("header");
        if (header_slot_or_fallback) header_slot_or_fallback.c();
        t0 = space();
        if (if_block) if_block.c();
        t1 = space();
        footer = element("footer");
        if (footer_slot) footer_slot.c();
        attr(header, "class", /*opts*/
        ctx[0].headerClass);
        attr(header, "data-testid", "dialog-content__header");
        attr(footer, "class", /*opts*/
        ctx[0].footerClass);
        attr(footer, "data-testid", "dialog-content__footer");
      },
      m: function m(target, anchor) {
        insert(target, header, anchor);

        if (header_slot_or_fallback) {
          header_slot_or_fallback.m(header, null);
        }

        insert(target, t0, anchor);
        if (if_block) if_block.m(target, anchor);
        insert(target, t1, anchor);
        insert(target, footer, anchor);

        if (footer_slot) {
          footer_slot.m(footer, null);
        }

        current = true;
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (header_slot) {
          if (header_slot.p && (!current || dirty &
          /*$$scope*/
          4)) {
            update_slot_base(header_slot, header_slot_template, ctx,
            /*$$scope*/
            ctx[2], !current ? get_all_dirty_from_scope(
            /*$$scope*/
            ctx[2]) : get_slot_changes(header_slot_template,
            /*$$scope*/
            ctx[2], dirty, get_header_slot_changes), get_header_slot_context);
          }
        } else {
          if (header_slot_or_fallback && header_slot_or_fallback.p && (!current || dirty &
          /*$$slots*/
          2)) {
            header_slot_or_fallback.p(ctx, !current ? -1 : dirty);
          }
        }

        if (
        /*$$slots*/
        ctx[1].body ||
        /*opts*/
        ctx[0].text) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*$$slots*/
            2) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block$4(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(t1.parentNode, t1);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }

        if (footer_slot) {
          if (footer_slot.p && (!current || dirty &
          /*$$scope*/
          4)) {
            update_slot_base(footer_slot, footer_slot_template, ctx,
            /*$$scope*/
            ctx[2], !current ? get_all_dirty_from_scope(
            /*$$scope*/
            ctx[2]) : get_slot_changes(footer_slot_template,
            /*$$scope*/
            ctx[2], dirty, get_footer_slot_changes), get_footer_slot_context);
          }
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(header_slot_or_fallback, local);
        transition_in(if_block);
        transition_in(footer_slot, local);
        current = true;
      },
      o: function o(local) {
        transition_out(header_slot_or_fallback, local);
        transition_out(if_block);
        transition_out(footer_slot, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(header);
        if (header_slot_or_fallback) header_slot_or_fallback.d(detaching);
        if (detaching) detach(t0);
        if (if_block) if_block.d(detaching);
        if (detaching) detach(t1);
        if (detaching) detach(footer);
        if (footer_slot) footer_slot.d(detaching);
      }
    };
  }

  function instance$d($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    var $$slots = compute_slots(slots);
    var opts = getOptions();

    $$self.$$set = function ($$props) {
      if ('$$scope' in $$props) $$invalidate(2, $$scope = $$props.$$scope);
    };

    return [opts, $$slots, $$scope, slots];
  }

  var DialogContent = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(DialogContent, _SvelteComponent);

    var _super = _createSuper$e(DialogContent);

    function DialogContent(options) {
      var _this;

      _classCallCheck(this, DialogContent);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$d, create_fragment$e, safe_not_equal, {});
      return _this;
    }

    return DialogContent;
  }(SvelteComponent);

  function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function create_footer_slot$3(ctx) {
    var button;
    var raw_value =
    /*opts*/
    ctx[1].dismissButtonText + "";
    var mounted;
    var dispose;
    return {
      c: function c() {
        button = element("button");
        attr(button, "class", /*opts*/
        ctx[1].dismissButtonClass);
        attr(button, "aria-label", "Dismiss alert");
        attr(button, "data-testid", "alert__dismiss-button");
      },
      m: function m(target, anchor) {
        insert(target, button, anchor);
        button.innerHTML = raw_value;

        if (!mounted) {
          dispose = listen(button, "click",
          /*click_handler*/
          ctx[2]);
          mounted = true;
        }
      },
      p: noop,
      d: function d(detaching) {
        if (detaching) detach(button);
        mounted = false;
        dispose();
      }
    };
  }

  function create_fragment$d(ctx) {
    var dialogcontent;
    var current;
    dialogcontent = new DialogContent({
      props: {
        $$slots: {
          footer: [create_footer_slot$3]
        },
        $$scope: {
          ctx: ctx
        }
      }
    });
    return {
      c: function c() {
        create_component(dialogcontent.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(dialogcontent, target, anchor);
        current = true;
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        var dialogcontent_changes = {};

        if (dirty &
        /*$$scope*/
        8) {
          dialogcontent_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        dialogcontent.$set(dialogcontent_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(dialogcontent.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(dialogcontent.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(dialogcontent, detaching);
      }
    };
  }

  function instance$c($$self) {
    var close = getClose();
    var opts = getOptions();

    var click_handler = function click_handler() {
      return close();
    };

    return [close, opts, click_handler];
  }

  var Alert = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Alert, _SvelteComponent);

    var _super = _createSuper$d(Alert);

    function Alert(options) {
      var _this;

      _classCallCheck(this, Alert);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$c, create_fragment$d, safe_not_equal, {});
      return _this;
    }

    return Alert;
  }(SvelteComponent);

  function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function create_footer_slot$2(ctx) {
    var button0;
    var raw0_value =
    /*opts*/
    ctx[1].declineButtonText + "";
    var t;
    var button1;
    var raw1_value =
    /*opts*/
    ctx[1].confirmButtonText + "";
    var mounted;
    var dispose;
    return {
      c: function c() {
        button0 = element("button");
        t = space();
        button1 = element("button");
        attr(button0, "class", /*opts*/
        ctx[1].declineButtonClass);
        attr(button0, "aria-label", "Decline");
        attr(button0, "data-testid", "confirm__decline-button");
        attr(button1, "class", /*opts*/
        ctx[1].confirmButtonClass);
        attr(button1, "aria-label", "Confirm");
        attr(button1, "data-testid", "confirm__confirm-button");
      },
      m: function m(target, anchor) {
        insert(target, button0, anchor);
        button0.innerHTML = raw0_value;
        insert(target, t, anchor);
        insert(target, button1, anchor);
        button1.innerHTML = raw1_value;

        if (!mounted) {
          dispose = [listen(button0, "click",
          /*click_handler*/
          ctx[2]), listen(button1, "click",
          /*click_handler_1*/
          ctx[3])];
          mounted = true;
        }
      },
      p: noop,
      d: function d(detaching) {
        if (detaching) detach(button0);
        if (detaching) detach(t);
        if (detaching) detach(button1);
        mounted = false;
        run_all(dispose);
      }
    };
  }

  function create_fragment$c(ctx) {
    var dialogcontent;
    var current;
    dialogcontent = new DialogContent({
      props: {
        $$slots: {
          footer: [create_footer_slot$2]
        },
        $$scope: {
          ctx: ctx
        }
      }
    });
    return {
      c: function c() {
        create_component(dialogcontent.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(dialogcontent, target, anchor);
        current = true;
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        var dialogcontent_changes = {};

        if (dirty &
        /*$$scope*/
        16) {
          dialogcontent_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        dialogcontent.$set(dialogcontent_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(dialogcontent.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(dialogcontent.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(dialogcontent, detaching);
      }
    };
  }

  function instance$b($$self) {
    var close = getClose();
    var opts = getOptions();

    var click_handler = function click_handler() {
      return close(false);
    };

    var click_handler_1 = function click_handler_1() {
      return close(true);
    };

    return [close, opts, click_handler, click_handler_1];
  }

  var Confirm = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Confirm, _SvelteComponent);

    var _super = _createSuper$c(Confirm);

    function Confirm(options) {
      var _this;

      _classCallCheck(this, Confirm);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$b, create_fragment$c, safe_not_equal, {});
      return _this;
    }

    return Confirm;
  }(SvelteComponent);

  function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function create_else_block$1(ctx) {
    var input;
    var mounted;
    var dispose;
    var input_levels = [{
      class:
      /*inputClass*/
      ctx[5]
    }, {
      "data-testid": "dialog-input__input"
    }, {
      id:
      /*id*/
      ctx[2]
    },
    /*$$restProps*/
    ctx[6]];
    var input_data = {};

    for (var i = 0; i < input_levels.length; i += 1) {
      input_data = assign(input_data, input_levels[i]);
    }

    return {
      c: function c() {
        input = element("input");
        set_attributes(input, input_data);
      },
      m: function m(target, anchor) {
        insert(target, input, anchor);
        if (input.autofocus) input.focus();
        set_input_value(input,
        /*value*/
        ctx[0]);

        if (!mounted) {
          dispose = listen(input, "input",
          /*input_input_handler*/
          ctx[8]);
          mounted = true;
        }
      },
      p: function p(ctx, dirty) {
        set_attributes(input, input_data = get_spread_update(input_levels, [dirty &
        /*inputClass*/
        32 && {
          class:
          /*inputClass*/
          ctx[5]
        }, {
          "data-testid": "dialog-input__input"
        }, dirty &
        /*id*/
        4 && {
          id:
          /*id*/
          ctx[2]
        }, dirty &
        /*$$restProps*/
        64 &&
        /*$$restProps*/
        ctx[6]]));

        if (dirty &
        /*value*/
        1 && input.value !==
        /*value*/
        ctx[0]) {
          set_input_value(input,
          /*value*/
          ctx[0]);
        }
      },
      d: function d(detaching) {
        if (detaching) detach(input);
        mounted = false;
        dispose();
      }
    };
  } // (15:2) {#if $$restProps.type === "textarea"}


  function create_if_block$3(ctx) {
    var textarea;
    var mounted;
    var dispose;
    var textarea_levels = [{
      class:
      /*inputClass*/
      ctx[5]
    }, {
      "data-testid": "dialog-input__input"
    }, {
      id:
      /*id*/
      ctx[2]
    },
    /*$$restProps*/
    ctx[6]];
    var textarea_data = {};

    for (var i = 0; i < textarea_levels.length; i += 1) {
      textarea_data = assign(textarea_data, textarea_levels[i]);
    }

    return {
      c: function c() {
        textarea = element("textarea");
        set_attributes(textarea, textarea_data);
      },
      m: function m(target, anchor) {
        insert(target, textarea, anchor);
        if (textarea.autofocus) textarea.focus();
        set_input_value(textarea,
        /*value*/
        ctx[0]);

        if (!mounted) {
          dispose = listen(textarea, "input",
          /*textarea_input_handler*/
          ctx[7]);
          mounted = true;
        }
      },
      p: function p(ctx, dirty) {
        set_attributes(textarea, textarea_data = get_spread_update(textarea_levels, [dirty &
        /*inputClass*/
        32 && {
          class:
          /*inputClass*/
          ctx[5]
        }, {
          "data-testid": "dialog-input__input"
        }, dirty &
        /*id*/
        4 && {
          id:
          /*id*/
          ctx[2]
        }, dirty &
        /*$$restProps*/
        64 &&
        /*$$restProps*/
        ctx[6]]));

        if (dirty &
        /*value*/
        1) {
          set_input_value(textarea,
          /*value*/
          ctx[0]);
        }
      },
      d: function d(detaching) {
        if (detaching) detach(textarea);
        mounted = false;
        dispose();
      }
    };
  }

  function create_fragment$b(ctx) {
    var div;
    var label_1;
    var t0;
    var t1_value = (
    /*$$restProps*/
    ctx[6].required ? " *" : "") + "";
    var t1;
    var t2;

    function select_block_type(ctx, dirty) {
      if (
      /*$$restProps*/
      ctx[6].type === "textarea") return create_if_block$3;
      return create_else_block$1;
    }

    var current_block_type = select_block_type(ctx);
    var if_block = current_block_type(ctx);
    return {
      c: function c() {
        div = element("div");
        label_1 = element("label");
        t0 = text(
        /*label*/
        ctx[1]);
        t1 = text(t1_value);
        t2 = space();
        if_block.c();
        attr(label_1, "class",
        /*inputLabelClass*/
        ctx[4]);
        attr(label_1, "data-testid", "dialog-input__label");
        attr(label_1, "for",
        /*id*/
        ctx[2]);
        attr(div, "class",
        /*formElementClass*/
        ctx[3]);
        attr(div, "data-testid", "dialog-input__form-element");
      },
      m: function m(target, anchor) {
        insert(target, div, anchor);
        append(div, label_1);
        append(label_1, t0);
        append(label_1, t1);
        append(div, t2);
        if_block.m(div, null);
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*label*/
        2) set_data(t0,
        /*label*/
        ctx[1]);
        if (dirty &
        /*$$restProps*/
        64 && t1_value !== (t1_value = (
        /*$$restProps*/
        ctx[6].required ? " *" : "") + "")) set_data(t1, t1_value);

        if (dirty &
        /*inputLabelClass*/
        16) {
          attr(label_1, "class",
          /*inputLabelClass*/
          ctx[4]);
        }

        if (dirty &
        /*id*/
        4) {
          attr(label_1, "for",
          /*id*/
          ctx[2]);
        }

        if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx);

          if (if_block) {
            if_block.c();
            if_block.m(div, null);
          }
        }

        if (dirty &
        /*formElementClass*/
        8) {
          attr(div, "class",
          /*formElementClass*/
          ctx[3]);
        }
      },
      i: noop,
      o: noop,
      d: function d(detaching) {
        if (detaching) detach(div);
        if_block.d();
      }
    };
  }

  function instance$a($$self, $$props, $$invalidate) {
    var omit_props_names = ["value", "label", "id", "formElementClass", "inputLabelClass", "inputClass"];
    var $$restProps = compute_rest_props($$props, omit_props_names);
    var _$$props = $$props,
        _$$props$value = _$$props.value,
        value = _$$props$value === void 0 ? undefined : _$$props$value;
    var _$$props2 = $$props,
        _$$props2$label = _$$props2.label,
        label = _$$props2$label === void 0 ? "" : _$$props2$label;
    var _$$props3 = $$props,
        _$$props3$id = _$$props3.id,
        id = _$$props3$id === void 0 ? crypto.randomUUID() : _$$props3$id;
    var _$$props4 = $$props,
        _$$props4$formElement = _$$props4.formElementClass,
        formElementClass = _$$props4$formElement === void 0 ? "dialog__form-element" : _$$props4$formElement;
    var _$$props5 = $$props,
        _$$props5$inputLabelC = _$$props5.inputLabelClass,
        inputLabelClass = _$$props5$inputLabelC === void 0 ? "dialog__input-label" : _$$props5$inputLabelC;
    var _$$props6 = $$props,
        _$$props6$inputClass = _$$props6.inputClass,
        inputClass = _$$props6$inputClass === void 0 ? "dialog__input" : _$$props6$inputClass;

    function textarea_input_handler() {
      value = this.value;
      $$invalidate(0, value);
    }

    function input_input_handler() {
      value = this.value;
      $$invalidate(0, value);
    }

    $$self.$$set = function ($$new_props) {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
      if ('value' in $$new_props) $$invalidate(0, value = $$new_props.value);
      if ('label' in $$new_props) $$invalidate(1, label = $$new_props.label);
      if ('id' in $$new_props) $$invalidate(2, id = $$new_props.id);
      if ('formElementClass' in $$new_props) $$invalidate(3, formElementClass = $$new_props.formElementClass);
      if ('inputLabelClass' in $$new_props) $$invalidate(4, inputLabelClass = $$new_props.inputLabelClass);
      if ('inputClass' in $$new_props) $$invalidate(5, inputClass = $$new_props.inputClass);
    };

    return [value, label, id, formElementClass, inputLabelClass, inputClass, $$restProps, textarea_input_handler, input_input_handler];
  }

  var DialogInput = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(DialogInput, _SvelteComponent);

    var _super = _createSuper$b(DialogInput);

    function DialogInput(options) {
      var _this;

      _classCallCheck(this, DialogInput);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$a, create_fragment$b, safe_not_equal, {
        value: 0,
        label: 1,
        id: 2,
        formElementClass: 3,
        inputLabelClass: 4,
        inputClass: 5
      });
      return _this;
    }

    return DialogInput;
  }(SvelteComponent);

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
  var subscriber_queue = [];
  /**
   * Create a `Writable` store that allows both updating and reading by subscription.
   * @param {*=}value initial value
   * @param {StartStopNotifier=}start start and stop notifications for subscriptions
   */


  function writable(value) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    var stop;
    var subscribers = new Set();

    function set(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;

        if (stop) {
          // store is ready
          var run_queue = !subscriber_queue.length;

          var _iterator = _createForOfIteratorHelper(subscribers),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var subscriber = _step.value;
              subscriber[1]();
              subscriber_queue.push(subscriber, value);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (run_queue) {
            for (var i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }

            subscriber_queue.length = 0;
          }
        }
      }
    }

    function update(fn) {
      set(fn(value));
    }

    function subscribe(run) {
      var invalidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var subscriber = [run, invalidate];
      subscribers.add(subscriber);

      if (subscribers.size === 1) {
        stop = start(set) || noop;
      }

      run(value);
      return function () {
        subscribers.delete(subscriber);

        if (subscribers.size === 0) {
          stop();
          stop = null;
        }
      };
    }

    return {
      set: set,
      update: update,
      subscribe: subscribe
    };
  }

  function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function get_each_context(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[11] = list[i];
    child_ctx[12] = list;
    child_ctx[13] = i;
    return child_ctx;
  } // (25:6) {#each inputs as input, idx}


  function create_each_block(ctx) {
    var switch_instance;
    var updating_value;
    var switch_instance_anchor;
    var current;
    var switch_instance_spread_levels = [
    /*input*/
    ctx[11].props];

    function switch_instance_value_binding(value) {
      /*switch_instance_value_binding*/
      ctx[10](value,
      /*idx*/
      ctx[13]);
    }

    var switch_value =
    /*input*/
    ctx[11].component;

    function switch_props(ctx) {
      var switch_instance_props = {};

      for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
        switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
      }

      if (
      /*$form$*/
      ctx[2][
      /*idx*/
      ctx[13]] !== void 0) {
        switch_instance_props.value =
        /*$form$*/
        ctx[2][
        /*idx*/
        ctx[13]];
      }

      return {
        props: switch_instance_props
      };
    }

    if (switch_value) {
      switch_instance = new switch_value(switch_props(ctx));
      binding_callbacks.push(function () {
        return bind(switch_instance, 'value', switch_instance_value_binding);
      });
    }

    return {
      c: function c() {
        if (switch_instance) create_component(switch_instance.$$.fragment);
        switch_instance_anchor = empty();
      },
      m: function m(target, anchor) {
        if (switch_instance) {
          mount_component(switch_instance, target, anchor);
        }

        insert(target, switch_instance_anchor, anchor);
        current = true;
      },
      p: function p(new_ctx, dirty) {
        ctx = new_ctx;
        var switch_instance_changes = dirty &
        /*inputs*/
        1 ? get_spread_update(switch_instance_spread_levels, [get_spread_object(
        /*input*/
        ctx[11].props)]) : {};

        if (!updating_value && dirty &
        /*$form$*/
        4) {
          updating_value = true;
          switch_instance_changes.value =
          /*$form$*/
          ctx[2][
          /*idx*/
          ctx[13]];
          add_flush_callback(function () {
            return updating_value = false;
          });
        }

        if (switch_value !== (switch_value =
        /*input*/
        ctx[11].component)) {
          if (switch_instance) {
            group_outros();
            var old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, function () {
              destroy_component(old_component, 1);
            });
            check_outros();
          }

          if (switch_value) {
            switch_instance = new switch_value(switch_props(ctx));
            binding_callbacks.push(function () {
              return bind(switch_instance, 'value', switch_instance_value_binding);
            });
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          switch_instance.$set(switch_instance_changes);
        }
      },
      i: function i(local) {
        if (current) return;
        if (switch_instance) transition_in(switch_instance.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        if (switch_instance) transition_out(switch_instance.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(switch_instance_anchor);
        if (switch_instance) destroy_component(switch_instance, detaching);
      }
    };
  } // (24:4) <svelte:fragment slot="body">


  function create_body_slot$1(ctx) {
    var each_1_anchor;
    var current;
    var each_value =
    /*inputs*/
    ctx[0];
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }

    var out = function out(i) {
      return transition_out(each_blocks[i], 1, 1, function () {
        each_blocks[i] = null;
      });
    };

    return {
      c: function c() {
        for (var _i = 0; _i < each_blocks.length; _i += 1) {
          each_blocks[_i].c();
        }

        each_1_anchor = empty();
      },
      m: function m(target, anchor) {
        for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
          each_blocks[_i2].m(target, anchor);
        }

        insert(target, each_1_anchor, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*inputs, $form$*/
        5) {
          each_value =
          /*inputs*/
          ctx[0];

          var _i3;

          for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
            var child_ctx = get_each_context(ctx, each_value, _i3);

            if (each_blocks[_i3]) {
              each_blocks[_i3].p(child_ctx, dirty);

              transition_in(each_blocks[_i3], 1);
            } else {
              each_blocks[_i3] = create_each_block(child_ctx);

              each_blocks[_i3].c();

              transition_in(each_blocks[_i3], 1);

              each_blocks[_i3].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }

          group_outros();

          for (_i3 = each_value.length; _i3 < each_blocks.length; _i3 += 1) {
            out(_i3);
          }

          check_outros();
        }
      },
      i: function i(local) {
        if (current) return;

        for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
          transition_in(each_blocks[_i4]);
        }

        current = true;
      },
      o: function o(local) {
        each_blocks = each_blocks.filter(Boolean);

        for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
          transition_out(each_blocks[_i5]);
        }

        current = false;
      },
      d: function d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching) detach(each_1_anchor);
      }
    };
  } // (38:8) {#if opts.resetButton}


  function create_if_block$2(ctx) {
    var button;
    var raw_value =
    /*opts*/
    ctx[4].resetButtonText + "";
    var mounted;
    var dispose;
    return {
      c: function c() {
        button = element("button");
        attr(button, "type", "button");
        attr(button, "class", /*opts*/
        ctx[4].resetButtonClass);
        attr(button, "aria-label", "Reset form");
        attr(button, "data-testid", "prompt__reset-button");
      },
      m: function m(target, anchor) {
        insert(target, button, anchor);
        button.innerHTML = raw_value;

        if (!mounted) {
          dispose = listen(button, "click",
          /*handleReset*/
          ctx[7]);
          mounted = true;
        }
      },
      p: noop,
      d: function d(detaching) {
        if (detaching) detach(button);
        mounted = false;
        dispose();
      }
    };
  } // (29:4) <svelte:fragment slot="footer">


  function create_footer_slot$1(ctx) {
    var span;
    var button0;
    var raw0_value =
    /*opts*/
    ctx[4].cancelButtonText + "";
    var t0;
    var t1;
    var button1;
    var raw1_value =
    /*opts*/
    ctx[4].submitButtonText + "";
    var mounted;
    var dispose;
    var if_block =
    /*opts*/
    ctx[4].resetButton && create_if_block$2(ctx);
    return {
      c: function c() {
        span = element("span");
        button0 = element("button");
        t0 = space();
        if (if_block) if_block.c();
        t1 = space();
        button1 = element("button");
        attr(button0, "type", "button");
        attr(button0, "class", /*opts*/
        ctx[4].cancelButtonClass);
        attr(button0, "aria-label", "Cancel");
        attr(button0, "data-testid", "prompt__cancel-button");
        attr(button1, "type", "submit");
        attr(button1, "class", /*opts*/
        ctx[4].submitButtonClass);
        attr(button1, "aria-label", "Submit");
        attr(button1, "data-testid", "prompt__submit-button");
      },
      m: function m(target, anchor) {
        insert(target, span, anchor);
        append(span, button0);
        button0.innerHTML = raw0_value;
        append(span, t0);
        if (if_block) if_block.m(span, null);
        insert(target, t1, anchor);
        insert(target, button1, anchor);
        button1.innerHTML = raw1_value;

        if (!mounted) {
          dispose = [listen(button0, "click",
          /*click_handler*/
          ctx[8]), listen(button1, "click",
          /*click_handler_1*/
          ctx[9])];
          mounted = true;
        }
      },
      p: function p(ctx, dirty) {
        if (
        /*opts*/
        ctx[4].resetButton) if_block.p(ctx, dirty);
      },
      d: function d(detaching) {
        if (detaching) detach(span);
        if (if_block) if_block.d();
        if (detaching) detach(t1);
        if (detaching) detach(button1);
        mounted = false;
        run_all(dispose);
      }
    };
  }

  function create_fragment$a(ctx) {
    var form;
    var dialogcontent;
    var current;
    var mounted;
    var dispose;
    dialogcontent = new DialogContent({
      props: {
        $$slots: {
          footer: [create_footer_slot$1],
          body: [create_body_slot$1]
        },
        $$scope: {
          ctx: ctx
        }
      }
    });
    return {
      c: function c() {
        form = element("form");
        create_component(dialogcontent.$$.fragment);
        attr(form, "data-testid", "prompt__form");
        attr(form, "class", /*opts*/
        ctx[4].formClass);
        toggle_class(form, "touched",
        /*touched*/
        ctx[1]);
      },
      m: function m(target, anchor) {
        insert(target, form, anchor);
        mount_component(dialogcontent, form, null);
        current = true;

        if (!mounted) {
          dispose = listen(form, "submit", prevent_default(
          /*handleSubmit*/
          ctx[6]));
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        var dialogcontent_changes = {};

        if (dirty &
        /*$$scope, touched, inputs, $form$*/
        16391) {
          dialogcontent_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        dialogcontent.$set(dialogcontent_changes);

        if (dirty &
        /*touched*/
        2) {
          toggle_class(form, "touched",
          /*touched*/
          ctx[1]);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(dialogcontent.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(dialogcontent.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(form);
        destroy_component(dialogcontent);
        mounted = false;
        dispose();
      }
    };
  }

  function instance$9($$self, $$props, $$invalidate) {
    var $form$;
    var _$$props$inputs = $$props.inputs,
        inputs = _$$props$inputs === void 0 ? [] : _$$props$inputs;
    var touched = false;
    var close = getClose();
    var opts = getOptions();
    var form$ = writable(new Array(inputs.length));
    component_subscribe($$self, form$, function (value) {
      return $$invalidate(2, $form$ = value);
    });

    function handleSubmit() {
      close(get_store_value(form$));
    }

    function handleReset() {
      form$.set(new Array(inputs.length));
      $$invalidate(1, touched = false);
    }

    var click_handler = function click_handler() {
      return close(null);
    };

    var click_handler_1 = function click_handler_1() {
      $$invalidate(1, touched = true);
    };

    function switch_instance_value_binding(value, idx) {
      if ($$self.$$.not_equal($form$[idx], value)) {
        $form$[idx] = value;
        form$.set($form$);
      }
    }

    $$self.$$set = function ($$props) {
      if ('inputs' in $$props) $$invalidate(0, inputs = $$props.inputs);
    };

    return [inputs, touched, $form$, close, opts, form$, handleSubmit, handleReset, click_handler, click_handler_1, switch_instance_value_binding];
  }

  var Prompt = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Prompt, _SvelteComponent);

    var _super = _createSuper$a(Prompt);

    function Prompt(options) {
      var _this;

      _classCallCheck(this, Prompt);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$9, create_fragment$a, safe_not_equal, {
        inputs: 0
      });
      return _this;
    }

    return Prompt;
  }(SvelteComponent);

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var commonDefaultOptions = {
    props: {},
    //
    transitions: {
      bgIn: {
        transition: fade,
        props: {}
      },
      bgOut: {
        transition: fade,
        props: {}
      },
      in: {
        transition: fly,
        props: {
          y: 200,
          duration: 500
        }
      },
      out: {
        transition: fly,
        props: {
          y: 200,
          duration: 500
        }
      }
    },
    //
    onShow: noop,
    onShown: noop,
    onHide: noop,
    onHidden: noop,
    //
    overlayClass: "dialog__overlay",
    dialogClass: "dialog__container",
    closeButtonClass: "dialog__close-button",
    closeButtonText: "",
    //
    headerClass: "dialog__header",
    titleClass: "dialog__title",
    titleId: "dialog-title-id",
    dividerClass: "dialog-content__divider",
    bodyClass: "dialog__body",
    footerClass: "dialog__footer dialog__footer--space-evenly",
    title: "",
    text: ""
  };
  var defaultDialogOptions = _objectSpread$3(_objectSpread$3({}, commonDefaultOptions), {}, {
    //
    content: DialogContent,
    //
    closeButton: true,
    closeOnBg: true,
    closeOnEsc: true
  });
  var defaultAlertOptions = _objectSpread$3(_objectSpread$3({}, commonDefaultOptions), {}, {
    //
    content: Alert,
    //
    closeButton: false,
    closeOnBg: false,
    closeOnEsc: false,
    //
    dismissButtonText: "ok",
    dismissButtonClass: "dialog_button dialog_button--primary"
  });
  var defaultConfirmOptions = _objectSpread$3(_objectSpread$3({}, commonDefaultOptions), {}, {
    //
    content: Confirm,
    //
    closeButton: false,
    closeOnBg: false,
    closeOnEsc: false,
    title: "are you sure you want to continue?",
    //
    confirmButtonText: "yes",
    declineButtonText: "no",
    confirmButtonClass: "dialog_button dialog_button--primary",
    declineButtonClass: "dialog_button dialog_button--decline"
  });
  var defaultPromptOptions = _objectSpread$3(_objectSpread$3({}, commonDefaultOptions), {}, {
    //
    content: Prompt,
    //
    closeButton: false,
    closeOnBg: false,
    closeOnEsc: false,
    footerClass: "dialog__footer dialog__footer--space-between",
    //
    inputComponent: DialogInput,
    inputProps: null,
    resetButton: true,
    formClass: "dialog__form",
    formElementClass: "dialog__form-element",
    inputLabelClass: "dialog__input-label",
    inputClass: "dialog__input",
    submitButtonText: "submit",
    cancelButtonText: "cancel",
    resetButtonText: "reset",
    submitButtonClass: "dialog_button dialog_button--primary",
    cancelButtonClass: "dialog_button dialog_button--decline",
    resetButtonClass: "dialog_button dialog_button--primary"
  });
  var defaultDialogConfigOptions = {
    global: defaultDialogOptions,
    alert: defaultAlertOptions,
    confirm: defaultConfirmOptions,
    prompt: defaultPromptOptions
  };

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var customConfig = {};
  var config = function config(options) {
    customConfig = options;
  };
  var getOpts = function getOpts(defaults, custom) {
    var _customConfig$global;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return _objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2({}, defaults), customConfig.global), custom), options), {}, {
      transitions: resolveTransitions(_objectSpread$2(_objectSpread$2(_objectSpread$2(_objectSpread$2({}, defaults.transitions), (_customConfig$global = customConfig.global) === null || _customConfig$global === void 0 ? void 0 : _customConfig$global.transitions), custom === null || custom === void 0 ? void 0 : custom.transitions), options.transitions))
    });
  };
  var getModalOptions = function getModalOptions(options) {
    return getOpts(defaultDialogConfigOptions.global, customConfig.global, options);
  };
  var getAlertOptions = function getAlertOptions(options) {
    return getOpts(defaultDialogConfigOptions.alert, customConfig.alert, options);
  };
  var getConfirmOptions = function getConfirmOptions(options) {
    return getOpts(defaultDialogConfigOptions.confirm, customConfig.confirm, options);
  };
  var getPromptOptions = function getPromptOptions(inputs, options) {
    var opts = getOpts(defaultDialogConfigOptions.prompt, customConfig.prompt, options);
    var defaltInput = {
      component: opts.inputComponent,
      props: opts.inputProps || {
        label: "",
        formElementClass: opts.formElementClass,
        inputLabelClass: opts.inputLabelClass,
        inputClass: opts.inputClass
      }
    };
    opts.props.inputs = inputs.map(function (input) {
      return _objectSpread$2(_objectSpread$2({}, defaltInput), input);
    });
    return opts;
  };
  var resolveTransitions = function resolveTransitions(transitions) {
    for (var key in transitions) {
      var transition = transitions[key].transition;
      transitions[key].transition = resolveTransition(transition);
    }

    return transitions;
  };

  var resolveTransition = function resolveTransition(transition) {
    if (typeof transition !== "string") {
      return transition;
    }

    switch (transition) {
      case "fade":
        return fade;

      case "blur":
        return blur;

      case "fly":
        return fly;

      case "slide":
        return slide;

      case "scale":
        return scale;

      case "draw":
        return draw;

      case "crossfade":
        return crossfade;

      default:
        throw new Error("".concat(transition, " not an existing svelte transition"));
    }
  };

  // https://gist.github.com/JulienPradet/20dbb7ca06cbd9e2ec499bb2206aab55
  var trapFocusList = [];
  var focusableSelector = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";

  if (typeof window !== "undefined") {
    var isNext = function isNext(event) {
      return event.key === "Tab" && !event.shiftKey;
    };

    var isPrevious = function isPrevious(event) {
      return event.key === "Tab" && event.shiftKey;
    };

    var trapFocusListener = function trapFocusListener(event) {
      if (event.target === window) {
        return;
      }

      var eventTarget = event.target;
      var parentNode = trapFocusList.find(function (node) {
        return node.contains(eventTarget);
      });

      if (!parentNode) {
        return;
      }

      var focusable = parentNode.querySelectorAll(focusableSelector);
      var first = focusable[0];
      var last = focusable[focusable.length - 1];

      if (isNext(event) && event.target === last) {
        event.preventDefault();
        first.focus();
      } else if (isPrevious(event) && event.target === first) {
        event.preventDefault();
        last.focus();
      }
    };

    document.addEventListener("keydown", trapFocusListener);
  }

  var focusTrap = (function (node) {
    var firstFocusable = node.querySelector(focusableSelector);
    firstFocusable === null || firstFocusable === void 0 ? void 0 : firstFocusable.focus();
    firstFocusable === null || firstFocusable === void 0 ? void 0 : firstFocusable.blur(); // document.activeElement?.blur();

    trapFocusList.push(node);
    return {
      destroy: function destroy() {
        trapFocusList = trapFocusList.filter(function (element) {
          return element !== node;
        });
      }
    };
  });

  function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function create_if_block_2(ctx) {
    var button;
    var raw_value =
    /*opts*/
    ctx[1].closeButtonText + "";
    var button_class_value;
    var mounted;
    var dispose;
    return {
      c: function c() {
        button = element("button");
        attr(button, "class", button_class_value =
        /*opts*/
        ctx[1].closeButtonClass);
        attr(button, "aria-label", "Close dialog");
        attr(button, "data-testid", "dialog-core__close-button");
      },
      m: function m(target, anchor) {
        insert(target, button, anchor);
        button.innerHTML = raw_value;

        if (!mounted) {
          dispose = listen(button, "click",
          /*click_handler*/
          ctx[15]);
          mounted = true;
        }
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*opts*/
        2 && raw_value !== (raw_value =
        /*opts*/
        ctx[1].closeButtonText + "")) button.innerHTML = raw_value;

        if (dirty &
        /*opts*/
        2 && button_class_value !== (button_class_value =
        /*opts*/
        ctx[1].closeButtonClass)) {
          attr(button, "class", button_class_value);
        }
      },
      d: function d(detaching) {
        if (detaching) detach(button);
        mounted = false;
        dispose();
      }
    };
  } // (109:4) {:else}


  function create_else_block(ctx) {
    var switch_instance;
    var switch_instance_anchor;
    var current;
    var switch_instance_spread_levels = [
    /*opts*/
    ctx[1].props];
    var switch_value =
    /*opts*/
    ctx[1].content;

    function switch_props(ctx) {
      var switch_instance_props = {};

      for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
        switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
      }

      return {
        props: switch_instance_props
      };
    }

    if (switch_value) {
      switch_instance = new switch_value(switch_props());
    }

    return {
      c: function c() {
        if (switch_instance) create_component(switch_instance.$$.fragment);
        switch_instance_anchor = empty();
      },
      m: function m(target, anchor) {
        if (switch_instance) {
          mount_component(switch_instance, target, anchor);
        }

        insert(target, switch_instance_anchor, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var switch_instance_changes = dirty &
        /*opts*/
        2 ? get_spread_update(switch_instance_spread_levels, [get_spread_object(
        /*opts*/
        ctx[1].props)]) : {};

        if (switch_value !== (switch_value =
        /*opts*/
        ctx[1].content)) {
          if (switch_instance) {
            group_outros();
            var old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, function () {
              destroy_component(old_component, 1);
            });
            check_outros();
          }

          if (switch_value) {
            switch_instance = new switch_value(switch_props());
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          switch_instance.$set(switch_instance_changes);
        }
      },
      i: function i(local) {
        if (current) return;
        if (switch_instance) transition_in(switch_instance.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        if (switch_instance) transition_out(switch_instance.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(switch_instance_anchor);
        if (switch_instance) destroy_component(switch_instance, detaching);
      }
    };
  } // (107:47) 


  function create_if_block_1(ctx) {
    var html_tag;
    var raw_value =
    /*opts*/
    ctx[1].content + "";
    var html_anchor;
    return {
      c: function c() {
        html_tag = new HtmlTag();
        html_anchor = empty();
        html_tag.a = html_anchor;
      },
      m: function m(target, anchor) {
        html_tag.m(raw_value, target, anchor);
        insert(target, html_anchor, anchor);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*opts*/
        2 && raw_value !== (raw_value =
        /*opts*/
        ctx[1].content + "")) html_tag.p(raw_value);
      },
      i: noop,
      o: noop,
      d: function d(detaching) {
        if (detaching) detach(html_anchor);
        if (detaching) html_tag.d();
      }
    };
  } // (105:4) {#if $$slots.default}


  function create_if_block$1(ctx) {
    var current;
    var default_slot_template =
    /*#slots*/
    ctx[14].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[13], null);
    return {
      c: function c() {
        if (default_slot) default_slot.c();
      },
      m: function m(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }

        current = true;
      },
      p: function p(ctx, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty &
          /*$$scope*/
          8192)) {
            update_slot_base(default_slot, default_slot_template, ctx,
            /*$$scope*/
            ctx[13], !current ? get_all_dirty_from_scope(
            /*$$scope*/
            ctx[13]) : get_slot_changes(default_slot_template,
            /*$$scope*/
            ctx[13], dirty, null), null);
          }
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(default_slot, local);
        current = true;
      },
      o: function o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d: function d(detaching) {
        if (default_slot) default_slot.d(detaching);
      }
    };
  }

  function create_fragment$9(ctx) {
    var div1;
    var div0;
    var t;
    var current_block_type_index;
    var if_block1;
    var div0_class_value;
    var div0_aria_labelledby_value;
    var div0_intro;
    var div0_outro;
    var div1_class_value;
    var div1_intro;
    var div1_outro;
    var current;
    var mounted;
    var dispose;
    var if_block0 =
    /*opts*/
    ctx[1].closeButton && create_if_block_2(ctx);
    var if_block_creators = [create_if_block$1, create_if_block_1, create_else_block];
    var if_blocks = [];

    function select_block_type(ctx, dirty) {
      if (
      /*$$slots*/
      ctx[12].default) return 0;
      if (typeof
      /*opts*/
      ctx[1].content === "string") return 1;
      return 2;
    }

    current_block_type_index = select_block_type(ctx);
    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c: function c() {
        div1 = element("div");
        div0 = element("div");
        if (if_block0) if_block0.c();
        t = space();
        if_block1.c();
        attr(div0, "class", div0_class_value =
        /*opts*/
        ctx[1].dialogClass);
        attr(div0, "role", "dialog");
        attr(div0, "aria-modal", "true");
        attr(div0, "aria-labelledby", div0_aria_labelledby_value =
        /*opts*/
        ctx[1].titleId);
        attr(div0, "data-testid", "dialog-core__dialog");
        attr(div1, "class", div1_class_value =
        /*opts*/
        ctx[1].overlayClass);
        attr(div1, "data-testid", "dialog-core__overlay");
        attr(div1, "tabindex", "-1");
      },
      m: function m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        if (if_block0) if_block0.m(div0, null);
        append(div0, t);
        if_blocks[current_block_type_index].m(div0, null);
        current = true;

        if (!mounted) {
          dispose = [listen(window, "keydown",
          /*handleKeydown*/
          ctx[10]), listen(div0, "introstart",
          /*show*/
          ctx[6]), listen(div0, "introend",
          /*shown*/
          ctx[7]), listen(div0, "outrostart",
          /*hide*/
          ctx[8]), listen(div0, "outroend",
          /*hidden*/
          ctx[9]), listen(div0, "click", handleDialogClick), action_destroyer(focusTrap.call(null, div0)), listen(div1, "click",
          /*handleBgClick*/
          ctx[11])];
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (
        /*opts*/
        ctx[1].closeButton) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
          } else {
            if_block0 = create_if_block_2(ctx);
            if_block0.c();
            if_block0.m(div0, t);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }

        var previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block1 = if_blocks[current_block_type_index];

          if (!if_block1) {
            if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block1.c();
          } else {
            if_block1.p(ctx, dirty);
          }

          transition_in(if_block1, 1);
          if_block1.m(div0, null);
        }

        if (!current || dirty &
        /*opts*/
        2 && div0_class_value !== (div0_class_value =
        /*opts*/
        ctx[1].dialogClass)) {
          attr(div0, "class", div0_class_value);
        }

        if (!current || dirty &
        /*opts*/
        2 && div0_aria_labelledby_value !== (div0_aria_labelledby_value =
        /*opts*/
        ctx[1].titleId)) {
          attr(div0, "aria-labelledby", div0_aria_labelledby_value);
        }

        if (!current || dirty &
        /*opts*/
        2 && div1_class_value !== (div1_class_value =
        /*opts*/
        ctx[1].overlayClass)) {
          attr(div1, "class", div1_class_value);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block1);
        add_render_callback(function () {
          if (div0_outro) div0_outro.end(1);
          div0_intro = create_in_transition(div0,
          /*dialogIn*/
          ctx[4], {});
          div0_intro.start();
        });
        add_render_callback(function () {
          if (div1_outro) div1_outro.end(1);
          div1_intro = create_in_transition(div1,
          /*bgIn*/
          ctx[2], {});
          div1_intro.start();
        });
        current = true;
      },
      o: function o(local) {
        transition_out(if_block1);
        if (div0_intro) div0_intro.invalidate();
        div0_outro = create_out_transition(div0,
        /*dialogOut*/
        ctx[5], {});
        if (div1_intro) div1_intro.invalidate();
        div1_outro = create_out_transition(div1,
        /*bgOut*/
        ctx[3], {});
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(div1);
        if (if_block0) if_block0.d();
        if_blocks[current_block_type_index].d();
        if (detaching && div0_outro) div0_outro.end();
        if (detaching && div1_outro) div1_outro.end();
        mounted = false;
        run_all(dispose);
      }
    };
  }

  function handleDialogClick(event) {
    event.stopPropagation();
  }

  function instance$8($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    var $$slots = compute_slots(slots);
    var close = $$props.close;
    var opts = $$props.opts;
    setClose(close);
    setOptions(opts);
    var dispatch = createEventDispatcher();

    function bgIn(node, _) {
      var _opts$transitions$bgI = opts.transitions.bgIn,
          transition = _opts$transitions$bgI.transition,
          props = _opts$transitions$bgI.props;
      return transition(node, props);
    }

    function bgOut(node, _) {
      var _opts$transitions$bgO = opts.transitions.bgOut,
          transition = _opts$transitions$bgO.transition,
          props = _opts$transitions$bgO.props;
      return transition(node, props);
    }

    function dialogIn(node, _) {
      var _opts$transitions$in = opts.transitions.in,
          transition = _opts$transitions$in.transition,
          props = _opts$transitions$in.props;
      return transition(node, props);
    }

    function dialogOut(node, _) {
      var _opts$transitions$out = opts.transitions.out,
          transition = _opts$transitions$out.transition,
          props = _opts$transitions$out.props;
      return transition(node, props);
    }

    function show() {
      opts.onShow();
      dispatch("show");
    }

    function shown() {
      opts.onShown();
      dispatch("shown");
    }

    function hide() {
      opts.onHide();
      dispatch("hide");
    }

    function hidden() {
      opts.onHidden();
      dispatch("hidden");
    }

    function handleKeydown(event) {
      if (opts.closeOnEsc && event.key === "Escape") {
        event.preventDefault();
        close();
      }
    }

    function handleBgClick() {
      if (opts.closeOnBg) {
        close();
      }
    }

    var click_handler = function click_handler() {
      return close();
    };

    $$self.$$set = function ($$props) {
      if ('close' in $$props) $$invalidate(0, close = $$props.close);
      if ('opts' in $$props) $$invalidate(1, opts = $$props.opts);
      if ('$$scope' in $$props) $$invalidate(13, $$scope = $$props.$$scope);
    };

    return [close, opts, bgIn, bgOut, dialogIn, dialogOut, show, shown, hide, hidden, handleKeydown, handleBgClick, $$slots, $$scope, slots, click_handler];
  }

  var DialogCore = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(DialogCore, _SvelteComponent);

    var _super = _createSuper$9(DialogCore);

    function DialogCore(options) {
      var _this;

      _classCallCheck(this, DialogCore);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$8, create_fragment$9, safe_not_equal, {
        close: 0,
        opts: 1
      });
      return _this;
    }

    return DialogCore;
  }(SvelteComponent);

  function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var get_default_slot_changes = function get_default_slot_changes(dirty) {
    return {
      data: dirty &
      /*_data*/
      4
    };
  };

  var get_default_slot_context = function get_default_slot_context(ctx) {
    return {
      close:
      /*close*/
      ctx[0],
      data:
      /*_data*/
      ctx[2]
    };
  }; // (28:0) {#if visible}


  function create_if_block(ctx) {
    var dialogcore;
    var current;
    dialogcore = new DialogCore({
      props: {
        close:
        /*close*/
        ctx[0],
        opts:
        /*opts*/
        ctx[3],
        $$slots: {
          default: [create_default_slot$1]
        },
        $$scope: {
          ctx: ctx
        }
      }
    });
    dialogcore.$on("show",
    /*show_handler*/
    ctx[8]);
    dialogcore.$on("shown",
    /*shown_handler*/
    ctx[9]);
    dialogcore.$on("hidden",
    /*hidden_handler*/
    ctx[10]);
    return {
      c: function c() {
        create_component(dialogcore.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(dialogcore, target, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var dialogcore_changes = {};
        if (dirty &
        /*opts*/
        8) dialogcore_changes.opts =
        /*opts*/
        ctx[3];

        if (dirty &
        /*$$scope, _data*/
        2052) {
          dialogcore_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        dialogcore.$set(dialogcore_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(dialogcore.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(dialogcore.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(dialogcore, detaching);
      }
    };
  } // (29:2) <DialogCore {close} {opts} on:show on:shown on:hidden>


  function create_default_slot$1(ctx) {
    var current;
    var default_slot_template =
    /*#slots*/
    ctx[7].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[11], get_default_slot_context);
    return {
      c: function c() {
        if (default_slot) default_slot.c();
      },
      m: function m(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }

        current = true;
      },
      p: function p(ctx, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty &
          /*$$scope, _data*/
          2052)) {
            update_slot_base(default_slot, default_slot_template, ctx,
            /*$$scope*/
            ctx[11], !current ? get_all_dirty_from_scope(
            /*$$scope*/
            ctx[11]) : get_slot_changes(default_slot_template,
            /*$$scope*/
            ctx[11], dirty, get_default_slot_changes), get_default_slot_context);
          }
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(default_slot, local);
        current = true;
      },
      o: function o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d: function d(detaching) {
        if (default_slot) default_slot.d(detaching);
      }
    };
  }

  function create_fragment$8(ctx) {
    var if_block_anchor;
    var current;
    var if_block =
    /*visible*/
    ctx[1] && create_if_block(ctx);
    return {
      c: function c() {
        if (if_block) if_block.c();
        if_block_anchor = empty();
      },
      m: function m(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (
        /*visible*/
        ctx[1]) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*visible*/
            2) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block);
        current = false;
      },
      d: function d(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach(if_block_anchor);
      }
    };
  }

  function instance$7($$self, $$props, $$invalidate) {
    var opts;
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    var dispatch = createEventDispatcher();
    var _$$props$options = $$props.options,
        options = _$$props$options === void 0 ? {} : _$$props$options;
    var visible = false;
    var _data = null;

    function open(data) {
      $$invalidate(2, _data = data);
      $$invalidate(1, visible = true);
    }

    function close(data) {
      dispatch("hide", data);
      $$invalidate(1, visible = false);
    }

    function data() {
      return _data;
    }

    function show_handler(event) {
      bubble.call(this, $$self, event);
    }

    function shown_handler(event) {
      bubble.call(this, $$self, event);
    }

    function hidden_handler(event) {
      bubble.call(this, $$self, event);
    }

    $$self.$$set = function ($$props) {
      if ('options' in $$props) $$invalidate(4, options = $$props.options);
      if ('$$scope' in $$props) $$invalidate(11, $$scope = $$props.$$scope);
    };

    $$self.$$.update = function () {
      if ($$self.$$.dirty &
      /*options*/
      16) {
        $$invalidate(3, opts = _objectSpread$1(_objectSpread$1({}, getModalOptions()), options));
      }
    };

    return [close, visible, _data, opts, options, open, data, slots, show_handler, shown_handler, hidden_handler, $$scope];
  }

  var Dialog = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Dialog, _SvelteComponent);

    var _super = _createSuper$8(Dialog);

    function Dialog(options) {
      var _this;

      _classCallCheck(this, Dialog);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$7, create_fragment$8, safe_not_equal, {
        options: 4,
        open: 5,
        close: 0,
        data: 6
      });
      return _this;
    }

    _createClass(Dialog, [{
      key: "open",
      get: function get() {
        return this.$$.ctx[5];
      }
    }, {
      key: "close",
      get: function get() {
        return this.$$.ctx[0];
      }
    }, {
      key: "data",
      get: function get() {
        return this.$$.ctx[6];
      }
    }]);

    return Dialog;
  }(SvelteComponent);

  var outroAndDestroy = function outroAndDestroy(instance) {
    if (instance.$$.fragment && instance.$$.fragment.o) {
      group_outros();
      transition_out(instance.$$.fragment, 0, 0, function () {
        instance.$destroy();
      });
      check_outros();
    } else {
      instance.$destroy();
    }
  };
  var createDialog = function createDialog(opts) {
    var close;
    var promise = new Promise(function (resolve) {
      close = resolve;
    });
    var dialog = new DialogCore({
      target: document.body,
      intro: true,
      props: {
        close: close,
        opts: opts
      }
    });
    return promise.finally(function () {
      outroAndDestroy(dialog);
    });
  };
  var mapInput = function mapInput(input) {
    if (typeof input === "string") {
      return {
        props: {
          label: input
        }
      };
    } else if (typeof input === "function") {
      return {
        component: input,
        props: {}
      };
    } else if (!input.props && !input.component) {
      return {
        props: input
      };
    } else {
      return input;
    }
  };

  var modal = function modal(options, props) {
    var opts;

    if (typeof options === "string" || typeof options === "function") {
      opts = getModalOptions();
      opts.content = options;

      if (props) {
        opts.props = props;
      }
    } else {
      opts = getModalOptions(options);
    }

    return createDialog(opts);
  };
  var alert = function alert(options) {
    var opts;

    if (typeof options === "string") {
      opts = getAlertOptions();
      opts.title = options;
    } else {
      opts = getAlertOptions(options);
    }

    return createDialog(opts);
  };
  var confirm = function confirm(options) {
    var opts;

    if (typeof options === "string") {
      opts = getConfirmOptions();
      opts.title = options;
    } else {
      opts = getConfirmOptions(options);
    }

    return createDialog(opts);
  };
  var prompt = function prompt(input, options) {
    var inputs = (Array.isArray(input) ? input : [input]).map(mapInput);
    var opts = getPromptOptions(inputs, options);
    return createDialog(opts);
  };

  var dialogs = {
    alert: alert,
    confirm: confirm,
    modal: modal,
    prompt: prompt,
    config: config
  };

  function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function create_fragment$7(ctx) {
    var h2;
    var t1;
    var button0;
    var t3;
    var button1;
    var t5;
    var button2;
    var t7;
    var button3;
    var t9;
    var button4;
    var t11;
    var button5;
    var t13;
    var button6;
    var mounted;
    var dispose;
    return {
      c: function c() {
        h2 = element("h2");
        h2.textContent = "Basics";
        t1 = space();
        button0 = element("button");
        button0.textContent = "alert string";
        t3 = space();
        button1 = element("button");
        button1.textContent = "alert html string";
        t5 = space();
        button2 = element("button");
        button2.textContent = "confirm string";
        t7 = space();
        button3 = element("button");
        button3.textContent = "confirm html string";
        t9 = space();
        button4 = element("button");
        button4.textContent = "html string modal";
        t11 = space();
        button5 = element("button");
        button5.textContent = "string prompt";
        t13 = space();
        button6 = element("button");
        button6.textContent = "string array prompt";
      },
      m: function m(target, anchor) {
        insert(target, h2, anchor);
        insert(target, t1, anchor);
        insert(target, button0, anchor);
        insert(target, t3, anchor);
        insert(target, button1, anchor);
        insert(target, t5, anchor);
        insert(target, button2, anchor);
        insert(target, t7, anchor);
        insert(target, button3, anchor);
        insert(target, t9, anchor);
        insert(target, button4, anchor);
        insert(target, t11, anchor);
        insert(target, button5, anchor);
        insert(target, t13, anchor);
        insert(target, button6, anchor);

        if (!mounted) {
          dispose = [listen(button0, "click",
          /*click_handler*/
          ctx[2]), listen(button1, "click",
          /*click_handler_1*/
          ctx[3]), listen(button2, "click",
          /*click_handler_2*/
          ctx[4]), listen(button3, "click",
          /*click_handler_3*/
          ctx[5]), listen(button4, "click",
          /*click_handler_4*/
          ctx[6]), listen(button5, "click",
          /*click_handler_5*/
          ctx[7]), listen(button6, "click",
          /*click_handler_6*/
          ctx[8])];
          mounted = true;
        }
      },
      p: noop,
      i: noop,
      o: noop,
      d: function d(detaching) {
        if (detaching) detach(h2);
        if (detaching) detach(t1);
        if (detaching) detach(button0);
        if (detaching) detach(t3);
        if (detaching) detach(button1);
        if (detaching) detach(t5);
        if (detaching) detach(button2);
        if (detaching) detach(t7);
        if (detaching) detach(button3);
        if (detaching) detach(t9);
        if (detaching) detach(button4);
        if (detaching) detach(t11);
        if (detaching) detach(button5);
        if (detaching) detach(t13);
        if (detaching) detach(button6);
        mounted = false;
        run_all(dispose);
      }
    };
  }

  function instance$6($$self) {
    var htmlString = " \n  <div>\n    <h1 id=\"my-title-id\" class=\"my-title\">all the html you want</h1>\n    <div class=\"body\">\n      <p>now in text!</p>\n    </div>\n  </div>\n  ";

    function printSubmit(submitArray) {
      if (submitArray) {
        var text = "<p>" + submitArray.join("</p><p>") + "</p>";
        dialogs.alert({
          title: "Your responses",
          text: text
        });
      }
    }

    var click_handler = function click_handler() {
      return dialogs.alert("this is an alert");
    };

    var click_handler_1 = function click_handler_1() {
      return dialogs.alert("<p style='color: red;'>this is an alert</p>");
    };

    var click_handler_2 = function click_handler_2() {
      return dialogs.confirm("are you sure?");
    };

    var click_handler_3 = function click_handler_3() {
      return dialogs.confirm("<p style='color: blue;'>are you sure?</p>");
    };

    var click_handler_4 = function click_handler_4() {
      return dialogs.modal(htmlString);
    };

    var click_handler_5 = function click_handler_5() {
      return dialogs.prompt("an input").then(printSubmit);
    };

    var click_handler_6 = function click_handler_6() {
      return dialogs.prompt(["input", "another input"]).then(printSubmit);
    };

    return [htmlString, printSubmit, click_handler, click_handler_1, click_handler_2, click_handler_3, click_handler_4, click_handler_5, click_handler_6];
  }

  var Basics = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Basics, _SvelteComponent);

    var _super = _createSuper$7(Basics);

    function Basics(options) {
      var _this;

      _classCallCheck(this, Basics);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$6, create_fragment$7, safe_not_equal, {});
      return _this;
    }

    return Basics;
  }(SvelteComponent);

  function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function create_default_slot(ctx) {
    var p0;
    var t1;
    var p1;
    var t2_value =
    /*data*/
    ctx[4] + "";
    var t2;
    var t3;
    var button;
    var mounted;
    var dispose;

    function click_handler_1() {
      return (
        /*click_handler_1*/
        ctx[2](
        /*close*/
        ctx[5],
        /*data*/
        ctx[4])
      );
    }

    return {
      c: function c() {
        p0 = element("p");
        p0.textContent = "template based dialog";
        t1 = space();
        p1 = element("p");
        t2 = text(t2_value);
        t3 = space();
        button = element("button");
        button.textContent = "close";
      },
      m: function m(target, anchor) {
        insert(target, p0, anchor);
        insert(target, t1, anchor);
        insert(target, p1, anchor);
        append(p1, t2);
        insert(target, t3, anchor);
        insert(target, button, anchor);

        if (!mounted) {
          dispose = listen(button, "click", click_handler_1);
          mounted = true;
        }
      },
      p: function p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty &
        /*data*/
        16 && t2_value !== (t2_value =
        /*data*/
        ctx[4] + "")) set_data(t2, t2_value);
      },
      d: function d(detaching) {
        if (detaching) detach(p0);
        if (detaching) detach(t1);
        if (detaching) detach(p1);
        if (detaching) detach(t3);
        if (detaching) detach(button);
        mounted = false;
        dispose();
      }
    };
  }

  function create_fragment$6(ctx) {
    var h2;
    var t1;
    var button;
    var t3;
    var dialog_1;
    var current;
    var mounted;
    var dispose;
    var dialog_1_props = {
      $$slots: {
        default: [create_default_slot, function (_ref) {
          var data = _ref.data,
              close = _ref.close;
          return {
            4: data,
            5: close
          };
        }, function (_ref2) {
          var data = _ref2.data,
              close = _ref2.close;
          return (data ? 16 : 0) | (close ? 32 : 0);
        }]
      },
      $$scope: {
        ctx: ctx
      }
    };
    dialog_1 = new Dialog({
      props: dialog_1_props
    });
    /*dialog_1_binding*/

    ctx[3](dialog_1);
    dialog_1.$on("show", handler);
    dialog_1.$on("shown", handler);
    dialog_1.$on("hide", handler);
    dialog_1.$on("hidden", handler);
    return {
      c: function c() {
        h2 = element("h2");
        h2.textContent = "In-component events-based";
        t1 = space();
        button = element("button");
        button.textContent = "show";
        t3 = space();
        create_component(dialog_1.$$.fragment);
      },
      m: function m(target, anchor) {
        insert(target, h2, anchor);
        insert(target, t1, anchor);
        insert(target, button, anchor);
        insert(target, t3, anchor);
        mount_component(dialog_1, target, anchor);
        current = true;

        if (!mounted) {
          dispose = listen(button, "click",
          /*click_handler*/
          ctx[1]);
          mounted = true;
        }
      },
      p: function p(ctx, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
            dirty = _ref4[0];

        var dialog_1_changes = {};

        if (dirty &
        /*$$scope, data*/
        80) {
          dialog_1_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        dialog_1.$set(dialog_1_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(dialog_1.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(dialog_1.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(h2);
        if (detaching) detach(t1);
        if (detaching) detach(button);
        if (detaching) detach(t3);
        /*dialog_1_binding*/

        ctx[3](null);
        destroy_component(dialog_1, detaching);
        mounted = false;
        dispose();
      }
    };
  }

  function handler(event) {
    // event.type 'hide' have event.detail === "my data"
    console.log(event.type, event.detail);
  }

  function instance$5($$self, $$props, $$invalidate) {
    var dialog;

    var click_handler = function click_handler() {
      return dialog.open("my data");
    };

    var click_handler_1 = function click_handler_1(close, data) {
      return close(data);
    };

    function dialog_1_binding($$value) {
      binding_callbacks[$$value ? 'unshift' : 'push'](function () {
        dialog = $$value;
        $$invalidate(0, dialog);
      });
    }

    return [dialog, click_handler, click_handler_1, dialog_1_binding];
  }

  var EventsBased = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(EventsBased, _SvelteComponent);

    var _super = _createSuper$6(EventsBased);

    function EventsBased(options) {
      var _this;

      _classCallCheck(this, EventsBased);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$5, create_fragment$6, safe_not_equal, {});
      return _this;
    }

    return EventsBased;
  }(SvelteComponent);

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  var runtime = {exports: {}};

  (function (module) {
    var runtime = function (exports) {

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1; // More compressible than void 0.

      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }

      try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
      } catch (err) {
        define = function define(obj, key, value) {
          return obj[key] = value;
        };
      }

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};
      define(IteratorPrototype, iteratorSymbol, function () {
        return this;
      });
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      define(Gp, "constructor", GeneratorFunctionPrototype);
      define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }

        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return PromiseImpl.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);
      define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this;
      });
      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      define(Gp, iteratorSymbol, function () {
        return this;
      });
      define(Gp, "toString", function () {
        return "[object Generator]";
      });

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.

        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined$1;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      exports.values = values;

      function doneResult() {
        return {
          value: undefined$1,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined$1;
          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined$1;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1;
          }

          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.

      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports );

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, in modern engines
      // we can explicitly access globalThis. In older engines we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  })(runtime);

  var regenerator = runtime.exports;

  function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function create_fragment$5(ctx) {
    var h2;
    var t1;
    var button;
    var mounted;
    var dispose;
    return {
      c: function c() {
        h2 = element("h2");
        h2.textContent = "Promise-based";
        t1 = space();
        button = element("button");
        button.textContent = "persistent dialog";
      },
      m: function m(target, anchor) {
        insert(target, h2, anchor);
        insert(target, t1, anchor);
        insert(target, button, anchor);

        if (!mounted) {
          dispose = listen(button, "click",
          /*click_handler*/
          ctx[1]);
          mounted = true;
        }
      },
      p: noop,
      i: noop,
      o: noop,
      d: function d(detaching) {
        if (detaching) detach(h2);
        if (detaching) detach(t1);
        if (detaching) detach(button);
        mounted = false;
        dispose();
      }
    };
  }

  function instance$4($$self) {
    function persistent() {
      return _persistent.apply(this, arguments);
    }

    function _persistent() {
      _persistent = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
        var confirm, times;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                times = "";

              case 1:
                _context.next = 3;
                return dialogs.confirm("are you" + times + " sure?");

              case 3:
                confirm = _context.sent;
                times += " really";

              case 5:
                if (confirm) {
                  _context.next = 1;
                  break;
                }

              case 6:
                dialogs.alert("well done......");

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _persistent.apply(this, arguments);
    }

    var click_handler = function click_handler() {
      return persistent();
    };

    return [persistent, click_handler];
  }

  var PromiseBased = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(PromiseBased, _SvelteComponent);

    var _super = _createSuper$5(PromiseBased);

    function PromiseBased(options) {
      var _this;

      _classCallCheck(this, PromiseBased);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$4, create_fragment$5, safe_not_equal, {});
      return _this;
    }

    return PromiseBased;
  }(SvelteComponent);

  function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function create_header_slot(ctx) {
    var h1;
    return {
      c: function c() {
        h1 = element("h1");
        h1.textContent = "MY COMPONENT";
        attr(h1, "slot", "header");
      },
      m: function m(target, anchor) {
        insert(target, h1, anchor);
      },
      d: function d(detaching) {
        if (detaching) detach(h1);
      }
    };
  } // (10:2) <svelte:fragment slot="body">


  function create_body_slot(ctx) {
    var p;
    var t0;
    var t1;
    return {
      c: function c() {
        p = element("p");
        t0 = text("hello ");
        t1 = text(
        /*name*/
        ctx[0]);
      },
      m: function m(target, anchor) {
        insert(target, p, anchor);
        append(p, t0);
        append(p, t1);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*name*/
        1) set_data(t1,
        /*name*/
        ctx[0]);
      },
      d: function d(detaching) {
        if (detaching) detach(p);
      }
    };
  } // (13:2) <svelte:fragment slot="footer">


  function create_footer_slot(ctx) {
    var button;
    var mounted;
    var dispose;
    return {
      c: function c() {
        button = element("button");
        button.textContent = "close me";
      },
      m: function m(target, anchor) {
        insert(target, button, anchor);

        if (!mounted) {
          dispose = listen(button, "click",
          /*click_handler*/
          ctx[2]);
          mounted = true;
        }
      },
      p: noop,
      d: function d(detaching) {
        if (detaching) detach(button);
        mounted = false;
        dispose();
      }
    };
  }

  function create_fragment$4(ctx) {
    var dialogcontent;
    var current;
    dialogcontent = new DialogContent({
      props: {
        $$slots: {
          footer: [create_footer_slot],
          body: [create_body_slot],
          header: [create_header_slot]
        },
        $$scope: {
          ctx: ctx
        }
      }
    });
    return {
      c: function c() {
        create_component(dialogcontent.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(dialogcontent, target, anchor);
        current = true;
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        var dialogcontent_changes = {};

        if (dirty &
        /*$$scope, name*/
        9) {
          dialogcontent_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        dialogcontent.$set(dialogcontent_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(dialogcontent.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(dialogcontent.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(dialogcontent, detaching);
      }
    };
  }

  function instance$3($$self, $$props, $$invalidate) {
    var close = getClose();
    var _$$props$name = $$props.name,
        name = _$$props$name === void 0 ? "" : _$$props$name;

    var click_handler = function click_handler() {
      return close('!');
    };

    $$self.$$set = function ($$props) {
      if ('name' in $$props) $$invalidate(0, name = $$props.name);
    };

    return [name, close, click_handler];
  }

  var MyComponent = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(MyComponent, _SvelteComponent);

    var _super = _createSuper$4(MyComponent);

    function MyComponent(options) {
      var _this;

      _classCallCheck(this, MyComponent);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$3, create_fragment$4, safe_not_equal, {
        name: 0
      });
      return _this;
    }

    return MyComponent;
  }(SvelteComponent);

  function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function create_fragment$3(ctx) {
    var label_1;
    var t0;
    var t1;
    var input;
    var mounted;
    var dispose;
    return {
      c: function c() {
        label_1 = element("label");
        t0 = text(
        /*label*/
        ctx[2]);
        t1 = space();
        input = element("input");
        attr(label_1, "for",
        /*id*/
        ctx[4]);
        attr(input, "placeholder",
        /*placeholder*/
        ctx[1]);
        attr(input, "id",
        /*id*/
        ctx[4]);
        attr(input, "name",
        /*name*/
        ctx[3]);
        attr(input, "type", "text");
      },
      m: function m(target, anchor) {
        insert(target, label_1, anchor);
        append(label_1, t0);
        insert(target, t1, anchor);
        insert(target, input, anchor);
        set_input_value(input,
        /*value*/
        ctx[0]);

        if (!mounted) {
          dispose = listen(input, "input",
          /*input_input_handler*/
          ctx[5]);
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*label*/
        4) set_data(t0,
        /*label*/
        ctx[2]);

        if (dirty &
        /*id*/
        16) {
          attr(label_1, "for",
          /*id*/
          ctx[4]);
        }

        if (dirty &
        /*placeholder*/
        2) {
          attr(input, "placeholder",
          /*placeholder*/
          ctx[1]);
        }

        if (dirty &
        /*id*/
        16) {
          attr(input, "id",
          /*id*/
          ctx[4]);
        }

        if (dirty &
        /*name*/
        8) {
          attr(input, "name",
          /*name*/
          ctx[3]);
        }

        if (dirty &
        /*value*/
        1 && input.value !==
        /*value*/
        ctx[0]) {
          set_input_value(input,
          /*value*/
          ctx[0]);
        }
      },
      i: noop,
      o: noop,
      d: function d(detaching) {
        if (detaching) detach(label_1);
        if (detaching) detach(t1);
        if (detaching) detach(input);
        mounted = false;
        dispose();
      }
    };
  }

  function instance$2($$self, $$props, $$invalidate) {
    var _$$props$value = $$props.value,
        value = _$$props$value === void 0 ? '' : _$$props$value;
    var placeholder = $$props.placeholder;
    var label = $$props.label;
    var name = $$props.name;
    var id = $$props.id;

    function input_input_handler() {
      value = this.value;
      $$invalidate(0, value);
    }

    $$self.$$set = function ($$props) {
      if ('value' in $$props) $$invalidate(0, value = $$props.value);
      if ('placeholder' in $$props) $$invalidate(1, placeholder = $$props.placeholder);
      if ('label' in $$props) $$invalidate(2, label = $$props.label);
      if ('name' in $$props) $$invalidate(3, name = $$props.name);
      if ('id' in $$props) $$invalidate(4, id = $$props.id);
    };

    return [value, placeholder, label, name, id, input_input_handler];
  }

  var MyInput = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(MyInput, _SvelteComponent);

    var _super = _createSuper$3(MyInput);

    function MyInput(options) {
      var _this;

      _classCallCheck(this, MyInput);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$2, create_fragment$3, safe_not_equal, {
        value: 0,
        placeholder: 1,
        label: 2,
        name: 3,
        id: 4
      });
      return _this;
    }

    return MyInput;
  }(SvelteComponent);

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function create_fragment$2(ctx) {
    var h2;
    var t1;
    var button0;
    var t3;
    var button1;
    var t5;
    var button2;
    var mounted;
    var dispose;
    return {
      c: function c() {
        h2 = element("h2");
        h2.textContent = "User component";
        t1 = space();
        button0 = element("button");
        button0.textContent = "component modal";
        t3 = space();
        button1 = element("button");
        button1.textContent = "component prompt";
        t5 = space();
        button2 = element("button");
        button2.textContent = "component array prompt";
      },
      m: function m(target, anchor) {
        insert(target, h2, anchor);
        insert(target, t1, anchor);
        insert(target, button0, anchor);
        insert(target, t3, anchor);
        insert(target, button1, anchor);
        insert(target, t5, anchor);
        insert(target, button2, anchor);

        if (!mounted) {
          dispose = [listen(button0, "click",
          /*click_handler*/
          ctx[1]), listen(button1, "click",
          /*click_handler_1*/
          ctx[2]), listen(button2, "click",
          /*click_handler_2*/
          ctx[3])];
          mounted = true;
        }
      },
      p: noop,
      i: noop,
      o: noop,
      d: function d(detaching) {
        if (detaching) detach(h2);
        if (detaching) detach(t1);
        if (detaching) detach(button0);
        if (detaching) detach(t3);
        if (detaching) detach(button1);
        if (detaching) detach(t5);
        if (detaching) detach(button2);
        mounted = false;
        run_all(dispose);
      }
    };
  }

  function instance$1($$self) {
    function printSubmit(submitArray) {
      if (submitArray) {
        var text = "<p>" + submitArray.join("</p><p>") + "</p>";
        dialogs.alert({
          title: "Your responses",
          text: text
        });
      }
    }

    var click_handler = function click_handler() {
      return dialogs.modal(MyComponent, {
        name: "world"
      }).then(dialogs.alert);
    };

    var click_handler_1 = function click_handler_1() {
      return dialogs.prompt({
        component: MyInput,
        props: {
          placeholder: "a placeholder",
          label: "my input",
          name: "my-input",
          id: "my-input-id"
        }
      }).then(printSubmit);
    };

    var click_handler_2 = function click_handler_2() {
      return dialogs.prompt([{
        component: MyInput,
        props: {
          placeholder: "a placeholder",
          label: "my input",
          name: "my-input",
          id: "my-input-id"
        }
      }, {
        component: MyInput,
        props: {
          placeholder: "another placeholder",
          label: "my other input",
          name: "my-other-input",
          id: "my-other-input-id"
        }
      }]).then(printSubmit);
    };

    return [printSubmit, click_handler, click_handler_1, click_handler_2];
  }

  var UserComponent = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(UserComponent, _SvelteComponent);

    var _super = _createSuper$2(UserComponent);

    function UserComponent(options) {
      var _this;

      _classCallCheck(this, UserComponent);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$1, create_fragment$2, safe_not_equal, {});
      return _this;
    }

    return UserComponent;
  }(SvelteComponent);

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function create_fragment$1(ctx) {
    var h2;
    var t1;
    var button0;
    var t3;
    var button1;
    var t5;
    var button2;
    var t7;
    var button3;
    var t9;
    var button4;
    var mounted;
    var dispose;
    return {
      c: function c() {
        h2 = element("h2");
        h2.textContent = "With options";
        t1 = space();
        button0 = element("button");
        button0.textContent = "modal";
        t3 = space();
        button1 = element("button");
        button1.textContent = "alert";
        t5 = space();
        button2 = element("button");
        button2.textContent = "confirm";
        t7 = space();
        button3 = element("button");
        button3.textContent = "prompt with one input and types";
        t9 = space();
        button4 = element("button");
        button4.textContent = "prompt with types and options";
      },
      m: function m(target, anchor) {
        insert(target, h2, anchor);
        insert(target, t1, anchor);
        insert(target, button0, anchor);
        insert(target, t3, anchor);
        insert(target, button1, anchor);
        insert(target, t5, anchor);
        insert(target, button2, anchor);
        insert(target, t7, anchor);
        insert(target, button3, anchor);
        insert(target, t9, anchor);
        insert(target, button4, anchor);

        if (!mounted) {
          dispose = [listen(button0, "click",
          /*click_handler*/
          ctx[1]), listen(button1, "click",
          /*click_handler_1*/
          ctx[2]), listen(button2, "click",
          /*click_handler_2*/
          ctx[3]), listen(button3, "click",
          /*click_handler_3*/
          ctx[4]), listen(button4, "click",
          /*click_handler_4*/
          ctx[5])];
          mounted = true;
        }
      },
      p: noop,
      i: noop,
      o: noop,
      d: function d(detaching) {
        if (detaching) detach(h2);
        if (detaching) detach(t1);
        if (detaching) detach(button0);
        if (detaching) detach(t3);
        if (detaching) detach(button1);
        if (detaching) detach(t5);
        if (detaching) detach(button2);
        if (detaching) detach(t7);
        if (detaching) detach(button3);
        if (detaching) detach(t9);
        if (detaching) detach(button4);
        mounted = false;
        run_all(dispose);
      }
    };
  }

  function instance($$self) {
    var opts = {
      title: "a title",
      text: "the text",
      titleClass: "my-title-class",
      closeButton: false,
      closeOnBg: true,
      transitions: {
        in: {
          transition: fade,
          props: {
            duration: 2000
          }
        }
      }
    };

    var click_handler = function click_handler() {
      return dialogs.modal(opts);
    };

    var click_handler_1 = function click_handler_1() {
      return dialogs.alert(_objectSpread(_objectSpread({}, opts), {}, {
        dismissButtonText: "whatever...."
      }));
    };

    var click_handler_2 = function click_handler_2() {
      return dialogs.confirm(_objectSpread(_objectSpread({}, opts), {}, {
        confirmButtonText: "aye",
        declineButtonText: "nay"
      }));
    };

    var click_handler_3 = function click_handler_3() {
      return dialogs.prompt({
        label: "password",
        type: "password"
      });
    };

    var click_handler_4 = function click_handler_4() {
      return dialogs.prompt([{
        label: "password",
        type: "password",
        required: true
      }, {
        label: "email",
        type: "email"
      }, {
        label: "checkbox",
        type: "checkbox"
      }, {
        label: "date",
        type: "date"
      }, {
        label: "textarea",
        type: "textarea"
      }, {
        label: "number",
        type: "number"
      }, {
        label: "color",
        type: "color"
      }, {
        label: "file",
        type: "file"
      }, {
        label: "range",
        type: "range"
      }], {
        title: "prompt with types and options"
      }).then(console.log);
    };

    return [opts, click_handler, click_handler_1, click_handler_2, click_handler_3, click_handler_4];
  }

  var WithOptions = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(WithOptions, _SvelteComponent);

    var _super = _createSuper$1(WithOptions);

    function WithOptions(options) {
      var _this;

      _classCallCheck(this, WithOptions);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance, create_fragment$1, safe_not_equal, {});
      return _this;
    }

    return WithOptions;
  }(SvelteComponent);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function create_fragment(ctx) {
    var h1;
    var t1;
    var basics;
    var t2;
    var withoptions;
    var t3;
    var usercomponent;
    var t4;
    var promisebased;
    var t5;
    var eventsbased;
    var current;
    basics = new Basics({});
    withoptions = new WithOptions({});
    usercomponent = new UserComponent({});
    promisebased = new PromiseBased({});
    eventsbased = new EventsBased({});
    return {
      c: function c() {
        h1 = element("h1");
        h1.textContent = "Svelte dialogs";
        t1 = space();
        create_component(basics.$$.fragment);
        t2 = space();
        create_component(withoptions.$$.fragment);
        t3 = space();
        create_component(usercomponent.$$.fragment);
        t4 = space();
        create_component(promisebased.$$.fragment);
        t5 = space();
        create_component(eventsbased.$$.fragment);
      },
      m: function m(target, anchor) {
        insert(target, h1, anchor);
        insert(target, t1, anchor);
        mount_component(basics, target, anchor);
        insert(target, t2, anchor);
        mount_component(withoptions, target, anchor);
        insert(target, t3, anchor);
        mount_component(usercomponent, target, anchor);
        insert(target, t4, anchor);
        mount_component(promisebased, target, anchor);
        insert(target, t5, anchor);
        mount_component(eventsbased, target, anchor);
        current = true;
      },
      p: noop,
      i: function i(local) {
        if (current) return;
        transition_in(basics.$$.fragment, local);
        transition_in(withoptions.$$.fragment, local);
        transition_in(usercomponent.$$.fragment, local);
        transition_in(promisebased.$$.fragment, local);
        transition_in(eventsbased.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(basics.$$.fragment, local);
        transition_out(withoptions.$$.fragment, local);
        transition_out(usercomponent.$$.fragment, local);
        transition_out(promisebased.$$.fragment, local);
        transition_out(eventsbased.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(h1);
        if (detaching) detach(t1);
        destroy_component(basics, detaching);
        if (detaching) detach(t2);
        destroy_component(withoptions, detaching);
        if (detaching) detach(t3);
        destroy_component(usercomponent, detaching);
        if (detaching) detach(t4);
        destroy_component(promisebased, detaching);
        if (detaching) detach(t5);
        destroy_component(eventsbased, detaching);
      }
    };
  }

  var App = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(App, _SvelteComponent);

    var _super = _createSuper(App);

    function App(options) {
      var _this;

      _classCallCheck(this, App);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, null, create_fragment, safe_not_equal, {});
      return _this;
    }

    return App;
  }(SvelteComponent);

  // dialogs.config({
  //   global: {
  //     overlayClass: "some-other-class",
  //     dialogClass: "some-other-class",
  //     closeButtonClass: "some-other-class",
  //     closeButtonText: "close me",
  //     headerClass: "some-other-class",
  //     titleClass: "some-other-class",
  //     bodyClass: "some-other-class",
  //     footerClass: "some-other-class",
  //   },
  // });

  var app = new App({
    target: document.body,
    props: {}
  });

  return app;

})();
//# sourceMappingURL=bundle.js.map
