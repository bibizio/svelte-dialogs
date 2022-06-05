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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

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
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof$1(obj);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
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

function _arrayLikeToArray$5(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray$5(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$5(arr, i) || _nonIterableRest();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$5(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$5(arr) || _nonIterableSpread();
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
  return a != a ? b == b : a !== b || a && _typeof$1(a) === 'object' || typeof a === 'function';
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

    if (_typeof$1(lets) === 'object') {
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

function null_to_empty(value) {
  return value == null ? '' : value;
}

function set_store_value(store, ret, value) {
  store.set(value);
  return ret;
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
  return style_element.sheet;
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

function stop_propagation(fn) {
  return function (event) {
    event.stopPropagation(); // @ts-ignore

    return fn.call(this, event);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
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

function set_style(node, key, value, important) {
  if (value === null) {
    node.style.removeProperty(key);
  } else {
    node.style.setProperty(key, value, important ? 'important' : '');
  }
}
// so we cache the result instead


var crossorigin;

function is_crossorigin() {
  if (crossorigin === undefined) {
    crossorigin = false;

    try {
      if (typeof window !== 'undefined' && window.parent) {
        void window.parent.document;
      }
    } catch (error) {
      crossorigin = true;
    }
  }

  return crossorigin;
}

function add_resize_listener(node, fn) {
  var computed_style = getComputedStyle(node);

  if (computed_style.position === 'static') {
    node.style.position = 'relative';
  }

  var iframe = element('iframe');
  iframe.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ' + 'overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;');
  iframe.setAttribute('aria-hidden', 'true');
  iframe.tabIndex = -1;
  var crossorigin = is_crossorigin();
  var unsubscribe;

  if (crossorigin) {
    iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
    unsubscribe = listen(window, 'message', function (event) {
      if (event.source === iframe.contentWindow) fn();
    });
  } else {
    iframe.src = 'about:blank';

    iframe.onload = function () {
      unsubscribe = listen(iframe.contentWindow, 'resize', fn);
    };
  }

  append(node, iframe);
  return function () {
    if (crossorigin) {
      unsubscribe();
    } else if (unsubscribe && iframe.contentWindow) {
      unsubscribe();
    }

    detach(iframe);
  };
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$bubbles = _ref.bubbles,
      bubbles = _ref$bubbles === void 0 ? false : _ref$bubbles,
      _ref$cancelable = _ref.cancelable,
      cancelable = _ref$cancelable === void 0 ? false : _ref$cancelable;

  var e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, bubbles, cancelable, detail);
  return e;
}
// https://github.com/sveltejs/svelte/issues/3624


var managed_styles = new Map();
var active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

function hash(str) {
  var hash = 5381;
  var i = str.length;

  while (i--) {
    hash = (hash << 5) - hash ^ str.charCodeAt(i);
  }

  return hash >>> 0;
}

function create_style_information(doc, node) {
  var info = {
    stylesheet: append_empty_stylesheet(node),
    rules: {}
  };
  managed_styles.set(doc, info);
  return info;
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

  var _ref2 = managed_styles.get(doc) || create_style_information(doc, node),
      stylesheet = _ref2.stylesheet,
      rules = _ref2.rules;

  if (!rules[name]) {
    rules[name] = true;
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
    managed_styles.forEach(function (info) {
      var stylesheet = info.stylesheet;
      var i = stylesheet.cssRules.length;

      while (i--) {
        stylesheet.deleteRule(i);
      }

      info.rules = {};
    });
    managed_styles.clear();
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

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function createEventDispatcher() {
  var component = get_current_component();
  return function (type, detail) {
    var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref3$cancelable = _ref3.cancelable,
        cancelable = _ref3$cancelable === void 0 ? false : _ref3$cancelable;

    var callbacks = component.$$.callbacks[type];

    if (callbacks) {
      // TODO are there situations where events could be dispatched
      // in a server (non-DOM) environment?
      var event = custom_event(type, detail, {
        cancelable: cancelable
      });
      callbacks.slice().forEach(function (fn) {
        fn.call(component, event);
      });
      return !event.defaultPrevented;
    }

    return true;
  };
}

function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
  return context;
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
} // flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.


var seen_callbacks = new Set();
var flushidx = 0; // Do *not* move this inside the flush() function

function flush() {
  var saved_component = current_component;

  do {
    // first, call beforeUpdate functions
    // and update components
    while (flushidx < dirty_components.length) {
      var component = dirty_components[flushidx];
      flushidx++;
      set_current_component(component);
      update(component.$$);
    }

    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;

    while (binding_callbacks.length) {
      binding_callbacks.pop()();
    } // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (var i = 0; i < render_callbacks.length; i += 1) {
      var callback = render_callbacks[i];

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
  seen_callbacks.clear();
  set_current_component(saved_component);
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
    var _ref4 = config || null_transition,
        _ref4$delay = _ref4.delay,
        delay = _ref4$delay === void 0 ? 0 : _ref4$delay,
        _ref4$duration = _ref4.duration,
        duration = _ref4$duration === void 0 ? 300 : _ref4$duration,
        _ref4$easing = _ref4.easing,
        easing = _ref4$easing === void 0 ? identity : _ref4$easing,
        _ref4$tick = _ref4.tick,
        tick = _ref4$tick === void 0 ? noop : _ref4$tick,
        css = _ref4.css;

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
    var _ref5 = config || null_transition,
        _ref5$delay = _ref5.delay,
        delay = _ref5$delay === void 0 ? 0 : _ref5$delay,
        _ref5$duration = _ref5.duration,
        duration = _ref5$duration === void 0 ? 300 : _ref5$duration,
        _ref5$easing = _ref5.easing,
        easing = _ref5$easing === void 0 ? identity : _ref5$easing,
        _ref5$tick = _ref5.tick,
        tick = _ref5$tick === void 0 ? noop : _ref5$tick,
        css = _ref5.css;

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

var regeneratorRuntime$1 = {exports: {}};

var _typeof = {exports: {}};

(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
}(_typeof));

(function (module) {
var _typeof$1 = _typeof.exports["default"];

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

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

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof$1(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
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

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
}(regeneratorRuntime$1));

// TODO(Babel 8): Remove this file.

var runtime = regeneratorRuntime$1.exports();
var regenerator = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

function _createForOfIteratorHelper$4(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }

function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
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

        var _iterator = _createForOfIteratorHelper$4(subscribers),
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

function clamp(num, min, max) {
  return num < min ? min : num > max ? max : num;
}

function _createSuper$p(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$p(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$p() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var get_b_slot_changes = function get_b_slot_changes(dirty) {
  return {};
};

var get_b_slot_context = function get_b_slot_context(ctx) {
  return {};
};

var get_a_slot_changes = function get_a_slot_changes(dirty) {
  return {};
};

var get_a_slot_context = function get_a_slot_context(ctx) {
  return {};
}; // (200:1) {#if !fixed}


function create_if_block_1$9(ctx) {
  var div;
  var div_class_value;
  var div_style_value;
  var mounted;
  var dispose;
  return {
    c: function c() {
      div = element("div");
      attr(div, "class", div_class_value = "" + (
      /*type*/
      ctx[1] + " divider" + " svelte-1k0d9r4"));
      attr(div, "style", div_style_value = "" + (
      /*side*/
      ctx[8] + ": calc(" +
      /*pos*/
      ctx[0] + "% - 8px)"));
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);

      if (!mounted) {
        dispose = [action_destroyer(/*drag*/
        ctx[11].call(null, div,
        /*setPos*/
        ctx[9])), action_destroyer(/*touchDrag*/
        ctx[12].call(null, div,
        /*setTouchPos*/
        ctx[10]))];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*type*/
      2 && div_class_value !== (div_class_value = "" + (
      /*type*/
      ctx[1] + " divider" + " svelte-1k0d9r4"))) {
        attr(div, "class", div_class_value);
      }

      if (dirty &
      /*side, pos*/
      257 && div_style_value !== (div_style_value = "" + (
      /*side*/
      ctx[8] + ": calc(" +
      /*pos*/
      ctx[0] + "% - 8px)"))) {
        attr(div, "style", div_style_value);
      }
    },
    d: function d(detaching) {
      if (detaching) detach(div);
      mounted = false;
      run_all(dispose);
    }
  };
} // (205:0) {#if dragging}


function create_if_block$c(ctx) {
  var div;
  return {
    c: function c() {
      div = element("div");
      attr(div, "class", "mousecatcher svelte-1k0d9r4");
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
    },
    d: function d(detaching) {
      if (detaching) detach(div);
    }
  };
}

function create_fragment$p(ctx) {
  var div2;
  var div0;
  var div0_style_value;
  var t0;
  var div1;
  var div1_style_value;
  var t1;
  var div2_resize_listener;
  var t2;
  var if_block1_anchor;
  var current;
  var a_slot_template =
  /*#slots*/
  ctx[18].a;
  var a_slot = create_slot(a_slot_template, ctx,
  /*$$scope*/
  ctx[17], get_a_slot_context);
  var b_slot_template =
  /*#slots*/
  ctx[18].b;
  var b_slot = create_slot(b_slot_template, ctx,
  /*$$scope*/
  ctx[17], get_b_slot_context);
  var if_block0 = !
  /*fixed*/
  ctx[2] && create_if_block_1$9(ctx);
  var if_block1 =
  /*dragging*/
  ctx[6] && create_if_block$c();
  return {
    c: function c() {
      div2 = element("div");
      div0 = element("div");
      if (a_slot) a_slot.c();
      t0 = space();
      div1 = element("div");
      if (b_slot) b_slot.c();
      t1 = space();
      if (if_block0) if_block0.c();
      t2 = space();
      if (if_block1) if_block1.c();
      if_block1_anchor = empty();
      attr(div0, "class", "pane svelte-1k0d9r4");
      attr(div0, "style", div0_style_value = "" + (
      /*dimension*/
      ctx[7] + ": " +
      /*pos*/
      ctx[0] + "%;"));
      attr(div1, "class", "pane svelte-1k0d9r4");
      attr(div1, "style", div1_style_value = "" + (
      /*dimension*/
      ctx[7] + ": " + (100 -
      /*pos*/
      ctx[0]) + "%;"));
      attr(div2, "class", "container svelte-1k0d9r4");
      add_render_callback(function () {
        return (
          /*div2_elementresize_handler*/
          ctx[20].call(div2)
        );
      });
    },
    m: function m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, div0);

      if (a_slot) {
        a_slot.m(div0, null);
      }

      append(div2, t0);
      append(div2, div1);

      if (b_slot) {
        b_slot.m(div1, null);
      }

      append(div2, t1);
      if (if_block0) if_block0.m(div2, null);
      /*div2_binding*/

      ctx[19](div2);
      div2_resize_listener = add_resize_listener(div2,
      /*div2_elementresize_handler*/
      ctx[20].bind(div2));
      insert(target, t2, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert(target, if_block1_anchor, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (a_slot) {
        if (a_slot.p && (!current || dirty &
        /*$$scope*/
        131072)) {
          update_slot_base(a_slot, a_slot_template, ctx,
          /*$$scope*/
          ctx[17], !current ? get_all_dirty_from_scope(
          /*$$scope*/
          ctx[17]) : get_slot_changes(a_slot_template,
          /*$$scope*/
          ctx[17], dirty, get_a_slot_changes), get_a_slot_context);
        }
      }

      if (!current || dirty &
      /*dimension, pos*/
      129 && div0_style_value !== (div0_style_value = "" + (
      /*dimension*/
      ctx[7] + ": " +
      /*pos*/
      ctx[0] + "%;"))) {
        attr(div0, "style", div0_style_value);
      }

      if (b_slot) {
        if (b_slot.p && (!current || dirty &
        /*$$scope*/
        131072)) {
          update_slot_base(b_slot, b_slot_template, ctx,
          /*$$scope*/
          ctx[17], !current ? get_all_dirty_from_scope(
          /*$$scope*/
          ctx[17]) : get_slot_changes(b_slot_template,
          /*$$scope*/
          ctx[17], dirty, get_b_slot_changes), get_b_slot_context);
        }
      }

      if (!current || dirty &
      /*dimension, pos*/
      129 && div1_style_value !== (div1_style_value = "" + (
      /*dimension*/
      ctx[7] + ": " + (100 -
      /*pos*/
      ctx[0]) + "%;"))) {
        attr(div1, "style", div1_style_value);
      }

      if (!
      /*fixed*/
      ctx[2]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_1$9(ctx);
          if_block0.c();
          if_block0.m(div2, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (
      /*dragging*/
      ctx[6]) {
        if (if_block1) ; else {
          if_block1 = create_if_block$c();
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(a_slot, local);
      transition_in(b_slot, local);
      current = true;
    },
    o: function o(local) {
      transition_out(a_slot, local);
      transition_out(b_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(div2);
      if (a_slot) a_slot.d(detaching);
      if (b_slot) b_slot.d(detaching);
      if (if_block0) if_block0.d();
      /*div2_binding*/

      ctx[19](null);
      div2_resize_listener();
      if (detaching) detach(t2);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach(if_block1_anchor);
    }
  };
}

function instance$p($$self, $$props, $$invalidate) {
  var size;
  var side;
  var dimension;
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  var dispatch = createEventDispatcher();
  var type = $$props.type;
  var _$$props$pos = $$props.pos,
      pos = _$$props$pos === void 0 ? 50 : _$$props$pos;
  var _$$props$fixed = $$props.fixed,
      fixed = _$$props$fixed === void 0 ? false : _$$props$fixed;
  var _$$props$buffer = $$props.buffer,
      buffer = _$$props$buffer === void 0 ? 42 : _$$props$buffer;
  var min = $$props.min;
  var max = $$props.max;
  var w;
  var h;
  var refs = {};
  var dragging = false;

  function setPos(event) {
    var _refs$container$getBo = refs.container.getBoundingClientRect(),
        top = _refs$container$getBo.top,
        left = _refs$container$getBo.left;

    var px = type === 'vertical' ? event.clientY - top : event.clientX - left;
    $$invalidate(0, pos = 100 * px / size);
    dispatch('change');
  }

  function setTouchPos(event) {
    var _refs$container$getBo2 = refs.container.getBoundingClientRect(),
        top = _refs$container$getBo2.top,
        left = _refs$container$getBo2.left;

    var px = type === 'vertical' ? event.touches[0].clientY - top : event.touches[0].clientX - left;
    $$invalidate(0, pos = 100 * px / size);
    dispatch('change');
  }

  function drag(node, callback) {
    var mousedown = function mousedown(event) {
      if (event.which !== 1) return;
      event.preventDefault();
      $$invalidate(6, dragging = true);

      var onmouseup = function onmouseup() {
        $$invalidate(6, dragging = false);
        window.removeEventListener('mousemove', callback, false);
        window.removeEventListener('mouseup', onmouseup, false);
      };

      window.addEventListener('mousemove', callback, false);
      window.addEventListener('mouseup', onmouseup, false);
    };

    node.addEventListener('mousedown', mousedown, false);
    return {
      destroy: function destroy() {
        node.removeEventListener('mousedown', mousedown, false);
      }
    };
  }

  function touchDrag(node, callback) {
    var touchdown = function touchdown(event) {
      if (event.targetTouches.length > 1) return;
      event.preventDefault();
      $$invalidate(6, dragging = true);

      var ontouchend = function ontouchend() {
        $$invalidate(6, dragging = false);
        window.removeEventListener('touchmove', callback, false);
        window.removeEventListener('touchend', ontouchend, false);
      };

      window.addEventListener('touchmove', callback, false);
      window.addEventListener('touchend', ontouchend, false);
    };

    node.addEventListener('touchstart', touchdown, false);
    return {
      destroy: function destroy() {
        node.removeEventListener('touchstart', touchdown, false);
      }
    };
  }

  function div2_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      refs.container = $$value;
      $$invalidate(5, refs);
    });
  }

  function div2_elementresize_handler() {
    w = this.clientWidth;
    h = this.clientHeight;
    $$invalidate(3, w);
    $$invalidate(4, h);
  }

  $$self.$$set = function ($$props) {
    if ('type' in $$props) $$invalidate(1, type = $$props.type);
    if ('pos' in $$props) $$invalidate(0, pos = $$props.pos);
    if ('fixed' in $$props) $$invalidate(2, fixed = $$props.fixed);
    if ('buffer' in $$props) $$invalidate(15, buffer = $$props.buffer);
    if ('min' in $$props) $$invalidate(13, min = $$props.min);
    if ('max' in $$props) $$invalidate(14, max = $$props.max);
    if ('$$scope' in $$props) $$invalidate(17, $$scope = $$props.$$scope);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*type, h, w*/
    26) {
      $$invalidate(16, size = type === 'vertical' ? h : w);
    }

    if ($$self.$$.dirty &
    /*buffer, size*/
    98304) {
      $$invalidate(13, min = 100 * (buffer / size));
    }

    if ($$self.$$.dirty &
    /*min*/
    8192) {
      $$invalidate(14, max = 100 - min);
    }

    if ($$self.$$.dirty &
    /*pos, min, max*/
    24577) {
      $$invalidate(0, pos = clamp(pos, min, max));
    }

    if ($$self.$$.dirty &
    /*type*/
    2) {
      $$invalidate(8, side = type === 'horizontal' ? 'left' : 'top');
    }

    if ($$self.$$.dirty &
    /*type*/
    2) {
      $$invalidate(7, dimension = type === 'horizontal' ? 'width' : 'height');
    }
  };

  return [pos, type, fixed, w, h, refs, dragging, dimension, side, setPos, setTouchPos, drag, touchDrag, min, max, buffer, size, $$scope, slots, div2_binding, div2_elementresize_handler];
}

var SplitPane = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(SplitPane, _SvelteComponent);

  var _super = _createSuper$p(SplitPane);

  function SplitPane(options) {
    var _this;

    _classCallCheck(this, SplitPane);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$p, create_fragment$p, safe_not_equal, {
      type: 1,
      pos: 0,
      fixed: 2,
      buffer: 15,
      min: 13,
      max: 14
    });
    return _this;
  }

  return _createClass(SplitPane);
}(SvelteComponent);

function _createSuper$o(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$o(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$o() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function get_each_context$7(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[27] = list[i];
  child_ctx[29] = i;
  return child_ctx;
} // (275:1) {#if $components.length}


function create_if_block$b(ctx) {
  var div;
  var t;
  var button;
  var mounted;
  var dispose;
  var each_value =
  /*$components*/
  ctx[3];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$7(get_each_context$7(ctx, each_value, i));
  }

  return {
    c: function c() {
      div = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t = space();
      button = element("button");
      button.innerHTML = "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" class=\"svelte-cghqrp\"><line stroke=\"#999\" x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line stroke=\"#999\" x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg>";
      attr(button, "class", "add-new svelte-cghqrp");
      attr(button, "title", "add new component");
      attr(div, "class", "file-tabs svelte-cghqrp");
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(div, null);
      }

      append(div, t);
      append(div, button);

      if (!mounted) {
        dispose = [listen(button, "click",
        /*addNew*/
        ctx[10]), listen(div, "dblclick",
        /*addNew*/
        ctx[10])];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*$components, editing, $selected, over, selectComponent, dragStart, dragOver, dragLeave, dragEnd, isComponentNameUsed, selectInput, closeEdit, remove, editTab*/
      64478) {
        each_value =
        /*$components*/
        ctx[3];

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context$7(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block$7(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(div, t);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    d: function d(detaching) {
      if (detaching) detach(div);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
} // (312:6) {:else}


function create_else_block$6(ctx) {
  var div;
  var t0_value =
  /*component*/
  ctx[27].name + "";
  var t0;
  var t1;
  var t2_value =
  /*component*/
  ctx[27].type + "";
  var t2;
  var t3;
  var span;
  var mounted;
  var dispose;
  var if_block =
  /*component*/
  ctx[27].modified && create_if_block_4$2();

  function click_handler() {
    return (
      /*click_handler*/
      ctx[19](
      /*component*/
      ctx[27])
    );
  }

  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[20](
      /*component*/
      ctx[27])
    );
  }

  return {
    c: function c() {
      div = element("div");
      t0 = text(t0_value);
      t1 = text(".");
      t2 = text(t2_value);
      if (if_block) if_block.c();
      t3 = space();
      span = element("span");
      span.innerHTML = "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" class=\"svelte-cghqrp\"><line stroke=\"#999\" x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line stroke=\"#999\" x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line></svg>";
      attr(div, "class", "editable svelte-cghqrp");
      attr(div, "title", "edit component name");
      attr(span, "class", "remove svelte-cghqrp");
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      append(div, t0);
      append(div, t1);
      append(div, t2);
      if (if_block) if_block.m(div, null);
      insert(target, t3, anchor);
      insert(target, span, anchor);

      if (!mounted) {
        dispose = [listen(div, "click", click_handler), listen(span, "click", click_handler_1)];
        mounted = true;
      }
    },
    p: function p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty &
      /*$components*/
      8 && t0_value !== (t0_value =
      /*component*/
      ctx[27].name + "")) set_data(t0, t0_value);
      if (dirty &
      /*$components*/
      8 && t2_value !== (t2_value =
      /*component*/
      ctx[27].type + "")) set_data(t2, t2_value);

      if (
      /*component*/
      ctx[27].modified) {
        if (if_block) ; else {
          if_block = create_if_block_4$2();
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d: function d(detaching) {
      if (detaching) detach(div);
      if (if_block) if_block.d();
      if (detaching) detach(t3);
      if (detaching) detach(span);
      mounted = false;
      run_all(dispose);
    }
  };
} // (299:6) {#if component === editing}


function create_if_block_3$3(ctx) {
  var span;
  var t0_value =
  /*editing*/
  ctx[1].name + (/\./.test(
  /*editing*/
  ctx[1].name) ? '' : ".".concat(
  /*editing*/
  ctx[1].type)) + "";
  var t0;
  var t1;
  var input;
  var mounted;
  var dispose;
  return {
    c: function c() {
      span = element("span");
      t0 = text(t0_value);
      t1 = space();
      input = element("input");
      attr(span, "class", "input-sizer svelte-cghqrp");
      input.autofocus = true;
      attr(input, "spellcheck", false);
      attr(input, "class", "svelte-cghqrp");
      toggle_class(input, "duplicate",
      /*isComponentNameUsed*/
      ctx[11](
      /*editing*/
      ctx[1]));
    },
    m: function m(target, anchor) {
      insert(target, span, anchor);
      append(span, t0);
      insert(target, t1, anchor);
      insert(target, input, anchor);
      set_input_value(input,
      /*editing*/
      ctx[1].name);
      input.focus();

      if (!mounted) {
        dispose = [listen(input, "input",
        /*input_input_handler*/
        ctx[17]), listen(input, "focus", selectInput), listen(input, "blur",
        /*closeEdit*/
        ctx[8]), listen(input, "keydown",
        /*keydown_handler*/
        ctx[18])];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*editing*/
      2 && t0_value !== (t0_value =
      /*editing*/
      ctx[1].name + (/\./.test(
      /*editing*/
      ctx[1].name) ? '' : ".".concat(
      /*editing*/
      ctx[1].type)) + "")) set_data(t0, t0_value);

      if (dirty &
      /*editing*/
      2 && input.value !==
      /*editing*/
      ctx[1].name) {
        set_input_value(input,
        /*editing*/
        ctx[1].name);
      }

      if (dirty &
      /*isComponentNameUsed, editing*/
      2050) {
        toggle_class(input, "duplicate",
        /*isComponentNameUsed*/
        ctx[11](
        /*editing*/
        ctx[1]));
      }
    },
    d: function d(detaching) {
      if (detaching) detach(span);
      if (detaching) detach(t1);
      if (detaching) detach(input);
      mounted = false;
      run_all(dispose);
    }
  };
} // (294:5) {#if component.name === 'App' && component !== editing}


function create_if_block_1$8(ctx) {
  var div;
  var t;
  var if_block =
  /*component*/
  ctx[27].modified && create_if_block_2$7();
  return {
    c: function c() {
      div = element("div");
      t = text("App.svelte");
      if (if_block) if_block.c();
      attr(div, "class", "uneditable svelte-cghqrp");
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
      if (if_block) if_block.m(div, null);
    },
    p: function p(ctx, dirty) {
      if (
      /*component*/
      ctx[27].modified) {
        if (if_block) ; else {
          if_block = create_if_block_2$7();
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d: function d(detaching) {
      if (detaching) detach(div);
      if (if_block) if_block.d();
    }
  };
} // (318:41) {#if component.modified}


function create_if_block_4$2(ctx) {
  var t;
  return {
    c: function c() {
      t = text("*");
    },
    m: function m(target, anchor) {
      insert(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) detach(t);
    }
  };
} // (296:17) {#if component.modified}


function create_if_block_2$7(ctx) {
  var t;
  return {
    c: function c() {
      t = text("*");
    },
    m: function m(target, anchor) {
      insert(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) detach(t);
    }
  };
} // (277:3) {#each $components as component, index}


function create_each_block$7(ctx) {
  var div;
  var i;
  var t;
  var div_id_value;
  var div_draggable_value;
  var mounted;
  var dispose;

  function select_block_type(ctx, dirty) {
    if (
    /*component*/
    ctx[27].name === 'App' &&
    /*component*/
    ctx[27] !==
    /*editing*/
    ctx[1]) return create_if_block_1$8;
    if (
    /*component*/
    ctx[27] ===
    /*editing*/
    ctx[1]) return create_if_block_3$3;
    return create_else_block$6;
  }

  var current_block_type = select_block_type(ctx);
  var if_block = current_block_type(ctx);

  function click_handler_2() {
    return (
      /*click_handler_2*/
      ctx[21](
      /*component*/
      ctx[27])
    );
  }

  return {
    c: function c() {
      div = element("div");
      i = element("i");
      t = space();
      if_block.c();
      attr(i, "class", "drag-handle svelte-cghqrp");
      attr(div, "id", div_id_value =
      /*component*/
      ctx[27].name);
      attr(div, "class", "button svelte-cghqrp");
      attr(div, "role", "button");
      attr(div, "draggable", div_draggable_value =
      /*component*/
      ctx[27] !==
      /*editing*/
      ctx[1]);
      toggle_class(div, "active",
      /*component*/
      ctx[27] ===
      /*$selected*/
      ctx[4]);
      toggle_class(div, "draggable",
      /*component*/
      ctx[27] !==
      /*editing*/
      ctx[1] &&
      /*index*/
      ctx[29] !== 0);
      toggle_class(div, "drag-over",
      /*over*/
      ctx[2] ===
      /*component*/
      ctx[27].name);
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      append(div, i);
      append(div, t);
      if_block.m(div, null);

      if (!mounted) {
        dispose = [listen(div, "click", click_handler_2), listen(div, "dblclick", dblclick_handler), listen(div, "dragstart",
        /*dragStart*/
        ctx[12]), listen(div, "dragover",
        /*dragOver*/
        ctx[14]), listen(div, "dragleave",
        /*dragLeave*/
        ctx[13]), listen(div, "drop",
        /*dragEnd*/
        ctx[15])];
        mounted = true;
      }
    },
    p: function p(new_ctx, dirty) {
      ctx = new_ctx;

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
      /*$components*/
      8 && div_id_value !== (div_id_value =
      /*component*/
      ctx[27].name)) {
        attr(div, "id", div_id_value);
      }

      if (dirty &
      /*$components, editing*/
      10 && div_draggable_value !== (div_draggable_value =
      /*component*/
      ctx[27] !==
      /*editing*/
      ctx[1])) {
        attr(div, "draggable", div_draggable_value);
      }

      if (dirty &
      /*$components, $selected*/
      24) {
        toggle_class(div, "active",
        /*component*/
        ctx[27] ===
        /*$selected*/
        ctx[4]);
      }

      if (dirty &
      /*$components, editing*/
      10) {
        toggle_class(div, "draggable",
        /*component*/
        ctx[27] !==
        /*editing*/
        ctx[1] &&
        /*index*/
        ctx[29] !== 0);
      }

      if (dirty &
      /*over, $components*/
      12) {
        toggle_class(div, "drag-over",
        /*over*/
        ctx[2] ===
        /*component*/
        ctx[27].name);
      }
    },
    d: function d(detaching) {
      if (detaching) detach(div);
      if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}

function create_fragment$o(ctx) {
  var div;
  var if_block =
  /*$components*/
  ctx[3].length && create_if_block$b(ctx);
  return {
    c: function c() {
      div = element("div");
      if (if_block) if_block.c();
      attr(div, "class", "component-selector svelte-cghqrp");
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      if (if_block) if_block.m(div, null);
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*$components*/
      ctx[3].length) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$b(ctx);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(div);
      if (if_block) if_block.d();
    }
  };
}

function selectInput(event) {
  setTimeout(function () {
    event.target.select();
  });
}

var dblclick_handler = function dblclick_handler(e) {
  return e.stopPropagation();
};

function instance$o($$self, $$props, $$invalidate) {
  var $components,
      $$unsubscribe_components = noop,
      $$subscribe_components = function $$subscribe_components() {
    return $$unsubscribe_components(), $$unsubscribe_components = subscribe(components, function ($$value) {
      return $$invalidate(3, $components = $$value);
    }), components;
  };

  var $selected;
  $$self.$$.on_destroy.push(function () {
    return $$unsubscribe_components();
  });
  var handle_select = $$props.handle_select;

  var _getContext = getContext('REPL'),
      components = _getContext.components,
      selected = _getContext.selected,
      request_focus = _getContext.request_focus,
      rebundle = _getContext.rebundle;

  $$subscribe_components();
  component_subscribe($$self, selected, function (value) {
    return $$invalidate(4, $selected = value);
  });
  var dispatch = createEventDispatcher();
  var editing = null;

  function selectComponent(component) {
    if ($selected !== component) {
      $$invalidate(1, editing = null);
      handle_select(component);
    }
  }

  function editTab(component) {
    if ($selected === component) {
      $$invalidate(1, editing = $selected);
    }
  }

  function closeEdit() {
    var match = /(.+)\.(svelte|js|json|md)$/.exec($selected.name);
    set_store_value(selected, $selected.name = match ? match[1] : $selected.name, $selected);

    if (isComponentNameUsed($selected)) {
      var i = 1;
      var name = $selected.name;

      do {
        set_store_value(selected, $selected.name = "".concat(name, "_").concat(i++), $selected);
      } while (isComponentNameUsed($selected));
    }

    if (match && match[2]) set_store_value(selected, $selected.type = match[2], $selected);
    $$invalidate(1, editing = null); // re-select, in case the type changed

    handle_select($selected);
    $$subscribe_components($$invalidate(0, components)); // TODO necessary?
    // focus the editor, but wait a beat (so key events aren't misdirected)

    setTimeout(request_focus);
    rebundle();
  }

  function remove(component) {
    var result = confirm("Are you sure you want to delete ".concat(component.name, ".").concat(component.type, "?"));

    if (result) {
      var index = $components.indexOf(component);

      if (~index) {
        components.set($components.slice(0, index).concat($components.slice(index + 1)));
        dispatch('remove', {
          components: $components
        });
      } else {
        console.error("Could not find component! That's... odd");
      }

      handle_select($components[index] || $components[$components.length - 1]);
    }
  }

  var uid = 1;

  function addNew() {
    var component = {
      name: uid++ ? "Component".concat(uid) : 'Component1',
      type: 'svelte',
      source: '',
      modified: true
    };
    $$invalidate(1, editing = component);
    setTimeout(function () {
      // TODO we can do this without IDs
      document.getElementById(component.name).scrollIntoView(false);
    });
    components.update(function (components) {
      return components.concat(component);
    });
    handle_select(component);
    dispatch('add', {
      components: $components
    });
  }

  function isComponentNameUsed(editing) {
    return $components.find(function (component) {
      return component !== editing && component.name === editing.name;
    });
  } // drag and drop


  var from = null;
  var over = null;

  function dragStart(event) {
    from = event.currentTarget.id;
  }

  function dragLeave() {
    $$invalidate(2, over = null);
  }

  function dragOver(event) {
    event.preventDefault();
    $$invalidate(2, over = event.currentTarget.id);
  }

  function dragEnd(event) {
    event.preventDefault();

    if (from && over) {
      var from_index = $components.findIndex(function (component) {
        return component.name === from;
      });
      var to_index = $components.findIndex(function (component) {
        return component.name === over;
      });
      var from_component = $components[from_index];
      $components.splice(from_index, 1);
      components.set($components.slice(0, to_index).concat(from_component).concat($components.slice(to_index)));
    }

    from = $$invalidate(2, over = null);
  }

  function input_input_handler() {
    editing.name = this.value;
    $$invalidate(1, editing);
  }

  var keydown_handler = function keydown_handler(e) {
    return e.which === 13 && !isComponentNameUsed(editing) && e.target.blur();
  };

  var click_handler = function click_handler(component) {
    return editTab(component);
  };

  var click_handler_1 = function click_handler_1(component) {
    return remove(component);
  };

  var click_handler_2 = function click_handler_2(component) {
    return selectComponent(component);
  };

  $$self.$$set = function ($$props) {
    if ('handle_select' in $$props) $$invalidate(16, handle_select = $$props.handle_select);
  };

  return [components, editing, over, $components, $selected, selected, selectComponent, editTab, closeEdit, remove, addNew, isComponentNameUsed, dragStart, dragLeave, dragOver, dragEnd, handle_select, input_input_handler, keydown_handler, click_handler, click_handler_1, click_handler_2];
}

var ComponentSelector = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(ComponentSelector, _SvelteComponent);

  var _super = _createSuper$o(ComponentSelector);

  function ComponentSelector(options) {
    var _this;

    _classCallCheck(this, ComponentSelector);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$o, create_fragment$o, safe_not_equal, {
      handle_select: 16
    });
    return _this;
  }

  return _createClass(ComponentSelector);
}(SvelteComponent);

function cubicOut(t) {
  var f = t - 1.0;
  return f * f * f + 1.0;
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

function _createSuper$n(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$n(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$n() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_else_block$5(ctx) {
  var current;
  var default_slot_template =
  /*#slots*/
  ctx[7].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[6], null);
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
        64)) {
          update_slot_base(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[6], !current ? get_all_dirty_from_scope(
          /*$$scope*/
          ctx[6]) : get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[6], dirty, null), null);
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
} // (83:1) {#if details}


function create_if_block$a(ctx) {
  var _p;

  var t_value =
  /*message*/
  ctx[4](
  /*details*/
  ctx[1]) + "";
  var t;
  var mounted;
  var dispose;
  return {
    c: function c() {
      _p = element("p");
      t = text(t_value);
      attr(_p, "class", "svelte-9488n4");
      toggle_class(_p, "navigable",
      /*details*/
      ctx[1].filename);
    },
    m: function m(target, anchor) {
      insert(target, _p, anchor);
      append(_p, t);

      if (!mounted) {
        dispose = listen(_p, "click",
        /*click_handler*/
        ctx[8]);
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*details*/
      2 && t_value !== (t_value =
      /*message*/
      ctx[4](
      /*details*/
      ctx[1]) + "")) set_data(t, t_value);

      if (dirty &
      /*details*/
      2) {
        toggle_class(_p, "navigable",
        /*details*/
        ctx[1].filename);
      }
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(_p);
      mounted = false;
      dispose();
    }
  };
}

function create_fragment$n(ctx) {
  var div;
  var current_block_type_index;
  var if_block;
  var div_class_value;
  var div_intro;
  var div_outro;
  var current;
  var if_block_creators = [create_if_block$a, create_else_block$5];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*details*/
    ctx[1]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c: function c() {
      div = element("div");
      if_block.c();
      attr(div, "class", div_class_value = "message " +
      /*kind*/
      ctx[0] + " svelte-9488n4");
      toggle_class(div, "truncate",
      /*truncate*/
      ctx[2]);
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

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
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }

        transition_in(if_block, 1);
        if_block.m(div, null);
      }

      if (!current || dirty &
      /*kind*/
      1 && div_class_value !== (div_class_value = "message " +
      /*kind*/
      ctx[0] + " svelte-9488n4")) {
        attr(div, "class", div_class_value);
      }

      if (dirty &
      /*kind, truncate*/
      5) {
        toggle_class(div, "truncate",
        /*truncate*/
        ctx[2]);
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(if_block);
      add_render_callback(function () {
        if (div_outro) div_outro.end(1);
        div_intro = create_in_transition(div, slide, {
          delay: 150,
          duration: 100
        });
        div_intro.start();
      });
      current = true;
    },
    o: function o(local) {
      transition_out(if_block);
      if (div_intro) div_intro.invalidate();
      div_outro = create_out_transition(div, slide, {
        duration: 100
      });
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(div);
      if_blocks[current_block_type_index].d();
      if (detaching && div_outro) div_outro.end();
    }
  };
}

function instance$n($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;

  var _getContext = getContext('REPL'),
      navigate = _getContext.navigate;

  var kind = $$props.kind;
  var _$$props$details = $$props.details,
      details = _$$props$details === void 0 ? null : _$$props$details;
  var _$$props$filename = $$props.filename,
      filename = _$$props$filename === void 0 ? null : _$$props$filename;
  var truncate = $$props.truncate;

  function message(details) {
    var str = details.message || '[missing message]';
    var loc = [];

    if (details.filename && details.filename !== filename) {
      loc.push(details.filename);
    }

    if (details.start) loc.push(details.start.line, details.start.column);
    return str + (loc.length ? " (".concat(loc.join(':'), ")") : "");
  }

  var click_handler = function click_handler() {
    return navigate(details);
  };

  $$self.$$set = function ($$props) {
    if ('kind' in $$props) $$invalidate(0, kind = $$props.kind);
    if ('details' in $$props) $$invalidate(1, details = $$props.details);
    if ('filename' in $$props) $$invalidate(5, filename = $$props.filename);
    if ('truncate' in $$props) $$invalidate(2, truncate = $$props.truncate);
    if ('$$scope' in $$props) $$invalidate(6, $$scope = $$props.$$scope);
  };

  return [kind, details, truncate, navigate, message, filename, $$scope, slots, click_handler];
}

var Message = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Message, _SvelteComponent);

  var _super = _createSuper$n(Message);

  function Message(options) {
    var _this;

    _classCallCheck(this, Message);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$n, create_fragment$n, safe_not_equal, {
      kind: 0,
      details: 1,
      filename: 5,
      truncate: 2
    });
    return _this;
  }

  return _createClass(Message);
}(SvelteComponent);

function _createSuper$m(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$m(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$m() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_if_block$9(ctx) {
  var pre;
  var t0;
  var t1;
  var div;
  var message;
  var current;
  message = new Message({
    props: {
      kind: "info",
      $$slots: {
        default: [create_default_slot$1]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      pre = element("pre");
      t0 = text(
      /*code*/
      ctx[3]);
      t1 = space();
      div = element("div");
      create_component(message.$$.fragment);
      set_style(pre, "position", "absolute");
      set_style(pre, "left", "0");
      set_style(pre, "top", "0");
      attr(pre, "class", "svelte-s9cc8a");
      set_style(div, "position", "absolute");
      set_style(div, "width", "100%");
      set_style(div, "bottom", "0");
    },
    m: function m(target, anchor) {
      insert(target, pre, anchor);
      append(pre, t0);
      insert(target, t1, anchor);
      insert(target, div, anchor);
      mount_component(message, div, null);
      current = true;
    },
    p: function p(ctx, dirty) {
      if (!current || dirty &
      /*code*/
      8) set_data(t0,
      /*code*/
      ctx[3]);
      var message_changes = {};

      if (dirty &
      /*$$scope*/
      1073741824) {
        message_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      message.$set(message_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(message.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(message.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(pre);
      if (detaching) detach(t1);
      if (detaching) detach(div);
      destroy_component(message);
    }
  };
} // (287:3) <Message kind='info'>


function create_default_slot$1(ctx) {
  var t;
  return {
    c: function c() {
      t = text("loading editor...");
    },
    m: function m(target, anchor) {
      insert(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) detach(t);
    }
  };
}

function create_fragment$m(ctx) {
  var div;
  var textarea;
  var t;
  var div_resize_listener;
  var current;
  var if_block = !
  /*CodeMirror*/
  ctx[5] && create_if_block$9(ctx);
  return {
    c: function c() {
      div = element("div");
      textarea = element("textarea");
      t = space();
      if (if_block) if_block.c();
      attr(textarea, "tabindex", "2");
      textarea.readOnly = true;
      textarea.value =
      /*code*/
      ctx[3];
      attr(textarea, "class", "svelte-s9cc8a");
      attr(div, "class", "codemirror-container svelte-s9cc8a");
      add_render_callback(function () {
        return (
          /*div_elementresize_handler*/
          ctx[22].call(div)
        );
      });
      toggle_class(div, "flex",
      /*flex*/
      ctx[0]);
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      append(div, textarea);
      /*textarea_binding*/

      ctx[21](textarea);
      append(div, t);
      if (if_block) if_block.m(div, null);
      div_resize_listener = add_resize_listener(div,
      /*div_elementresize_handler*/
      ctx[22].bind(div));
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!current || dirty &
      /*code*/
      8) {
        textarea.value =
        /*code*/
        ctx[3];
      }

      if (!
      /*CodeMirror*/
      ctx[5]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*CodeMirror*/
          32) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$9(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }

      if (dirty &
      /*flex*/
      1) {
        toggle_class(div, "flex",
        /*flex*/
        ctx[0]);
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
      if (detaching) detach(div);
      /*textarea_binding*/

      ctx[21](null);
      if (if_block) if_block.d();
      div_resize_listener();
    }
  };
}

function sleep(ms) {
  return new Promise(function (fulfil) {
    return setTimeout(fulfil, ms);
  });
}

function instance$m($$self, $$props, $$invalidate) {
  var dispatch = createEventDispatcher();
  var _$$props$readonly = $$props.readonly,
      readonly = _$$props$readonly === void 0 ? false : _$$props$readonly;
  var _$$props$errorLoc = $$props.errorLoc,
      errorLoc = _$$props$errorLoc === void 0 ? null : _$$props$errorLoc;
  var _$$props$flex = $$props.flex,
      flex = _$$props$flex === void 0 ? false : _$$props$flex;
  var _$$props$lineNumbers = $$props.lineNumbers,
      lineNumbers = _$$props$lineNumbers === void 0 ? true : _$$props$lineNumbers;
  var _$$props$tab = $$props.tab,
      tab = _$$props$tab === void 0 ? true : _$$props$tab;
  var w;
  var h;
  var code = '';
  var mode;

  function set(_x, _x2) {
    return _set.apply(this, arguments);
  }

  function _set() {
    _set = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(new_code, new_mode) {
      return regenerator.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(new_mode !== mode)) {
                _context2.next = 3;
                break;
              }

              _context2.next = 3;
              return createEditor(mode = new_mode);

            case 3:
              $$invalidate(3, code = new_code);
              updating_externally = true;
              if (editor) editor.setValue(code);
              updating_externally = false;

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _set.apply(this, arguments);
  }

  function update(new_code) {
    $$invalidate(3, code = new_code);

    if (editor) {
      var _editor$getScrollInfo = editor.getScrollInfo(),
          left = _editor$getScrollInfo.left,
          top = _editor$getScrollInfo.top;

      editor.setValue($$invalidate(3, code = new_code));
      editor.scrollTo(left, top);
    }
  }

  function resize() {
    editor.refresh();
  }

  function focus() {
    editor.focus();
  }

  function getHistory() {
    return editor.getHistory();
  }

  function setHistory(history) {
    editor.setHistory(history);
  }

  function clearHistory() {
    if (editor) editor.clearHistory();
  }

  var modes = {
    js: {
      name: 'javascript',
      json: false
    },
    json: {
      name: 'javascript',
      json: true
    },
    svelte: {
      name: 'handlebars',
      base: 'text/html'
    },
    md: {
      name: 'markdown'
    }
  };
  var refs = {};
  var editor;
  var updating_externally = false;
  var marker;
  var error_line;
  var destroyed = false;
  var CodeMirror;
  var previous_error_line;
  onMount(function () {
    _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
      var mod;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (CodeMirror) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return import('./codemirror-208a598c.js');

            case 3:
              mod = _context.sent;
              $$invalidate(5, CodeMirror = mod.default);

            case 5:
              _context.next = 7;
              return createEditor(mode || 'svelte');

            case 7:
              if (editor) editor.setValue(code || '');

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();

    return function () {
      destroyed = true;
      if (editor) editor.toTextArea();
    };
  });
  var first = true;

  function createEditor(_x3) {
    return _createEditor.apply(this, arguments);
  }

  function _createEditor() {
    _createEditor = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(mode) {
      var opts;
      return regenerator.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(destroyed || !CodeMirror)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              if (editor) editor.toTextArea();
              opts = {
                lineNumbers: lineNumbers,
                lineWrapping: true,
                indentWithTabs: true,
                indentUnit: 2,
                tabSize: 2,
                value: '',
                mode: modes[mode] || {
                  name: mode
                },
                readOnly: readonly,
                autoCloseBrackets: true,
                autoCloseTags: true,
                extraKeys: {
                  'Enter': 'newlineAndIndentContinueMarkdownList',
                  'Ctrl-/': 'toggleComment',
                  'Cmd-/': 'toggleComment',
                  'Ctrl-Q': function CtrlQ(cm) {
                    cm.foldCode(cm.getCursor());
                  },
                  'Cmd-Q': function CmdQ(cm) {
                    cm.foldCode(cm.getCursor());
                  }
                },
                foldGutter: true,
                gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
              };

              if (!tab) {
                opts.extraKeys['Tab'] = tab;
                opts.extraKeys['Shift-Tab'] = tab;
              } // Creating a text editor is a lot of work, so we yield
              // the main thread for a moment. This helps reduce jank


              if (!first) {
                _context3.next = 8;
                break;
              }

              _context3.next = 8;
              return sleep(50);

            case 8:
              if (!destroyed) {
                _context3.next = 10;
                break;
              }

              return _context3.abrupt("return");

            case 10:
              $$invalidate(17, editor = CodeMirror.fromTextArea(refs.editor, opts));
              editor.on('change', function (instance) {
                if (!updating_externally) {
                  var value = instance.getValue();
                  dispatch('change', {
                    value: value
                  });
                }
              });

              if (!first) {
                _context3.next = 15;
                break;
              }

              _context3.next = 15;
              return sleep(50);

            case 15:
              editor.refresh();
              first = false;

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _createEditor.apply(this, arguments);
  }

  function textarea_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      refs.editor = $$value;
      $$invalidate(4, refs);
    });
  }

  function div_elementresize_handler() {
    w = this.offsetWidth;
    h = this.offsetHeight;
    $$invalidate(1, w);
    $$invalidate(2, h);
  }

  $$self.$$set = function ($$props) {
    if ('readonly' in $$props) $$invalidate(6, readonly = $$props.readonly);
    if ('errorLoc' in $$props) $$invalidate(7, errorLoc = $$props.errorLoc);
    if ('flex' in $$props) $$invalidate(0, flex = $$props.flex);
    if ('lineNumbers' in $$props) $$invalidate(8, lineNumbers = $$props.lineNumbers);
    if ('tab' in $$props) $$invalidate(9, tab = $$props.tab);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*editor, w, h*/
    131078) {
      if (editor && w && h) {
        editor.refresh();
      }
    }

    if ($$self.$$.dirty &
    /*marker, errorLoc, editor*/
    393344) {
      {
        if (marker) marker.clear();

        if (errorLoc) {
          var line = errorLoc.line - 1;
          var ch = errorLoc.column;
          $$invalidate(18, marker = editor.markText({
            line: line,
            ch: ch
          }, {
            line: line,
            ch: ch + 1
          }, {
            className: 'error-loc'
          }));
          $$invalidate(19, error_line = line);
        } else {
          $$invalidate(19, error_line = null);
        }
      }
    }

    if ($$self.$$.dirty &
    /*editor, previous_error_line, error_line*/
    1703936) {
      if (editor) {
        if (previous_error_line != null) {
          editor.removeLineClass(previous_error_line, 'wrap', 'error-line');
        }

        if (error_line && error_line !== previous_error_line) {
          editor.addLineClass(error_line, 'wrap', 'error-line');
          $$invalidate(20, previous_error_line = error_line);
        }
      }
    }
  };

  return [flex, w, h, code, refs, CodeMirror, readonly, errorLoc, lineNumbers, tab, set, update, resize, focus, getHistory, setHistory, clearHistory, editor, marker, error_line, previous_error_line, textarea_binding, div_elementresize_handler];
}

var CodeMirror_1 = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(CodeMirror_1, _SvelteComponent);

  var _super = _createSuper$m(CodeMirror_1);

  function CodeMirror_1(options) {
    var _this;

    _classCallCheck(this, CodeMirror_1);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$m, create_fragment$m, safe_not_equal, {
      readonly: 6,
      errorLoc: 7,
      flex: 0,
      lineNumbers: 8,
      tab: 9,
      set: 10,
      update: 11,
      resize: 12,
      focus: 13,
      getHistory: 14,
      setHistory: 15,
      clearHistory: 16
    });
    return _this;
  }

  _createClass(CodeMirror_1, [{
    key: "set",
    get: function get() {
      return this.$$.ctx[10];
    }
  }, {
    key: "update",
    get: function get() {
      return this.$$.ctx[11];
    }
  }, {
    key: "resize",
    get: function get() {
      return this.$$.ctx[12];
    }
  }, {
    key: "focus",
    get: function get() {
      return this.$$.ctx[13];
    }
  }, {
    key: "getHistory",
    get: function get() {
      return this.$$.ctx[14];
    }
  }, {
    key: "setHistory",
    get: function get() {
      return this.$$.ctx[15];
    }
  }, {
    key: "clearHistory",
    get: function get() {
      return this.$$.ctx[16];
    }
  }]);

  return CodeMirror_1;
}(SvelteComponent);

function _createSuper$l(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$l(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$l() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function get_each_context$6(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  return child_ctx;
} // (57:2) {#if $bundle}


function create_if_block$8(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block_1$7, create_if_block_2$6];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*$bundle*/
    ctx[2].error) return 0;
    if (
    /*$bundle*/
    ctx[2].warnings.length > 0) return 1;
    return -1;
  }

  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }

  return {
    c: function c() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    m: function m(target, anchor) {
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(target, anchor);
      }

      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        }
      } else {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }

        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          } else {
            if_block.p(ctx, dirty);
          }

          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        } else {
          if_block = null;
        }
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
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d(detaching);
      }

      if (detaching) detach(if_block_anchor);
    }
  };
} // (60:41) 


function create_if_block_2$6(ctx) {
  var each_1_anchor;
  var current;
  var each_value =
  /*$bundle*/
  ctx[2].warnings;
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$6(get_each_context$6(ctx, each_value, i));
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
      /*$bundle, $selected*/
      12) {
        each_value =
        /*$bundle*/
        ctx[2].warnings;

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context$6(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);

            transition_in(each_blocks[_i3], 1);
          } else {
            each_blocks[_i3] = create_each_block$6(child_ctx);

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
} // (58:3) {#if $bundle.error}


function create_if_block_1$7(ctx) {
  var message;
  var current;
  message = new Message({
    props: {
      kind: "error",
      details:
      /*$bundle*/
      ctx[2].error,
      filename: "" + (
      /*$selected*/
      ctx[3].name + "." +
      /*$selected*/
      ctx[3].type)
    }
  });
  return {
    c: function c() {
      create_component(message.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(message, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var message_changes = {};
      if (dirty &
      /*$bundle*/
      4) message_changes.details =
      /*$bundle*/
      ctx[2].error;
      if (dirty &
      /*$selected*/
      8) message_changes.filename = "" + (
      /*$selected*/
      ctx[3].name + "." +
      /*$selected*/
      ctx[3].type);
      message.$set(message_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(message.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(message.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(message, detaching);
    }
  };
} // (61:4) {#each $bundle.warnings as warning}


function create_each_block$6(ctx) {
  var message;
  var current;
  message = new Message({
    props: {
      kind: "warning",
      details:
      /*warning*/
      ctx[10],
      filename: "" + (
      /*$selected*/
      ctx[3].name + "." +
      /*$selected*/
      ctx[3].type)
    }
  });
  return {
    c: function c() {
      create_component(message.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(message, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var message_changes = {};
      if (dirty &
      /*$bundle*/
      4) message_changes.details =
      /*warning*/
      ctx[10];
      if (dirty &
      /*$selected*/
      8) message_changes.filename = "" + (
      /*$selected*/
      ctx[3].name + "." +
      /*$selected*/
      ctx[3].type);
      message.$set(message_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(message.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(message.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(message, detaching);
    }
  };
}

function create_fragment$l(ctx) {
  var div2;
  var div0;
  var codemirror;
  var t;
  var div1;
  var current;
  var codemirror_props = {
    errorLoc:
    /*errorLoc*/
    ctx[0]
  };
  codemirror = new CodeMirror_1({
    props: codemirror_props
  });
  /*codemirror_binding*/

  ctx[8](codemirror);
  codemirror.$on("change",
  /*handle_change*/
  ctx[6]);
  var if_block =
  /*$bundle*/
  ctx[2] && create_if_block$8(ctx);
  return {
    c: function c() {
      div2 = element("div");
      div0 = element("div");
      create_component(codemirror.$$.fragment);
      t = space();
      div1 = element("div");
      if (if_block) if_block.c();
      attr(div0, "class", "editor notranslate svelte-m7nlxn");
      attr(div0, "translate", "no");
      attr(div1, "class", "info svelte-m7nlxn");
      attr(div2, "class", "editor-wrapper svelte-m7nlxn");
    },
    m: function m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, div0);
      mount_component(codemirror, div0, null);
      append(div2, t);
      append(div2, div1);
      if (if_block) if_block.m(div1, null);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var codemirror_changes = {};
      if (dirty &
      /*errorLoc*/
      1) codemirror_changes.errorLoc =
      /*errorLoc*/
      ctx[0];
      codemirror.$set(codemirror_changes);

      if (
      /*$bundle*/
      ctx[2]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*$bundle*/
          4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$8(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div1, null);
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
      transition_in(codemirror.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o: function o(local) {
      transition_out(codemirror.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(div2);
      /*codemirror_binding*/

      ctx[8](null);
      destroy_component(codemirror);
      if (if_block) if_block.d();
    }
  };
}

function instance$l($$self, $$props, $$invalidate) {
  var $bundle;
  var $selected;

  var _getContext = getContext('REPL'),
      bundle = _getContext.bundle,
      selected = _getContext.selected,
      handle_change = _getContext.handle_change,
      register_module_editor = _getContext.register_module_editor;

  component_subscribe($$self, bundle, function (value) {
    return $$invalidate(2, $bundle = value);
  });
  component_subscribe($$self, selected, function (value) {
    return $$invalidate(3, $selected = value);
  });
  var errorLoc = $$props.errorLoc;
  var editor;
  onMount(function () {
    register_module_editor(editor);
  });

  function focus() {
    editor.focus();
  }

  function codemirror_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      editor = $$value;
      $$invalidate(1, editor);
    });
  }

  $$self.$$set = function ($$props) {
    if ('errorLoc' in $$props) $$invalidate(0, errorLoc = $$props.errorLoc);
  };

  return [errorLoc, editor, $bundle, $selected, bundle, selected, handle_change, focus, codemirror_binding];
}

var ModuleEditor = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(ModuleEditor, _SvelteComponent);

  var _super = _createSuper$l(ModuleEditor);

  function ModuleEditor(options) {
    var _this;

    _classCallCheck(this, ModuleEditor);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$l, create_fragment$l, safe_not_equal, {
      errorLoc: 0,
      focus: 7
    });
    return _this;
  }

  _createClass(ModuleEditor, [{
    key: "focus",
    get: function get() {
      return this.$$.ctx[7];
    }
  }]);

  return ModuleEditor;
}(SvelteComponent);

function _createForOfIteratorHelper$3(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */
function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}

var defaults = getDefaults();

function changeDefaults(newDefaults) {
  defaults = newDefaults;
}
/**
 * Helpers
 */


var escapeTest = /[&<>"']/;
var escapeReplace = /[&<>"']/g;
var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
var escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

var getEscapeReplacement = function getEscapeReplacement(ch) {
  return escapeReplacements[ch];
};

function _escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
/**
 * @param {string} html
 */

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, function (_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';

    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }

    return '';
  });
}

var caret = /(^|[^\[])\^/g;
/**
 * @param {string | RegExp} regex
 * @param {string} opt
 */

function edit(regex, opt) {
  regex = typeof regex === 'string' ? regex : regex.source;
  opt = opt || '';
  var obj = {
    replace: function replace(name, val) {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: function getRegex() {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}

var nonWordAndColonTest = /[^\w:]/g;
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
/**
 * @param {boolean} sanitize
 * @param {string} base
 * @param {string} href
 */

function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    var prot;

    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
    } catch (e) {
      return null;
    }

    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }

  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }

  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }

  return href;
}

var baseUrls = {};
var justDomain = /^[^:]+:\/*[^/]*$/;
var protocol = /^([^:]+:)[\s\S]*$/;
var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
/**
 * @param {string} base
 * @param {string} href
 */

function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }

  base = baseUrls[' ' + base];
  var relativeBase = base.indexOf(':') === -1;

  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }

    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }

    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}

var noopTest = {
  exec: function noopTest() {}
};

function merge(obj) {
  var i = 1,
      target,
      key;

  for (; i < arguments.length; i++) {
    target = arguments[i];

    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  var row = tableRow.replace(/\|/g, function (match, offset, str) {
    var escaped = false,
        curr = offset;

    while (--curr >= 0 && str[curr] === '\\') {
      escaped = !escaped;
    }

    if (escaped) {
      // odd number of slashes means | is escaped
      // so we leave it alone
      return '|';
    } else {
      // add space before unescaped |
      return ' |';
    }
  }),
      cells = row.split(/ \|/);
  var i = 0; // First/last cell in a row cannot be empty if it has no leading/trailing pipe

  if (!cells[0].trim()) {
    cells.shift();
  }

  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) {
      cells.push('');
    }
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }

  return cells;
}
/**
 * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
 * /c*$/ is vulnerable to REDOS.
 *
 * @param {string} str
 * @param {string} c
 * @param {boolean} invert Remove suffix of non-c chars instead. Default falsey.
 */


function rtrim(str, c, invert) {
  var l = str.length;

  if (l === 0) {
    return '';
  } // Length of suffix matching the invert condition.


  var suffLen = 0; // Step left until we fail to match the invert condition.

  while (suffLen < l) {
    var currChar = str.charAt(l - suffLen - 1);

    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.slice(0, l - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }

  var l = str.length;
  var level = 0,
      i = 0;

  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;

      if (level < 0) {
        return i;
      }
    }
  }

  return -1;
}

function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
} // copied from https://stackoverflow.com/a/5450113/806777

/**
 * @param {string} pattern
 * @param {number} count
 */


function repeatString(pattern, count) {
  if (count < 1) {
    return '';
  }

  var result = '';

  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }

    count >>= 1;
    pattern += pattern;
  }

  return result + pattern;
}

function outputLink(cap, link, raw, lexer) {
  var href = link.href;
  var title = link.title ? _escape(link.title) : null;
  var text = cap[1].replace(/\\([\[\]])/g, '$1');

  if (cap[0].charAt(0) !== '!') {
    lexer.state.inLink = true;
    var token = {
      type: 'link',
      raw: raw,
      href: href,
      title: title,
      text: text,
      tokens: lexer.inlineTokens(text, [])
    };
    lexer.state.inLink = false;
    return token;
  }

  return {
    type: 'image',
    raw: raw,
    href: href,
    title: title,
    text: _escape(text)
  };
}

function indentCodeCompensation(raw, text) {
  var matchIndentToCode = raw.match(/^(\s+)(?:```)/);

  if (matchIndentToCode === null) {
    return text;
  }

  var indentToCode = matchIndentToCode[1];
  return text.split('\n').map(function (node) {
    var matchIndentInNode = node.match(/^\s+/);

    if (matchIndentInNode === null) {
      return node;
    }

    var _matchIndentInNode = _slicedToArray(matchIndentInNode, 1),
        indentInNode = _matchIndentInNode[0];

    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }

    return node;
  }).join('\n');
}
/**
 * Tokenizer
 */


var Tokenizer = /*#__PURE__*/function () {
  function Tokenizer(options) {
    _classCallCheck(this, Tokenizer);

    this.options = options || defaults;
  }

  _createClass(Tokenizer, [{
    key: "space",
    value: function space(src) {
      var cap = this.rules.block.newline.exec(src);

      if (cap && cap[0].length > 0) {
        return {
          type: 'space',
          raw: cap[0]
        };
      }
    }
  }, {
    key: "code",
    value: function code(src) {
      var cap = this.rules.block.code.exec(src);

      if (cap) {
        var text = cap[0].replace(/^ {1,4}/gm, '');
        return {
          type: 'code',
          raw: cap[0],
          codeBlockStyle: 'indented',
          text: !this.options.pedantic ? rtrim(text, '\n') : text
        };
      }
    }
  }, {
    key: "fences",
    value: function fences(src) {
      var cap = this.rules.block.fences.exec(src);

      if (cap) {
        var raw = cap[0];
        var text = indentCodeCompensation(raw, cap[3] || '');
        return {
          type: 'code',
          raw: raw,
          lang: cap[2] ? cap[2].trim() : cap[2],
          text: text
        };
      }
    }
  }, {
    key: "heading",
    value: function heading(src) {
      var cap = this.rules.block.heading.exec(src);

      if (cap) {
        var text = cap[2].trim(); // remove trailing #s

        if (/#$/.test(text)) {
          var trimmed = rtrim(text, '#');

          if (this.options.pedantic) {
            text = trimmed.trim();
          } else if (!trimmed || / $/.test(trimmed)) {
            // CommonMark requires space before trailing #s
            text = trimmed.trim();
          }
        }

        var token = {
          type: 'heading',
          raw: cap[0],
          depth: cap[1].length,
          text: text,
          tokens: []
        };
        this.lexer.inline(token.text, token.tokens);
        return token;
      }
    }
  }, {
    key: "hr",
    value: function hr(src) {
      var cap = this.rules.block.hr.exec(src);

      if (cap) {
        return {
          type: 'hr',
          raw: cap[0]
        };
      }
    }
  }, {
    key: "blockquote",
    value: function blockquote(src) {
      var cap = this.rules.block.blockquote.exec(src);

      if (cap) {
        var text = cap[0].replace(/^ *>[ \t]?/gm, '');
        return {
          type: 'blockquote',
          raw: cap[0],
          tokens: this.lexer.blockTokens(text, []),
          text: text
        };
      }
    }
  }, {
    key: "list",
    value: function list(src) {
      var cap = this.rules.block.list.exec(src);

      if (cap) {
        var raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
        var bull = cap[1].trim();
        var isordered = bull.length > 1;
        var list = {
          type: 'list',
          raw: '',
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : '',
          loose: false,
          items: []
        };
        bull = isordered ? "\\d{1,9}\\".concat(bull.slice(-1)) : "\\".concat(bull);

        if (this.options.pedantic) {
          bull = isordered ? bull : '[*+-]';
        } // Get next list item


        var itemRegex = new RegExp("^( {0,3}".concat(bull, ")((?:[\t ][^\\n]*)?(?:\\n|$))")); // Check if current bullet point can start a new List Item

        while (src) {
          endEarly = false;

          if (!(cap = itemRegex.exec(src))) {
            break;
          }

          if (this.rules.block.hr.test(src)) {
            // End list if bullet was actually HR (possibly move into itemRegex?)
            break;
          }

          raw = cap[0];
          src = src.substring(raw.length);
          line = cap[2].split('\n', 1)[0];
          nextLine = src.split('\n', 1)[0];

          if (this.options.pedantic) {
            indent = 2;
            itemContents = line.trimLeft();
          } else {
            indent = cap[2].search(/[^ ]/); // Find first non-space char

            indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent

            itemContents = line.slice(indent);
            indent += cap[1].length;
          }

          blankLine = false;

          if (!line && /^ *$/.test(nextLine)) {
            // Items begin with at most one blank line
            raw += nextLine + '\n';
            src = src.substring(nextLine.length + 1);
            endEarly = true;
          }

          if (!endEarly) {
            var nextBulletRegex = new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))"));
            var hrRegex = new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)")); // Check if following lines should be included in List Item

            while (src) {
              rawLine = src.split('\n', 1)[0];
              line = rawLine; // Re-align to follow commonmark nesting rules

              if (this.options.pedantic) {
                line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
              } // End list item if found start of new bullet


              if (nextBulletRegex.test(line)) {
                break;
              } // Horizontal rule found


              if (hrRegex.test(src)) {
                break;
              }

              if (line.search(/[^ ]/) >= indent || !line.trim()) {
                // Dedent if possible
                itemContents += '\n' + line.slice(indent);
              } else if (!blankLine) {
                // Until blank line, item doesn't need indentation
                itemContents += '\n' + line;
              } else {
                // Otherwise, improper indentation ends this item
                break;
              }

              if (!blankLine && !line.trim()) {
                // Check if current line is blank
                blankLine = true;
              }

              raw += rawLine + '\n';
              src = src.substring(rawLine.length + 1);
            }
          }

          if (!list.loose) {
            // If the previous item ended with a blank line, the list is loose
            if (endsWithBlankLine) {
              list.loose = true;
            } else if (/\n *\n *$/.test(raw)) {
              endsWithBlankLine = true;
            }
          } // Check for task list items


          if (this.options.gfm) {
            istask = /^\[[ xX]\] /.exec(itemContents);

            if (istask) {
              ischecked = istask[0] !== '[ ] ';
              itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
            }
          }

          list.items.push({
            type: 'list_item',
            raw: raw,
            task: !!istask,
            checked: ischecked,
            loose: false,
            text: itemContents
          });
          list.raw += raw;
        } // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic


        list.items[list.items.length - 1].raw = raw.trimRight();
        list.items[list.items.length - 1].text = itemContents.trimRight();
        list.raw = list.raw.trimRight();
        var l = list.items.length; // Item child tokens handled here at end because we needed to have the final item to trim it first

        for (i = 0; i < l; i++) {
          this.lexer.state.top = false;
          list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
          var spacers = list.items[i].tokens.filter(function (t) {
            return t.type === 'space';
          });
          var hasMultipleLineBreaks = spacers.every(function (t) {
            var chars = t.raw.split('');
            var lineBreaks = 0;

            var _iterator = _createForOfIteratorHelper$3(chars),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var char = _step.value;

                if (char === '\n') {
                  lineBreaks += 1;
                }

                if (lineBreaks > 1) {
                  return true;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return false;
          });

          if (!list.loose && spacers.length && hasMultipleLineBreaks) {
            // Having a single line break doesn't mean a list is loose. A single line break is terminating the last list item
            list.loose = true;
            list.items[i].loose = true;
          }
        }

        return list;
      }
    }
  }, {
    key: "html",
    value: function html(src) {
      var cap = this.rules.block.html.exec(src);

      if (cap) {
        var token = {
          type: 'html',
          raw: cap[0],
          pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: cap[0]
        };

        if (this.options.sanitize) {
          token.type = 'paragraph';
          token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]);
          token.tokens = [];
          this.lexer.inline(token.text, token.tokens);
        }

        return token;
      }
    }
  }, {
    key: "def",
    value: function def(src) {
      var cap = this.rules.block.def.exec(src);

      if (cap) {
        if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
        var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
        return {
          type: 'def',
          tag: tag,
          raw: cap[0],
          href: cap[2],
          title: cap[3]
        };
      }
    }
  }, {
    key: "table",
    value: function table(src) {
      var cap = this.rules.block.table.exec(src);

      if (cap) {
        var item = {
          type: 'table',
          header: splitCells(cap[1]).map(function (c) {
            return {
              text: c
            };
          }),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
        };

        if (item.header.length === item.align.length) {
          item.raw = cap[0];
          var l = item.align.length;
          var i, j, k, row;

          for (i = 0; i < l; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          l = item.rows.length;

          for (i = 0; i < l; i++) {
            item.rows[i] = splitCells(item.rows[i], item.header.length).map(function (c) {
              return {
                text: c
              };
            });
          } // parse child tokens inside headers and cells
          // header child tokens


          l = item.header.length;

          for (j = 0; j < l; j++) {
            item.header[j].tokens = [];
            this.lexer.inline(item.header[j].text, item.header[j].tokens);
          } // cell child tokens


          l = item.rows.length;

          for (j = 0; j < l; j++) {
            row = item.rows[j];

            for (k = 0; k < row.length; k++) {
              row[k].tokens = [];
              this.lexer.inline(row[k].text, row[k].tokens);
            }
          }

          return item;
        }
      }
    }
  }, {
    key: "lheading",
    value: function lheading(src) {
      var cap = this.rules.block.lheading.exec(src);

      if (cap) {
        var token = {
          type: 'heading',
          raw: cap[0],
          depth: cap[2].charAt(0) === '=' ? 1 : 2,
          text: cap[1],
          tokens: []
        };
        this.lexer.inline(token.text, token.tokens);
        return token;
      }
    }
  }, {
    key: "paragraph",
    value: function paragraph(src) {
      var cap = this.rules.block.paragraph.exec(src);

      if (cap) {
        var token = {
          type: 'paragraph',
          raw: cap[0],
          text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1],
          tokens: []
        };
        this.lexer.inline(token.text, token.tokens);
        return token;
      }
    }
  }, {
    key: "text",
    value: function text(src) {
      var cap = this.rules.block.text.exec(src);

      if (cap) {
        var token = {
          type: 'text',
          raw: cap[0],
          text: cap[0],
          tokens: []
        };
        this.lexer.inline(token.text, token.tokens);
        return token;
      }
    }
  }, {
    key: "escape",
    value: function escape(src) {
      var cap = this.rules.inline.escape.exec(src);

      if (cap) {
        return {
          type: 'escape',
          raw: cap[0],
          text: _escape(cap[1])
        };
      }
    }
  }, {
    key: "tag",
    value: function tag(src) {
      var cap = this.rules.inline.tag.exec(src);

      if (cap) {
        if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
          this.lexer.state.inLink = true;
        } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
          this.lexer.state.inLink = false;
        }

        if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = true;
        } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = false;
        }

        return {
          type: this.options.sanitize ? 'text' : 'html',
          raw: cap[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
        };
      }
    }
  }, {
    key: "link",
    value: function link(src) {
      var cap = this.rules.inline.link.exec(src);

      if (cap) {
        var trimmedUrl = cap[2].trim();

        if (!this.options.pedantic && /^</.test(trimmedUrl)) {
          // commonmark requires matching angle brackets
          if (!/>$/.test(trimmedUrl)) {
            return;
          } // ending angle bracket cannot be escaped


          var rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');

          if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
            return;
          }
        } else {
          // find closing parenthesis
          var lastParenIndex = findClosingBracket(cap[2], '()');

          if (lastParenIndex > -1) {
            var start = cap[0].indexOf('!') === 0 ? 5 : 4;
            var linkLen = start + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = '';
          }
        }

        var href = cap[2];
        var title = '';

        if (this.options.pedantic) {
          // split pedantic href and title
          var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

          if (link) {
            href = link[1];
            title = link[3];
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }

        href = href.trim();

        if (/^</.test(href)) {
          if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
            // pedantic allows starting angle bracket without ending angle bracket
            href = href.slice(1);
          } else {
            href = href.slice(1, -1);
          }
        }

        return outputLink(cap, {
          href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
          title: title ? title.replace(this.rules.inline._escapes, '$1') : title
        }, cap[0], this.lexer);
      }
    }
  }, {
    key: "reflink",
    value: function reflink(src, links) {
      var cap;

      if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
        var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = links[link.toLowerCase()];

        if (!link || !link.href) {
          var text = cap[0].charAt(0);
          return {
            type: 'text',
            raw: text,
            text: text
          };
        }

        return outputLink(cap, link, cap[0], this.lexer);
      }
    }
  }, {
    key: "emStrong",
    value: function emStrong(src, maskedSrc) {
      var prevChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var match = this.rules.inline.emStrong.lDelim.exec(src);
      if (!match) return; // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well

      if (match[3] && prevChar.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/)) return;
      var nextChar = match[1] || match[2] || '';

      if (!nextChar || nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar))) {
        var lLength = match[0].length - 1;
        var rDelim,
            rLength,
            delimTotal = lLength,
            midDelimTotal = 0;
        var endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
        endReg.lastIndex = 0; // Clip maskedSrc to same section of string as src (move to lexer?)

        maskedSrc = maskedSrc.slice(-1 * src.length + lLength);

        while ((match = endReg.exec(maskedSrc)) != null) {
          rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
          if (!rDelim) continue; // skip single * in __abc*abc__

          rLength = rDelim.length;

          if (match[3] || match[4]) {
            // found another Left Delim
            delimTotal += rLength;
            continue;
          } else if (match[5] || match[6]) {
            // either Left or Right Delim
            if (lLength % 3 && !((lLength + rLength) % 3)) {
              midDelimTotal += rLength;
              continue; // CommonMark Emphasis Rules 9-10
            }
          }

          delimTotal -= rLength;
          if (delimTotal > 0) continue; // Haven't found enough closing delimiters
          // Remove extra characters. *a*** -> *a*

          rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal); // Create `em` if smallest delimiter has odd char count. *a***

          if (Math.min(lLength, rLength) % 2) {
            var _text = src.slice(1, lLength + match.index + rLength);

            return {
              type: 'em',
              raw: src.slice(0, lLength + match.index + rLength + 1),
              text: _text,
              tokens: this.lexer.inlineTokens(_text, [])
            };
          } // Create 'strong' if smallest delimiter has even char count. **a***


          var text = src.slice(2, lLength + match.index + rLength - 1);
          return {
            type: 'strong',
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text: text,
            tokens: this.lexer.inlineTokens(text, [])
          };
        }
      }
    }
  }, {
    key: "codespan",
    value: function codespan(src) {
      var cap = this.rules.inline.code.exec(src);

      if (cap) {
        var text = cap[2].replace(/\n/g, ' ');
        var hasNonSpaceChars = /[^ ]/.test(text);
        var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);

        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }

        text = _escape(text, true);
        return {
          type: 'codespan',
          raw: cap[0],
          text: text
        };
      }
    }
  }, {
    key: "br",
    value: function br(src) {
      var cap = this.rules.inline.br.exec(src);

      if (cap) {
        return {
          type: 'br',
          raw: cap[0]
        };
      }
    }
  }, {
    key: "del",
    value: function del(src) {
      var cap = this.rules.inline.del.exec(src);

      if (cap) {
        return {
          type: 'del',
          raw: cap[0],
          text: cap[2],
          tokens: this.lexer.inlineTokens(cap[2], [])
        };
      }
    }
  }, {
    key: "autolink",
    value: function autolink(src, mangle) {
      var cap = this.rules.inline.autolink.exec(src);

      if (cap) {
        var text, href;

        if (cap[2] === '@') {
          text = _escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
          href = 'mailto:' + text;
        } else {
          text = _escape(cap[1]);
          href = text;
        }

        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    }
  }, {
    key: "url",
    value: function url(src, mangle) {
      var cap;

      if (cap = this.rules.inline.url.exec(src)) {
        var text, href;

        if (cap[2] === '@') {
          text = _escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
          href = 'mailto:' + text;
        } else {
          // do extended autolink path validation
          var prevCapZero;

          do {
            prevCapZero = cap[0];
            cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);

          text = _escape(cap[0]);

          if (cap[1] === 'www.') {
            href = 'http://' + text;
          } else {
            href = text;
          }
        }

        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    }
  }, {
    key: "inlineText",
    value: function inlineText(src, smartypants) {
      var cap = this.rules.inline.text.exec(src);

      if (cap) {
        var text;

        if (this.lexer.state.inRawBlock) {
          text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0];
        } else {
          text = _escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
        }

        return {
          type: 'text',
          raw: cap[0],
          text: text
        };
      }
    }
  }]);

  return Tokenizer;
}();
/**
 * Block-Level Grammar
 */


var block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:' // optional indentation
  + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
  + '|comment[^\\n]*(\\n+|$)' // (2)
  + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
  + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
  + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
  + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
  + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
  + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
  + ')',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace('bull', block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('|table', '').replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
.getRegex();
block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();
/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);
/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  table: '^ *([^\\n ].*\\|.*)\\n' // Header
  + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
  + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells

});
block.gfm.table = edit(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
.getRegex();
block.gfm.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('table', block.gfm.table) // interrupt paragraphs with table
.replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
.getRegex();
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = merge({}, block.normal, {
  html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
  + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  paragraph: edit(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
});
/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
  + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
  + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
  + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
  + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
  // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //          () Skip orphan inside strong  () Consume to delim (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _

  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
}; // list of punctuation marks from CommonMark spec
// without * and _ to handle the different emphasis markers * and _

inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex(); // sequences em should skip over [title](link), `code`, <html>

inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;
inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g').replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g').replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace('comment', inline._comment).replace('attribute', inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace('label', inline._label).replace('ref', block._label).getRegex();
inline.nolink = edit(inline.nolink).replace('ref', block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, 'g').replace('reflink', inline.reflink).replace('nolink', inline.nolink).getRegex();
/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);
/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
});
/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
inline.gfm.url = edit(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
});
/**
 * smartypants text replacement
 * @param {string} text
 */

function smartypants(text) {
  return text // em-dashes
  .replace(/---/g, "\u2014") // en-dashes
  .replace(/--/g, "\u2013") // opening singles
  .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
  .replace(/'/g, "\u2019") // opening doubles
  .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
  .replace(/"/g, "\u201D") // ellipses
  .replace(/\.{3}/g, "\u2026");
}
/**
 * mangle email addresses
 * @param {string} text
 */


function mangle(text) {
  var out = '',
      i,
      ch;
  var l = text.length;

  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);

    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }

    out += '&#' + ch + ';';
  }

  return out;
}
/**
 * Block Lexer
 */


var Lexer = /*#__PURE__*/function () {
  function Lexer(options) {
    _classCallCheck(this, Lexer);

    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    var rules = {
      block: block.normal,
      inline: inline.normal
    };

    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;

      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }

    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */


  _createClass(Lexer, [{
    key: "lex",
    value:
    /**
     * Preprocessing
     */
    function lex(src) {
      src = src.replace(/\r\n|\r/g, '\n');
      this.blockTokens(src, this.tokens);
      var next;

      while (next = this.inlineQueue.shift()) {
        this.inlineTokens(next.src, next.tokens);
      }

      return this.tokens;
    }
    /**
     * Lexing
     */

  }, {
    key: "blockTokens",
    value: function blockTokens(src) {
      var _this = this;

      var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (this.options.pedantic) {
        src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
      } else {
        src = src.replace(/^( *)(\t+)/gm, function (_, leading, tabs) {
          return leading + '    '.repeat(tabs.length);
        });
      }

      var token, lastToken, cutSrc, lastParagraphClipped;

      while (src) {
        if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function (extTokenizer) {
          if (token = extTokenizer.call({
            lexer: _this
          }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }

          return false;
        })) {
          continue;
        } // newline


        if (token = this.tokenizer.space(src)) {
          src = src.substring(token.raw.length);

          if (token.raw.length === 1 && tokens.length > 0) {
            // if there's a single \n as a spacer, it's terminating the last line,
            // so move it there so that we don't get unecessary paragraph tags
            tokens[tokens.length - 1].raw += '\n';
          } else {
            tokens.push(token);
          }

          continue;
        } // code


        if (token = this.tokenizer.code(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.

          if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }

          continue;
        } // fences


        if (token = this.tokenizer.fences(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // heading


        if (token = this.tokenizer.heading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // hr


        if (token = this.tokenizer.hr(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // blockquote


        if (token = this.tokenizer.blockquote(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // list


        if (token = this.tokenizer.list(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // html


        if (token = this.tokenizer.html(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // def


        if (token = this.tokenizer.def(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];

          if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.raw;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else if (!this.tokens.links[token.tag]) {
            this.tokens.links[token.tag] = {
              href: token.href,
              title: token.title
            };
          }

          continue;
        } // table (gfm)


        if (token = this.tokenizer.table(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // lheading


        if (token = this.tokenizer.lheading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // top-level paragraph
        // prevent paragraph consuming extensions by clipping 'src' to extension start


        cutSrc = src;

        if (this.options.extensions && this.options.extensions.startBlock) {
          (function () {
            var startIndex = Infinity;
            var tempSrc = src.slice(1);
            var tempStart = void 0;

            _this.options.extensions.startBlock.forEach(function (getStartIndex) {
              tempStart = getStartIndex.call({
                lexer: this
              }, tempSrc);

              if (typeof tempStart === 'number' && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });

            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          })();
        }

        if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
          lastToken = tokens[tokens.length - 1];

          if (lastParagraphClipped && lastToken.type === 'paragraph') {
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }

          lastParagraphClipped = cutSrc.length !== src.length;
          src = src.substring(token.raw.length);
          continue;
        } // text


        if (token = this.tokenizer.text(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];

          if (lastToken && lastToken.type === 'text') {
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }

          continue;
        }

        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }

      this.state.top = true;
      return tokens;
    }
  }, {
    key: "inline",
    value: function inline(src, tokens) {
      this.inlineQueue.push({
        src: src,
        tokens: tokens
      });
    }
    /**
     * Lexing/Compiling
     */

  }, {
    key: "inlineTokens",
    value: function inlineTokens(src) {
      var _this2 = this;

      var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var token, lastToken, cutSrc; // String with links masked to avoid interference with em and strong

      var maskedSrc = src;
      var match;
      var keepPrevChar, prevChar; // Mask out reflinks

      if (this.tokens.links) {
        var links = Object.keys(this.tokens.links);

        if (links.length > 0) {
          while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
            if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
              maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      } // Mask out other blocks


      while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      } // Mask out escaped em & strong delimiters


      while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
      }

      while (src) {
        if (!keepPrevChar) {
          prevChar = '';
        }

        keepPrevChar = false; // extensions

        if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function (extTokenizer) {
          if (token = extTokenizer.call({
            lexer: _this2
          }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }

          return false;
        })) {
          continue;
        } // escape


        if (token = this.tokenizer.escape(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // tag


        if (token = this.tokenizer.tag(src)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];

          if (lastToken && token.type === 'text' && lastToken.type === 'text') {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }

          continue;
        } // link


        if (token = this.tokenizer.link(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // reflink, nolink


        if (token = this.tokenizer.reflink(src, this.tokens.links)) {
          src = src.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];

          if (lastToken && token.type === 'text' && lastToken.type === 'text') {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }

          continue;
        } // em & strong


        if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // code


        if (token = this.tokenizer.codespan(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // br


        if (token = this.tokenizer.br(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // del (gfm)


        if (token = this.tokenizer.del(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // autolink


        if (token = this.tokenizer.autolink(src, mangle)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // url (gfm)


        if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // text
        // prevent inlineText consuming extensions by clipping 'src' to extension start


        cutSrc = src;

        if (this.options.extensions && this.options.extensions.startInline) {
          (function () {
            var startIndex = Infinity;
            var tempSrc = src.slice(1);
            var tempStart = void 0;

            _this2.options.extensions.startInline.forEach(function (getStartIndex) {
              tempStart = getStartIndex.call({
                lexer: this
              }, tempSrc);

              if (typeof tempStart === 'number' && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });

            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          })();
        }

        if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
          src = src.substring(token.raw.length);

          if (token.raw.slice(-1) !== '_') {
            // Track prevChar before string of ____ started
            prevChar = token.raw.slice(-1);
          }

          keepPrevChar = true;
          lastToken = tokens[tokens.length - 1];

          if (lastToken && lastToken.type === 'text') {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }

          continue;
        }

        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }

      return tokens;
    }
  }], [{
    key: "rules",
    get: function get() {
      return {
        block: block,
        inline: inline
      };
    }
    /**
     * Static Lex Method
     */

  }, {
    key: "lex",
    value: function lex(src, options) {
      var lexer = new Lexer(options);
      return lexer.lex(src);
    }
    /**
     * Static Lex Inline Method
     */

  }, {
    key: "lexInline",
    value: function lexInline(src, options) {
      var lexer = new Lexer(options);
      return lexer.inlineTokens(src);
    }
  }]);

  return Lexer;
}();
/**
 * Renderer
 */


var Renderer = /*#__PURE__*/function () {
  function Renderer(options) {
    _classCallCheck(this, Renderer);

    this.options = options || defaults;
  }

  _createClass(Renderer, [{
    key: "code",
    value: function code(_code, infostring, escaped) {
      var lang = (infostring || '').match(/\S*/)[0];

      if (this.options.highlight) {
        var out = this.options.highlight(_code, lang);

        if (out != null && out !== _code) {
          escaped = true;
          _code = out;
        }
      }

      _code = _code.replace(/\n$/, '') + '\n';

      if (!lang) {
        return '<pre><code>' + (escaped ? _code : _escape(_code, true)) + '</code></pre>\n';
      }

      return '<pre><code class="' + this.options.langPrefix + _escape(lang, true) + '">' + (escaped ? _code : _escape(_code, true)) + '</code></pre>\n';
    }
    /**
     * @param {string} quote
     */

  }, {
    key: "blockquote",
    value: function blockquote(quote) {
      return "<blockquote>\n".concat(quote, "</blockquote>\n");
    }
  }, {
    key: "html",
    value: function html(_html) {
      return _html;
    }
    /**
     * @param {string} text
     * @param {string} level
     * @param {string} raw
     * @param {any} slugger
     */

  }, {
    key: "heading",
    value: function heading(text, level, raw, slugger) {
      if (this.options.headerIds) {
        var id = this.options.headerPrefix + slugger.slug(raw);
        return "<h".concat(level, " id=\"").concat(id, "\">").concat(text, "</h").concat(level, ">\n");
      } // ignore IDs


      return "<h".concat(level, ">").concat(text, "</h").concat(level, ">\n");
    }
  }, {
    key: "hr",
    value: function hr() {
      return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    }
  }, {
    key: "list",
    value: function list(body, ordered, start) {
      var type = ordered ? 'ol' : 'ul',
          startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
      return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
    }
    /**
     * @param {string} text
     */

  }, {
    key: "listitem",
    value: function listitem(text) {
      return "<li>".concat(text, "</li>\n");
    }
  }, {
    key: "checkbox",
    value: function checkbox(checked) {
      return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
    }
    /**
     * @param {string} text
     */

  }, {
    key: "paragraph",
    value: function paragraph(text) {
      return "<p>".concat(text, "</p>\n");
    }
    /**
     * @param {string} header
     * @param {string} body
     */

  }, {
    key: "table",
    value: function table(header, body) {
      if (body) body = "<tbody>".concat(body, "</tbody>");
      return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
    }
    /**
     * @param {string} content
     */

  }, {
    key: "tablerow",
    value: function tablerow(content) {
      return "<tr>\n".concat(content, "</tr>\n");
    }
  }, {
    key: "tablecell",
    value: function tablecell(content, flags) {
      var type = flags.header ? 'th' : 'td';
      var tag = flags.align ? "<".concat(type, " align=\"").concat(flags.align, "\">") : "<".concat(type, ">");
      return tag + content + "</".concat(type, ">\n");
    }
    /**
     * span level renderer
     * @param {string} text
     */

  }, {
    key: "strong",
    value: function strong(text) {
      return "<strong>".concat(text, "</strong>");
    }
    /**
     * @param {string} text
     */

  }, {
    key: "em",
    value: function em(text) {
      return "<em>".concat(text, "</em>");
    }
    /**
     * @param {string} text
     */

  }, {
    key: "codespan",
    value: function codespan(text) {
      return "<code>".concat(text, "</code>");
    }
  }, {
    key: "br",
    value: function br() {
      return this.options.xhtml ? '<br/>' : '<br>';
    }
    /**
     * @param {string} text
     */

  }, {
    key: "del",
    value: function del(text) {
      return "<del>".concat(text, "</del>");
    }
    /**
     * @param {string} href
     * @param {string} title
     * @param {string} text
     */

  }, {
    key: "link",
    value: function link(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

      if (href === null) {
        return text;
      }

      var out = '<a href="' + _escape(href) + '"';

      if (title) {
        out += ' title="' + title + '"';
      }

      out += '>' + text + '</a>';
      return out;
    }
    /**
     * @param {string} href
     * @param {string} title
     * @param {string} text
     */

  }, {
    key: "image",
    value: function image(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

      if (href === null) {
        return text;
      }

      var out = "<img src=\"".concat(href, "\" alt=\"").concat(text, "\"");

      if (title) {
        out += " title=\"".concat(title, "\"");
      }

      out += this.options.xhtml ? '/>' : '>';
      return out;
    }
  }, {
    key: "text",
    value: function text(_text2) {
      return _text2;
    }
  }]);

  return Renderer;
}();
/**
 * TextRenderer
 * returns only the textual part of the token
 */


var TextRenderer = /*#__PURE__*/function () {
  function TextRenderer() {
    _classCallCheck(this, TextRenderer);
  }

  _createClass(TextRenderer, [{
    key: "strong",
    value: // no need for block level renderers
    function strong(text) {
      return text;
    }
  }, {
    key: "em",
    value: function em(text) {
      return text;
    }
  }, {
    key: "codespan",
    value: function codespan(text) {
      return text;
    }
  }, {
    key: "del",
    value: function del(text) {
      return text;
    }
  }, {
    key: "html",
    value: function html(text) {
      return text;
    }
  }, {
    key: "text",
    value: function text(_text3) {
      return _text3;
    }
  }, {
    key: "link",
    value: function link(href, title, text) {
      return '' + text;
    }
  }, {
    key: "image",
    value: function image(href, title, text) {
      return '' + text;
    }
  }, {
    key: "br",
    value: function br() {
      return '';
    }
  }]);

  return TextRenderer;
}();
/**
 * Slugger generates header id
 */


var Slugger = /*#__PURE__*/function () {
  function Slugger() {
    _classCallCheck(this, Slugger);

    this.seen = {};
  }
  /**
   * @param {string} value
   */


  _createClass(Slugger, [{
    key: "serialize",
    value: function serialize(value) {
      return value.toLowerCase().trim() // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');
    }
    /**
     * Finds the next safe (unique) slug to use
     * @param {string} originalSlug
     * @param {boolean} isDryRun
     */

  }, {
    key: "getNextSafeSlug",
    value: function getNextSafeSlug(originalSlug, isDryRun) {
      var slug = originalSlug;
      var occurenceAccumulator = 0;

      if (this.seen.hasOwnProperty(slug)) {
        occurenceAccumulator = this.seen[originalSlug];

        do {
          occurenceAccumulator++;
          slug = originalSlug + '-' + occurenceAccumulator;
        } while (this.seen.hasOwnProperty(slug));
      }

      if (!isDryRun) {
        this.seen[originalSlug] = occurenceAccumulator;
        this.seen[slug] = 0;
      }

      return slug;
    }
    /**
     * Convert string to unique id
     * @param {object} [options]
     * @param {boolean} [options.dryrun] Generates the next unique slug without
     * updating the internal accumulator.
     */

  }, {
    key: "slug",
    value: function slug(value) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var slug = this.serialize(value);
      return this.getNextSafeSlug(slug, options.dryrun);
    }
  }]);

  return Slugger;
}();
/**
 * Parsing & Compiling
 */


var Parser = /*#__PURE__*/function () {
  function Parser(options) {
    _classCallCheck(this, Parser);

    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }
  /**
   * Static Parse Method
   */


  _createClass(Parser, [{
    key: "parse",
    value:
    /**
     * Parse Loop
     */
    function parse(tokens) {
      var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var out = '',
          i,
          j,
          k,
          l2,
          l3,
          row,
          cell,
          header,
          body,
          token,
          ordered,
          start,
          loose,
          itemBody,
          item,
          checked,
          task,
          checkbox,
          ret;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i]; // Run any renderer extensions

        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          ret = this.options.extensions.renderers[token.type].call({
            parser: this
          }, token);

          if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
            out += ret || '';
            continue;
          }
        }

        switch (token.type) {
          case 'space':
            {
              continue;
            }

          case 'hr':
            {
              out += this.renderer.hr();
              continue;
            }

          case 'heading':
            {
              out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
              continue;
            }

          case 'code':
            {
              out += this.renderer.code(token.text, token.lang, token.escaped);
              continue;
            }

          case 'table':
            {
              header = ''; // header

              cell = '';
              l2 = token.header.length;

              for (j = 0; j < l2; j++) {
                cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), {
                  header: true,
                  align: token.align[j]
                });
              }

              header += this.renderer.tablerow(cell);
              body = '';
              l2 = token.rows.length;

              for (j = 0; j < l2; j++) {
                row = token.rows[j];
                cell = '';
                l3 = row.length;

                for (k = 0; k < l3; k++) {
                  cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                    header: false,
                    align: token.align[k]
                  });
                }

                body += this.renderer.tablerow(cell);
              }

              out += this.renderer.table(header, body);
              continue;
            }

          case 'blockquote':
            {
              body = this.parse(token.tokens);
              out += this.renderer.blockquote(body);
              continue;
            }

          case 'list':
            {
              ordered = token.ordered;
              start = token.start;
              loose = token.loose;
              l2 = token.items.length;
              body = '';

              for (j = 0; j < l2; j++) {
                item = token.items[j];
                checked = item.checked;
                task = item.task;
                itemBody = '';

                if (item.task) {
                  checkbox = this.renderer.checkbox(checked);

                  if (loose) {
                    if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                      item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;

                      if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                        item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                      }
                    } else {
                      item.tokens.unshift({
                        type: 'text',
                        text: checkbox
                      });
                    }
                  } else {
                    itemBody += checkbox;
                  }
                }

                itemBody += this.parse(item.tokens, loose);
                body += this.renderer.listitem(itemBody, task, checked);
              }

              out += this.renderer.list(body, ordered, start);
              continue;
            }

          case 'html':
            {
              // TODO parse inline content if parameter markdown=1
              out += this.renderer.html(token.text);
              continue;
            }

          case 'paragraph':
            {
              out += this.renderer.paragraph(this.parseInline(token.tokens));
              continue;
            }

          case 'text':
            {
              body = token.tokens ? this.parseInline(token.tokens) : token.text;

              while (i + 1 < l && tokens[i + 1].type === 'text') {
                token = tokens[++i];
                body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
              }

              out += top ? this.renderer.paragraph(body) : body;
              continue;
            }

          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';

              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }

      return out;
    }
    /**
     * Parse Inline Tokens
     */

  }, {
    key: "parseInline",
    value: function parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      var out = '',
          i,
          token,
          ret;
      var l = tokens.length;

      for (i = 0; i < l; i++) {
        token = tokens[i]; // Run any renderer extensions

        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          ret = this.options.extensions.renderers[token.type].call({
            parser: this
          }, token);

          if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
            out += ret || '';
            continue;
          }
        }

        switch (token.type) {
          case 'escape':
            {
              out += renderer.text(token.text);
              break;
            }

          case 'html':
            {
              out += renderer.html(token.text);
              break;
            }

          case 'link':
            {
              out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
              break;
            }

          case 'image':
            {
              out += renderer.image(token.href, token.title, token.text);
              break;
            }

          case 'strong':
            {
              out += renderer.strong(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'em':
            {
              out += renderer.em(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'codespan':
            {
              out += renderer.codespan(token.text);
              break;
            }

          case 'br':
            {
              out += renderer.br();
              break;
            }

          case 'del':
            {
              out += renderer.del(this.parseInline(token.tokens, renderer));
              break;
            }

          case 'text':
            {
              out += renderer.text(token.text);
              break;
            }

          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';

              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }

      return out;
    }
  }], [{
    key: "parse",
    value: function parse(tokens, options) {
      var parser = new Parser(options);
      return parser.parse(tokens);
    }
    /**
     * Static Parse Inline Method
     */

  }, {
    key: "parseInline",
    value: function parseInline(tokens, options) {
      var parser = new Parser(options);
      return parser.parseInline(tokens);
    }
  }]);

  return Parser;
}();
/**
 * Marked
 */


function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }

  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
  }

  if (typeof opt === 'function') {
    callback = opt;
    opt = null;
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  if (callback) {
    var highlight = opt.highlight;
    var tokens;

    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    var done = function done(err) {
      var out;

      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }

          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }
      }

      opt.highlight = highlight;
      return err ? callback(err) : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;
    if (!tokens.length) return done();
    var pending = 0;
    marked.walkTokens(tokens, function (token) {
      if (token.type === 'code') {
        pending++;
        setTimeout(function () {
          highlight(token.text, token.lang, function (err, code) {
            if (err) {
              return done(err);
            }

            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }

            pending--;

            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });

    if (pending === 0) {
      done();
    }

    return;
  }

  try {
    var _tokens = Lexer.lex(src, opt);

    if (opt.walkTokens) {
      marked.walkTokens(_tokens, opt.walkTokens);
    }

    return Parser.parse(_tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';

    if (opt.silent) {
      return '<p>An error occurred:</p><pre>' + _escape(e.message + '', true) + '</pre>';
    }

    throw e;
  }
}
/**
 * Options
 */


marked.options = marked.setOptions = function (opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};

marked.getDefaults = getDefaults;
marked.defaults = defaults;
/**
 * Use Extension
 */

marked.use = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var opts = merge.apply(void 0, [{}].concat(args));
  var extensions = marked.defaults.extensions || {
    renderers: {},
    childTokens: {}
  };
  var hasExtensions;
  args.forEach(function (pack) {
    // ==-- Parse "addon" extensions --== //
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach(function (ext) {
        if (!ext.name) {
          throw new Error('extension name required');
        }

        if (ext.renderer) {
          // Renderer extensions
          var prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;

          if (prevRenderer) {
            // Replace extension with func to run new extension but fall back if false
            extensions.renderers[ext.name] = function () {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              var ret = ext.renderer.apply(this, args);

              if (ret === false) {
                ret = prevRenderer.apply(this, args);
              }

              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }

        if (ext.tokenizer) {
          // Tokenizer Extensions
          if (!ext.level || ext.level !== 'block' && ext.level !== 'inline') {
            throw new Error("extension level must be 'block' or 'inline'");
          }

          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }

          if (ext.start) {
            // Function to check for start of token
            if (ext.level === 'block') {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === 'inline') {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }

        if (ext.childTokens) {
          // Child tokens to be visited by walkTokens
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    } // ==-- Parse "overwrite" extensions --== //


    if (pack.renderer) {
      (function () {
        var renderer = marked.defaults.renderer || new Renderer();

        var _loop = function _loop(prop) {
          var prevRenderer = renderer[prop]; // Replace renderer with func to run extension, but fall back if false

          renderer[prop] = function () {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            var ret = pack.renderer[prop].apply(renderer, args);

            if (ret === false) {
              ret = prevRenderer.apply(renderer, args);
            }

            return ret;
          };
        };

        for (var prop in pack.renderer) {
          _loop(prop);
        }

        opts.renderer = renderer;
      })();
    }

    if (pack.tokenizer) {
      (function () {
        var tokenizer = marked.defaults.tokenizer || new Tokenizer();

        var _loop2 = function _loop2(prop) {
          var prevTokenizer = tokenizer[prop]; // Replace tokenizer with func to run extension, but fall back if false

          tokenizer[prop] = function () {
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            var ret = pack.tokenizer[prop].apply(tokenizer, args);

            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args);
            }

            return ret;
          };
        };

        for (var prop in pack.tokenizer) {
          _loop2(prop);
        }

        opts.tokenizer = tokenizer;
      })();
    } // ==-- Parse WalkTokens extensions --== //


    if (pack.walkTokens) {
      var _walkTokens = marked.defaults.walkTokens;

      opts.walkTokens = function (token) {
        pack.walkTokens.call(this, token);

        if (_walkTokens) {
          _walkTokens.call(this, token);
        }
      };
    }

    if (hasExtensions) {
      opts.extensions = extensions;
    }

    marked.setOptions(opts);
  });
};
/**
 * Run callback for every token
 */


marked.walkTokens = function (tokens, callback) {
  var _iterator2 = _createForOfIteratorHelper$3(tokens),
      _step2;

  try {
    var _loop3 = function _loop3() {
      var token = _step2.value;
      callback.call(marked, token);

      switch (token.type) {
        case 'table':
          {
            var _iterator3 = _createForOfIteratorHelper$3(token.header),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var cell = _step3.value;
                marked.walkTokens(cell.tokens, callback);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            var _iterator4 = _createForOfIteratorHelper$3(token.rows),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var row = _step4.value;

                var _iterator5 = _createForOfIteratorHelper$3(row),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var _cell = _step5.value;
                    marked.walkTokens(_cell.tokens, callback);
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            break;
          }

        case 'list':
          {
            marked.walkTokens(token.items, callback);
            break;
          }

        default:
          {
            if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
              // Walk any extensions
              marked.defaults.extensions.childTokens[token.type].forEach(function (childTokens) {
                marked.walkTokens(token[childTokens], callback);
              });
            } else if (token.tokens) {
              marked.walkTokens(token.tokens, callback);
            }
          }
      }
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop3();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
/**
 * Parse Inline
 * @param {string} src
 */


marked.parseInline = function (src, opt) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked.parseInline(): input parameter is undefined or null');
  }

  if (typeof src !== 'string') {
    throw new Error('marked.parseInline(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  try {
    var tokens = Lexer.lexInline(src, opt);

    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }

    return Parser.parseInline(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';

    if (opt.silent) {
      return '<p>An error occurred:</p><pre>' + _escape(e.message + '', true) + '</pre>';
    }

    throw e;
  }
};
/**
 * Expose
 */


marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.parse = marked;
marked.options;
marked.setOptions;
marked.use;
marked.walkTokens;
marked.parseInline;
var parse = marked;
Parser.parse;
Lexer.lex;

var charToInteger = {};
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

for (var i = 0; i < chars.length; i++) {
  charToInteger[chars.charCodeAt(i)] = i;
}

function decode(mappings) {
  var decoded = [];
  var line = [];
  var segment = [0, 0, 0, 0, 0];
  var j = 0;

  for (var i = 0, shift = 0, value = 0; i < mappings.length; i++) {
    var c = mappings.charCodeAt(i);

    if (c === 44) {
      // ","
      segmentify(line, segment, j);
      j = 0;
    } else if (c === 59) {
      // ";"
      segmentify(line, segment, j);
      j = 0;
      decoded.push(line);
      line = [];
      segment[0] = 0;
    } else {
      var integer = charToInteger[c];

      if (integer === undefined) {
        throw new Error('Invalid character (' + String.fromCharCode(c) + ')');
      }

      var hasContinuationBit = integer & 32;
      integer &= 31;
      value += integer << shift;

      if (hasContinuationBit) {
        shift += 5;
      } else {
        var shouldNegate = value & 1;
        value >>>= 1;

        if (shouldNegate) {
          value = value === 0 ? -0x80000000 : -value;
        }

        segment[j] += value;
        j++;
        value = shift = 0; // reset
      }
    }
  }

  segmentify(line, segment, j);
  decoded.push(line);
  return decoded;
}

function segmentify(line, segment, j) {
  // This looks ugly, but we're creating specialized arrays with a specific
  // length. This is much faster than creating a new array (which v8 expands to
  // a capacity of 17 after pushing the first item), or slicing out a subarray
  // (which is slow). Length 4 is assumed to be the most frequent, followed by
  // length 5 (since not everything will have an associated name), followed by
  // length 1 (it's probably rare for a source substring to not have an
  // associated segment data).
  if (j === 4) line.push([segment[0], segment[1], segment[2], segment[3]]);else if (j === 5) line.push([segment[0], segment[1], segment[2], segment[3], segment[4]]);else if (j === 1) line.push([segment[0]]);
}

function getLocationFromStack(stack, map) {
  if (!stack) return;
  var last = stack.split('\n')[1];
  var match = /<anonymous>:(\d+):(\d+)\)$/.exec(last);
  if (!match) return null;
  var line = +match[1];
  var column = +match[2];
  return trace({
    line: line,
    column: column
  }, map);
}

function trace(loc, map) {
  var mappings = decode(map.mappings);
  var segments = mappings[loc.line - 1];

  for (var i = 0; i < segments.length; i += 1) {
    var segment = segments[i];

    if (segment[0] === loc.column) {
      var _segment = _slicedToArray(segment, 4),
          sourceIndex = _segment[1],
          line = _segment[2],
          column = _segment[3];

      var source = map.sources[sourceIndex].slice(2);
      return {
        source: source,
        line: line + 1,
        column: column
      };
    }
  }

  return null;
}

function is_date(obj) {
  return Object.prototype.toString.call(obj) === '[object Date]';
}

function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === 'number' || is_date(current_value)) {
    // @ts-ignore
    var delta = target_value - current_value; // @ts-ignore

    var velocity = (current_value - last_value) / (ctx.dt || 1 / 60); // guard div by 0

    var _spring = ctx.opts.stiffness * delta;

    var damper = ctx.opts.damping * velocity;
    var acceleration = (_spring - damper) * ctx.inv_mass;
    var d = (velocity + acceleration) * ctx.dt;

    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value; // settled
    } else {
      ctx.settled = false; // signal loop to keep ticking
      // @ts-ignore

      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    // @ts-ignore
    return current_value.map(function (_, i) {
      return tick_spring(ctx, last_value[i], current_value[i], target_value[i]);
    });
  } else if (_typeof$1(current_value) === 'object') {
    var next_value = {};

    for (var k in current_value) {
      // @ts-ignore
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    } // @ts-ignore


    return next_value;
  } else {
    throw new Error("Cannot spring ".concat(_typeof$1(current_value), " values"));
  }
}

function spring(value) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var store = writable(value);
  var _opts$stiffness = opts.stiffness,
      stiffness = _opts$stiffness === void 0 ? 0.15 : _opts$stiffness,
      _opts$damping = opts.damping,
      damping = _opts$damping === void 0 ? 0.8 : _opts$damping,
      _opts$precision = opts.precision,
      precision = _opts$precision === void 0 ? 0.01 : _opts$precision;
  var last_time;
  var task;
  var current_token;
  var last_value = value;
  var target_value = value;
  var inv_mass = 1;
  var inv_mass_recovery_rate = 0;
  var cancel_task = false;

  function set(new_value) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    target_value = new_value;
    var token = current_token = {};

    if (value == null || opts.hard || spring.stiffness >= 1 && spring.damping >= 1) {
      cancel_task = true; // cancel any running animation

      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts.soft) {
      var rate = opts.soft === true ? .5 : +opts.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0; // infinite mass, unaffected by spring forces
    }

    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop(function (now) {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }

        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        var ctx = {
          inv_mass: inv_mass,
          opts: spring,
          settled: true,
          dt: (now - last_time) * 60 / 1000
        };
        var next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now;
        last_value = value;
        store.set(value = next_value);

        if (ctx.settled) {
          task = null;
        }

        return !ctx.settled;
      });
    }

    return new Promise(function (fulfil) {
      task.promise.then(function () {
        if (token === current_token) fulfil();
      });
    });
  }

  var spring = {
    set: set,
    update: function update(fn, opts) {
      return set(fn(target_value, value), opts);
    },
    subscribe: store.subscribe,
    stiffness: stiffness,
    damping: damping,
    precision: precision
  };
  return spring;
}

function _createSuper$k(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$k(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$k() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var get_main_slot_changes = function get_main_slot_changes(dirty) {
  return {};
};

var get_main_slot_context = function get_main_slot_context(ctx) {
  return {};
};

var get_panel_body_slot_changes = function get_panel_body_slot_changes(dirty) {
  return {};
};

var get_panel_body_slot_context = function get_panel_body_slot_context(ctx) {
  return {};
};

var get_panel_header_slot_changes = function get_panel_header_slot_changes(dirty) {
  return {};
};

var get_panel_header_slot_context = function get_panel_header_slot_context(ctx) {
  return {};
}; // (29:1) 


function create_a_slot$1(ctx) {
  var section;
  var current;
  var main_slot_template =
  /*#slots*/
  ctx[6].main;
  var main_slot = create_slot(main_slot_template, ctx,
  /*$$scope*/
  ctx[9], get_main_slot_context);
  return {
    c: function c() {
      section = element("section");
      if (main_slot) main_slot.c();
      attr(section, "slot", "a");
      attr(section, "class", "svelte-160vuma");
    },
    m: function m(target, anchor) {
      insert(target, section, anchor);

      if (main_slot) {
        main_slot.m(section, null);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      if (main_slot) {
        if (main_slot.p && (!current || dirty &
        /*$$scope*/
        512)) {
          update_slot_base(main_slot, main_slot_template, ctx,
          /*$$scope*/
          ctx[9], !current ? get_all_dirty_from_scope(
          /*$$scope*/
          ctx[9]) : get_slot_changes(main_slot_template,
          /*$$scope*/
          ctx[9], dirty, get_main_slot_changes), get_main_slot_context);
        }
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(main_slot, local);
      current = true;
    },
    o: function o(local) {
      transition_out(main_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(section);
      if (main_slot) main_slot.d(detaching);
    }
  };
} // (33:1) 


function create_b_slot$1(ctx) {
  var section;
  var div0;
  var h3;
  var t0;
  var t1;
  var t2;
  var div1;
  var current;
  var mounted;
  var dispose;
  var panel_header_slot_template =
  /*#slots*/
  ctx[6]["panel-header"];
  var panel_header_slot = create_slot(panel_header_slot_template, ctx,
  /*$$scope*/
  ctx[9], get_panel_header_slot_context);
  var panel_body_slot_template =
  /*#slots*/
  ctx[6]["panel-body"];
  var panel_body_slot = create_slot(panel_body_slot_template, ctx,
  /*$$scope*/
  ctx[9], get_panel_body_slot_context);
  return {
    c: function c() {
      section = element("section");
      div0 = element("div");
      h3 = element("h3");
      t0 = text(
      /*panel*/
      ctx[1]);
      t1 = space();
      if (panel_header_slot) panel_header_slot.c();
      t2 = space();
      div1 = element("div");
      if (panel_body_slot) panel_body_slot.c();
      attr(h3, "class", "svelte-160vuma");
      attr(div0, "class", "panel-header svelte-160vuma");
      attr(div1, "class", "panel-body svelte-160vuma");
      attr(section, "slot", "b");
      attr(section, "class", "svelte-160vuma");
    },
    m: function m(target, anchor) {
      insert(target, section, anchor);
      append(section, div0);
      append(div0, h3);
      append(h3, t0);
      append(div0, t1);

      if (panel_header_slot) {
        panel_header_slot.m(div0, null);
      }

      append(section, t2);
      append(section, div1);

      if (panel_body_slot) {
        panel_body_slot.m(div1, null);
      }

      current = true;

      if (!mounted) {
        dispose = listen(div0, "click",
        /*toggle*/
        ctx[4]);
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (!current || dirty &
      /*panel*/
      2) set_data(t0,
      /*panel*/
      ctx[1]);

      if (panel_header_slot) {
        if (panel_header_slot.p && (!current || dirty &
        /*$$scope*/
        512)) {
          update_slot_base(panel_header_slot, panel_header_slot_template, ctx,
          /*$$scope*/
          ctx[9], !current ? get_all_dirty_from_scope(
          /*$$scope*/
          ctx[9]) : get_slot_changes(panel_header_slot_template,
          /*$$scope*/
          ctx[9], dirty, get_panel_header_slot_changes), get_panel_header_slot_context);
        }
      }

      if (panel_body_slot) {
        if (panel_body_slot.p && (!current || dirty &
        /*$$scope*/
        512)) {
          update_slot_base(panel_body_slot, panel_body_slot_template, ctx,
          /*$$scope*/
          ctx[9], !current ? get_all_dirty_from_scope(
          /*$$scope*/
          ctx[9]) : get_slot_changes(panel_body_slot_template,
          /*$$scope*/
          ctx[9], dirty, get_panel_body_slot_changes), get_panel_body_slot_context);
        }
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(panel_header_slot, local);
      transition_in(panel_body_slot, local);
      current = true;
    },
    o: function o(local) {
      transition_out(panel_header_slot, local);
      transition_out(panel_body_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(section);
      if (panel_header_slot) panel_header_slot.d(detaching);
      if (panel_body_slot) panel_body_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}

function create_fragment$k(ctx) {
  var splitpane;
  var updating_max;
  var updating_pos;
  var current;

  function splitpane_max_binding(value) {
    /*splitpane_max_binding*/
    ctx[7](value);
  }

  function splitpane_pos_binding(value) {
    /*splitpane_pos_binding*/
    ctx[8](value);
  }

  var splitpane_props = {
    type: "vertical",
    $$slots: {
      b: [create_b_slot$1],
      a: [create_a_slot$1]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*max*/
  ctx[2] !== void 0) {
    splitpane_props.max =
    /*max*/
    ctx[2];
  }

  if (
  /*pos*/
  ctx[0] !== void 0) {
    splitpane_props.pos =
    /*pos*/
    ctx[0];
  }

  splitpane = new SplitPane({
    props: splitpane_props
  });
  binding_callbacks.push(function () {
    return bind(splitpane, 'max', splitpane_max_binding);
  });
  binding_callbacks.push(function () {
    return bind(splitpane, 'pos', splitpane_pos_binding);
  });
  return {
    c: function c() {
      create_component(splitpane.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(splitpane, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var splitpane_changes = {};

      if (dirty &
      /*$$scope, panel*/
      514) {
        splitpane_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_max && dirty &
      /*max*/
      4) {
        updating_max = true;
        splitpane_changes.max =
        /*max*/
        ctx[2];
        add_flush_callback(function () {
          return updating_max = false;
        });
      }

      if (!updating_pos && dirty &
      /*pos*/
      1) {
        updating_pos = true;
        splitpane_changes.pos =
        /*pos*/
        ctx[0];
        add_flush_callback(function () {
          return updating_pos = false;
        });
      }

      splitpane.$set(splitpane_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(splitpane.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(splitpane.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(splitpane, detaching);
    }
  };
}

function instance$k($$self, $$props, $$invalidate) {
  var $driver;
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  var panel = $$props.panel;
  var _$$props$pos = $$props.pos,
      pos = _$$props$pos === void 0 ? 50 : _$$props$pos;
  var previous_pos = Math.min(pos, 70);
  var max; // we can't bind to the spring itself, but we
  // can still use the spring to drive `pos`

  var driver = spring(pos);
  component_subscribe($$self, driver, function (value) {
    return $$invalidate(5, $driver = value);
  });

  var toggle = function toggle() {
    driver.set(pos, {
      hard: true
    });

    if (pos > 80) {
      driver.set(previous_pos);
    } else {
      previous_pos = pos;
      driver.set(max);
    }
  };

  function splitpane_max_binding(value) {
    max = value;
    $$invalidate(2, max);
  }

  function splitpane_pos_binding(value) {
    pos = value;
    $$invalidate(0, pos), $$invalidate(5, $driver);
  }

  $$self.$$set = function ($$props) {
    if ('panel' in $$props) $$invalidate(1, panel = $$props.panel);
    if ('pos' in $$props) $$invalidate(0, pos = $$props.pos);
    if ('$$scope' in $$props) $$invalidate(9, $$scope = $$props.$$scope);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*$driver*/
    32) {
      $$invalidate(0, pos = $driver);
    }
  };

  return [pos, panel, max, driver, toggle, $driver, slots, splitpane_max_binding, splitpane_pos_binding, $$scope];
}

var PaneWithPanel = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(PaneWithPanel, _SvelteComponent);

  var _super = _createSuper$k(PaneWithPanel);

  function PaneWithPanel(options) {
    var _this;

    _classCallCheck(this, PaneWithPanel);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$k, create_fragment$k, safe_not_equal, {
      panel: 1,
      pos: 0
    });
    return _this;
  }

  return _createClass(PaneWithPanel);
}(SvelteComponent);

var uid$2 = 1;

var ReplProxy = /*#__PURE__*/function () {
  function ReplProxy(iframe, handlers) {
    var _this = this;

    _classCallCheck(this, ReplProxy);

    this.iframe = iframe;
    this.handlers = handlers;
    this.pending_cmds = new Map();

    this.handle_event = function (e) {
      return _this.handle_repl_message(e);
    };

    window.addEventListener('message', this.handle_event, false);
  }

  _createClass(ReplProxy, [{
    key: "destroy",
    value: function destroy() {
      window.removeEventListener('message', this.handle_event);
    }
  }, {
    key: "iframe_command",
    value: function iframe_command(action, args) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var cmd_id = uid$2++;

        _this2.pending_cmds.set(cmd_id, {
          resolve: resolve,
          reject: reject
        });

        _this2.iframe.contentWindow.postMessage({
          action: action,
          cmd_id: cmd_id,
          args: args
        }, '*');
      });
    }
  }, {
    key: "handle_command_message",
    value: function handle_command_message(cmd_data) {
      var action = cmd_data.action;
      var id = cmd_data.cmd_id;
      var handler = this.pending_cmds.get(id);

      if (handler) {
        this.pending_cmds.delete(id);

        if (action === 'cmd_error') {
          var message = cmd_data.message,
              stack = cmd_data.stack;
          var e = new Error(message);
          e.stack = stack;
          handler.reject(e);
        }

        if (action === 'cmd_ok') {
          handler.resolve(cmd_data.args);
        }
      } else {
        console.error('command not found', id, cmd_data, _toConsumableArray(this.pending_cmds.keys()));
      }
    }
  }, {
    key: "handle_repl_message",
    value: function handle_repl_message(event) {
      if (event.source !== this.iframe.contentWindow) return;
      var _event$data = event.data,
          action = _event$data.action,
          args = _event$data.args;

      switch (action) {
        case 'cmd_error':
        case 'cmd_ok':
          return this.handle_command_message(event.data);

        case 'fetch_progress':
          return this.handlers.on_fetch_progress(args.remaining);

        case 'error':
          return this.handlers.on_error(event.data);

        case 'unhandledrejection':
          return this.handlers.on_unhandled_rejection(event.data);

        case 'console':
          return this.handlers.on_console(event.data);

        case 'console_group':
          return this.handlers.on_console_group(event.data);

        case 'console_group_collapsed':
          return this.handlers.on_console_group_collapsed(event.data);

        case 'console_group_end':
          return this.handlers.on_console_group_end(event.data);
      }
    }
  }, {
    key: "eval",
    value: function _eval(script) {
      return this.iframe_command('eval', {
        script: script
      });
    }
  }, {
    key: "handle_links",
    value: function handle_links() {
      return this.iframe_command('catch_clicks', {});
    }
  }]);

  return ReplProxy;
}();

function _createSuper$j(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$j(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$j() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment$j(ctx) {
  var div1;
  var div0;
  var mounted;
  var dispose;
  return {
    c: function c() {
      div1 = element("div");
      div0 = element("div");
      div0.textContent = "\u25B6";
      attr(div0, "class", "arrow svelte-kniv4z");
      toggle_class(div0, "expanded",
      /*expanded*/
      ctx[0]);
      attr(div1, "class", "container svelte-kniv4z");
    },
    m: function m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);

      if (!mounted) {
        dispose = listen(div1, "click",
        /*onClick*/
        ctx[1]);
        mounted = true;
      }
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*expanded*/
      1) {
        toggle_class(div0, "expanded",
        /*expanded*/
        ctx[0]);
      }
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(div1);
      mounted = false;
      dispose();
    }
  };
}

function instance$j($$self, $$props, $$invalidate) {
  var dispatch = createEventDispatcher();

  function onClick(event) {
    dispatch('click', event);
  }

  var expanded = $$props.expanded;

  $$self.$$set = function ($$props) {
    if ('expanded' in $$props) $$invalidate(0, expanded = $$props.expanded);
  };

  return [expanded, onClick];
}

var JSONArrow = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(JSONArrow, _SvelteComponent);

  var _super = _createSuper$j(JSONArrow);

  function JSONArrow(options) {
    var _this;

    _classCallCheck(this, JSONArrow);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$j, create_fragment$j, safe_not_equal, {
      expanded: 0
    });
    return _this;
  }

  return _createClass(JSONArrow);
}(SvelteComponent);

function objType(obj) {
  var type = Object.prototype.toString.call(obj).slice(8, -1);

  if (type === 'Object') {
    if (typeof obj[Symbol.iterator] === 'function') {
      return 'Iterable';
    }

    return obj.constructor.name;
  }

  return type;
}

function _createSuper$i(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$i(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$i() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_if_block$7(ctx) {
  var label;
  var span;
  var t0;
  var t1;
  return {
    c: function c() {
      label = element("label");
      span = element("span");
      t0 = text(
      /*key*/
      ctx[0]);
      t1 = text(
      /*colon*/
      ctx[2]);
      attr(label, "class", "svelte-15h461i");
      toggle_class(label, "spaced",
      /*isParentExpanded*/
      ctx[1]);
    },
    m: function m(target, anchor) {
      insert(target, label, anchor);
      append(label, span);
      append(span, t0);
      append(span, t1);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*key*/
      1) set_data(t0,
      /*key*/
      ctx[0]);
      if (dirty &
      /*colon*/
      4) set_data(t1,
      /*colon*/
      ctx[2]);

      if (dirty &
      /*isParentExpanded*/
      2) {
        toggle_class(label, "spaced",
        /*isParentExpanded*/
        ctx[1]);
      }
    },
    d: function d(detaching) {
      if (detaching) detach(label);
    }
  };
}

function create_fragment$i(ctx) {
  var if_block_anchor;
  var if_block =
  /*showKey*/
  ctx[3] &&
  /*key*/
  ctx[0] && create_if_block$7(ctx);
  return {
    c: function c() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    m: function m(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*showKey*/
      ctx[3] &&
      /*key*/
      ctx[0]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$7(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach(if_block_anchor);
    }
  };
}

function instance$i($$self, $$props, $$invalidate) {
  var showKey;
  var key = $$props.key,
      isParentExpanded = $$props.isParentExpanded,
      _$$props$isParentArra = $$props.isParentArray,
      isParentArray = _$$props$isParentArra === void 0 ? false : _$$props$isParentArra,
      _$$props$colon = $$props.colon,
      colon = _$$props$colon === void 0 ? ':' : _$$props$colon;

  $$self.$$set = function ($$props) {
    if ('key' in $$props) $$invalidate(0, key = $$props.key);
    if ('isParentExpanded' in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(4, isParentArray = $$props.isParentArray);
    if ('colon' in $$props) $$invalidate(2, colon = $$props.colon);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*isParentExpanded, isParentArray, key*/
    19) {
      $$invalidate(3, showKey = isParentExpanded || !isParentArray || key != +key);
    }
  };

  return [key, isParentExpanded, colon, showKey, isParentArray];
}

var JSONKey = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(JSONKey, _SvelteComponent);

  var _super = _createSuper$i(JSONKey);

  function JSONKey(options) {
    var _this;

    _classCallCheck(this, JSONKey);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$i, create_fragment$i, safe_not_equal, {
      key: 0,
      isParentExpanded: 1,
      isParentArray: 4,
      colon: 2
    });
    return _this;
  }

  return _createClass(JSONKey);
}(SvelteComponent);

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

var contextKey = {};

function _createSuper$h(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$h(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$h() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function get_each_context$5(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  child_ctx[20] = i;
  return child_ctx;
} // (48:2) {#if expandable && isParentExpanded}


function create_if_block_3$2(ctx) {
  var jsonarrow;
  var current;
  jsonarrow = new JSONArrow({
    props: {
      expanded:
      /*expanded*/
      ctx[0]
    }
  });
  jsonarrow.$on("click",
  /*toggleExpand*/
  ctx[15]);
  return {
    c: function c() {
      create_component(jsonarrow.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonarrow, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonarrow_changes = {};
      if (dirty &
      /*expanded*/
      1) jsonarrow_changes.expanded =
      /*expanded*/
      ctx[0];
      jsonarrow.$set(jsonarrow_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonarrow.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonarrow.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonarrow, detaching);
    }
  };
} // (65:4) {:else}


function create_else_block$4(ctx) {
  var span;
  return {
    c: function c() {
      span = element("span");
      span.textContent = "…";
    },
    m: function m(target, anchor) {
      insert(target, span, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(span);
    }
  };
} // (53:4) {#if isParentExpanded}


function create_if_block$6(ctx) {
  var ul;
  var t;
  var current;
  var mounted;
  var dispose;
  var each_value =
  /*slicedKeys*/
  ctx[13];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$5(get_each_context$5(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var if_block =
  /*slicedKeys*/
  ctx[13].length <
  /*previewKeys*/
  ctx[7].length && create_if_block_1$6();
  return {
    c: function c() {
      ul = element("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t = space();
      if (if_block) if_block.c();
      attr(ul, "class", "svelte-2jkrkt");
      toggle_class(ul, "collapse", !
      /*expanded*/
      ctx[0]);
    },
    m: function m(target, anchor) {
      insert(target, ul, anchor);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(ul, null);
      }

      append(ul, t);
      if (if_block) if_block.m(ul, null);
      current = true;

      if (!mounted) {
        dispose = listen(ul, "click",
        /*expand*/
        ctx[16]);
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*expanded, previewKeys, getKey, slicedKeys, isArray, getValue, getPreviewValue*/
      10129) {
        each_value =
        /*slicedKeys*/
        ctx[13];

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context$5(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);

            transition_in(each_blocks[_i3], 1);
          } else {
            each_blocks[_i3] = create_each_block$5(child_ctx);

            each_blocks[_i3].c();

            transition_in(each_blocks[_i3], 1);

            each_blocks[_i3].m(ul, t);
          }
        }

        group_outros();

        for (_i3 = each_value.length; _i3 < each_blocks.length; _i3 += 1) {
          out(_i3);
        }

        check_outros();
      }

      if (
      /*slicedKeys*/
      ctx[13].length <
      /*previewKeys*/
      ctx[7].length) {
        if (if_block) ; else {
          if_block = create_if_block_1$6();
          if_block.c();
          if_block.m(ul, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (dirty &
      /*expanded*/
      1) {
        toggle_class(ul, "collapse", !
        /*expanded*/
        ctx[0]);
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
      if (detaching) detach(ul);
      destroy_each(each_blocks, detaching);
      if (if_block) if_block.d();
      mounted = false;
      dispose();
    }
  };
} // (57:10) {#if !expanded && index < previewKeys.length - 1}


function create_if_block_2$5(ctx) {
  var span;
  return {
    c: function c() {
      span = element("span");
      span.textContent = ",";
      attr(span, "class", "comma svelte-2jkrkt");
    },
    m: function m(target, anchor) {
      insert(target, span, anchor);
    },
    d: function d(detaching) {
      if (detaching) detach(span);
    }
  };
} // (55:8) {#each slicedKeys as key, index}


function create_each_block$5(ctx) {
  var jsonnode;
  var t;
  var if_block_anchor;
  var current;
  jsonnode = new JSONNode({
    props: {
      key:
      /*getKey*/
      ctx[8](
      /*key*/
      ctx[12]),
      isParentExpanded:
      /*expanded*/
      ctx[0],
      isParentArray:
      /*isArray*/
      ctx[4],
      value:
      /*expanded*/
      ctx[0] ?
      /*getValue*/
      ctx[9](
      /*key*/
      ctx[12]) :
      /*getPreviewValue*/
      ctx[10](
      /*key*/
      ctx[12])
    }
  });
  var if_block = !
  /*expanded*/
  ctx[0] &&
  /*index*/
  ctx[20] <
  /*previewKeys*/
  ctx[7].length - 1 && create_if_block_2$5();
  return {
    c: function c() {
      create_component(jsonnode.$$.fragment);
      t = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    m: function m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      insert(target, t, anchor);
      if (if_block) if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonnode_changes = {};
      if (dirty &
      /*getKey, slicedKeys*/
      8448) jsonnode_changes.key =
      /*getKey*/
      ctx[8](
      /*key*/
      ctx[12]);
      if (dirty &
      /*expanded*/
      1) jsonnode_changes.isParentExpanded =
      /*expanded*/
      ctx[0];
      if (dirty &
      /*isArray*/
      16) jsonnode_changes.isParentArray =
      /*isArray*/
      ctx[4];
      if (dirty &
      /*expanded, getValue, slicedKeys, getPreviewValue*/
      9729) jsonnode_changes.value =
      /*expanded*/
      ctx[0] ?
      /*getValue*/
      ctx[9](
      /*key*/
      ctx[12]) :
      /*getPreviewValue*/
      ctx[10](
      /*key*/
      ctx[12]);
      jsonnode.$set(jsonnode_changes);

      if (!
      /*expanded*/
      ctx[0] &&
      /*index*/
      ctx[20] <
      /*previewKeys*/
      ctx[7].length - 1) {
        if (if_block) ; else {
          if_block = create_if_block_2$5();
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonnode, detaching);
      if (detaching) detach(t);
      if (if_block) if_block.d(detaching);
      if (detaching) detach(if_block_anchor);
    }
  };
} // (61:8) {#if slicedKeys.length < previewKeys.length }


function create_if_block_1$6(ctx) {
  var span;
  return {
    c: function c() {
      span = element("span");
      span.textContent = "…";
    },
    m: function m(target, anchor) {
      insert(target, span, anchor);
    },
    d: function d(detaching) {
      if (detaching) detach(span);
    }
  };
}

function create_fragment$h(ctx) {
  var li;
  var t0;
  var jsonkey;
  var t1;
  var span1;
  var span0;
  var t2;
  var t3;
  var t4;
  var current_block_type_index;
  var if_block1;
  var t5;
  var span2;
  var t6;
  var current;
  var mounted;
  var dispose;
  var if_block0 =
  /*expandable*/
  ctx[11] &&
  /*isParentExpanded*/
  ctx[2] && create_if_block_3$2(ctx);
  jsonkey = new JSONKey({
    props: {
      key:
      /*key*/
      ctx[12],
      colon:
      /*context*/
      ctx[14].colon,
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3]
    }
  });
  var if_block_creators = [create_if_block$6, create_else_block$4];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*isParentExpanded*/
    ctx[2]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c: function c() {
      li = element("li");
      if (if_block0) if_block0.c();
      t0 = space();
      create_component(jsonkey.$$.fragment);
      t1 = space();
      span1 = element("span");
      span0 = element("span");
      t2 = text(
      /*label*/
      ctx[1]);
      t3 = text(
      /*bracketOpen*/
      ctx[5]);
      t4 = space();
      if_block1.c();
      t5 = space();
      span2 = element("span");
      t6 = text(
      /*bracketClose*/
      ctx[6]);
      attr(li, "class", "svelte-2jkrkt");
      toggle_class(li, "indent",
      /*isParentExpanded*/
      ctx[2]);
    },
    m: function m(target, anchor) {
      insert(target, li, anchor);
      if (if_block0) if_block0.m(li, null);
      append(li, t0);
      mount_component(jsonkey, li, null);
      append(li, t1);
      append(li, span1);
      append(span1, span0);
      append(span0, t2);
      append(span1, t3);
      append(li, t4);
      if_blocks[current_block_type_index].m(li, null);
      append(li, t5);
      append(li, span2);
      append(span2, t6);
      current = true;

      if (!mounted) {
        dispose = listen(span0, "click",
        /*toggleExpand*/
        ctx[15]);
        mounted = true;
      }
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*expandable*/
      ctx[11] &&
      /*isParentExpanded*/
      ctx[2]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*expandable, isParentExpanded*/
          2052) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_3$2(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(li, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      var jsonkey_changes = {};
      if (dirty &
      /*key*/
      4096) jsonkey_changes.key =
      /*key*/
      ctx[12];
      if (dirty &
      /*isParentExpanded*/
      4) jsonkey_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsonkey_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      jsonkey.$set(jsonkey_changes);
      if (!current || dirty &
      /*label*/
      2) set_data(t2,
      /*label*/
      ctx[1]);
      if (!current || dirty &
      /*bracketOpen*/
      32) set_data(t3,
      /*bracketOpen*/
      ctx[5]);
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
        if_block1.m(li, t5);
      }

      if (!current || dirty &
      /*bracketClose*/
      64) set_data(t6,
      /*bracketClose*/
      ctx[6]);

      if (dirty &
      /*isParentExpanded*/
      4) {
        toggle_class(li, "indent",
        /*isParentExpanded*/
        ctx[2]);
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(jsonkey.$$.fragment, local);
      transition_in(if_block1);
      current = true;
    },
    o: function o(local) {
      transition_out(if_block0);
      transition_out(jsonkey.$$.fragment, local);
      transition_out(if_block1);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(li);
      if (if_block0) if_block0.d();
      destroy_component(jsonkey);
      if_blocks[current_block_type_index].d();
      mounted = false;
      dispose();
    }
  };
}

function instance$h($$self, $$props, $$invalidate) {
  var slicedKeys;
  var key = $$props.key,
      keys = $$props.keys,
      _$$props$colon = $$props.colon,
      colon = _$$props$colon === void 0 ? ':' : _$$props$colon,
      _$$props$label = $$props.label,
      label = _$$props$label === void 0 ? '' : _$$props$label,
      isParentExpanded = $$props.isParentExpanded,
      isParentArray = $$props.isParentArray,
      _$$props$isArray = $$props.isArray,
      isArray = _$$props$isArray === void 0 ? false : _$$props$isArray,
      bracketOpen = $$props.bracketOpen,
      bracketClose = $$props.bracketClose;
  var _$$props$previewKeys = $$props.previewKeys,
      previewKeys = _$$props$previewKeys === void 0 ? keys : _$$props$previewKeys;
  var _$$props$getKey = $$props.getKey,
      getKey = _$$props$getKey === void 0 ? function (key) {
    return key;
  } : _$$props$getKey;
  var _$$props$getValue = $$props.getValue,
      getValue = _$$props$getValue === void 0 ? function (key) {
    return key;
  } : _$$props$getValue;
  var _$$props$getPreviewVa = $$props.getPreviewValue,
      getPreviewValue = _$$props$getPreviewVa === void 0 ? getValue : _$$props$getPreviewVa;
  var _$$props$expanded = $$props.expanded,
      expanded = _$$props$expanded === void 0 ? false : _$$props$expanded,
      _$$props$expandable = $$props.expandable,
      expandable = _$$props$expandable === void 0 ? true : _$$props$expandable;
  var context = getContext(contextKey);
  setContext(contextKey, _objectSpread$1(_objectSpread$1({}, context), {}, {
    colon: colon
  }));

  function toggleExpand() {
    $$invalidate(0, expanded = !expanded);
  }

  function expand() {
    $$invalidate(0, expanded = true);
  }

  $$self.$$set = function ($$props) {
    if ('key' in $$props) $$invalidate(12, key = $$props.key);
    if ('keys' in $$props) $$invalidate(17, keys = $$props.keys);
    if ('colon' in $$props) $$invalidate(18, colon = $$props.colon);
    if ('label' in $$props) $$invalidate(1, label = $$props.label);
    if ('isParentExpanded' in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
    if ('isArray' in $$props) $$invalidate(4, isArray = $$props.isArray);
    if ('bracketOpen' in $$props) $$invalidate(5, bracketOpen = $$props.bracketOpen);
    if ('bracketClose' in $$props) $$invalidate(6, bracketClose = $$props.bracketClose);
    if ('previewKeys' in $$props) $$invalidate(7, previewKeys = $$props.previewKeys);
    if ('getKey' in $$props) $$invalidate(8, getKey = $$props.getKey);
    if ('getValue' in $$props) $$invalidate(9, getValue = $$props.getValue);
    if ('getPreviewValue' in $$props) $$invalidate(10, getPreviewValue = $$props.getPreviewValue);
    if ('expanded' in $$props) $$invalidate(0, expanded = $$props.expanded);
    if ('expandable' in $$props) $$invalidate(11, expandable = $$props.expandable);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*isParentExpanded*/
    4) {
      if (!isParentExpanded) {
        $$invalidate(0, expanded = false);
      }
    }

    if ($$self.$$.dirty &
    /*expanded, keys, previewKeys*/
    131201) {
      $$invalidate(13, slicedKeys = expanded ? keys : previewKeys.slice(0, 5));
    }
  };

  return [expanded, label, isParentExpanded, isParentArray, isArray, bracketOpen, bracketClose, previewKeys, getKey, getValue, getPreviewValue, expandable, key, slicedKeys, context, toggleExpand, expand, keys, colon];
}

var JSONNested = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(JSONNested, _SvelteComponent);

  var _super = _createSuper$h(JSONNested);

  function JSONNested(options) {
    var _this;

    _classCallCheck(this, JSONNested);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$h, create_fragment$h, safe_not_equal, {
      key: 12,
      keys: 17,
      colon: 18,
      label: 1,
      isParentExpanded: 2,
      isParentArray: 3,
      isArray: 4,
      bracketOpen: 5,
      bracketClose: 6,
      previewKeys: 7,
      getKey: 8,
      getValue: 9,
      getPreviewValue: 10,
      expanded: 0,
      expandable: 11
    });
    return _this;
  }

  return _createClass(JSONNested);
}(SvelteComponent);

function _createSuper$g(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$g(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$g() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment$g(ctx) {
  var jsonnested;
  var current;
  jsonnested = new JSONNested({
    props: {
      key:
      /*key*/
      ctx[0],
      expanded:
      /*expanded*/
      ctx[4],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[1],
      isParentArray:
      /*isParentArray*/
      ctx[2],
      keys:
      /*keys*/
      ctx[5],
      getValue:
      /*getValue*/
      ctx[6],
      label: "" + (
      /*nodeType*/
      ctx[3] + " "),
      bracketOpen: '{',
      bracketClose: '}'
    }
  });
  return {
    c: function c() {
      create_component(jsonnested.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var jsonnested_changes = {};
      if (dirty &
      /*key*/
      1) jsonnested_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*expanded*/
      16) jsonnested_changes.expanded =
      /*expanded*/
      ctx[4];
      if (dirty &
      /*isParentExpanded*/
      2) jsonnested_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[1];
      if (dirty &
      /*isParentArray*/
      4) jsonnested_changes.isParentArray =
      /*isParentArray*/
      ctx[2];
      if (dirty &
      /*keys*/
      32) jsonnested_changes.keys =
      /*keys*/
      ctx[5];
      if (dirty &
      /*nodeType*/
      8) jsonnested_changes.label = "" + (
      /*nodeType*/
      ctx[3] + " ");
      jsonnested.$set(jsonnested_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonnested, detaching);
    }
  };
}

function instance$g($$self, $$props, $$invalidate) {
  var keys;
  var key = $$props.key,
      value = $$props.value,
      isParentExpanded = $$props.isParentExpanded,
      isParentArray = $$props.isParentArray,
      nodeType = $$props.nodeType;
  var _$$props$expanded = $$props.expanded,
      expanded = _$$props$expanded === void 0 ? false : _$$props$expanded;

  function getValue(key) {
    return value[key];
  }

  $$self.$$set = function ($$props) {
    if ('key' in $$props) $$invalidate(0, key = $$props.key);
    if ('value' in $$props) $$invalidate(7, value = $$props.value);
    if ('isParentExpanded' in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(2, isParentArray = $$props.isParentArray);
    if ('nodeType' in $$props) $$invalidate(3, nodeType = $$props.nodeType);
    if ('expanded' in $$props) $$invalidate(4, expanded = $$props.expanded);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*value*/
    128) {
      $$invalidate(5, keys = Object.getOwnPropertyNames(value));
    }
  };

  return [key, isParentExpanded, isParentArray, nodeType, expanded, keys, getValue, value];
}

var JSONObjectNode = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(JSONObjectNode, _SvelteComponent);

  var _super = _createSuper$g(JSONObjectNode);

  function JSONObjectNode(options) {
    var _this;

    _classCallCheck(this, JSONObjectNode);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$g, create_fragment$g, safe_not_equal, {
      key: 0,
      value: 7,
      isParentExpanded: 1,
      isParentArray: 2,
      nodeType: 3,
      expanded: 4
    });
    return _this;
  }

  return _createClass(JSONObjectNode);
}(SvelteComponent);

function _createSuper$f(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$f(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$f() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment$f(ctx) {
  var jsonnested;
  var current;
  jsonnested = new JSONNested({
    props: {
      key:
      /*key*/
      ctx[0],
      expanded:
      /*expanded*/
      ctx[4],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3],
      isArray: true,
      keys:
      /*keys*/
      ctx[5],
      previewKeys:
      /*previewKeys*/
      ctx[6],
      getValue:
      /*getValue*/
      ctx[7],
      label: "Array(" +
      /*value*/
      ctx[1].length + ")",
      bracketOpen: "[",
      bracketClose: "]"
    }
  });
  return {
    c: function c() {
      create_component(jsonnested.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var jsonnested_changes = {};
      if (dirty &
      /*key*/
      1) jsonnested_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*expanded*/
      16) jsonnested_changes.expanded =
      /*expanded*/
      ctx[4];
      if (dirty &
      /*isParentExpanded*/
      4) jsonnested_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsonnested_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      if (dirty &
      /*keys*/
      32) jsonnested_changes.keys =
      /*keys*/
      ctx[5];
      if (dirty &
      /*previewKeys*/
      64) jsonnested_changes.previewKeys =
      /*previewKeys*/
      ctx[6];
      if (dirty &
      /*value*/
      2) jsonnested_changes.label = "Array(" +
      /*value*/
      ctx[1].length + ")";
      jsonnested.$set(jsonnested_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonnested, detaching);
    }
  };
}

function instance$f($$self, $$props, $$invalidate) {
  var keys;
  var previewKeys;
  var key = $$props.key,
      value = $$props.value,
      isParentExpanded = $$props.isParentExpanded,
      isParentArray = $$props.isParentArray;
  var _$$props$expanded = $$props.expanded,
      expanded = _$$props$expanded === void 0 ? false : _$$props$expanded;
  var filteredKey = new Set(['length']);

  function getValue(key) {
    return value[key];
  }

  $$self.$$set = function ($$props) {
    if ('key' in $$props) $$invalidate(0, key = $$props.key);
    if ('value' in $$props) $$invalidate(1, value = $$props.value);
    if ('isParentExpanded' in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
    if ('expanded' in $$props) $$invalidate(4, expanded = $$props.expanded);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*value*/
    2) {
      $$invalidate(5, keys = Object.getOwnPropertyNames(value));
    }

    if ($$self.$$.dirty &
    /*keys*/
    32) {
      $$invalidate(6, previewKeys = keys.filter(function (key) {
        return !filteredKey.has(key);
      }));
    }
  };

  return [key, value, isParentExpanded, isParentArray, expanded, keys, previewKeys, getValue];
}

var JSONArrayNode = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(JSONArrayNode, _SvelteComponent);

  var _super = _createSuper$f(JSONArrayNode);

  function JSONArrayNode(options) {
    var _this;

    _classCallCheck(this, JSONArrayNode);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$f, create_fragment$f, safe_not_equal, {
      key: 0,
      value: 1,
      isParentExpanded: 2,
      isParentArray: 3,
      expanded: 4
    });
    return _this;
  }

  return _createClass(JSONArrayNode);
}(SvelteComponent);

function _createSuper$e(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$e(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$e() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function create_fragment$e(ctx) {
  var jsonnested;
  var current;
  jsonnested = new JSONNested({
    props: {
      key:
      /*key*/
      ctx[0],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[1],
      isParentArray:
      /*isParentArray*/
      ctx[2],
      keys:
      /*keys*/
      ctx[4],
      getKey: getKey$1,
      getValue: getValue$1,
      isArray: true,
      label: "" + (
      /*nodeType*/
      ctx[3] + "(" +
      /*keys*/
      ctx[4].length + ")"),
      bracketOpen: '{',
      bracketClose: '}'
    }
  });
  return {
    c: function c() {
      create_component(jsonnested.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var jsonnested_changes = {};
      if (dirty &
      /*key*/
      1) jsonnested_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*isParentExpanded*/
      2) jsonnested_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[1];
      if (dirty &
      /*isParentArray*/
      4) jsonnested_changes.isParentArray =
      /*isParentArray*/
      ctx[2];
      if (dirty &
      /*keys*/
      16) jsonnested_changes.keys =
      /*keys*/
      ctx[4];
      if (dirty &
      /*nodeType, keys*/
      24) jsonnested_changes.label = "" + (
      /*nodeType*/
      ctx[3] + "(" +
      /*keys*/
      ctx[4].length + ")");
      jsonnested.$set(jsonnested_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonnested, detaching);
    }
  };
}

function getKey$1(key) {
  return String(key[0]);
}

function getValue$1(key) {
  return key[1];
}

function instance$e($$self, $$props, $$invalidate) {
  var key = $$props.key,
      value = $$props.value,
      isParentExpanded = $$props.isParentExpanded,
      isParentArray = $$props.isParentArray,
      nodeType = $$props.nodeType;
  var keys = [];

  $$self.$$set = function ($$props) {
    if ('key' in $$props) $$invalidate(0, key = $$props.key);
    if ('value' in $$props) $$invalidate(5, value = $$props.value);
    if ('isParentExpanded' in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(2, isParentArray = $$props.isParentArray);
    if ('nodeType' in $$props) $$invalidate(3, nodeType = $$props.nodeType);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*value*/
    32) {
      {
        var result = [];
        var i = 0;

        var _iterator = _createForOfIteratorHelper$2(value),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;
            result.push([i++, entry]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        $$invalidate(4, keys = result);
      }
    }
  };

  return [key, isParentExpanded, isParentArray, nodeType, keys, value];
}

var JSONIterableArrayNode = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(JSONIterableArrayNode, _SvelteComponent);

  var _super = _createSuper$e(JSONIterableArrayNode);

  function JSONIterableArrayNode(options) {
    var _this;

    _classCallCheck(this, JSONIterableArrayNode);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$e, create_fragment$e, safe_not_equal, {
      key: 0,
      value: 5,
      isParentExpanded: 1,
      isParentArray: 2,
      nodeType: 3
    });
    return _this;
  }

  return _createClass(JSONIterableArrayNode);
}(SvelteComponent);

var MapEntry = /*#__PURE__*/_createClass(function MapEntry(key, value) {
  _classCallCheck(this, MapEntry);

  this.key = key;
  this.value = value;
});

function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function create_fragment$d(ctx) {
  var jsonnested;
  var current;
  jsonnested = new JSONNested({
    props: {
      key:
      /*key*/
      ctx[0],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[1],
      isParentArray:
      /*isParentArray*/
      ctx[2],
      keys:
      /*keys*/
      ctx[4],
      getKey: getKey,
      getValue: getValue,
      label: "" + (
      /*nodeType*/
      ctx[3] + "(" +
      /*keys*/
      ctx[4].length + ")"),
      colon: "",
      bracketOpen: '{',
      bracketClose: '}'
    }
  });
  return {
    c: function c() {
      create_component(jsonnested.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var jsonnested_changes = {};
      if (dirty &
      /*key*/
      1) jsonnested_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*isParentExpanded*/
      2) jsonnested_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[1];
      if (dirty &
      /*isParentArray*/
      4) jsonnested_changes.isParentArray =
      /*isParentArray*/
      ctx[2];
      if (dirty &
      /*keys*/
      16) jsonnested_changes.keys =
      /*keys*/
      ctx[4];
      if (dirty &
      /*nodeType, keys*/
      24) jsonnested_changes.label = "" + (
      /*nodeType*/
      ctx[3] + "(" +
      /*keys*/
      ctx[4].length + ")");
      jsonnested.$set(jsonnested_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonnested, detaching);
    }
  };
}

function getKey(entry) {
  return entry[0];
}

function getValue(entry) {
  return entry[1];
}

function instance$d($$self, $$props, $$invalidate) {
  var key = $$props.key,
      value = $$props.value,
      isParentExpanded = $$props.isParentExpanded,
      isParentArray = $$props.isParentArray,
      nodeType = $$props.nodeType;
  var keys = [];

  $$self.$$set = function ($$props) {
    if ('key' in $$props) $$invalidate(0, key = $$props.key);
    if ('value' in $$props) $$invalidate(5, value = $$props.value);
    if ('isParentExpanded' in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(2, isParentArray = $$props.isParentArray);
    if ('nodeType' in $$props) $$invalidate(3, nodeType = $$props.nodeType);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*value*/
    32) {
      {
        var result = [];
        var i = 0;

        var _iterator = _createForOfIteratorHelper$1(value),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;
            result.push([i++, new MapEntry(entry[0], entry[1])]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        $$invalidate(4, keys = result);
      }
    }
  };

  return [key, isParentExpanded, isParentArray, nodeType, keys, value];
}

var JSONIterableMapNode = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(JSONIterableMapNode, _SvelteComponent);

  var _super = _createSuper$d(JSONIterableMapNode);

  function JSONIterableMapNode(options) {
    var _this;

    _classCallCheck(this, JSONIterableMapNode);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$d, create_fragment$d, safe_not_equal, {
      key: 0,
      value: 5,
      isParentExpanded: 1,
      isParentArray: 2,
      nodeType: 3
    });
    return _this;
  }

  return _createClass(JSONIterableMapNode);
}(SvelteComponent);

function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment$c(ctx) {
  var jsonnested;
  var current;
  jsonnested = new JSONNested({
    props: {
      expanded:
      /*expanded*/
      ctx[4],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3],
      key:
      /*isParentExpanded*/
      ctx[2] ? String(
      /*key*/
      ctx[0]) :
      /*value*/
      ctx[1].key,
      keys:
      /*keys*/
      ctx[5],
      getValue:
      /*getValue*/
      ctx[6],
      label:
      /*isParentExpanded*/
      ctx[2] ? ': Entry ' : '=> ',
      bracketOpen: '{',
      bracketClose: '}'
    }
  });
  return {
    c: function c() {
      create_component(jsonnested.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonnested, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var jsonnested_changes = {};
      if (dirty &
      /*expanded*/
      16) jsonnested_changes.expanded =
      /*expanded*/
      ctx[4];
      if (dirty &
      /*isParentExpanded*/
      4) jsonnested_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsonnested_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      if (dirty &
      /*isParentExpanded, key, value*/
      7) jsonnested_changes.key =
      /*isParentExpanded*/
      ctx[2] ? String(
      /*key*/
      ctx[0]) :
      /*value*/
      ctx[1].key;
      if (dirty &
      /*isParentExpanded*/
      4) jsonnested_changes.label =
      /*isParentExpanded*/
      ctx[2] ? ': Entry ' : '=> ';
      jsonnested.$set(jsonnested_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonnested.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonnested.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonnested, detaching);
    }
  };
}

function instance$c($$self, $$props, $$invalidate) {
  var key = $$props.key,
      value = $$props.value,
      isParentExpanded = $$props.isParentExpanded,
      isParentArray = $$props.isParentArray;
  var _$$props$expanded = $$props.expanded,
      expanded = _$$props$expanded === void 0 ? false : _$$props$expanded;
  var keys = ['key', 'value'];

  function getValue(key) {
    return value[key];
  }

  $$self.$$set = function ($$props) {
    if ('key' in $$props) $$invalidate(0, key = $$props.key);
    if ('value' in $$props) $$invalidate(1, value = $$props.value);
    if ('isParentExpanded' in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
    if ('expanded' in $$props) $$invalidate(4, expanded = $$props.expanded);
  };

  return [key, value, isParentExpanded, isParentArray, expanded, keys, getValue];
}

var JSONMapEntryNode = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(JSONMapEntryNode, _SvelteComponent);

  var _super = _createSuper$c(JSONMapEntryNode);

  function JSONMapEntryNode(options) {
    var _this;

    _classCallCheck(this, JSONMapEntryNode);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$c, create_fragment$c, safe_not_equal, {
      key: 0,
      value: 1,
      isParentExpanded: 2,
      isParentArray: 3,
      expanded: 4
    });
    return _this;
  }

  return _createClass(JSONMapEntryNode);
}(SvelteComponent);

function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment$b(ctx) {
  var li;
  var jsonkey;
  var t0;
  var span;
  var t1_value = (
  /*valueGetter*/
  ctx[2] ?
  /*valueGetter*/
  ctx[2](
  /*value*/
  ctx[1]) :
  /*value*/
  ctx[1]) + "";
  var t1;
  var span_class_value;
  var current;
  jsonkey = new JSONKey({
    props: {
      key:
      /*key*/
      ctx[0],
      colon:
      /*colon*/
      ctx[6],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[3],
      isParentArray:
      /*isParentArray*/
      ctx[4]
    }
  });
  return {
    c: function c() {
      li = element("li");
      create_component(jsonkey.$$.fragment);
      t0 = space();
      span = element("span");
      t1 = text(t1_value);
      attr(span, "class", span_class_value = "" + (null_to_empty(
      /*nodeType*/
      ctx[5]) + " svelte-1m3zj06"));
      attr(li, "class", "svelte-1m3zj06");
      toggle_class(li, "indent",
      /*isParentExpanded*/
      ctx[3]);
    },
    m: function m(target, anchor) {
      insert(target, li, anchor);
      mount_component(jsonkey, li, null);
      append(li, t0);
      append(li, span);
      append(span, t1);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var jsonkey_changes = {};
      if (dirty &
      /*key*/
      1) jsonkey_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*isParentExpanded*/
      8) jsonkey_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[3];
      if (dirty &
      /*isParentArray*/
      16) jsonkey_changes.isParentArray =
      /*isParentArray*/
      ctx[4];
      jsonkey.$set(jsonkey_changes);
      if ((!current || dirty &
      /*valueGetter, value*/
      6) && t1_value !== (t1_value = (
      /*valueGetter*/
      ctx[2] ?
      /*valueGetter*/
      ctx[2](
      /*value*/
      ctx[1]) :
      /*value*/
      ctx[1]) + "")) set_data(t1, t1_value);

      if (!current || dirty &
      /*nodeType*/
      32 && span_class_value !== (span_class_value = "" + (null_to_empty(
      /*nodeType*/
      ctx[5]) + " svelte-1m3zj06"))) {
        attr(span, "class", span_class_value);
      }

      if (dirty &
      /*isParentExpanded*/
      8) {
        toggle_class(li, "indent",
        /*isParentExpanded*/
        ctx[3]);
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonkey.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonkey.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(li);
      destroy_component(jsonkey);
    }
  };
}

function instance$b($$self, $$props, $$invalidate) {
  var key = $$props.key,
      value = $$props.value,
      _$$props$valueGetter = $$props.valueGetter,
      valueGetter = _$$props$valueGetter === void 0 ? null : _$$props$valueGetter,
      isParentExpanded = $$props.isParentExpanded,
      isParentArray = $$props.isParentArray,
      nodeType = $$props.nodeType;

  var _getContext = getContext(contextKey),
      colon = _getContext.colon;

  $$self.$$set = function ($$props) {
    if ('key' in $$props) $$invalidate(0, key = $$props.key);
    if ('value' in $$props) $$invalidate(1, value = $$props.value);
    if ('valueGetter' in $$props) $$invalidate(2, valueGetter = $$props.valueGetter);
    if ('isParentExpanded' in $$props) $$invalidate(3, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(4, isParentArray = $$props.isParentArray);
    if ('nodeType' in $$props) $$invalidate(5, nodeType = $$props.nodeType);
  };

  return [key, value, valueGetter, isParentExpanded, isParentArray, nodeType, colon];
}

var JSONValueNode = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(JSONValueNode, _SvelteComponent);

  var _super = _createSuper$b(JSONValueNode);

  function JSONValueNode(options) {
    var _this;

    _classCallCheck(this, JSONValueNode);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$b, create_fragment$b, safe_not_equal, {
      key: 0,
      value: 1,
      valueGetter: 2,
      isParentExpanded: 3,
      isParentArray: 4,
      nodeType: 5
    });
    return _this;
  }

  return _createClass(JSONValueNode);
}(SvelteComponent);

function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function get_each_context$4(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  child_ctx[10] = i;
  return child_ctx;
} // (40:2) {#if isParentExpanded}


function create_if_block_2$4(ctx) {
  var jsonarrow;
  var current;
  jsonarrow = new JSONArrow({
    props: {
      expanded:
      /*expanded*/
      ctx[0]
    }
  });
  jsonarrow.$on("click",
  /*toggleExpand*/
  ctx[7]);
  return {
    c: function c() {
      create_component(jsonarrow.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonarrow, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonarrow_changes = {};
      if (dirty &
      /*expanded*/
      1) jsonarrow_changes.expanded =
      /*expanded*/
      ctx[0];
      jsonarrow.$set(jsonarrow_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonarrow.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonarrow.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonarrow, detaching);
    }
  };
} // (45:2) {#if isParentExpanded}


function create_if_block$5(ctx) {
  var ul;
  var current;
  var if_block =
  /*expanded*/
  ctx[0] && create_if_block_1$5(ctx);
  return {
    c: function c() {
      ul = element("ul");
      if (if_block) if_block.c();
      attr(ul, "class", "svelte-zydcof");
      toggle_class(ul, "collapse", !
      /*expanded*/
      ctx[0]);
    },
    m: function m(target, anchor) {
      insert(target, ul, anchor);
      if (if_block) if_block.m(ul, null);
      current = true;
    },
    p: function p(ctx, dirty) {
      if (
      /*expanded*/
      ctx[0]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*expanded*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1$5(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(ul, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }

      if (dirty &
      /*expanded*/
      1) {
        toggle_class(ul, "collapse", !
        /*expanded*/
        ctx[0]);
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
      if (detaching) detach(ul);
      if (if_block) if_block.d();
    }
  };
} // (47:6) {#if expanded}


function create_if_block_1$5(ctx) {
  var jsonnode;
  var t0;
  var li;
  var jsonkey;
  var t1;
  var span;
  var current;
  jsonnode = new JSONNode({
    props: {
      key: "message",
      value:
      /*value*/
      ctx[2].message
    }
  });
  jsonkey = new JSONKey({
    props: {
      key: "stack",
      colon: ":",
      isParentExpanded:
      /*isParentExpanded*/
      ctx[3]
    }
  });
  var each_value =
  /*stack*/
  ctx[5];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$4(get_each_context$4(ctx, each_value, i));
  }

  return {
    c: function c() {
      create_component(jsonnode.$$.fragment);
      t0 = space();
      li = element("li");
      create_component(jsonkey.$$.fragment);
      t1 = space();
      span = element("span");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      attr(li, "class", "svelte-zydcof");
    },
    m: function m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      insert(target, t0, anchor);
      insert(target, li, anchor);
      mount_component(jsonkey, li, null);
      append(li, t1);
      append(li, span);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(span, null);
      }

      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonnode_changes = {};
      if (dirty &
      /*value*/
      4) jsonnode_changes.value =
      /*value*/
      ctx[2].message;
      jsonnode.$set(jsonnode_changes);
      var jsonkey_changes = {};
      if (dirty &
      /*isParentExpanded*/
      8) jsonkey_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[3];
      jsonkey.$set(jsonkey_changes);

      if (dirty &
      /*stack*/
      32) {
        each_value =
        /*stack*/
        ctx[5];

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context$4(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block$4(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(span, null);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonnode.$$.fragment, local);
      transition_in(jsonkey.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonnode.$$.fragment, local);
      transition_out(jsonkey.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonnode, detaching);
      if (detaching) detach(t0);
      if (detaching) detach(li);
      destroy_component(jsonkey);
      destroy_each(each_blocks, detaching);
    }
  };
} // (52:12) {#each stack as line, index}


function create_each_block$4(ctx) {
  var span;
  var t_value =
  /*line*/
  ctx[8] + "";
  var t;
  var br;
  return {
    c: function c() {
      span = element("span");
      t = text(t_value);
      br = element("br");
      attr(span, "class", "svelte-zydcof");
      toggle_class(span, "indent",
      /*index*/
      ctx[10] > 0);
    },
    m: function m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
      insert(target, br, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*stack*/
      32 && t_value !== (t_value =
      /*line*/
      ctx[8] + "")) set_data(t, t_value);
    },
    d: function d(detaching) {
      if (detaching) detach(span);
      if (detaching) detach(br);
    }
  };
}

function create_fragment$a(ctx) {
  var li;
  var t0;
  var jsonkey;
  var t1;
  var span;
  var t2;
  var t3_value = (
  /*expanded*/
  ctx[0] ? '' :
  /*value*/
  ctx[2].message) + "";
  var t3;
  var t4;
  var current;
  var mounted;
  var dispose;
  var if_block0 =
  /*isParentExpanded*/
  ctx[3] && create_if_block_2$4(ctx);
  jsonkey = new JSONKey({
    props: {
      key:
      /*key*/
      ctx[1],
      colon:
      /*context*/
      ctx[6].colon,
      isParentExpanded:
      /*isParentExpanded*/
      ctx[3],
      isParentArray:
      /*isParentArray*/
      ctx[4]
    }
  });
  var if_block1 =
  /*isParentExpanded*/
  ctx[3] && create_if_block$5(ctx);
  return {
    c: function c() {
      li = element("li");
      if (if_block0) if_block0.c();
      t0 = space();
      create_component(jsonkey.$$.fragment);
      t1 = space();
      span = element("span");
      t2 = text("Error: ");
      t3 = text(t3_value);
      t4 = space();
      if (if_block1) if_block1.c();
      attr(li, "class", "svelte-zydcof");
      toggle_class(li, "indent",
      /*isParentExpanded*/
      ctx[3]);
    },
    m: function m(target, anchor) {
      insert(target, li, anchor);
      if (if_block0) if_block0.m(li, null);
      append(li, t0);
      mount_component(jsonkey, li, null);
      append(li, t1);
      append(li, span);
      append(span, t2);
      append(span, t3);
      append(li, t4);
      if (if_block1) if_block1.m(li, null);
      current = true;

      if (!mounted) {
        dispose = listen(span, "click",
        /*toggleExpand*/
        ctx[7]);
        mounted = true;
      }
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*isParentExpanded*/
      ctx[3]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*isParentExpanded*/
          8) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2$4(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(li, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      var jsonkey_changes = {};
      if (dirty &
      /*key*/
      2) jsonkey_changes.key =
      /*key*/
      ctx[1];
      if (dirty &
      /*isParentExpanded*/
      8) jsonkey_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[3];
      if (dirty &
      /*isParentArray*/
      16) jsonkey_changes.isParentArray =
      /*isParentArray*/
      ctx[4];
      jsonkey.$set(jsonkey_changes);
      if ((!current || dirty &
      /*expanded, value*/
      5) && t3_value !== (t3_value = (
      /*expanded*/
      ctx[0] ? '' :
      /*value*/
      ctx[2].message) + "")) set_data(t3, t3_value);

      if (
      /*isParentExpanded*/
      ctx[3]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*isParentExpanded*/
          8) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$5(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(li, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        check_outros();
      }

      if (dirty &
      /*isParentExpanded*/
      8) {
        toggle_class(li, "indent",
        /*isParentExpanded*/
        ctx[3]);
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(jsonkey.$$.fragment, local);
      transition_in(if_block1);
      current = true;
    },
    o: function o(local) {
      transition_out(if_block0);
      transition_out(jsonkey.$$.fragment, local);
      transition_out(if_block1);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(li);
      if (if_block0) if_block0.d();
      destroy_component(jsonkey);
      if (if_block1) if_block1.d();
      mounted = false;
      dispose();
    }
  };
}

function instance$a($$self, $$props, $$invalidate) {
  var stack;
  var key = $$props.key,
      value = $$props.value,
      isParentExpanded = $$props.isParentExpanded,
      isParentArray = $$props.isParentArray;
  var _$$props$expanded = $$props.expanded,
      expanded = _$$props$expanded === void 0 ? false : _$$props$expanded;
  var context = getContext(contextKey);
  setContext(contextKey, _objectSpread(_objectSpread({}, context), {}, {
    colon: ':'
  }));

  function toggleExpand() {
    $$invalidate(0, expanded = !expanded);
  }

  $$self.$$set = function ($$props) {
    if ('key' in $$props) $$invalidate(1, key = $$props.key);
    if ('value' in $$props) $$invalidate(2, value = $$props.value);
    if ('isParentExpanded' in $$props) $$invalidate(3, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(4, isParentArray = $$props.isParentArray);
    if ('expanded' in $$props) $$invalidate(0, expanded = $$props.expanded);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*value*/
    4) {
      $$invalidate(5, stack = value.stack.split('\n'));
    }

    if ($$self.$$.dirty &
    /*isParentExpanded*/
    8) {
      if (!isParentExpanded) {
        $$invalidate(0, expanded = false);
      }
    }
  };

  return [expanded, key, value, isParentExpanded, isParentArray, stack, context, toggleExpand];
}

var ErrorNode = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(ErrorNode, _SvelteComponent);

  var _super = _createSuper$a(ErrorNode);

  function ErrorNode(options) {
    var _this;

    _classCallCheck(this, ErrorNode);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$a, create_fragment$a, safe_not_equal, {
      key: 1,
      value: 2,
      isParentExpanded: 3,
      isParentArray: 4,
      expanded: 0
    });
    return _this;
  }

  return _createClass(ErrorNode);
}(SvelteComponent);

function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_else_block_1$1(ctx) {
  var jsonvaluenode;
  var current;
  jsonvaluenode = new JSONValueNode({
    props: {
      key:
      /*key*/
      ctx[0],
      value:
      /*value*/
      ctx[1],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3],
      nodeType:
      /*nodeType*/
      ctx[4],
      valueGetter:
      /*func_6*/
      ctx[5]
    }
  });
  return {
    c: function c() {
      create_component(jsonvaluenode.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonvaluenode, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonvaluenode_changes = {};
      if (dirty &
      /*key*/
      1) jsonvaluenode_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*value*/
      2) jsonvaluenode_changes.value =
      /*value*/
      ctx[1];
      if (dirty &
      /*isParentExpanded*/
      4) jsonvaluenode_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsonvaluenode_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      jsonvaluenode.$set(jsonvaluenode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonvaluenode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonvaluenode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonvaluenode, detaching);
    }
  };
} // (41:59) 


function create_if_block_12(ctx) {
  var jsonvaluenode;
  var current;
  jsonvaluenode = new JSONValueNode({
    props: {
      key:
      /*key*/
      ctx[0],
      value:
      /*value*/
      ctx[1],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3],
      nodeType:
      /*nodeType*/
      ctx[4],
      valueGetter: func_5
    }
  });
  return {
    c: function c() {
      create_component(jsonvaluenode.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonvaluenode, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonvaluenode_changes = {};
      if (dirty &
      /*key*/
      1) jsonvaluenode_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*value*/
      2) jsonvaluenode_changes.value =
      /*value*/
      ctx[1];
      if (dirty &
      /*isParentExpanded*/
      4) jsonvaluenode_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsonvaluenode_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      jsonvaluenode.$set(jsonvaluenode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonvaluenode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonvaluenode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonvaluenode, detaching);
    }
  };
} // (39:35) 


function create_if_block_11(ctx) {
  var jsonvaluenode;
  var current;
  jsonvaluenode = new JSONValueNode({
    props: {
      key:
      /*key*/
      ctx[0],
      value:
      /*value*/
      ctx[1],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3],
      nodeType:
      /*nodeType*/
      ctx[4],
      valueGetter: func_4
    }
  });
  return {
    c: function c() {
      create_component(jsonvaluenode.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonvaluenode, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonvaluenode_changes = {};
      if (dirty &
      /*key*/
      1) jsonvaluenode_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*value*/
      2) jsonvaluenode_changes.value =
      /*value*/
      ctx[1];
      if (dirty &
      /*isParentExpanded*/
      4) jsonvaluenode_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsonvaluenode_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      jsonvaluenode.$set(jsonvaluenode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonvaluenode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonvaluenode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonvaluenode, detaching);
    }
  };
} // (37:30) 


function create_if_block_10$1(ctx) {
  var jsonvaluenode;
  var current;
  jsonvaluenode = new JSONValueNode({
    props: {
      key:
      /*key*/
      ctx[0],
      value:
      /*value*/
      ctx[1],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3],
      nodeType:
      /*nodeType*/
      ctx[4],
      valueGetter: func_3
    }
  });
  return {
    c: function c() {
      create_component(jsonvaluenode.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonvaluenode, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonvaluenode_changes = {};
      if (dirty &
      /*key*/
      1) jsonvaluenode_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*value*/
      2) jsonvaluenode_changes.value =
      /*value*/
      ctx[1];
      if (dirty &
      /*isParentExpanded*/
      4) jsonvaluenode_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsonvaluenode_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      jsonvaluenode.$set(jsonvaluenode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonvaluenode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonvaluenode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonvaluenode, detaching);
    }
  };
} // (35:30) 


function create_if_block_9$1(ctx) {
  var jsonvaluenode;
  var current;
  jsonvaluenode = new JSONValueNode({
    props: {
      key:
      /*key*/
      ctx[0],
      value:
      /*value*/
      ctx[1],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3],
      nodeType:
      /*nodeType*/
      ctx[4],
      valueGetter: func_2
    }
  });
  return {
    c: function c() {
      create_component(jsonvaluenode.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonvaluenode, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonvaluenode_changes = {};
      if (dirty &
      /*key*/
      1) jsonvaluenode_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*value*/
      2) jsonvaluenode_changes.value =
      /*value*/
      ctx[1];
      if (dirty &
      /*isParentExpanded*/
      4) jsonvaluenode_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsonvaluenode_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      jsonvaluenode.$set(jsonvaluenode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonvaluenode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonvaluenode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonvaluenode, detaching);
    }
  };
} // (33:33) 


function create_if_block_8$1(ctx) {
  var jsonvaluenode;
  var current;
  jsonvaluenode = new JSONValueNode({
    props: {
      key:
      /*key*/
      ctx[0],
      value:
      /*value*/
      ctx[1],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3],
      nodeType:
      /*nodeType*/
      ctx[4],
      valueGetter: func_1
    }
  });
  return {
    c: function c() {
      create_component(jsonvaluenode.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonvaluenode, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonvaluenode_changes = {};
      if (dirty &
      /*key*/
      1) jsonvaluenode_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*value*/
      2) jsonvaluenode_changes.value =
      /*value*/
      ctx[1];
      if (dirty &
      /*isParentExpanded*/
      4) jsonvaluenode_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsonvaluenode_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      jsonvaluenode.$set(jsonvaluenode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonvaluenode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonvaluenode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonvaluenode, detaching);
    }
  };
} // (31:32) 


function create_if_block_7$1(ctx) {
  var jsonvaluenode;
  var current;
  jsonvaluenode = new JSONValueNode({
    props: {
      key:
      /*key*/
      ctx[0],
      value:
      /*value*/
      ctx[1],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3],
      nodeType:
      /*nodeType*/
      ctx[4]
    }
  });
  return {
    c: function c() {
      create_component(jsonvaluenode.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonvaluenode, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonvaluenode_changes = {};
      if (dirty &
      /*key*/
      1) jsonvaluenode_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*value*/
      2) jsonvaluenode_changes.value =
      /*value*/
      ctx[1];
      if (dirty &
      /*isParentExpanded*/
      4) jsonvaluenode_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsonvaluenode_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      jsonvaluenode.$set(jsonvaluenode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonvaluenode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonvaluenode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonvaluenode, detaching);
    }
  };
} // (29:32) 


function create_if_block_6$1(ctx) {
  var jsonvaluenode;
  var current;
  jsonvaluenode = new JSONValueNode({
    props: {
      key:
      /*key*/
      ctx[0],
      value:
      /*value*/
      ctx[1],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3],
      nodeType:
      /*nodeType*/
      ctx[4],
      valueGetter: func
    }
  });
  return {
    c: function c() {
      create_component(jsonvaluenode.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonvaluenode, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonvaluenode_changes = {};
      if (dirty &
      /*key*/
      1) jsonvaluenode_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*value*/
      2) jsonvaluenode_changes.value =
      /*value*/
      ctx[1];
      if (dirty &
      /*isParentExpanded*/
      4) jsonvaluenode_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsonvaluenode_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      jsonvaluenode.$set(jsonvaluenode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonvaluenode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonvaluenode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonvaluenode, detaching);
    }
  };
} // (27:34) 


function create_if_block_5$1(ctx) {
  var jsonmapentrynode;
  var current;
  jsonmapentrynode = new JSONMapEntryNode({
    props: {
      key:
      /*key*/
      ctx[0],
      value:
      /*value*/
      ctx[1],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3],
      nodeType:
      /*nodeType*/
      ctx[4]
    }
  });
  return {
    c: function c() {
      create_component(jsonmapentrynode.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonmapentrynode, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonmapentrynode_changes = {};
      if (dirty &
      /*key*/
      1) jsonmapentrynode_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*value*/
      2) jsonmapentrynode_changes.value =
      /*value*/
      ctx[1];
      if (dirty &
      /*isParentExpanded*/
      4) jsonmapentrynode_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsonmapentrynode_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      jsonmapentrynode.$set(jsonmapentrynode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonmapentrynode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonmapentrynode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonmapentrynode, detaching);
    }
  };
} // (21:78) 


function create_if_block_3$1(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block_4$1, create_else_block$3];
  var if_blocks = [];

  function select_block_type_1(ctx, dirty) {
    if (typeof
    /*value*/
    ctx[1].set === 'function') return 0;
    return 1;
  }

  current_block_type_index = select_block_type_1(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c: function c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m: function m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }

        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach(if_block_anchor);
    }
  };
} // (19:31) 


function create_if_block_2$3(ctx) {
  var jsonarraynode;
  var current;
  jsonarraynode = new JSONArrayNode({
    props: {
      key:
      /*key*/
      ctx[0],
      value:
      /*value*/
      ctx[1],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3]
    }
  });
  return {
    c: function c() {
      create_component(jsonarraynode.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonarraynode, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonarraynode_changes = {};
      if (dirty &
      /*key*/
      1) jsonarraynode_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*value*/
      2) jsonarraynode_changes.value =
      /*value*/
      ctx[1];
      if (dirty &
      /*isParentExpanded*/
      4) jsonarraynode_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsonarraynode_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      jsonarraynode.$set(jsonarraynode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonarraynode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonarraynode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonarraynode, detaching);
    }
  };
} // (17:31) 


function create_if_block_1$4(ctx) {
  var errornode;
  var current;
  errornode = new ErrorNode({
    props: {
      key:
      /*key*/
      ctx[0],
      value:
      /*value*/
      ctx[1],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3]
    }
  });
  return {
    c: function c() {
      create_component(errornode.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(errornode, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var errornode_changes = {};
      if (dirty &
      /*key*/
      1) errornode_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*value*/
      2) errornode_changes.value =
      /*value*/
      ctx[1];
      if (dirty &
      /*isParentExpanded*/
      4) errornode_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) errornode_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      errornode.$set(errornode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(errornode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(errornode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(errornode, detaching);
    }
  };
} // (15:0) {#if nodeType === 'Object'}


function create_if_block$4(ctx) {
  var jsonobjectnode;
  var current;
  jsonobjectnode = new JSONObjectNode({
    props: {
      key:
      /*key*/
      ctx[0],
      value:
      /*value*/
      ctx[1],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3],
      nodeType:
      /*nodeType*/
      ctx[4]
    }
  });
  return {
    c: function c() {
      create_component(jsonobjectnode.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonobjectnode, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonobjectnode_changes = {};
      if (dirty &
      /*key*/
      1) jsonobjectnode_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*value*/
      2) jsonobjectnode_changes.value =
      /*value*/
      ctx[1];
      if (dirty &
      /*isParentExpanded*/
      4) jsonobjectnode_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsonobjectnode_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      jsonobjectnode.$set(jsonobjectnode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonobjectnode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonobjectnode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonobjectnode, detaching);
    }
  };
} // (24:2) {:else}


function create_else_block$3(ctx) {
  var jsoniterablearraynode;
  var current;
  jsoniterablearraynode = new JSONIterableArrayNode({
    props: {
      key:
      /*key*/
      ctx[0],
      value:
      /*value*/
      ctx[1],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3],
      nodeType:
      /*nodeType*/
      ctx[4]
    }
  });
  return {
    c: function c() {
      create_component(jsoniterablearraynode.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsoniterablearraynode, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsoniterablearraynode_changes = {};
      if (dirty &
      /*key*/
      1) jsoniterablearraynode_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*value*/
      2) jsoniterablearraynode_changes.value =
      /*value*/
      ctx[1];
      if (dirty &
      /*isParentExpanded*/
      4) jsoniterablearraynode_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsoniterablearraynode_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      jsoniterablearraynode.$set(jsoniterablearraynode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsoniterablearraynode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsoniterablearraynode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsoniterablearraynode, detaching);
    }
  };
} // (22:2) {#if typeof value.set === 'function'}


function create_if_block_4$1(ctx) {
  var jsoniterablemapnode;
  var current;
  jsoniterablemapnode = new JSONIterableMapNode({
    props: {
      key:
      /*key*/
      ctx[0],
      value:
      /*value*/
      ctx[1],
      isParentExpanded:
      /*isParentExpanded*/
      ctx[2],
      isParentArray:
      /*isParentArray*/
      ctx[3],
      nodeType:
      /*nodeType*/
      ctx[4]
    }
  });
  return {
    c: function c() {
      create_component(jsoniterablemapnode.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsoniterablemapnode, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsoniterablemapnode_changes = {};
      if (dirty &
      /*key*/
      1) jsoniterablemapnode_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*value*/
      2) jsoniterablemapnode_changes.value =
      /*value*/
      ctx[1];
      if (dirty &
      /*isParentExpanded*/
      4) jsoniterablemapnode_changes.isParentExpanded =
      /*isParentExpanded*/
      ctx[2];
      if (dirty &
      /*isParentArray*/
      8) jsoniterablemapnode_changes.isParentArray =
      /*isParentArray*/
      ctx[3];
      jsoniterablemapnode.$set(jsoniterablemapnode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsoniterablemapnode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsoniterablemapnode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsoniterablemapnode, detaching);
    }
  };
}

function create_fragment$9(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block$4, create_if_block_1$4, create_if_block_2$3, create_if_block_3$1, create_if_block_5$1, create_if_block_6$1, create_if_block_7$1, create_if_block_8$1, create_if_block_9$1, create_if_block_10$1, create_if_block_11, create_if_block_12, create_else_block_1$1];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*nodeType*/
    ctx[4] === 'Object') return 0;
    if (
    /*nodeType*/
    ctx[4] === 'Error') return 1;
    if (
    /*nodeType*/
    ctx[4] === 'Array') return 2;
    if (
    /*nodeType*/
    ctx[4] === 'Iterable' ||
    /*nodeType*/
    ctx[4] === 'Map' ||
    /*nodeType*/
    ctx[4] === 'Set') return 3;
    if (
    /*nodeType*/
    ctx[4] === 'MapEntry') return 4;
    if (
    /*nodeType*/
    ctx[4] === 'String') return 5;
    if (
    /*nodeType*/
    ctx[4] === 'Number') return 6;
    if (
    /*nodeType*/
    ctx[4] === 'Boolean') return 7;
    if (
    /*nodeType*/
    ctx[4] === 'Date') return 8;
    if (
    /*nodeType*/
    ctx[4] === 'Null') return 9;
    if (
    /*nodeType*/
    ctx[4] === 'Undefined') return 10;
    if (
    /*nodeType*/
    ctx[4] === 'Function' ||
    /*nodeType*/
    ctx[4] === 'Symbol') return 11;
    return 12;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c: function c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m: function m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if_block.p(ctx, dirty);
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
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach(if_block_anchor);
    }
  };
}

var func = function func(raw) {
  return "\"".concat(raw, "\"");
};

var func_1 = function func_1(raw) {
  return raw ? 'true' : 'false';
};

var func_2 = function func_2(raw) {
  return raw.toISOString();
};

var func_3 = function func_3() {
  return 'null';
};

var func_4 = function func_4() {
  return 'undefined';
};

var func_5 = function func_5(raw) {
  return raw.toString();
};

function instance$9($$self, $$props, $$invalidate) {
  var key = $$props.key,
      value = $$props.value,
      isParentExpanded = $$props.isParentExpanded,
      isParentArray = $$props.isParentArray;
  var nodeType = objType(value);

  var func_6 = function func_6() {
    return "<".concat(nodeType, ">");
  };

  $$self.$$set = function ($$props) {
    if ('key' in $$props) $$invalidate(0, key = $$props.key);
    if ('value' in $$props) $$invalidate(1, value = $$props.value);
    if ('isParentExpanded' in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
    if ('isParentArray' in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
  };

  return [key, value, isParentExpanded, isParentArray, nodeType, func_6];
}

var JSONNode = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(JSONNode, _SvelteComponent);

  var _super = _createSuper$9(JSONNode);

  function JSONNode(options) {
    var _this;

    _classCallCheck(this, JSONNode);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$9, create_fragment$9, safe_not_equal, {
      key: 0,
      value: 1,
      isParentExpanded: 2,
      isParentArray: 3
    });
    return _this;
  }

  return _createClass(JSONNode);
}(SvelteComponent);

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment$8(ctx) {
  var ul;
  var jsonnode;
  var current;
  jsonnode = new JSONNode({
    props: {
      key:
      /*key*/
      ctx[0],
      value:
      /*value*/
      ctx[1],
      isParentExpanded: true,
      isParentArray: false
    }
  });
  return {
    c: function c() {
      ul = element("ul");
      create_component(jsonnode.$$.fragment);
      attr(ul, "class", "svelte-fisoh6");
    },
    m: function m(target, anchor) {
      insert(target, ul, anchor);
      mount_component(jsonnode, ul, null);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var jsonnode_changes = {};
      if (dirty &
      /*key*/
      1) jsonnode_changes.key =
      /*key*/
      ctx[0];
      if (dirty &
      /*value*/
      2) jsonnode_changes.value =
      /*value*/
      ctx[1];
      jsonnode.$set(jsonnode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(ul);
      destroy_component(jsonnode);
    }
  };
}

function instance$8($$self, $$props, $$invalidate) {
  setContext(contextKey, {});
  var _$$props$key = $$props.key,
      key = _$$props$key === void 0 ? '' : _$$props$key,
      value = $$props.value;

  $$self.$$set = function ($$props) {
    if ('key' in $$props) $$invalidate(0, key = $$props.key);
    if ('value' in $$props) $$invalidate(1, value = $$props.value);
  };

  return [key, value];
}

var Src = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Src, _SvelteComponent);

  var _super = _createSuper$8(Src);

  function Src(options) {
    var _this;

    _classCallCheck(this, Src);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$8, create_fragment$8, safe_not_equal, {
      key: 0,
      value: 1
    });
    return _this;
  }

  return _createClass(Src);
}(SvelteComponent);

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function get_each_context$3(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}

function get_each_context_1$1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  return child_ctx;
}

function get_each_context_2$1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  return child_ctx;
} // (32:4) {#each columns_to_render as column}


function create_each_block_2$1(ctx) {
  var th;
  var t_value =
  /*column*/
  ctx[8] + "";
  var t;
  return {
    c: function c() {
      th = element("th");
      t = text(t_value);
      attr(th, "class", "svelte-12l2iaz");
    },
    m: function m(target, anchor) {
      insert(target, th, anchor);
      append(th, t);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*columns_to_render*/
      4 && t_value !== (t_value =
      /*column*/
      ctx[8] + "")) set_data(t, t_value);
    },
    d: function d(detaching) {
      if (detaching) detach(th);
    }
  };
} // (47:6) {:else}


function create_else_block$2(ctx) {
  var td;
  return {
    c: function c() {
      td = element("td");
      attr(td, "class", "svelte-12l2iaz");
    },
    m: function m(target, anchor) {
      insert(target, td, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(td);
    }
  };
} // (45:36) 


function create_if_block_2$2(ctx) {
  var td;
  var jsonnode;
  var current;
  jsonnode = new Src({
    props: {
      value:
      /*data*/
      ctx[0][
      /*key*/
      ctx[5]][
      /*column*/
      ctx[8]]
    }
  });
  return {
    c: function c() {
      td = element("td");
      create_component(jsonnode.$$.fragment);
      attr(td, "class", "svelte-12l2iaz");
    },
    m: function m(target, anchor) {
      insert(target, td, anchor);
      mount_component(jsonnode, td, null);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonnode_changes = {};
      if (dirty &
      /*data, keys, columns_to_render*/
      7) jsonnode_changes.value =
      /*data*/
      ctx[0][
      /*key*/
      ctx[5]][
      /*column*/
      ctx[8]];
      jsonnode.$set(jsonnode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(td);
      destroy_component(jsonnode);
    }
  };
} // (43:37) 


function create_if_block_1$3(ctx) {
  var td;
  var jsonnode;
  var current;
  jsonnode = new Src({
    props: {
      value:
      /*data*/
      ctx[0][
      /*key*/
      ctx[5]]
    }
  });
  return {
    c: function c() {
      td = element("td");
      create_component(jsonnode.$$.fragment);
      attr(td, "class", "svelte-12l2iaz");
    },
    m: function m(target, anchor) {
      insert(target, td, anchor);
      mount_component(jsonnode, td, null);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonnode_changes = {};
      if (dirty &
      /*data, keys*/
      3) jsonnode_changes.value =
      /*data*/
      ctx[0][
      /*key*/
      ctx[5]];
      jsonnode.$set(jsonnode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(td);
      destroy_component(jsonnode);
    }
  };
} // (41:6) {#if column === INDEX_KEY}


function create_if_block$3(ctx) {
  var td;
  var t_value =
  /*key*/
  ctx[5] + "";
  var t;
  return {
    c: function c() {
      td = element("td");
      t = text(t_value);
      attr(td, "class", "svelte-12l2iaz");
    },
    m: function m(target, anchor) {
      insert(target, td, anchor);
      append(td, t);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*keys*/
      2 && t_value !== (t_value =
      /*key*/
      ctx[5] + "")) set_data(t, t_value);
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(td);
    }
  };
} // (40:5) {#each columns_to_render as column}


function create_each_block_1$1(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block$3, create_if_block_1$3, create_if_block_2$2, create_else_block$2];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*column*/
    ctx[8] === INDEX_KEY) return 0;
    if (
    /*column*/
    ctx[8] === VALUE_KEY) return 1;
    if (
    /*column*/
    ctx[8] in
    /*data*/
    ctx[0][
    /*key*/
    ctx[5]]) return 2;
    return 3;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c: function c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m: function m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
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
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }

        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach(if_block_anchor);
    }
  };
} // (38:3) {#each keys as key}


function create_each_block$3(ctx) {
  var tr;
  var t;
  var current;
  var each_value_1 =
  /*columns_to_render*/
  ctx[2];
  var each_blocks = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  return {
    c: function c() {
      tr = element("tr");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t = space();
      attr(tr, "class", "svelte-12l2iaz");
    },
    m: function m(target, anchor) {
      insert(target, tr, anchor);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(tr, null);
      }

      append(tr, t);
      current = true;
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*keys, columns_to_render, INDEX_KEY, data, VALUE_KEY*/
      7) {
        each_value_1 =
        /*columns_to_render*/
        ctx[2];

        var _i3;

        for (_i3 = 0; _i3 < each_value_1.length; _i3 += 1) {
          var child_ctx = get_each_context_1$1(ctx, each_value_1, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);

            transition_in(each_blocks[_i3], 1);
          } else {
            each_blocks[_i3] = create_each_block_1$1(child_ctx);

            each_blocks[_i3].c();

            transition_in(each_blocks[_i3], 1);

            each_blocks[_i3].m(tr, t);
          }
        }

        group_outros();

        for (_i3 = each_value_1.length; _i3 < each_blocks.length; _i3 += 1) {
          out(_i3);
        }

        check_outros();
      }
    },
    i: function i(local) {
      if (current) return;

      for (var _i4 = 0; _i4 < each_value_1.length; _i4 += 1) {
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
      if (detaching) detach(tr);
      destroy_each(each_blocks, detaching);
    }
  };
}

function create_fragment$7(ctx) {
  var div;
  var table;
  var thead;
  var tr;
  var t;
  var tbody;
  var current;
  var each_value_2 =
  /*columns_to_render*/
  ctx[2];
  var each_blocks_1 = [];

  for (var i = 0; i < each_value_2.length; i += 1) {
    each_blocks_1[i] = create_each_block_2$1(get_each_context_2$1(ctx, each_value_2, i));
  }

  var each_value =
  /*keys*/
  ctx[1];
  var each_blocks = [];

  for (var _i6 = 0; _i6 < each_value.length; _i6 += 1) {
    each_blocks[_i6] = create_each_block$3(get_each_context$3(ctx, each_value, _i6));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  return {
    c: function c() {
      div = element("div");
      table = element("table");
      thead = element("thead");
      tr = element("tr");

      for (var _i7 = 0; _i7 < each_blocks_1.length; _i7 += 1) {
        each_blocks_1[_i7].c();
      }

      t = space();
      tbody = element("tbody");

      for (var _i8 = 0; _i8 < each_blocks.length; _i8 += 1) {
        each_blocks[_i8].c();
      }

      attr(tr, "class", "svelte-12l2iaz");
      attr(table, "class", "svelte-12l2iaz");
      attr(div, "class", "table svelte-12l2iaz");
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      append(div, table);
      append(table, thead);
      append(thead, tr);

      for (var _i9 = 0; _i9 < each_blocks_1.length; _i9 += 1) {
        each_blocks_1[_i9].m(tr, null);
      }

      append(table, t);
      append(table, tbody);

      for (var _i10 = 0; _i10 < each_blocks.length; _i10 += 1) {
        each_blocks[_i10].m(tbody, null);
      }

      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*columns_to_render*/
      4) {
        each_value_2 =
        /*columns_to_render*/
        ctx[2];

        var _i11;

        for (_i11 = 0; _i11 < each_value_2.length; _i11 += 1) {
          var child_ctx = get_each_context_2$1(ctx, each_value_2, _i11);

          if (each_blocks_1[_i11]) {
            each_blocks_1[_i11].p(child_ctx, dirty);
          } else {
            each_blocks_1[_i11] = create_each_block_2$1(child_ctx);

            each_blocks_1[_i11].c();

            each_blocks_1[_i11].m(tr, null);
          }
        }

        for (; _i11 < each_blocks_1.length; _i11 += 1) {
          each_blocks_1[_i11].d(1);
        }

        each_blocks_1.length = each_value_2.length;
      }

      if (dirty &
      /*columns_to_render, keys, INDEX_KEY, data, VALUE_KEY*/
      7) {
        each_value =
        /*keys*/
        ctx[1];

        var _i12;

        for (_i12 = 0; _i12 < each_value.length; _i12 += 1) {
          var _child_ctx = get_each_context$3(ctx, each_value, _i12);

          if (each_blocks[_i12]) {
            each_blocks[_i12].p(_child_ctx, dirty);

            transition_in(each_blocks[_i12], 1);
          } else {
            each_blocks[_i12] = create_each_block$3(_child_ctx);

            each_blocks[_i12].c();

            transition_in(each_blocks[_i12], 1);

            each_blocks[_i12].m(tbody, null);
          }
        }

        group_outros();

        for (_i12 = each_value.length; _i12 < each_blocks.length; _i12 += 1) {
          out(_i12);
        }

        check_outros();
      }
    },
    i: function i(local) {
      if (current) return;

      for (var _i13 = 0; _i13 < each_value.length; _i13 += 1) {
        transition_in(each_blocks[_i13]);
      }

      current = true;
    },
    o: function o(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i14 = 0; _i14 < each_blocks.length; _i14 += 1) {
        transition_out(each_blocks[_i14]);
      }

      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(div);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
    }
  };
}

var INDEX_KEY = '(index)';
var VALUE_KEY = 'Value';

function instance$7($$self, $$props, $$invalidate) {
  var keys;
  var columns_to_render;
  var data = $$props.data;
  var columns = $$props.columns;

  function get_columns_to_render(data, keys) {
    var columns = new Set([INDEX_KEY]);

    var _iterator = _createForOfIteratorHelper(keys),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;
        var value = data[key];

        if (_typeof$1(value) === 'object') {
          Object.keys(value).forEach(function (key) {
            return columns.add(key);
          });
        } else {
          columns.add(VALUE_KEY);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return _toConsumableArray(columns);
  }

  $$self.$$set = function ($$props) {
    if ('data' in $$props) $$invalidate(0, data = $$props.data);
    if ('columns' in $$props) $$invalidate(3, columns = $$props.columns);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*data*/
    1) {
      $$invalidate(1, keys = Object.keys(data));
    }

    if ($$self.$$.dirty &
    /*columns, data, keys*/
    11) {
      $$invalidate(2, columns_to_render = columns || get_columns_to_render(data, keys));
    }
  };

  return [data, keys, columns_to_render, columns];
}

var ConsoleTable = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(ConsoleTable, _SvelteComponent);

  var _super = _createSuper$7(ConsoleTable);

  function ConsoleTable(options) {
    var _this;

    _classCallCheck(this, ConsoleTable);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$7, create_fragment$7, safe_not_equal, {
      data: 0,
      columns: 3
    });
    return _this;
  }

  return _createClass(ConsoleTable);
}(SvelteComponent);

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function get_each_context$2(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}

function get_each_context_2(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  child_ctx[11] = i;
  return child_ctx;
}

function get_each_context_4(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  return child_ctx;
}

function get_each_context_3(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  return child_ctx;
} // (13:0) {#if log.level === 'table'}


function create_if_block_10(ctx) {
  var consoletable;
  var current;
  consoletable = new ConsoleTable({
    props: {
      data:
      /*log*/
      ctx[0].args[0],
      columns:
      /*log*/
      ctx[0].args[1]
    }
  });
  return {
    c: function c() {
      create_component(consoletable.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(consoletable, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var consoletable_changes = {};
      if (dirty &
      /*log*/
      1) consoletable_changes.data =
      /*log*/
      ctx[0].args[0];
      if (dirty &
      /*log*/
      1) consoletable_changes.columns =
      /*log*/
      ctx[0].args[1];
      consoletable.$set(consoletable_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(consoletable.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(consoletable.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(consoletable, detaching);
    }
  };
} // (18:1) {#if log.count > 1}


function create_if_block_9(ctx) {
  var span;
  var t0_value =
  /*log*/
  ctx[0].count + "";
  var t0;
  var t1;
  return {
    c: function c() {
      span = element("span");
      t0 = text(t0_value);
      t1 = text("x");
      attr(span, "class", "count svelte-wz5xz8");
    },
    m: function m(target, anchor) {
      insert(target, span, anchor);
      append(span, t0);
      append(span, t1);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*log*/
      1 && t0_value !== (t0_value =
      /*log*/
      ctx[0].count + "")) set_data(t0, t0_value);
    },
    d: function d(detaching) {
      if (detaching) detach(span);
    }
  };
} // (22:1) {#if log.level === 'trace' || log.level === 'assert'}


function create_if_block_8(ctx) {
  var div;
  var mounted;
  var dispose;
  return {
    c: function c() {
      div = element("div");
      div.textContent = "▶";
      attr(div, "class", "arrow svelte-wz5xz8");
      toggle_class(div, "expand", !
      /*log*/
      ctx[0].collapsed);
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);

      if (!mounted) {
        dispose = listen(div, "click",
        /*toggleGroupCollapse*/
        ctx[2]);
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*log*/
      1) {
        toggle_class(div, "expand", !
        /*log*/
        ctx[0].collapsed);
      }
    },
    d: function d(detaching) {
      if (detaching) detach(div);
      mounted = false;
      dispose();
    }
  };
} // (26:1) {#if log.level === 'assert'}


function create_if_block_7(ctx) {
  var span;
  return {
    c: function c() {
      span = element("span");
      span.textContent = "Assertion failed:";
      attr(span, "class", "assert svelte-wz5xz8");
    },
    m: function m(target, anchor) {
      insert(target, span, anchor);
    },
    d: function d(detaching) {
      if (detaching) detach(span);
    }
  };
} // (43:1) {:else}


function create_else_block$1(ctx) {
  var each_1_anchor;
  var current;
  var each_value_4 =
  /*log*/
  ctx[0].args;
  var each_blocks = [];

  for (var i = 0; i < each_value_4.length; i += 1) {
    each_blocks[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
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
      /*log*/
      1) {
        each_value_4 =
        /*log*/
        ctx[0].args;

        var _i3;

        for (_i3 = 0; _i3 < each_value_4.length; _i3 += 1) {
          var child_ctx = get_each_context_4(ctx, each_value_4, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);

            transition_in(each_blocks[_i3], 1);
          } else {
            each_blocks[_i3] = create_each_block_4(child_ctx);

            each_blocks[_i3].c();

            transition_in(each_blocks[_i3], 1);

            each_blocks[_i3].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i3 = each_value_4.length; _i3 < each_blocks.length; _i3 += 1) {
          out(_i3);
        }

        check_outros();
      }
    },
    i: function i(local) {
      if (current) return;

      for (var _i4 = 0; _i4 < each_value_4.length; _i4 += 1) {
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
} // (41:33) 


function create_if_block_6(ctx) {
  var jsonnode;
  var current;
  jsonnode = new Src({
    props: {
      value:
      /*log*/
      ctx[0].args[0]
    }
  });
  return {
    c: function c() {
      create_component(jsonnode.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonnode_changes = {};
      if (dirty &
      /*log*/
      1) jsonnode_changes.value =
      /*log*/
      ctx[0].args[0];
      jsonnode.$set(jsonnode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
} // (37:42) 


function create_if_block_5(ctx) {
  var each_1_anchor;
  var each_value_3 =
  /*log*/
  ctx[0].args;
  var each_blocks = [];

  for (var i = 0; i < each_value_3.length; i += 1) {
    each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }

  return {
    c: function c() {
      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        each_blocks[_i6].c();
      }

      each_1_anchor = empty();
    },
    m: function m(target, anchor) {
      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        each_blocks[_i7].m(target, anchor);
      }

      insert(target, each_1_anchor, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*log*/
      1) {
        each_value_3 =
        /*log*/
        ctx[0].args;

        var _i8;

        for (_i8 = 0; _i8 < each_value_3.length; _i8 += 1) {
          var child_ctx = get_each_context_3(ctx, each_value_3, _i8);

          if (each_blocks[_i8]) {
            each_blocks[_i8].p(child_ctx, dirty);
          } else {
            each_blocks[_i8] = create_each_block_3(child_ctx);

            each_blocks[_i8].c();

            each_blocks[_i8].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        for (; _i8 < each_blocks.length; _i8 += 1) {
          each_blocks[_i8].d(1);
        }

        each_blocks.length = each_value_3.length;
      }
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching) detach(each_1_anchor);
    }
  };
} // (34:33) 


function create_if_block_4(ctx) {
  var div;
  var t1;
  var span;
  var t2_value =
  /*log*/
  ctx[0].label + "";
  var t2;
  return {
    c: function c() {
      div = element("div");
      div.textContent = "▶";
      t1 = space();
      span = element("span");
      t2 = text(t2_value);
      attr(div, "class", "arrow svelte-wz5xz8");
      toggle_class(div, "expand", !
      /*log*/
      ctx[0].collapsed);
      attr(span, "class", "title svelte-wz5xz8");
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      insert(target, t1, anchor);
      insert(target, span, anchor);
      append(span, t2);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*log*/
      1) {
        toggle_class(div, "expand", !
        /*log*/
        ctx[0].collapsed);
      }

      if (dirty &
      /*log*/
      1 && t2_value !== (t2_value =
      /*log*/
      ctx[0].label + "")) set_data(t2, t2_value);
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(div);
      if (detaching) detach(t1);
      if (detaching) detach(span);
    }
  };
} // (32:38) 


function create_if_block_3(ctx) {
  var span;
  return {
    c: function c() {
      span = element("span");
      span.textContent = "Message could not be cloned. Open devtools to see it";
      attr(span, "class", "info error svelte-wz5xz8");
    },
    m: function m(target, anchor) {
      insert(target, span, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(span);
    }
  };
} // (30:1) {#if log.level === 'clear'}


function create_if_block_2$1(ctx) {
  var span;
  return {
    c: function c() {
      span = element("span");
      span.textContent = "Console was cleared";
      attr(span, "class", "info svelte-wz5xz8");
    },
    m: function m(target, anchor) {
      insert(target, span, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(span);
    }
  };
} // (44:2) {#each log.args as arg}


function create_each_block_4(ctx) {
  var jsonnode;
  var current;
  jsonnode = new Src({
    props: {
      value:
      /*arg*/
      ctx[12]
    }
  });
  return {
    c: function c() {
      create_component(jsonnode.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(jsonnode, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var jsonnode_changes = {};
      if (dirty &
      /*log*/
      1) jsonnode_changes.value =
      /*arg*/
      ctx[12];
      jsonnode.$set(jsonnode_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(jsonnode.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(jsonnode.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(jsonnode, detaching);
    }
  };
} // (38:2) {#each log.args as arg}


function create_each_block_3(ctx) {
  var t_value =
  /*arg*/
  ctx[12] + "";
  var t;
  return {
    c: function c() {
      t = text(t_value);
    },
    m: function m(target, anchor) {
      insert(target, t, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*log*/
      1 && t_value !== (t_value =
      /*arg*/
      ctx[12] + "")) set_data(t, t_value);
    },
    d: function d(detaching) {
      if (detaching) detach(t);
    }
  };
} // (48:1) {#each new Array(level - 1) as _, idx}


function create_each_block_2(ctx) {
  var div;
  return {
    c: function c() {
      div = element("div");
      attr(div, "class", "outline svelte-wz5xz8");
      set_style(div, "left",
      /*idx*/
      ctx[11] * 15 + 15 + "px");
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
    },
    p: noop,
    d: function d(detaching) {
      if (detaching) detach(div);
    }
  };
} // (53:0) {#if log.level === 'group' && !log.collapsed}


function create_if_block_1$2(ctx) {
  var each_1_anchor;
  var current;
  var each_value_1 =
  /*log*/
  ctx[0].logs;
  var each_blocks = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  return {
    c: function c() {
      for (var _i9 = 0; _i9 < each_blocks.length; _i9 += 1) {
        each_blocks[_i9].c();
      }

      each_1_anchor = empty();
    },
    m: function m(target, anchor) {
      for (var _i10 = 0; _i10 < each_blocks.length; _i10 += 1) {
        each_blocks[_i10].m(target, anchor);
      }

      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*log, level*/
      3) {
        each_value_1 =
        /*log*/
        ctx[0].logs;

        var _i11;

        for (_i11 = 0; _i11 < each_value_1.length; _i11 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i11);

          if (each_blocks[_i11]) {
            each_blocks[_i11].p(child_ctx, dirty);

            transition_in(each_blocks[_i11], 1);
          } else {
            each_blocks[_i11] = create_each_block_1(child_ctx);

            each_blocks[_i11].c();

            transition_in(each_blocks[_i11], 1);

            each_blocks[_i11].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i11 = each_value_1.length; _i11 < each_blocks.length; _i11 += 1) {
          out(_i11);
        }

        check_outros();
      }
    },
    i: function i(local) {
      if (current) return;

      for (var _i12 = 0; _i12 < each_value_1.length; _i12 += 1) {
        transition_in(each_blocks[_i12]);
      }

      current = true;
    },
    o: function o(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i13 = 0; _i13 < each_blocks.length; _i13 += 1) {
        transition_out(each_blocks[_i13]);
      }

      current = false;
    },
    d: function d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching) detach(each_1_anchor);
    }
  };
} // (54:1) {#each log.logs as childLog}


function create_each_block_1(ctx) {
  var consoleline;
  var current;
  consoleline = new ConsoleLine({
    props: {
      log:
      /*childLog*/
      ctx[6],
      level:
      /*level*/
      ctx[1] + 1
    }
  });
  return {
    c: function c() {
      create_component(consoleline.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(consoleline, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var consoleline_changes = {};
      if (dirty &
      /*log*/
      1) consoleline_changes.log =
      /*childLog*/
      ctx[6];
      if (dirty &
      /*level*/
      2) consoleline_changes.level =
      /*level*/
      ctx[1] + 1;
      consoleline.$set(consoleline_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(consoleline.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(consoleline.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(consoleline, detaching);
    }
  };
} // (59:0) {#if (log.level === 'trace' || log.level === 'assert') && !log.collapsed}


function create_if_block$2(ctx) {
  var div;
  var each_value =
  /*log*/
  ctx[0].stack.split('\n').slice(2);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
  }

  return {
    c: function c() {
      div = element("div");

      for (var _i14 = 0; _i14 < each_blocks.length; _i14 += 1) {
        each_blocks[_i14].c();
      }

      attr(div, "class", "trace svelte-wz5xz8");
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);

      for (var _i15 = 0; _i15 < each_blocks.length; _i15 += 1) {
        each_blocks[_i15].m(div, null);
      }
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*log*/
      1) {
        each_value =
        /*log*/
        ctx[0].stack.split('\n').slice(2);

        var _i16;

        for (_i16 = 0; _i16 < each_value.length; _i16 += 1) {
          var child_ctx = get_each_context$2(ctx, each_value, _i16);

          if (each_blocks[_i16]) {
            each_blocks[_i16].p(child_ctx, dirty);
          } else {
            each_blocks[_i16] = create_each_block$2(child_ctx);

            each_blocks[_i16].c();

            each_blocks[_i16].m(div, null);
          }
        }

        for (; _i16 < each_blocks.length; _i16 += 1) {
          each_blocks[_i16].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    d: function d(detaching) {
      if (detaching) detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
} // (61:2) {#each log.stack.split('\n').slice(2) as stack}


function create_each_block$2(ctx) {
  var div;
  var t_value =
  /*stack*/
  ctx[3].replace(/^\s*at\s+/, '') + "";
  var t;
  return {
    c: function c() {
      div = element("div");
      t = text(t_value);
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*log*/
      1 && t_value !== (t_value =
      /*stack*/
      ctx[3].replace(/^\s*at\s+/, '') + "")) set_data(t, t_value);
    },
    d: function d(detaching) {
      if (detaching) detach(div);
    }
  };
}

function create_fragment$6(ctx) {
  var t0;
  var div;
  var t1;
  var t2;
  var t3;
  var show_if;
  var current_block_type_index;
  var if_block4;
  var t4;
  var div_class_value;
  var t5;
  var t6;
  var if_block6_anchor;
  var current;
  var mounted;
  var dispose;
  var if_block0 =
  /*log*/
  ctx[0].level === 'table' && create_if_block_10(ctx);
  var if_block1 =
  /*log*/
  ctx[0].count > 1 && create_if_block_9(ctx);
  var if_block2 = (
  /*log*/
  ctx[0].level === 'trace' ||
  /*log*/
  ctx[0].level === 'assert') && create_if_block_8(ctx);
  var if_block3 =
  /*log*/
  ctx[0].level === 'assert' && create_if_block_7();
  var if_block_creators = [create_if_block_2$1, create_if_block_3, create_if_block_4, create_if_block_5, create_if_block_6, create_else_block$1];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (dirty &
    /*log*/
    1) show_if = null;
    if (
    /*log*/
    ctx[0].level === 'clear') return 0;
    if (
    /*log*/
    ctx[0].level === 'unclonable') return 1;
    if (
    /*log*/
    ctx[0].level === 'group') return 2;
    if (show_if == null) show_if = !!
    /*log*/
    ctx[0].level.startsWith('system');
    if (show_if) return 3;
    if (
    /*log*/
    ctx[0].level === 'table') return 4;
    return 5;
  }

  current_block_type_index = select_block_type(ctx, -1);
  if_block4 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var each_value_2 = new Array(
  /*level*/
  ctx[1] - 1);
  var each_blocks = [];

  for (var i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }

  var if_block5 =
  /*log*/
  ctx[0].level === 'group' && !
  /*log*/
  ctx[0].collapsed && create_if_block_1$2(ctx);
  var if_block6 = (
  /*log*/
  ctx[0].level === 'trace' ||
  /*log*/
  ctx[0].level === 'assert') && !
  /*log*/
  ctx[0].collapsed && create_if_block$2(ctx);
  return {
    c: function c() {
      if (if_block0) if_block0.c();
      t0 = space();
      div = element("div");
      if (if_block1) if_block1.c();
      t1 = space();
      if (if_block2) if_block2.c();
      t2 = space();
      if (if_block3) if_block3.c();
      t3 = space();
      if_block4.c();
      t4 = space();

      for (var _i17 = 0; _i17 < each_blocks.length; _i17 += 1) {
        each_blocks[_i17].c();
      }

      t5 = space();
      if (if_block5) if_block5.c();
      t6 = space();
      if (if_block6) if_block6.c();
      if_block6_anchor = empty();
      attr(div, "class", div_class_value = "log console-" +
      /*log*/
      ctx[0].level + " svelte-wz5xz8");
      set_style(div, "padding-left",
      /*level*/
      ctx[1] * 15 + "px");
    },
    m: function m(target, anchor) {
      if (if_block0) if_block0.m(target, anchor);
      insert(target, t0, anchor);
      insert(target, div, anchor);
      if (if_block1) if_block1.m(div, null);
      append(div, t1);
      if (if_block2) if_block2.m(div, null);
      append(div, t2);
      if (if_block3) if_block3.m(div, null);
      append(div, t3);
      if_blocks[current_block_type_index].m(div, null);
      append(div, t4);

      for (var _i18 = 0; _i18 < each_blocks.length; _i18 += 1) {
        each_blocks[_i18].m(div, null);
      }

      insert(target, t5, anchor);
      if (if_block5) if_block5.m(target, anchor);
      insert(target, t6, anchor);
      if (if_block6) if_block6.m(target, anchor);
      insert(target, if_block6_anchor, anchor);
      current = true;

      if (!mounted) {
        dispose = listen(div, "click", function () {
          if (is_function(
          /*log*/
          ctx[0].level === 'group' ?
          /*toggleGroupCollapse*/
          ctx[2] : undefined)) (
          /*log*/
          ctx[0].level === 'group' ?
          /*toggleGroupCollapse*/
          ctx[2] : undefined).apply(this, arguments);
        });
        mounted = true;
      }
    },
    p: function p(new_ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      ctx = new_ctx;

      if (
      /*log*/
      ctx[0].level === 'table') {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*log*/
          1) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_10(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      if (
      /*log*/
      ctx[0].count > 1) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block_9(ctx);
          if_block1.c();
          if_block1.m(div, t1);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (
      /*log*/
      ctx[0].level === 'trace' ||
      /*log*/
      ctx[0].level === 'assert') {
        if (if_block2) {
          if_block2.p(ctx, dirty);
        } else {
          if_block2 = create_if_block_8(ctx);
          if_block2.c();
          if_block2.m(div, t2);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }

      if (
      /*log*/
      ctx[0].level === 'assert') {
        if (if_block3) ; else {
          if_block3 = create_if_block_7();
          if_block3.c();
          if_block3.m(div, t3);
        }
      } else if (if_block3) {
        if_block3.d(1);
        if_block3 = null;
      }

      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block4 = if_blocks[current_block_type_index];

        if (!if_block4) {
          if_block4 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block4.c();
        } else {
          if_block4.p(ctx, dirty);
        }

        transition_in(if_block4, 1);
        if_block4.m(div, t4);
      }

      if (dirty &
      /*level*/
      2) {
        each_value_2 = new Array(
        /*level*/
        ctx[1] - 1);

        var _i19;

        for (_i19 = 0; _i19 < each_value_2.length; _i19 += 1) {
          var child_ctx = get_each_context_2(ctx, each_value_2, _i19);

          if (each_blocks[_i19]) {
            each_blocks[_i19].p(child_ctx, dirty);
          } else {
            each_blocks[_i19] = create_each_block_2(child_ctx);

            each_blocks[_i19].c();

            each_blocks[_i19].m(div, null);
          }
        }

        for (; _i19 < each_blocks.length; _i19 += 1) {
          each_blocks[_i19].d(1);
        }

        each_blocks.length = each_value_2.length;
      }

      if (!current || dirty &
      /*log*/
      1 && div_class_value !== (div_class_value = "log console-" +
      /*log*/
      ctx[0].level + " svelte-wz5xz8")) {
        attr(div, "class", div_class_value);
      }

      if (!current || dirty &
      /*level*/
      2) {
        set_style(div, "padding-left",
        /*level*/
        ctx[1] * 15 + "px");
      }

      if (
      /*log*/
      ctx[0].level === 'group' && !
      /*log*/
      ctx[0].collapsed) {
        if (if_block5) {
          if_block5.p(ctx, dirty);

          if (dirty &
          /*log*/
          1) {
            transition_in(if_block5, 1);
          }
        } else {
          if_block5 = create_if_block_1$2(ctx);
          if_block5.c();
          transition_in(if_block5, 1);
          if_block5.m(t6.parentNode, t6);
        }
      } else if (if_block5) {
        group_outros();
        transition_out(if_block5, 1, 1, function () {
          if_block5 = null;
        });
        check_outros();
      }

      if ((
      /*log*/
      ctx[0].level === 'trace' ||
      /*log*/
      ctx[0].level === 'assert') && !
      /*log*/
      ctx[0].collapsed) {
        if (if_block6) {
          if_block6.p(ctx, dirty);
        } else {
          if_block6 = create_if_block$2(ctx);
          if_block6.c();
          if_block6.m(if_block6_anchor.parentNode, if_block6_anchor);
        }
      } else if (if_block6) {
        if_block6.d(1);
        if_block6 = null;
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(if_block4);
      transition_in(if_block5);
      current = true;
    },
    o: function o(local) {
      transition_out(if_block0);
      transition_out(if_block4);
      transition_out(if_block5);
      current = false;
    },
    d: function d(detaching) {
      if (if_block0) if_block0.d(detaching);
      if (detaching) detach(t0);
      if (detaching) detach(div);
      if (if_block1) if_block1.d();
      if (if_block2) if_block2.d();
      if (if_block3) if_block3.d();
      if_blocks[current_block_type_index].d();
      destroy_each(each_blocks, detaching);
      if (detaching) detach(t5);
      if (if_block5) if_block5.d(detaching);
      if (detaching) detach(t6);
      if (if_block6) if_block6.d(detaching);
      if (detaching) detach(if_block6_anchor);
      mounted = false;
      dispose();
    }
  };
}

function instance$6($$self, $$props, $$invalidate) {
  var log = $$props.log;
  var _$$props$level = $$props.level,
      level = _$$props$level === void 0 ? 1 : _$$props$level;

  function toggleGroupCollapse() {
    $$invalidate(0, log.collapsed = !log.collapsed, log);
  }

  $$self.$$set = function ($$props) {
    if ('log' in $$props) $$invalidate(0, log = $$props.log);
    if ('level' in $$props) $$invalidate(1, level = $$props.level);
  };

  return [log, level, toggleGroupCollapse];
}

var ConsoleLine = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(ConsoleLine, _SvelteComponent);

  var _super = _createSuper$6(ConsoleLine);

  function ConsoleLine(options) {
    var _this;

    _classCallCheck(this, ConsoleLine);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$6, create_fragment$6, safe_not_equal, {
      log: 0,
      level: 1
    });
    return _this;
  }

  return _createClass(ConsoleLine);
}(SvelteComponent);

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function get_each_context$1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
} // (9:1) {#each logs as log}


function create_each_block$1(ctx) {
  var consoleline;
  var current;
  consoleline = new ConsoleLine({
    props: {
      log:
      /*log*/
      ctx[1]
    }
  });
  return {
    c: function c() {
      create_component(consoleline.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(consoleline, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var consoleline_changes = {};
      if (dirty &
      /*logs*/
      1) consoleline_changes.log =
      /*log*/
      ctx[1];
      consoleline.$set(consoleline_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(consoleline.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(consoleline.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(consoleline, detaching);
    }
  };
}

function create_fragment$5(ctx) {
  var div;
  var current;
  var each_value =
  /*logs*/
  ctx[0];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  return {
    c: function c() {
      div = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      attr(div, "class", "container");
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(div, null);
      }

      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*logs*/
      1) {
        each_value =
        /*logs*/
        ctx[0];

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context$1(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);

            transition_in(each_blocks[_i3], 1);
          } else {
            each_blocks[_i3] = create_each_block$1(child_ctx);

            each_blocks[_i3].c();

            transition_in(each_blocks[_i3], 1);

            each_blocks[_i3].m(div, null);
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
      if (detaching) detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}

function instance$5($$self, $$props, $$invalidate) {
  var logs = $$props.logs;

  $$self.$$set = function ($$props) {
    if ('logs' in $$props) $$invalidate(0, logs = $$props.logs);
  };

  return [logs];
}

var Console = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Console, _SvelteComponent);

  var _super = _createSuper$5(Console);

  function Console(options) {
    var _this;

    _classCallCheck(this, Console);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$5, create_fragment$5, safe_not_equal, {
      logs: 0
    });
    return _this;
  }

  return _createClass(Console);
}(SvelteComponent);

var srcdoc = "<!doctype html>\n<html>\n\t<head>\n\t\t<style>\n\t\t\thtml, body {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n\nbody {\n\tcolor: #333;\n\tmargin: 0;\n\tpadding: 8px;\n\tbox-sizing: border-box;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n}\n\na {\n\tcolor: rgb(0,100,200);\n\ttext-decoration: none;\n}\n\na:hover {\n\ttext-decoration: underline;\n}\n\na:visited {\n\tcolor: rgb(0,80,160);\n}\n\nlabel {\n\tdisplay: block;\n}\n\ninput, button, select, textarea {\n\tfont-family: inherit;\n\tfont-size: inherit;\n\t-webkit-padding: 0.4em 0;\n\tpadding: 0.4em;\n\tmargin: 0 0 0.5em 0;\n\tbox-sizing: border-box;\n\tborder: 1px solid #ccc;\n\tborder-radius: 2px;\n}\n\ninput:disabled {\n\tcolor: #ccc;\n}\n\nbutton {\n\tcolor: #333;\n\tbackground-color: #f4f4f4;\n\toutline: none;\n}\n\nbutton:disabled {\n\tcolor: #999;\n}\n\nbutton:not(:disabled):active {\n\tbackground-color: #ddd;\n}\n\nbutton:focus {\n\tborder-color: #666;\n}\n\n\t\t</style>\n\n\t\t<script>\n\t\t\t(function(){\n\t\t\t\tfunction handle_message(ev) {\n\t\t\t\t\tlet { action, cmd_id } = ev.data;\n\t\t\t\t\tconst send_message = (payload) => parent.postMessage( { ...payload }, ev.origin);\n\t\t\t\t\tconst send_reply = (payload) => send_message({ ...payload, cmd_id });\n\t\t\t\t\tconst send_ok = () => send_reply({ action: 'cmd_ok' });\n\t\t\t\t\tconst send_error = (message, stack) => send_reply({ action: 'cmd_error', message, stack });\n\n\t\t\t\t\tif (action === 'eval') {\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\tconst { script } = ev.data.args;\n\t\t\t\t\t\t\teval(script);\n\t\t\t\t\t\t\tsend_ok();\n\t\t\t\t\t\t} catch (e) {\n\t\t\t\t\t\t\tsend_error(e.message, e.stack);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\tif (action === 'catch_clicks') {\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\tconst top_origin = ev.origin;\n\t\t\t\t\t\t\tdocument.body.addEventListener('click', event => {\n\t\t\t\t\t\t\t\tif (event.which !== 1) return;\n\t\t\t\t\t\t\t\tif (event.metaKey || event.ctrlKey || event.shiftKey) return;\n\t\t\t\t\t\t\t\tif (event.defaultPrevented) return;\n\n\t\t\t\t\t\t\t\t// ensure target is a link\n\t\t\t\t\t\t\t\tlet el = event.target;\n\t\t\t\t\t\t\t\twhile (el && el.nodeName !== 'A') el = el.parentNode;\n\t\t\t\t\t\t\t\tif (!el || el.nodeName !== 'A') return;\n\n\t\t\t\t\t\t\t\tif (el.hasAttribute('download') || el.getAttribute('rel') === 'external' || el.target) return;\n\n\t\t\t\t\t\t\t\tevent.preventDefault();\n\n\t\t\t\t\t\t\t\tif (el.href.startsWith(top_origin)) {\n\t\t\t\t\t\t\t\t\tconst url = new URL(el.href);\n\t\t\t\t\t\t\t\t\tif (url.hash[0] === '#') {\n\t\t\t\t\t\t\t\t\t\twindow.location.hash = url.hash;\n\t\t\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\twindow.open(el.href, '_blank');\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\tsend_ok();\n\t\t\t\t\t\t} catch(e) {\n\t\t\t\t\t\t\tsend_error(e.message, e.stack);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\twindow.addEventListener('message', handle_message, false);\n\n\t\t\t\twindow.onerror = function (msg, url, lineNo, columnNo, error) {\n\t\t\t\t\tparent.postMessage({ action: 'error', value: error }, '*');\n\t\t\t\t}\n\n\t\t\t\twindow.addEventListener(\"unhandledrejection\", event => {\n\t\t\t\t\tparent.postMessage({ action: 'unhandledrejection', value: event.reason }, '*');\n\t\t\t\t});\n\t\t\t}).call(this);\n\n\t\t\tlet previous = { level: null, args: null };\n\n\t\t\t['clear', 'log', 'info', 'dir', 'warn', 'error', 'table'].forEach((level) => {\n\t\t\t\tconst original = console[level];\n\t\t\t\tconsole[level] = (...args) => {\n\t\t\t\t\tconst stringifiedArgs = stringify(args);\n\t\t\t\t\tif (\n\t\t\t\t\t\tprevious.level === level &&\n\t\t\t\t\t\tprevious.args &&\n\t\t\t\t\t\tprevious.args === stringifiedArgs\n\t\t\t\t\t) {\n\t\t\t\t\t\tparent.postMessage({ action: 'console', level, duplicate: true }, '*');\n\t\t\t\t\t} else {\n\t\t\t\t\t\tprevious = { level, args: stringifiedArgs };\n\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\tparent.postMessage({ action: 'console', level, args }, '*');\n\t\t\t\t\t\t} catch (err) {\n\t\t\t\t\t\t\tparent.postMessage({ action: 'console', level: 'unclonable' }, '*');\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\toriginal(...args);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t[\n\t\t\t\t{ method: 'group', action: 'console_group' },\n\t\t\t\t{ method: 'groupEnd', action: 'console_group_end' },\n\t\t\t\t{ method: 'groupCollapsed', action: 'console_group_collapsed' },\n\t\t\t].forEach((group_action) => {\n\t\t\t\tconst original = console[group_action.method];\n\t\t\t\tconsole[group_action.method] = (label) => {\n\t\t\t\t\tparent.postMessage({ action: group_action.action, label }, '*');\n\n\t\t\t\t\toriginal(label);\n\t\t\t\t};\n\t\t\t});\n\n\t\t\tconst timers = new Map();\n\t\t\tconst original_time = console.time;\n\t\t\tconst original_timelog = console.timeLog;\n\t\t\tconst original_timeend = console.timeEnd;\n\n\t\t\tconsole.time = (label = 'default') => {\n\t\t\t\toriginal_time(label);\n\t\t\t\ttimers.set(label, performance.now());\n\t\t\t}\n\t\t\tconsole.timeLog = (label = 'default') => {\n\t\t\t\toriginal_timelog(label);\n\t\t\t\tconst now = performance.now();\n\t\t\t\tif (timers.has(label)) {\n\t\t\t\t\tparent.postMessage({ action: 'console', level: 'system-log', args: [`${label}: ${now - timers.get(label)}ms`] }, '*');\n\t\t\t\t} else {\n\t\t\t\t\tparent.postMessage({ action: 'console', level: 'system-warn', args: [`Timer '${label}' does not exist`] }, '*');\n\t\t\t\t}\n\t\t\t}\n\t\t\tconsole.timeEnd = (label = 'default') => {\n\t\t\t\toriginal_timeend(label);\n\t\t\t\tconst now = performance.now();\n\t\t\t\tif (timers.has(label)) {\n\t\t\t\t\tparent.postMessage({ action: 'console', level: 'system-log', args: [`${label}: ${now - timers.get(label)}ms`] }, '*');\n\t\t\t\t} else {\n\t\t\t\t\tparent.postMessage({ action: 'console', level: 'system-warn', args: [`Timer '${label}' does not exist`] }, '*');\n\t\t\t\t}\n\t\t\t\ttimers.delete(label);\n\t\t\t};\n\n\t\t\tconst original_assert = console.assert;\n\t\t\tconsole.assert = (condition, ...args) => {\n\t\t\t\tif (condition) {\n\t\t\t\t\tconst stack = new Error().stack;\n\t\t\t\t\tparent.postMessage({ action: 'console', level: 'assert', args, stack }, '*');\n\t\t\t\t}\n\t\t\t\toriginal_assert(condition, ...args);\n\t\t\t};\n\n\t\t\tconst counter = new Map();\n\t\t\tconst original_count = console.count;\n\t\t\tconst original_countreset = console.countReset;\n\n\t\t\tconsole.count = (label = 'default') => {\n\t\t\t\tcounter.set(label, (counter.get(label) || 0) + 1);\n\t\t\t\tparent.postMessage({ action: 'console', level: 'system-log', args: `${label}: ${counter.get(label)}` }, '*');\n\t\t\t\toriginal_count(label);\n\t\t\t};\n\n\t\t\tconsole.countReset = (label = 'default') => {\n\t\t\t\tif (counter.has(label)) {\n\t\t\t\t\tcounter.set(label, 0);\n\t\t\t\t} else {\n\t\t\t\t\tparent.postMessage({ action: 'console', level: 'system-warn', args: `Count for '${label}' does not exist` }, '*');\n\t\t\t\t}\n\t\t\t\toriginal_countreset(label);\n\t\t\t};\n\n\t\t\tconst original_trace = console.trace;\n\n\t\t\tconsole.trace = (...args) => {\n\t\t\t\tconst stack = new Error().stack;\n\t\t\t\tparent.postMessage({ action: 'console', level: 'trace', args, stack }, '*');\n\t\t\t\toriginal_trace(...args);\n\t\t\t};\n\n\t\t\tfunction stringify(args) {\n\t\t\t\ttry {\n\t\t\t\t\treturn JSON.stringify(args);\n\t\t\t\t} catch (error) {\n\t\t\t\t\treturn null;\n\t\t\t\t}\n\t\t\t}\n\t\t</script>\n\t</head>\n\t<body></body>\n</html>";

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_main_slot$1(ctx) {
  var div;
  var iframe_1;
  var iframe_1_sandbox_value;
  var iframe_1_class_value;
  return {
    c: function c() {
      div = element("div");
      iframe_1 = element("iframe");
      attr(iframe_1, "title", "Result");
      attr(iframe_1, "sandbox", iframe_1_sandbox_value = "allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals " + (
      /*relaxed*/
      ctx[2] ? 'allow-same-origin' : ''));
      attr(iframe_1, "class", iframe_1_class_value = "" + (null_to_empty(
      /*error*/
      ctx[0] || pending ||
      /*pending_imports*/
      ctx[6] ? 'greyed-out' : '') + " svelte-ivx2cg"));
      attr(iframe_1, "srcdoc", srcdoc);
      toggle_class(iframe_1, "inited",
      /*inited*/
      ctx[7]);
      attr(div, "slot", "main");
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      append(div, iframe_1);
      /*iframe_1_binding*/

      ctx[14](iframe_1);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*relaxed*/
      4 && iframe_1_sandbox_value !== (iframe_1_sandbox_value = "allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals " + (
      /*relaxed*/
      ctx[2] ? 'allow-same-origin' : ''))) {
        attr(iframe_1, "sandbox", iframe_1_sandbox_value);
      }

      if (dirty &
      /*error, pending_imports*/
      65 && iframe_1_class_value !== (iframe_1_class_value = "" + (null_to_empty(
      /*error*/
      ctx[0] || pending ||
      /*pending_imports*/
      ctx[6] ? 'greyed-out' : '') + " svelte-ivx2cg"))) {
        attr(iframe_1, "class", iframe_1_class_value);
      }

      if (dirty &
      /*error, pending_imports, inited*/
      193) {
        toggle_class(iframe_1, "inited",
        /*inited*/
        ctx[7]);
      }
    },
    d: function d(detaching) {
      if (detaching) detach(div);
      /*iframe_1_binding*/

      ctx[14](null);
    }
  };
} // (247:4) {#if (logs.length > 0)}


function create_if_block_2(ctx) {
  var t0;
  var t1_value =
  /*logs*/
  ctx[4].length + "";
  var t1;
  var t2;
  return {
    c: function c() {
      t0 = text("(");
      t1 = text(t1_value);
      t2 = text(")");
    },
    m: function m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, t1, anchor);
      insert(target, t2, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*logs*/
      16 && t1_value !== (t1_value =
      /*logs*/
      ctx[4].length + "")) set_data(t1, t1_value);
    },
    d: function d(detaching) {
      if (detaching) detach(t0);
      if (detaching) detach(t1);
      if (detaching) detach(t2);
    }
  };
} // (245:2) 


function create_panel_header_slot(ctx) {
  var div;
  var button;
  var t;
  var mounted;
  var dispose;
  var if_block =
  /*logs*/
  ctx[4].length > 0 && create_if_block_2(ctx);
  return {
    c: function c() {
      div = element("div");
      button = element("button");
      if (if_block) if_block.c();
      t = text("\n\t\t\t\tClear");
      attr(button, "class", "svelte-ivx2cg");
      attr(div, "slot", "panel-header");
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      append(div, button);
      if (if_block) if_block.m(button, null);
      append(button, t);

      if (!mounted) {
        dispose = listen(button, "click", stop_propagation(
        /*clear_logs*/
        ctx[9]));
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (
      /*logs*/
      ctx[4].length > 0) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block_2(ctx);
          if_block.c();
          if_block.m(button, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d: function d(detaching) {
      if (detaching) detach(div);
      if (if_block) if_block.d();
      mounted = false;
      dispose();
    }
  };
} // (252:2) 


function create_panel_body_slot$1(ctx) {
  var section;
  var console;
  var current;
  console = new Console({
    props: {
      logs:
      /*logs*/
      ctx[4]
    }
  });
  console.$on("clear",
  /*clear_logs*/
  ctx[9]);
  return {
    c: function c() {
      section = element("section");
      create_component(console.$$.fragment);
      attr(section, "slot", "panel-body");
    },
    m: function m(target, anchor) {
      insert(target, section, anchor);
      mount_component(console, section, null);
      current = true;
    },
    p: function p(ctx, dirty) {
      var console_changes = {};
      if (dirty &
      /*logs*/
      16) console_changes.logs =
      /*logs*/
      ctx[4];
      console.$set(console_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(console.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(console.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(section);
      destroy_component(console);
    }
  };
} // (260:31) 


function create_if_block_1$1(ctx) {
  var message;
  var current;
  message = new Message({
    props: {
      kind: "info",
      truncate: true,
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      create_component(message.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(message, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var message_changes = {};

      if (dirty &
      /*$$scope, status*/
      536870914) {
        message_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      message.$set(message_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(message.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(message.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(message, detaching);
    }
  };
} // (258:2) {#if error}


function create_if_block$1(ctx) {
  var message;
  var current;
  message = new Message({
    props: {
      kind: "error",
      details:
      /*error*/
      ctx[0]
    }
  });
  return {
    c: function c() {
      create_component(message.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(message, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var message_changes = {};
      if (dirty &
      /*error*/
      1) message_changes.details =
      /*error*/
      ctx[0];
      message.$set(message_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(message.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(message.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(message, detaching);
    }
  };
} // (261:3) <Message kind="info" truncate>


function create_default_slot(ctx) {
  var t_value = (
  /*status*/
  ctx[1] || 'loading Svelte compiler...') + "";
  var t;
  return {
    c: function c() {
      t = text(t_value);
    },
    m: function m(target, anchor) {
      insert(target, t, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*status*/
      2 && t_value !== (t_value = (
      /*status*/
      ctx[1] || 'loading Svelte compiler...') + "")) set_data(t, t_value);
    },
    d: function d(detaching) {
      if (detaching) detach(t);
    }
  };
}

function create_fragment$4(ctx) {
  var div1;
  var panewithpanel;
  var t;
  var div0;
  var current_block_type_index;
  var if_block;
  var current;
  panewithpanel = new PaneWithPanel({
    props: {
      pos: 100,
      panel: "Console",
      $$slots: {
        "panel-body": [create_panel_body_slot$1],
        "panel-header": [create_panel_header_slot],
        main: [create_main_slot$1]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  var if_block_creators = [create_if_block$1, create_if_block_1$1];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*error*/
    ctx[0]) return 0;
    if (
    /*status*/
    ctx[1] || !
    /*$bundle*/
    ctx[3]) return 1;
    return -1;
  }

  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }

  return {
    c: function c() {
      div1 = element("div");
      create_component(panewithpanel.$$.fragment);
      t = space();
      div0 = element("div");
      if (if_block) if_block.c();
      attr(div0, "class", "overlay svelte-ivx2cg");
      attr(div1, "class", "iframe-container svelte-ivx2cg");
    },
    m: function m(target, anchor) {
      insert(target, div1, anchor);
      mount_component(panewithpanel, div1, null);
      append(div1, t);
      append(div1, div0);

      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(div0, null);
      }

      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var panewithpanel_changes = {};

      if (dirty &
      /*$$scope, logs, relaxed, error, pending_imports, iframe, inited*/
      536871157) {
        panewithpanel_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      panewithpanel.$set(panewithpanel_changes);
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        }
      } else {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }

        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          } else {
            if_block.p(ctx, dirty);
          }

          transition_in(if_block, 1);
          if_block.m(div0, null);
        } else {
          if_block = null;
        }
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(panewithpanel.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o: function o(local) {
      transition_out(panewithpanel.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(div1);
      destroy_component(panewithpanel);

      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }
    }
  };
}

var pending = false;

function instance$4($$self, $$props, $$invalidate) {
  var styles;
  var $bundle;

  var _getContext = getContext('REPL'),
      bundle = _getContext.bundle;

  component_subscribe($$self, bundle, function (value) {
    return $$invalidate(3, $bundle = value);
  });
  var error = $$props.error;
  var logs = [];
  var log_group_stack = [];
  var current_log_group = logs;

  function setProp(prop, value) {
    if (!proxy) return;
    proxy.setProp(prop, value);
  }

  var status = $$props.status;
  var _$$props$relaxed = $$props.relaxed,
      relaxed = _$$props$relaxed === void 0 ? false : _$$props$relaxed;
  var _$$props$injectedJS = $$props.injectedJS,
      injectedJS = _$$props$injectedJS === void 0 ? '' : _$$props$injectedJS;
  var _$$props$injectedCSS = $$props.injectedCSS,
      injectedCSS = _$$props$injectedCSS === void 0 ? '' : _$$props$injectedCSS;
  var iframe;
  var pending_imports = 0;
  var proxy = null;
  var ready = false;
  var inited = false;
  var last_console_event;
  onMount(function () {
    proxy = new ReplProxy(iframe, {
      on_fetch_progress: function on_fetch_progress(progress) {
        $$invalidate(6, pending_imports = progress);
      },
      on_error: function on_error(event) {
        push_logs({
          level: 'error',
          args: [event.value]
        });
      },
      on_unhandled_rejection: function on_unhandled_rejection(event) {
        var error = event.value;
        if (typeof error === 'string') error = {
          message: error
        };
        error.message = 'Uncaught (in promise): ' + error.message;
        push_logs({
          level: 'error',
          args: [error]
        });
      },
      on_console: function on_console(log) {
        if (log.level === 'clear') {
          clear_logs();
          push_logs(log);
        } else if (log.duplicate) {
          increment_duplicate_log();
        } else {
          push_logs(log);
        }
      },
      on_console_group: function on_console_group(action) {
        group_logs(action.label, false);
      },
      on_console_group_end: function on_console_group_end() {
        ungroup_logs();
      },
      on_console_group_collapsed: function on_console_group_collapsed(action) {
        group_logs(action.label, true);
      }
    });
    iframe.addEventListener('load', function () {
      proxy.handle_links();
      $$invalidate(13, ready = true);
    });
    return function () {
      proxy.destroy();
    };
  });

  function apply_bundle(_x) {
    return _apply_bundle.apply(this, arguments);
  }

  function _apply_bundle() {
    _apply_bundle = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee($bundle) {
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!$bundle || $bundle.error)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.prev = 2;
              clear_logs();
              _context.next = 6;
              return proxy.eval("\n\t\t\t\t".concat(injectedJS, "\n\n\t\t\t\t").concat(styles, "\n\n\t\t\t\tconst styles = document.querySelectorAll('style[id^=svelte-]');\n\n\t\t\t\t").concat($bundle.dom.code, "\n\n\t\t\t\tlet i = styles.length;\n\t\t\t\twhile (i--) styles[i].parentNode.removeChild(styles[i]);\n\n\t\t\t\tif (window.component) {\n\t\t\t\t\ttry {\n\t\t\t\t\t\twindow.component.$destroy();\n\t\t\t\t\t} catch (err) {\n\t\t\t\t\t\tconsole.error(err);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tdocument.body.innerHTML = '';\n\t\t\t\twindow.location.hash = '';\n\t\t\t\twindow._svelteTransitionManager = null;\n\n\t\t\t\twindow.component = new SvelteComponent.default({\n\t\t\t\t\ttarget: document.body\n\t\t\t\t});\n\t\t\t"));

            case 6:
              $$invalidate(0, error = null);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              show_error(_context.t0);

            case 12:
              $$invalidate(7, inited = true);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9]]);
    }));
    return _apply_bundle.apply(this, arguments);
  }

  function show_error(e) {
    var loc = getLocationFromStack(e.stack, $bundle.dom.map);

    if (loc) {
      e.filename = loc.source;
      e.loc = {
        line: loc.line,
        column: loc.column
      };
    }

    $$invalidate(0, error = e);
  }

  function push_logs(log) {
    current_log_group.push(last_console_event = log);
    $$invalidate(4, logs);
  }

  function group_logs(label, collapsed) {
    var group_log = {
      level: 'group',
      label: label,
      collapsed: collapsed,
      logs: []
    };
    current_log_group.push(group_log);
    log_group_stack.push(current_log_group);
    current_log_group = group_log.logs;
    $$invalidate(4, logs);
  }

  function ungroup_logs() {
    current_log_group = log_group_stack.pop();
  }

  function increment_duplicate_log() {
    var last_log = current_log_group[current_log_group.length - 1];

    if (last_log) {
      last_log.count = (last_log.count || 1) + 1;
      $$invalidate(4, logs);
    } else {
      last_console_event.count = 1;
      push_logs(last_console_event);
    }
  }

  function clear_logs() {
    current_log_group = $$invalidate(4, logs = []);
  }

  function iframe_1_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      iframe = $$value;
      $$invalidate(5, iframe);
    });
  }

  $$self.$$set = function ($$props) {
    if ('error' in $$props) $$invalidate(0, error = $$props.error);
    if ('status' in $$props) $$invalidate(1, status = $$props.status);
    if ('relaxed' in $$props) $$invalidate(2, relaxed = $$props.relaxed);
    if ('injectedJS' in $$props) $$invalidate(11, injectedJS = $$props.injectedJS);
    if ('injectedCSS' in $$props) $$invalidate(12, injectedCSS = $$props.injectedCSS);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*ready, $bundle*/
    8200) {
      if (ready) apply_bundle($bundle);
    }

    if ($$self.$$.dirty &
    /*injectedCSS*/
    4096) {
      styles = injectedCSS && "{\n\t\tconst style = document.createElement('style');\n\t\tstyle.textContent = ".concat(JSON.stringify(injectedCSS), ";\n\t\tdocument.head.appendChild(style);\n\t}");
    }
  };

  return [error, status, relaxed, $bundle, logs, iframe, pending_imports, inited, bundle, clear_logs, setProp, injectedJS, injectedCSS, ready, iframe_1_binding];
}

var Viewer = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Viewer, _SvelteComponent);

  var _super = _createSuper$4(Viewer);

  function Viewer(options) {
    var _this;

    _classCallCheck(this, Viewer);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {
      error: 0,
      setProp: 10,
      status: 1,
      relaxed: 2,
      injectedJS: 11,
      injectedCSS: 12
    });
    return _this;
  }

  _createClass(Viewer, [{
    key: "setProp",
    get: function get() {
      return this.$$.ctx[10];
    }
  }]);

  return Viewer;
}(SvelteComponent);

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment$3(ctx) {
  var div1;
  var t0;
  var div0;
  var span0;
  var t2;
  var input0;
  var t3;
  var label0;
  var t5;
  var input1;
  var t6;
  var label1;
  var t9;
  var label2;
  var span3;
  var t11;
  var input2;
  var t12;
  var span4;
  var t13_value =
  /*$compile_options*/
  ctx[0].dev + "";
  var t13;
  var t14;
  var t15;
  var label3;
  var span5;
  var t17;
  var input3;
  var t18;
  var span6;
  var t19_value =
  /*$compile_options*/
  ctx[0].css + "";
  var t19;
  var t20;
  var t21;
  var label4;
  var span7;
  var t23;
  var input4;
  var t24;
  var span8;
  var t25_value =
  /*$compile_options*/
  ctx[0].hydratable + "";
  var t25;
  var t26;
  var t27;
  var label5;
  var span9;
  var t29;
  var input5;
  var t30;
  var span10;
  var t31_value =
  /*$compile_options*/
  ctx[0].customElement + "";
  var t31;
  var t32;
  var t33;
  var label6;
  var span11;
  var t35;
  var input6;
  var t36;
  var span12;
  var t37_value =
  /*$compile_options*/
  ctx[0].immutable + "";
  var t37;
  var t38;
  var t39;
  var label7;
  var span13;
  var t41;
  var input7;
  var t42;
  var span14;
  var t43_value =
  /*$compile_options*/
  ctx[0].legacy + "";
  var t43;
  var t44;
  var mounted;
  var dispose;
  return {
    c: function c() {
      div1 = element("div");
      t0 = text("result = svelte.compile(source, {\n\t");
      div0 = element("div");
      span0 = element("span");
      span0.textContent = "generate:";
      t2 = space();
      input0 = element("input");
      t3 = space();
      label0 = element("label");
      label0.innerHTML = "<span class=\"string svelte-159cly1\">&quot;dom&quot;</span>";
      t5 = space();
      input1 = element("input");
      t6 = space();
      label1 = element("label");
      label1.innerHTML = "<span class=\"string svelte-159cly1\">&quot;ssr&quot;</span>,";
      t9 = space();
      label2 = element("label");
      span3 = element("span");
      span3.textContent = "dev:";
      t11 = space();
      input2 = element("input");
      t12 = space();
      span4 = element("span");
      t13 = text(t13_value);
      t14 = text(",");
      t15 = space();
      label3 = element("label");
      span5 = element("span");
      span5.textContent = "css:";
      t17 = space();
      input3 = element("input");
      t18 = space();
      span6 = element("span");
      t19 = text(t19_value);
      t20 = text(",");
      t21 = space();
      label4 = element("label");
      span7 = element("span");
      span7.textContent = "hydratable:";
      t23 = space();
      input4 = element("input");
      t24 = space();
      span8 = element("span");
      t25 = text(t25_value);
      t26 = text(",");
      t27 = space();
      label5 = element("label");
      span9 = element("span");
      span9.textContent = "customElement:";
      t29 = space();
      input5 = element("input");
      t30 = space();
      span10 = element("span");
      t31 = text(t31_value);
      t32 = text(",");
      t33 = space();
      label6 = element("label");
      span11 = element("span");
      span11.textContent = "immutable:";
      t35 = space();
      input6 = element("input");
      t36 = space();
      span12 = element("span");
      t37 = text(t37_value);
      t38 = text(",");
      t39 = space();
      label7 = element("label");
      span13 = element("span");
      span13.textContent = "legacy:";
      t41 = space();
      input7 = element("input");
      t42 = space();
      span14 = element("span");
      t43 = text(t43_value);
      t44 = text("\n\t});");
      attr(span0, "class", "key svelte-159cly1");
      attr(input0, "id", "dom-input");
      attr(input0, "type", "radio");
      input0.__value = "dom";
      input0.value = input0.__value;
      attr(input0, "class", "svelte-159cly1");
      /*$$binding_groups*/

      ctx[3][0].push(input0);
      attr(label0, "for", "dom-input");
      attr(label0, "class", "svelte-159cly1");
      attr(input1, "id", "ssr-input");
      attr(input1, "type", "radio");
      input1.__value = "ssr";
      input1.value = input1.__value;
      attr(input1, "class", "svelte-159cly1");
      /*$$binding_groups*/

      ctx[3][0].push(input1);
      attr(label1, "for", "ssr-input");
      attr(label1, "class", "svelte-159cly1");
      attr(div0, "class", "option svelte-159cly1");
      attr(span3, "class", "key svelte-159cly1");
      attr(input2, "type", "checkbox");
      attr(input2, "class", "svelte-159cly1");
      attr(span4, "class", "boolean svelte-159cly1");
      attr(label2, "class", "option svelte-159cly1");
      attr(span5, "class", "key svelte-159cly1");
      attr(input3, "type", "checkbox");
      attr(input3, "class", "svelte-159cly1");
      attr(span6, "class", "boolean svelte-159cly1");
      attr(label3, "class", "option svelte-159cly1");
      attr(span7, "class", "key svelte-159cly1");
      attr(input4, "type", "checkbox");
      attr(input4, "class", "svelte-159cly1");
      attr(span8, "class", "boolean svelte-159cly1");
      attr(label4, "class", "option svelte-159cly1");
      attr(span9, "class", "key svelte-159cly1");
      attr(input5, "type", "checkbox");
      attr(input5, "class", "svelte-159cly1");
      attr(span10, "class", "boolean svelte-159cly1");
      attr(label5, "class", "option svelte-159cly1");
      attr(span11, "class", "key svelte-159cly1");
      attr(input6, "type", "checkbox");
      attr(input6, "class", "svelte-159cly1");
      attr(span12, "class", "boolean svelte-159cly1");
      attr(label6, "class", "option svelte-159cly1");
      attr(span13, "class", "key svelte-159cly1");
      attr(input7, "type", "checkbox");
      attr(input7, "class", "svelte-159cly1");
      attr(span14, "class", "boolean svelte-159cly1");
      attr(label7, "class", "option svelte-159cly1");
      attr(div1, "class", "options svelte-159cly1");
    },
    m: function m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, t0);
      append(div1, div0);
      append(div0, span0);
      append(div0, t2);
      append(div0, input0);
      input0.checked = input0.__value ===
      /*$compile_options*/
      ctx[0].generate;
      append(div0, t3);
      append(div0, label0);
      append(div0, t5);
      append(div0, input1);
      input1.checked = input1.__value ===
      /*$compile_options*/
      ctx[0].generate;
      append(div0, t6);
      append(div0, label1);
      append(div1, t9);
      append(div1, label2);
      append(label2, span3);
      append(label2, t11);
      append(label2, input2);
      input2.checked =
      /*$compile_options*/
      ctx[0].dev;
      append(label2, t12);
      append(label2, span4);
      append(span4, t13);
      append(label2, t14);
      append(div1, t15);
      append(div1, label3);
      append(label3, span5);
      append(label3, t17);
      append(label3, input3);
      input3.checked =
      /*$compile_options*/
      ctx[0].css;
      append(label3, t18);
      append(label3, span6);
      append(span6, t19);
      append(label3, t20);
      append(div1, t21);
      append(div1, label4);
      append(label4, span7);
      append(label4, t23);
      append(label4, input4);
      input4.checked =
      /*$compile_options*/
      ctx[0].hydratable;
      append(label4, t24);
      append(label4, span8);
      append(span8, t25);
      append(label4, t26);
      append(div1, t27);
      append(div1, label5);
      append(label5, span9);
      append(label5, t29);
      append(label5, input5);
      input5.checked =
      /*$compile_options*/
      ctx[0].customElement;
      append(label5, t30);
      append(label5, span10);
      append(span10, t31);
      append(label5, t32);
      append(div1, t33);
      append(div1, label6);
      append(label6, span11);
      append(label6, t35);
      append(label6, input6);
      input6.checked =
      /*$compile_options*/
      ctx[0].immutable;
      append(label6, t36);
      append(label6, span12);
      append(span12, t37);
      append(label6, t38);
      append(div1, t39);
      append(div1, label7);
      append(label7, span13);
      append(label7, t41);
      append(label7, input7);
      input7.checked =
      /*$compile_options*/
      ctx[0].legacy;
      append(label7, t42);
      append(label7, span14);
      append(span14, t43);
      append(div1, t44);

      if (!mounted) {
        dispose = [listen(input0, "change",
        /*input0_change_handler*/
        ctx[2]), listen(input1, "change",
        /*input1_change_handler*/
        ctx[4]), listen(input2, "change",
        /*input2_change_handler*/
        ctx[5]), listen(input3, "change",
        /*input3_change_handler*/
        ctx[6]), listen(input4, "change",
        /*input4_change_handler*/
        ctx[7]), listen(input5, "change",
        /*input5_change_handler*/
        ctx[8]), listen(input6, "change",
        /*input6_change_handler*/
        ctx[9]), listen(input7, "change",
        /*input7_change_handler*/
        ctx[10])];
        mounted = true;
      }
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*$compile_options*/
      1) {
        input0.checked = input0.__value ===
        /*$compile_options*/
        ctx[0].generate;
      }

      if (dirty &
      /*$compile_options*/
      1) {
        input1.checked = input1.__value ===
        /*$compile_options*/
        ctx[0].generate;
      }

      if (dirty &
      /*$compile_options*/
      1) {
        input2.checked =
        /*$compile_options*/
        ctx[0].dev;
      }

      if (dirty &
      /*$compile_options*/
      1 && t13_value !== (t13_value =
      /*$compile_options*/
      ctx[0].dev + "")) set_data(t13, t13_value);

      if (dirty &
      /*$compile_options*/
      1) {
        input3.checked =
        /*$compile_options*/
        ctx[0].css;
      }

      if (dirty &
      /*$compile_options*/
      1 && t19_value !== (t19_value =
      /*$compile_options*/
      ctx[0].css + "")) set_data(t19, t19_value);

      if (dirty &
      /*$compile_options*/
      1) {
        input4.checked =
        /*$compile_options*/
        ctx[0].hydratable;
      }

      if (dirty &
      /*$compile_options*/
      1 && t25_value !== (t25_value =
      /*$compile_options*/
      ctx[0].hydratable + "")) set_data(t25, t25_value);

      if (dirty &
      /*$compile_options*/
      1) {
        input5.checked =
        /*$compile_options*/
        ctx[0].customElement;
      }

      if (dirty &
      /*$compile_options*/
      1 && t31_value !== (t31_value =
      /*$compile_options*/
      ctx[0].customElement + "")) set_data(t31, t31_value);

      if (dirty &
      /*$compile_options*/
      1) {
        input6.checked =
        /*$compile_options*/
        ctx[0].immutable;
      }

      if (dirty &
      /*$compile_options*/
      1 && t37_value !== (t37_value =
      /*$compile_options*/
      ctx[0].immutable + "")) set_data(t37, t37_value);

      if (dirty &
      /*$compile_options*/
      1) {
        input7.checked =
        /*$compile_options*/
        ctx[0].legacy;
      }

      if (dirty &
      /*$compile_options*/
      1 && t43_value !== (t43_value =
      /*$compile_options*/
      ctx[0].legacy + "")) set_data(t43, t43_value);
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(div1);
      /*$$binding_groups*/

      ctx[3][0].splice(
      /*$$binding_groups*/
      ctx[3][0].indexOf(input0), 1);
      /*$$binding_groups*/

      ctx[3][0].splice(
      /*$$binding_groups*/
      ctx[3][0].indexOf(input1), 1);
      mounted = false;
      run_all(dispose);
    }
  };
}

function instance$3($$self, $$props, $$invalidate) {
  var $compile_options;

  var _getContext = getContext('REPL'),
      compile_options = _getContext.compile_options;

  component_subscribe($$self, compile_options, function (value) {
    return $$invalidate(0, $compile_options = value);
  });
  var $$binding_groups = [[]];

  function input0_change_handler() {
    $compile_options.generate = this.__value;
    compile_options.set($compile_options);
  }

  function input1_change_handler() {
    $compile_options.generate = this.__value;
    compile_options.set($compile_options);
  }

  function input2_change_handler() {
    $compile_options.dev = this.checked;
    compile_options.set($compile_options);
  }

  function input3_change_handler() {
    $compile_options.css = this.checked;
    compile_options.set($compile_options);
  }

  function input4_change_handler() {
    $compile_options.hydratable = this.checked;
    compile_options.set($compile_options);
  }

  function input5_change_handler() {
    $compile_options.customElement = this.checked;
    compile_options.set($compile_options);
  }

  function input6_change_handler() {
    $compile_options.immutable = this.checked;
    compile_options.set($compile_options);
  }

  function input7_change_handler() {
    $compile_options.legacy = this.checked;
    compile_options.set($compile_options);
  }

  return [$compile_options, compile_options, input0_change_handler, $$binding_groups, input1_change_handler, input2_change_handler, input3_change_handler, input4_change_handler, input5_change_handler, input6_change_handler, input7_change_handler];
}

var CompilerOptions = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(CompilerOptions, _SvelteComponent);

  var _super = _createSuper$3(CompilerOptions);

  function CompilerOptions(options) {
    var _this;

    _classCallCheck(this, CompilerOptions);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {});
    return _this;
  }

  return _createClass(CompilerOptions);
}(SvelteComponent);

var workers$1 = new Map();
var uid$1 = 1;

var Compiler = /*#__PURE__*/function () {
  function Compiler(workersUrl, svelteUrl) {
    var _this = this;

    _classCallCheck(this, Compiler);

    if (!workers$1.has(svelteUrl)) {
      var worker = new Worker("".concat(workersUrl, "/compiler.js"));
      worker.postMessage({
        type: 'init',
        svelteUrl: svelteUrl
      });
      workers$1.set(svelteUrl, worker);
    }

    this.worker = workers$1.get(svelteUrl);
    this.handlers = new Map();
    this.worker.addEventListener('message', function (event) {
      var handler = _this.handlers.get(event.data.id);

      if (handler) {
        // if no handler, was meant for a different REPL
        handler(event.data.result);

        _this.handlers.delete(event.data.id);
      }
    });
  }

  _createClass(Compiler, [{
    key: "compile",
    value: function compile(component, options) {
      var _this2 = this;

      return new Promise(function (fulfil) {
        var id = uid$1++;

        _this2.handlers.set(id, fulfil);

        _this2.worker.postMessage({
          id: id,
          type: 'compile',
          source: component.source,
          options: Object.assign({
            name: component.name,
            filename: "".concat(component.name, ".svelte")
          }, options),
          entry: component.name === 'App'
        });
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.worker.terminate();
    }
  }]);

  return Compiler;
}();

var is_browser = typeof window !== 'undefined';

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_else_block_1(ctx) {
  var button0;
  var t1;
  var button1;
  var t3;
  var button2;
  var mounted;
  var dispose;
  return {
    c: function c() {
      button0 = element("button");
      button0.textContent = "Result";
      t1 = space();
      button1 = element("button");
      button1.textContent = "JS output";
      t3 = space();
      button2 = element("button");
      button2.textContent = "CSS output";
      attr(button0, "class", "svelte-4izmoy");
      toggle_class(button0, "active",
      /*view*/
      ctx[10] === 'result');
      attr(button1, "class", "svelte-4izmoy");
      toggle_class(button1, "active",
      /*view*/
      ctx[10] === 'js');
      attr(button2, "class", "svelte-4izmoy");
      toggle_class(button2, "active",
      /*view*/
      ctx[10] === 'css');
    },
    m: function m(target, anchor) {
      insert(target, button0, anchor);
      insert(target, t1, anchor);
      insert(target, button1, anchor);
      insert(target, t3, anchor);
      insert(target, button2, anchor);

      if (!mounted) {
        dispose = [listen(button0, "click",
        /*click_handler*/
        ctx[15]), listen(button1, "click",
        /*click_handler_1*/
        ctx[16]), listen(button2, "click",
        /*click_handler_2*/
        ctx[17])];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*view*/
      1024) {
        toggle_class(button0, "active",
        /*view*/
        ctx[10] === 'result');
      }

      if (dirty &
      /*view*/
      1024) {
        toggle_class(button1, "active",
        /*view*/
        ctx[10] === 'js');
      }

      if (dirty &
      /*view*/
      1024) {
        toggle_class(button2, "active",
        /*view*/
        ctx[10] === 'css');
      }
    },
    d: function d(detaching) {
      if (detaching) detach(button0);
      if (detaching) detach(t1);
      if (detaching) detach(button1);
      if (detaching) detach(t3);
      if (detaching) detach(button2);
      mounted = false;
      run_all(dispose);
    }
  };
} // (130:1) {#if selected_type === 'md'}


function create_if_block_1(ctx) {
  var button;
  return {
    c: function c() {
      button = element("button");
      button.textContent = "Markdown";
      attr(button, "class", "active svelte-4izmoy");
    },
    m: function m(target, anchor) {
      insert(target, button, anchor);
    },
    p: noop,
    d: function d(detaching) {
      if (detaching) detach(button);
    }
  };
} // (171:1) {:else}


function create_else_block(ctx) {
  var panewithpanel;
  var current;
  panewithpanel = new PaneWithPanel({
    props: {
      pos: 67,
      panel: "Compiler options",
      $$slots: {
        "panel-body": [create_panel_body_slot],
        main: [create_main_slot]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      create_component(panewithpanel.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(panewithpanel, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var panewithpanel_changes = {};

      if (dirty &
      /*$$scope, sourceErrorLoc, js_editor*/
      134217988) {
        panewithpanel_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      panewithpanel.$set(panewithpanel_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(panewithpanel.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(panewithpanel.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(panewithpanel, detaching);
    }
  };
} // (164:1) {#if embedded}


function create_if_block(ctx) {
  var codemirror;
  var current;
  var codemirror_props = {
    mode: "js",
    errorLoc:
    /*sourceErrorLoc*/
    ctx[2],
    readonly: true
  };
  codemirror = new CodeMirror_1({
    props: codemirror_props
  });
  /*codemirror_binding*/

  ctx[20](codemirror);
  return {
    c: function c() {
      create_component(codemirror.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(codemirror, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var codemirror_changes = {};
      if (dirty &
      /*sourceErrorLoc*/
      4) codemirror_changes.errorLoc =
      /*sourceErrorLoc*/
      ctx[2];
      codemirror.$set(codemirror_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(codemirror.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(codemirror.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      /*codemirror_binding*/
      ctx[20](null);
      destroy_component(codemirror, detaching);
    }
  };
} // (173:3) 


function create_main_slot(ctx) {
  var div;
  var codemirror;
  var current;
  var codemirror_props = {
    mode: "js",
    errorLoc:
    /*sourceErrorLoc*/
    ctx[2],
    readonly: true
  };
  codemirror = new CodeMirror_1({
    props: codemirror_props
  });
  /*codemirror_binding_1*/

  ctx[21](codemirror);
  return {
    c: function c() {
      div = element("div");
      create_component(codemirror.$$.fragment);
      attr(div, "slot", "main");
      attr(div, "class", "svelte-4izmoy");
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      mount_component(codemirror, div, null);
      current = true;
    },
    p: function p(ctx, dirty) {
      var codemirror_changes = {};
      if (dirty &
      /*sourceErrorLoc*/
      4) codemirror_changes.errorLoc =
      /*sourceErrorLoc*/
      ctx[2];
      codemirror.$set(codemirror_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(codemirror.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(codemirror.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(div);
      /*codemirror_binding_1*/

      ctx[21](null);
      destroy_component(codemirror);
    }
  };
} // (182:3) 


function create_panel_body_slot(ctx) {
  var div;
  var compileroptions;
  var current;
  compileroptions = new CompilerOptions({});
  return {
    c: function c() {
      div = element("div");
      create_component(compileroptions.$$.fragment);
      attr(div, "slot", "panel-body");
      attr(div, "class", "svelte-4izmoy");
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      mount_component(compileroptions, div, null);
      current = true;
    },
    p: noop,
    i: function i(local) {
      if (current) return;
      transition_in(compileroptions.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(compileroptions.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(div);
      destroy_component(compileroptions);
    }
  };
}

function create_fragment$2(ctx) {
  var div0;
  var t0;
  var div1;
  var viewer_1;
  var updating_error;
  var t1;
  var div2;
  var current_block_type_index;
  var if_block1;
  var t2;
  var div3;
  var codemirror;
  var t3;
  var div4;
  var iframe;
  var current;

  function select_block_type(ctx, dirty) {
    if (
    /*selected_type*/
    ctx[11] === 'md') return create_if_block_1;
    return create_else_block_1;
  }

  var current_block_type = select_block_type(ctx);
  var if_block0 = current_block_type(ctx);

  function viewer_1_error_binding(value) {
    /*viewer_1_error_binding*/
    ctx[19](value);
  }

  var viewer_1_props = {
    status:
    /*status*/
    ctx[1],
    relaxed:
    /*relaxed*/
    ctx[4],
    injectedJS:
    /*injectedJS*/
    ctx[5],
    injectedCSS:
    /*injectedCSS*/
    ctx[6]
  };

  if (
  /*runtimeError*/
  ctx[0] !== void 0) {
    viewer_1_props.error =
    /*runtimeError*/
    ctx[0];
  }

  viewer_1 = new Viewer({
    props: viewer_1_props
  });
  /*viewer_1_binding*/

  ctx[18](viewer_1);
  binding_callbacks.push(function () {
    return bind(viewer_1, 'error', viewer_1_error_binding);
  });
  var if_block_creators = [create_if_block, create_else_block];
  var if_blocks = [];

  function select_block_type_1(ctx, dirty) {
    if (
    /*embedded*/
    ctx[3]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type_1(ctx);
  if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var codemirror_props = {
    mode: "css",
    errorLoc:
    /*sourceErrorLoc*/
    ctx[2],
    readonly: true
  };
  codemirror = new CodeMirror_1({
    props: codemirror_props
  });
  /*codemirror_binding_2*/

  ctx[22](codemirror);
  return {
    c: function c() {
      div0 = element("div");
      if_block0.c();
      t0 = space();
      div1 = element("div");
      create_component(viewer_1.$$.fragment);
      t1 = space();
      div2 = element("div");
      if_block1.c();
      t2 = space();
      div3 = element("div");
      create_component(codemirror.$$.fragment);
      t3 = space();
      div4 = element("div");
      iframe = element("iframe");
      attr(div0, "class", "view-toggle svelte-4izmoy");
      attr(div1, "class", "tab-content svelte-4izmoy");
      toggle_class(div1, "visible",
      /*selected_type*/
      ctx[11] !== 'md' &&
      /*view*/
      ctx[10] === 'result');
      attr(div2, "class", "tab-content svelte-4izmoy");
      toggle_class(div2, "visible",
      /*selected_type*/
      ctx[11] !== 'md' &&
      /*view*/
      ctx[10] === 'js');
      attr(div3, "class", "tab-content svelte-4izmoy");
      toggle_class(div3, "visible",
      /*selected_type*/
      ctx[11] !== 'md' &&
      /*view*/
      ctx[10] === 'css');
      attr(iframe, "title", "Markdown");
      attr(iframe, "srcdoc",
      /*markdown*/
      ctx[12]);
      attr(iframe, "class", "svelte-4izmoy");
      attr(div4, "class", "tab-content svelte-4izmoy");
      toggle_class(div4, "visible",
      /*selected_type*/
      ctx[11] === 'md');
    },
    m: function m(target, anchor) {
      insert(target, div0, anchor);
      if_block0.m(div0, null);
      insert(target, t0, anchor);
      insert(target, div1, anchor);
      mount_component(viewer_1, div1, null);
      insert(target, t1, anchor);
      insert(target, div2, anchor);
      if_blocks[current_block_type_index].m(div2, null);
      insert(target, t2, anchor);
      insert(target, div3, anchor);
      mount_component(codemirror, div3, null);
      insert(target, t3, anchor);
      insert(target, div4, anchor);
      append(div4, iframe);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block0) {
        if_block0.p(ctx, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx);

        if (if_block0) {
          if_block0.c();
          if_block0.m(div0, null);
        }
      }

      var viewer_1_changes = {};
      if (dirty &
      /*status*/
      2) viewer_1_changes.status =
      /*status*/
      ctx[1];
      if (dirty &
      /*relaxed*/
      16) viewer_1_changes.relaxed =
      /*relaxed*/
      ctx[4];
      if (dirty &
      /*injectedJS*/
      32) viewer_1_changes.injectedJS =
      /*injectedJS*/
      ctx[5];
      if (dirty &
      /*injectedCSS*/
      64) viewer_1_changes.injectedCSS =
      /*injectedCSS*/
      ctx[6];

      if (!updating_error && dirty &
      /*runtimeError*/
      1) {
        updating_error = true;
        viewer_1_changes.error =
        /*runtimeError*/
        ctx[0];
        add_flush_callback(function () {
          return updating_error = false;
        });
      }

      viewer_1.$set(viewer_1_changes);

      if (dirty &
      /*selected_type, view*/
      3072) {
        toggle_class(div1, "visible",
        /*selected_type*/
        ctx[11] !== 'md' &&
        /*view*/
        ctx[10] === 'result');
      }

      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx);

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
        if_block1.m(div2, null);
      }

      if (dirty &
      /*selected_type, view*/
      3072) {
        toggle_class(div2, "visible",
        /*selected_type*/
        ctx[11] !== 'md' &&
        /*view*/
        ctx[10] === 'js');
      }

      var codemirror_changes = {};
      if (dirty &
      /*sourceErrorLoc*/
      4) codemirror_changes.errorLoc =
      /*sourceErrorLoc*/
      ctx[2];
      codemirror.$set(codemirror_changes);

      if (dirty &
      /*selected_type, view*/
      3072) {
        toggle_class(div3, "visible",
        /*selected_type*/
        ctx[11] !== 'md' &&
        /*view*/
        ctx[10] === 'css');
      }

      if (!current || dirty &
      /*markdown*/
      4096) {
        attr(iframe, "srcdoc",
        /*markdown*/
        ctx[12]);
      }

      if (dirty &
      /*selected_type*/
      2048) {
        toggle_class(div4, "visible",
        /*selected_type*/
        ctx[11] === 'md');
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(viewer_1.$$.fragment, local);
      transition_in(if_block1);
      transition_in(codemirror.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(viewer_1.$$.fragment, local);
      transition_out(if_block1);
      transition_out(codemirror.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(div0);
      if_block0.d();
      if (detaching) detach(t0);
      if (detaching) detach(div1);
      /*viewer_1_binding*/

      ctx[18](null);
      destroy_component(viewer_1);
      if (detaching) detach(t1);
      if (detaching) detach(div2);
      if_blocks[current_block_type_index].d();
      if (detaching) detach(t2);
      if (detaching) detach(div3);
      /*codemirror_binding_2*/

      ctx[22](null);
      destroy_component(codemirror);
      if (detaching) detach(t3);
      if (detaching) detach(div4);
    }
  };
}

function instance$2($$self, $$props, $$invalidate) {
  var _getContext = getContext('REPL'),
      register_output = _getContext.register_output;

  var svelteUrl = $$props.svelteUrl;
  var workersUrl = $$props.workersUrl;
  var status = $$props.status;
  var _$$props$sourceErrorL = $$props.sourceErrorLoc,
      sourceErrorLoc = _$$props$sourceErrorL === void 0 ? null : _$$props$sourceErrorL;
  var _$$props$runtimeError = $$props.runtimeError,
      runtimeError = _$$props$runtimeError === void 0 ? null : _$$props$runtimeError;
  var _$$props$embedded = $$props.embedded,
      embedded = _$$props$embedded === void 0 ? false : _$$props$embedded;
  var _$$props$relaxed = $$props.relaxed,
      relaxed = _$$props$relaxed === void 0 ? false : _$$props$relaxed;
  var injectedJS = $$props.injectedJS;
  var injectedCSS = $$props.injectedCSS;

  register_output({
    set: function () {
      var _set = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(selected, options) {
        var compiled;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                $$invalidate(11, selected_type = selected.type);

                if (!(selected.type === 'js' || selected.type === 'json')) {
                  _context.next = 5;
                  break;
                }

                js_editor.set("/* Select a component to see its compiled code */");
                css_editor.set("/* Select a component to see its compiled code */");
                return _context.abrupt("return");

              case 5:
                if (!(selected.type === 'md')) {
                  _context.next = 8;
                  break;
                }

                $$invalidate(12, markdown = parse(selected.source));
                return _context.abrupt("return");

              case 8:
                _context.next = 10;
                return compiler.compile(selected, options);

              case 10:
                compiled = _context.sent;

                if (js_editor) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt("return");

              case 13:
                // unmounted
                js_editor.set(compiled.js, 'js');
                css_editor.set(compiled.css, 'css');

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function set(_x, _x2) {
        return _set.apply(this, arguments);
      }

      return set;
    }(),
    update: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(selected, options) {
        var compiled;
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(selected.type === 'js' || selected.type === 'json')) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                if (!(selected.type === 'md')) {
                  _context2.next = 5;
                  break;
                }

                $$invalidate(12, markdown = parse(selected.source));
                return _context2.abrupt("return");

              case 5:
                _context2.next = 7;
                return compiler.compile(selected, options);

              case 7:
                compiled = _context2.sent;

                if (js_editor) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return");

              case 10:
                // unmounted
                js_editor.update(compiled.js);
                css_editor.update(compiled.css);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  });
  var compiler = is_browser && new Compiler(workersUrl, svelteUrl); // refs

  var viewer;
  var js_editor;
  var css_editor;
  var view = 'result';
  var selected_type = '';
  var markdown = '';

  var click_handler = function click_handler() {
    return $$invalidate(10, view = 'result');
  };

  var click_handler_1 = function click_handler_1() {
    return $$invalidate(10, view = 'js');
  };

  var click_handler_2 = function click_handler_2() {
    return $$invalidate(10, view = 'css');
  };

  function viewer_1_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      viewer = $$value;
      $$invalidate(7, viewer);
    });
  }

  function viewer_1_error_binding(value) {
    runtimeError = value;
    $$invalidate(0, runtimeError);
  }

  function codemirror_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      js_editor = $$value;
      $$invalidate(8, js_editor);
    });
  }

  function codemirror_binding_1($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      js_editor = $$value;
      $$invalidate(8, js_editor);
    });
  }

  function codemirror_binding_2($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      css_editor = $$value;
      $$invalidate(9, css_editor);
    });
  }

  $$self.$$set = function ($$props) {
    if ('svelteUrl' in $$props) $$invalidate(13, svelteUrl = $$props.svelteUrl);
    if ('workersUrl' in $$props) $$invalidate(14, workersUrl = $$props.workersUrl);
    if ('status' in $$props) $$invalidate(1, status = $$props.status);
    if ('sourceErrorLoc' in $$props) $$invalidate(2, sourceErrorLoc = $$props.sourceErrorLoc);
    if ('runtimeError' in $$props) $$invalidate(0, runtimeError = $$props.runtimeError);
    if ('embedded' in $$props) $$invalidate(3, embedded = $$props.embedded);
    if ('relaxed' in $$props) $$invalidate(4, relaxed = $$props.relaxed);
    if ('injectedJS' in $$props) $$invalidate(5, injectedJS = $$props.injectedJS);
    if ('injectedCSS' in $$props) $$invalidate(6, injectedCSS = $$props.injectedCSS);
  };

  return [runtimeError, status, sourceErrorLoc, embedded, relaxed, injectedJS, injectedCSS, viewer, js_editor, css_editor, view, selected_type, markdown, svelteUrl, workersUrl, click_handler, click_handler_1, click_handler_2, viewer_1_binding, viewer_1_error_binding, codemirror_binding, codemirror_binding_1, codemirror_binding_2];
}

var Output = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Output, _SvelteComponent);

  var _super = _createSuper$2(Output);

  function Output(options) {
    var _this;

    _classCallCheck(this, Output);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      svelteUrl: 13,
      workersUrl: 14,
      status: 1,
      sourceErrorLoc: 2,
      runtimeError: 0,
      embedded: 3,
      relaxed: 4,
      injectedJS: 5,
      injectedCSS: 6
    });
    return _this;
  }

  return _createClass(Output);
}(SvelteComponent);

var workers = new Map();
var uid = 1;

var Bundler = /*#__PURE__*/function () {
  function Bundler(_ref) {
    var _this = this;

    var workersUrl = _ref.workersUrl,
        packagesUrl = _ref.packagesUrl,
        svelteUrl = _ref.svelteUrl,
        onstatus = _ref.onstatus;

    _classCallCheck(this, Bundler);

    var hash = "".concat(packagesUrl, ":").concat(svelteUrl);

    if (!workers.has(hash)) {
      var worker = new Worker("".concat(workersUrl, "/bundler.js"));
      worker.postMessage({
        type: 'init',
        packagesUrl: packagesUrl,
        svelteUrl: svelteUrl
      });
      workers.set(hash, worker);
    }

    this.worker = workers.get(hash);
    this.handlers = new Map();
    this.worker.addEventListener('message', function (event) {
      var handler = _this.handlers.get(event.data.uid);

      if (handler) {
        // if no handler, was meant for a different REPL
        if (event.data.type === 'status') {
          onstatus(event.data.message);
          return;
        }

        onstatus(null);
        handler(event.data);

        _this.handlers.delete(event.data.uid);
      }
    });
  }

  _createClass(Bundler, [{
    key: "bundle",
    value: function bundle(components) {
      var _this2 = this;

      return new Promise(function (fulfil) {
        _this2.handlers.set(uid, fulfil);

        _this2.worker.postMessage({
          uid: uid,
          type: 'bundle',
          components: components
        });

        uid += 1;
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.worker.terminate();
    }
  }]);

  return Bundler;
}();

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_a_slot(ctx) {
  var section;
  var componentselector;
  var t;
  var moduleeditor;
  var current;
  componentselector = new ComponentSelector({
    props: {
      handle_select:
      /*handle_select*/
      ctx[15]
    }
  });
  componentselector.$on("add",
  /*add_handler*/
  ctx[27]);
  componentselector.$on("remove",
  /*remove_handler*/
  ctx[28]);
  var moduleeditor_props = {
    errorLoc:
    /*sourceErrorLoc*/
    ctx[17] ||
    /*runtimeErrorLoc*/
    ctx[18]
  };
  moduleeditor = new ModuleEditor({
    props: moduleeditor_props
  });
  /*moduleeditor_binding*/

  ctx[29](moduleeditor);
  return {
    c: function c() {
      section = element("section");
      create_component(componentselector.$$.fragment);
      t = space();
      create_component(moduleeditor.$$.fragment);
      attr(section, "slot", "a");
    },
    m: function m(target, anchor) {
      insert(target, section, anchor);
      mount_component(componentselector, section, null);
      append(section, t);
      mount_component(moduleeditor, section, null);
      current = true;
    },
    p: function p(ctx, dirty) {
      var moduleeditor_changes = {};
      moduleeditor.$set(moduleeditor_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(componentselector.$$.fragment, local);
      transition_in(moduleeditor.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(componentselector.$$.fragment, local);
      transition_out(moduleeditor.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(section);
      destroy_component(componentselector);
      /*moduleeditor_binding*/

      ctx[29](null);
      destroy_component(moduleeditor);
    }
  };
} // (267:2) 


function create_b_slot(ctx) {
  var section;
  var output_1;
  var current;
  output_1 = new Output({
    props: {
      svelteUrl:
      /*svelteUrl*/
      ctx[2],
      workersUrl:
      /*workersUrl*/
      ctx[1],
      status:
      /*status*/
      ctx[10],
      embedded:
      /*embedded*/
      ctx[3],
      relaxed:
      /*relaxed*/
      ctx[5],
      injectedJS:
      /*injectedJS*/
      ctx[8],
      injectedCSS:
      /*injectedCSS*/
      ctx[0]
    }
  });
  return {
    c: function c() {
      section = element("section");
      create_component(output_1.$$.fragment);
      attr(section, "slot", "b");
      set_style(section, "height", "100%");
    },
    m: function m(target, anchor) {
      insert(target, section, anchor);
      mount_component(output_1, section, null);
      current = true;
    },
    p: function p(ctx, dirty) {
      var output_1_changes = {};
      if (dirty[0] &
      /*svelteUrl*/
      4) output_1_changes.svelteUrl =
      /*svelteUrl*/
      ctx[2];
      if (dirty[0] &
      /*workersUrl*/
      2) output_1_changes.workersUrl =
      /*workersUrl*/
      ctx[1];
      if (dirty[0] &
      /*status*/
      1024) output_1_changes.status =
      /*status*/
      ctx[10];
      if (dirty[0] &
      /*embedded*/
      8) output_1_changes.embedded =
      /*embedded*/
      ctx[3];
      if (dirty[0] &
      /*relaxed*/
      32) output_1_changes.relaxed =
      /*relaxed*/
      ctx[5];
      if (dirty[0] &
      /*injectedJS*/
      256) output_1_changes.injectedJS =
      /*injectedJS*/
      ctx[8];
      if (dirty[0] &
      /*injectedCSS*/
      1) output_1_changes.injectedCSS =
      /*injectedCSS*/
      ctx[0];
      output_1.$set(output_1_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(output_1.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(output_1.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(section);
      destroy_component(output_1);
    }
  };
}

function create_fragment$1(ctx) {
  var div;
  var splitpane;
  var current;
  var mounted;
  var dispose;
  splitpane = new SplitPane({
    props: {
      type:
      /*orientation*/
      ctx[4] === 'rows' ? 'vertical' : 'horizontal',
      pos:
      /*fixed*/
      ctx[6] ?
      /*fixedPos*/
      ctx[7] :
      /*orientation*/
      ctx[4] === 'rows' ? 50 : 60,
      fixed:
      /*fixed*/
      ctx[6],
      $$slots: {
        b: [create_b_slot],
        a: [create_a_slot]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      div = element("div");
      create_component(splitpane.$$.fragment);
      attr(div, "class", "container svelte-177xqak");
      toggle_class(div, "orientation",
      /*orientation*/
      ctx[4]);
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      mount_component(splitpane, div, null);
      current = true;

      if (!mounted) {
        dispose = listen(window, "beforeunload",
        /*beforeUnload*/
        ctx[16]);
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      var splitpane_changes = {};
      if (dirty[0] &
      /*orientation*/
      16) splitpane_changes.type =
      /*orientation*/
      ctx[4] === 'rows' ? 'vertical' : 'horizontal';
      if (dirty[0] &
      /*fixed, fixedPos, orientation*/
      208) splitpane_changes.pos =
      /*fixed*/
      ctx[6] ?
      /*fixedPos*/
      ctx[7] :
      /*orientation*/
      ctx[4] === 'rows' ? 50 : 60;
      if (dirty[0] &
      /*fixed*/
      64) splitpane_changes.fixed =
      /*fixed*/
      ctx[6];

      if (dirty[0] &
      /*svelteUrl, workersUrl, status, embedded, relaxed, injectedJS, injectedCSS, input*/
      1839 | dirty[1] &
      /*$$scope*/
      2048) {
        splitpane_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      splitpane.$set(splitpane_changes);

      if (dirty[0] &
      /*orientation*/
      16) {
        toggle_class(div, "orientation",
        /*orientation*/
        ctx[4]);
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(splitpane.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(splitpane.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(div);
      destroy_component(splitpane);
      mounted = false;
      dispose();
    }
  };
}

function get_component_name(component) {
  return "".concat(component.name, ".").concat(component.type);
}

function instance$1($$self, $$props, $$invalidate) {
  var $compile_options;
  var $selected;
  var $components;
  var $bundle;
  var workersUrl = $$props.workersUrl;
  var _$$props$packagesUrl = $$props.packagesUrl,
      packagesUrl = _$$props$packagesUrl === void 0 ? 'https://unpkg.com' : _$$props$packagesUrl;
  var _$$props$svelteUrl = $$props.svelteUrl,
      svelteUrl = _$$props$svelteUrl === void 0 ? "".concat(packagesUrl, "/svelte") : _$$props$svelteUrl;
  var _$$props$embedded = $$props.embedded,
      embedded = _$$props$embedded === void 0 ? false : _$$props$embedded;
  var _$$props$orientation = $$props.orientation,
      orientation = _$$props$orientation === void 0 ? 'columns' : _$$props$orientation;
  var _$$props$relaxed = $$props.relaxed,
      relaxed = _$$props$relaxed === void 0 ? false : _$$props$relaxed;
  var _$$props$fixed = $$props.fixed,
      fixed = _$$props$fixed === void 0 ? false : _$$props$fixed;
  var _$$props$fixedPos = $$props.fixedPos,
      fixedPos = _$$props$fixedPos === void 0 ? 50 : _$$props$fixedPos;
  var _$$props$injectedJS = $$props.injectedJS,
      injectedJS = _$$props$injectedJS === void 0 ? '' : _$$props$injectedJS;
  var _$$props$injectedCSS = $$props.injectedCSS,
      injectedCSS = _$$props$injectedCSS === void 0 ? '' : _$$props$injectedCSS;
  var historyMap = new Map();

  function toJSON() {
    return {
      imports: $bundle.imports,
      components: $components
    };
  }

  function set(_x) {
    return _set.apply(this, arguments);
  }

  function _set() {
    _set = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(data) {
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              components.set(data.components);
              selected.set(data.components[0]);
              rebundle();
              _context.next = 5;
              return module_editor_ready;

            case 5:
              _context.next = 7;
              return output_ready;

            case 7:
              $$invalidate(0, injectedCSS = data.css || '');
              _context.next = 10;
              return module_editor.set($selected.source, $selected.type);

            case 10:
              output.set($selected, $compile_options);
              historyMap.clear();
              module_editor.clearHistory();

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _set.apply(this, arguments);
  }

  function markSaved() {
    components.update(function (components) {
      return components.map(function (c) {
        c.modified = false;
        return c;
      });
    });
    selected.update(function (c) {
      return c;
    });
  }

  function update(data) {
    var _ref = $selected || {},
        name = _ref.name,
        type = _ref.type;

    components.set(data.components);
    var matched_component = data.components.find(function (file) {
      return file.name === name && file.type === type;
    });
    selected.set(matched_component || data.components[0]);
    $$invalidate(0, injectedCSS = data.css || '');

    if (matched_component) {
      module_editor.update(matched_component.source);
      output.update(matched_component, $compile_options);
    } else {
      module_editor.set(matched_component.source, matched_component.type);
      output.set(matched_component, $compile_options);
      module_editor.clearHistory();
    }
  }

  if (!workersUrl) {
    throw new Error("You must supply workersUrl prop to <Repl>");
  }

  var dispatch = createEventDispatcher();
  var components = writable([]);
  component_subscribe($$self, components, function (value) {
    return $$invalidate(34, $components = value);
  });
  var selected = writable(null);
  component_subscribe($$self, selected, function (value) {
    return $$invalidate(26, $selected = value);
  });
  var bundle = writable(null);
  component_subscribe($$self, bundle, function (value) {
    return $$invalidate(35, $bundle = value);
  });
  var compile_options = writable({
    generate: 'dom',
    dev: false,
    css: false,
    hydratable: false,
    customElement: false,
    immutable: false,
    legacy: false
  });
  component_subscribe($$self, compile_options, function (value) {
    return $$invalidate(25, $compile_options = value);
  });
  var module_editor;
  var output;
  var current_token;

  function rebundle() {
    return _rebundle.apply(this, arguments);
  } // TODO this is a horrible kludge, written in a panic. fix it


  function _rebundle() {
    _rebundle = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
      var token, result;
      return regenerator.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              token = current_token = {};
              _context2.next = 3;
              return bundler.bundle($components);

            case 3:
              result = _context2.sent;
              if (result && token === current_token) bundle.set(result);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _rebundle.apply(this, arguments);
  }

  var fulfil_module_editor_ready;
  var module_editor_ready = new Promise(function (f) {
    return fulfil_module_editor_ready = f;
  });
  var fulfil_output_ready;
  var output_ready = new Promise(function (f) {
    return fulfil_output_ready = f;
  });
  setContext('REPL', {
    components: components,
    selected: selected,
    bundle: bundle,
    compile_options: compile_options,
    rebundle: rebundle,
    navigate: function navigate(item) {
      var match = /^(.+)\.(\w+)$/.exec(item.filename);
      if (!match) return; // ???

      var _match = _slicedToArray(match, 3),
          name = _match[1],
          type = _match[2];

      var component = $components.find(function (c) {
        return c.name === name && c.type === type;
      });
      handle_select(component);
    },
    // TODO select the line/column in question
    handle_change: function handle_change(event) {
      selected.update(function (component) {
        // TODO this is a bit hacky — we're relying on mutability
        // so that updating components works... might be better
        // if a) components had unique IDs, b) we tracked selected
        // *index* rather than component, and c) `selected` was
        // derived from `components` and `index`
        if (component.source != event.detail.value) {
          component.source = event.detail.value;
          component.modified = true;
        }

        return component;
      });
      components.update(function (component) {
        if (component.name === $selected.name) {
          return $selected;
        }

        return component;
      }); // recompile selected component

      output.update($selected, $compile_options);
      rebundle();
      dispatch('change', {
        components: $components
      });
    },
    register_module_editor: function register_module_editor(editor) {
      module_editor = editor;
      fulfil_module_editor_ready();
    },
    register_output: function register_output(handlers) {
      $$invalidate(24, output = handlers);
      fulfil_output_ready();
    },
    request_focus: function request_focus() {
      module_editor.focus();
    }
  });

  function handle_select(component) {
    historyMap.set(get_component_name($selected), module_editor.getHistory());
    selected.set(component);
    module_editor.set(component.source, component.type);

    if (historyMap.has(get_component_name($selected))) {
      module_editor.setHistory(historyMap.get(get_component_name($selected)));
    } else {
      module_editor.clearHistory();
    }

    output.set($selected, $compile_options);
  }

  function beforeUnload(event) {
    if ($components.find(function (component) {
      return component.modified;
    })) {
      event.preventDefault();
      event.returnValue = '';
    }
  }

  var input;
  var sourceErrorLoc;
  var runtimeErrorLoc; // TODO refactor this stuff — runtimeErrorLoc is unused

  var status = null;
  var bundler = is_browser && new Bundler({
    workersUrl: workersUrl,
    packagesUrl: packagesUrl,
    svelteUrl: svelteUrl,
    onstatus: function onstatus(message) {
      $$invalidate(10, status = message);
    }
  });

  function add_handler(event) {
    bubble.call(this, $$self, event);
  }

  function remove_handler(event) {
    bubble.call(this, $$self, event);
  }

  function moduleeditor_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      input = $$value;
      $$invalidate(9, input);
    });
  }

  $$self.$$set = function ($$props) {
    if ('workersUrl' in $$props) $$invalidate(1, workersUrl = $$props.workersUrl);
    if ('packagesUrl' in $$props) $$invalidate(19, packagesUrl = $$props.packagesUrl);
    if ('svelteUrl' in $$props) $$invalidate(2, svelteUrl = $$props.svelteUrl);
    if ('embedded' in $$props) $$invalidate(3, embedded = $$props.embedded);
    if ('orientation' in $$props) $$invalidate(4, orientation = $$props.orientation);
    if ('relaxed' in $$props) $$invalidate(5, relaxed = $$props.relaxed);
    if ('fixed' in $$props) $$invalidate(6, fixed = $$props.fixed);
    if ('fixedPos' in $$props) $$invalidate(7, fixedPos = $$props.fixedPos);
    if ('injectedJS' in $$props) $$invalidate(8, injectedJS = $$props.injectedJS);
    if ('injectedCSS' in $$props) $$invalidate(0, injectedCSS = $$props.injectedCSS);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty[0] &
    /*output, $selected, $compile_options*/
    117440512) {
      if (output && $selected) {
        output.update($selected, $compile_options);
      }
    }
  };

  return [injectedCSS, workersUrl, svelteUrl, embedded, orientation, relaxed, fixed, fixedPos, injectedJS, input, status, components, selected, bundle, compile_options, handle_select, beforeUnload, sourceErrorLoc, runtimeErrorLoc, packagesUrl, toJSON, set, markSaved, update, output, $compile_options, $selected, add_handler, remove_handler, moduleeditor_binding];
}

var Repl = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Repl, _SvelteComponent);

  var _super = _createSuper$1(Repl);

  function Repl(options) {
    var _this;

    _classCallCheck(this, Repl);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      workersUrl: 1,
      packagesUrl: 19,
      svelteUrl: 2,
      embedded: 3,
      orientation: 4,
      relaxed: 5,
      fixed: 6,
      fixedPos: 7,
      injectedJS: 8,
      injectedCSS: 0,
      toJSON: 20,
      set: 21,
      markSaved: 22,
      update: 23
    }, null, [-1, -1]);
    return _this;
  }

  _createClass(Repl, [{
    key: "toJSON",
    get: function get() {
      return this.$$.ctx[20];
    }
  }, {
    key: "set",
    get: function get() {
      return this.$$.ctx[21];
    }
  }, {
    key: "markSaved",
    get: function get() {
      return this.$$.ctx[22];
    }
  }, {
    key: "update",
    get: function get() {
      return this.$$.ctx[23];
    }
  }]);

  return Repl;
}(SvelteComponent);

var content$4 = "<script>\n  import { dialogs } from \"svelte-dialogs\";\n</script>\n      \n<button on:click={() => dialogs.alert(\"an alert\")}>Click me!</button>";
var helloWorld = {
  name: "Hello world",
  id: 1,
  files: [{
    name: "App.svelte",
    type: "svelte",
    content: content$4
  }]
};

var content$3 = "<script>\n  import { dialogs } from \"svelte-dialogs\";\n  \n  const options = {\n    title: \"a title\",\n    text: \"the text\",\n    dialogClass: \"blue-round-dialog\",\n    closeButton: false,\n    closeOnBg: true,\n    transitions: {\n    in: {\n      transition: 'fade',\n      props: {\n        duration: 2000,\n      },\n    },\n    out: {\n      transition: 'fade',\n      props: {\n        duration: 2000,\n      },\n    },\n  },\n};\n</script>\n\n<button on:click={() => dialogs.modal(options)}>Click me!</button>\n      \n<style>\n  /**\n\t* classes used in options should be defined globally in global.css, \n\t* here :global() is used only for the REPL to work\n\t*/\n  :global(.blue-round-dialog) {\n    z-index: 1010;\n    position: fixed;\n    background-color: blue;\n    color: white;\n    width: 100px;\n    height: 100px;\n    padding: 2rem;\n    border-radius: 100px;\n  }\n</style>";
var options = {
  name: "Options",
  files: [{
    name: "App.svelte",
    type: "svelte",
    content: content$3
  }]
};

var content$2 = "<script>\n  import { dialogs } from \"svelte-dialogs\";\n  \n  async function persistent() {\n    let confirm;\n    let times = \"\";\n    \n    do {\n      confirm = await dialogs.confirm(\"are you\" + times + \" sure?\");\n      times += \" really\";\n    } while (confirm);\n    \n    dialogs.modal(\"very wise...\");\n  }\n</script>\n\n<button on:click={persistent}>Click me!</button>";
var promiseBased = {
  name: "Promise based",
  files: [{
    name: "App.svelte",
    type: "svelte",
    content: content$2
  }]
};

var content$1 = "<script>\n  import { Dialog } from \"svelte-dialogs\";\n\n  let dialog;\n\n  const titleId = \"my-dialog-title\";\n  const options = {\n    titleId,\n    closeButton: false,\n    closeOnBg: false,\n    closeOnEsc: false,\n  };\n\n  function handler({ type, detail }) {\n    console.log(type, detail);\n  }\n</script>\n\n<button on:click={() => dialog.open(\"my data\")}>Click me!</button>\n<Dialog\n  bind:this={dialog}\n  on:show={handler}\n  on:shown={handler}\n  on:hide={handler}\n  on:hidden={handler}\n  let:data\n  let:close\n  {options}\n>\n  <h1 id={titleId} class=\"title\">Here's your data</h1>\n  <p class=\"data-paragraph\">{data}</p>\n  <button class=\"dismiss-btn\" on:click={() => close(data)}>close</button>\n</Dialog>\n\n<style>\n  .title {\n    background-color: grey;\n    padding: 0 20px;\n    color: white;\n    border-radius: 15px;\n  }\n\n  .data-paragraph {\n    text-align: center;\n  }\n\n  .dismiss-btn {\n    background-color: red;\n    color: white;\n    border-radius: 50px;\n    cursor: pointer;\n  }\n</style>";
var templateEventsBased = {
  name: "Template/Events based",
  files: [{
    name: "App.svelte",
    type: "svelte",
    content: content$1
  }]
};

var content = "<script>\n  import { dialogs } from \"svelte-dialogs\";\n    \n  /**\n   * When using custom modal content, use the default title id (dialog-title-id)\n   * or change the titleId options accordingly for accessibility reasons: \n   * titleId is used in aria-labelledby attribute\n   */\n  const htmlString = `\n    <div>\n        <h1 id=\"dialog-title-id\">all the html you want</h1>\n        <div style=\"text-align: center\">\n            <p>now in text!</p>\n        </div>\n    </div>`;\n</script>\n\n<button on:click={() => dialogs.modal(htmlString)}>Click me!</button>";
var htmlString = {
  name: "HTML string",
  files: [{
    name: "App.svelte",
    type: "svelte",
    content: content
  }]
};

var appContent$3 = "<script>\n  import { dialogs } from \"svelte-dialogs\";\n  import MyComponent from \"./MyComponent.svelte\";\n\n  const props = { name: \"Ghostbusters!\" }\n</script>\n\n<button on:click={() => dialogs.modal(MyComponent, props).then(dialogs.modal)}>Click me!</button>";
var myComponentContent = "<script>\n  import { DialogContent, getClose } from \"svelte-dialogs\";\n\n  const close = getClose();\n  export let name = \"\";\n\n  const message = \"see you on the other side, Ray\";\n</script>\n\n<DialogContent>\n  <svelte:fragment slot=\"body\">\n    <p>Who you gonna call?</p>\n  </svelte:fragment>\n  <svelte:fragment slot=\"footer\">\n    <button class=\"name-btn\" on:click={() => close(message)}>{name}</button>\n  </svelte:fragment>\n</DialogContent>\n\n<style>\n\t.name-btn{\n\t\tbackground-color: red;\n\t\tcolor: white;\n\t\tborder-radius: 200px;\n    cursor: pointer;\n\t}\n</style>";
var customComponents = {
  name: "Custom Components",
  files: [{
    name: "App.svelte",
    type: "svelte",
    content: appContent$3
  }, {
    name: "MyComponent.svelte",
    type: "svelte",
    content: myComponentContent
  }]
};

var appContent$2 = "<script>\n  import { dialogs } from \"svelte-dialogs\";\n  import MyInput from \"./MyInput.svelte\";\n\n  const options = [\"string 1\", \"string 2\", \"string 3\"];\n\n  const inputs = [\n      \"text\",\n      { label: \"password\", type: \"password\", required: true },\n      { label: \"email\", type: \"email\" },\n      { label: \"checkbox\", type: \"checkbox\" },\n      { label: \"date\", type: \"date\" },\n      { label: \"textarea\", type: \"textarea\" },\n      { label: \"number\", type: \"number\" },\n      { label: \"color\", type: \"color\" },\n      { label: \"file\", type: \"file\" },\n      { label: \"range\", type: \"range\" },\n      { label: \"select\", type: \"select\", options },\n      { label: \"radio\", type: \"radio\", options },\n      { label: \"select multiple\", type: \"select\", options, multiple: true },\n      {\n          component: MyInput,\n          props: {\n              placeholder: \"a placeholder\",\n              label: \"custom component\",\n              name: \"my-input\",\n              id: \"my-input-id\",\n            },\n        },\n    ]\n\n  const promptOptions = {\n        title: \"Different input types\"\n    }\n</script>\n\n<button on:click={() => dialogs.prompt(inputs, promptOptions).then(console.log)}>Click me!</button>";
var myInputContent = "<script>\n    export let value = undefined;\n    export let placeholder;\n    export let label;\n    export let name;\n    export let id;\n</script>\n\n<label for={id}>{label}</label>\n<input bind:value {placeholder} {id} {name} type=\"text\" />";
var promptInputTypes = {
  name: "Prompt input types",
  files: [{
    name: "App.svelte",
    type: "svelte",
    content: appContent$2
  }, {
    name: "MyInput.svelte",
    type: "svelte",
    content: myInputContent
  }]
};

var appContent$1 = "<script>\n    import { dialogs } from \"svelte-dialogs\";\n\n    /** \n     * configuration should be imported in root main.js\n     * this import is here just for the REPL to work \n     */\n    import './svelte-dialogs-config.js'\n</script>\n\n<button on:click={\n    () => dialogs.confirm(\"are you sure?\").then((confirm) => dialogs.alert({ confirm }))}\n>Click me!</button>";
var configContent$1 = "import { dialogs } from \"svelte-dialogs\";\nimport { fade } from \"svelte/transition\";\nimport CustomAlert from \"./CustomAlert.svelte\";\n\nconst global = {\n  transitions: {\n    in: {\n      transition: fade,\n      props: {\n        duration: 2000,\n      },\n    },\n    out: {\n      transition: 'slide',\n      props: {\n        duration: 2000,\n      },\n    },\n  },\n};\n\nconst alert = {\n  content: CustomAlert,\n  closeButton: true,\n};\n\nconst confirm = {\n  confirmButtonText: \"aye\",\n  declineButtonText: \"nay\",\n};\n\ndialogs.config({\n  global,\n  alert,\n  confirm,\n});";
var customAlertContent = "<script>\n    import {getOptions} from 'svelte-dialogs'\n    \n    const {confirm} = getOptions();\n    const text = confirm ? \"let's do it\" : \"nevermind\"\n</script>\n\n<div>{text}</div>";
var configuration = {
  name: "Configuration",
  files: [{
    name: "App.svelte",
    type: "svelte",
    content: appContent$1
  }, {
    name: "svelte-dialogs-config.js",
    type: "js",
    content: configContent$1
  }, {
    name: "CustomAlert.svelte",
    type: "svelte",
    content: customAlertContent
  }]
};

var appContent = "<script>\n    import { dialogs } from \"svelte-dialogs\";\n\n    /** \n     * configuration should be imported in root main.js\n     * this import is here just for the REPL to work \n     */\n    import './svelte-dialogs-config.js'\n</script>\n\n<button on:click={() => dialogs.error(\"An error occurred\")}>error</button>\n<button on:click={() => dialogs.success(\"Operation completed\")}>success</button>\n<button on:click={() => dialogs.warning(\"That's dangerous!\").then(console.log)}>warning</button>";
var configContent = "import { dialogs, Confirm } from \"svelte-dialogs\";\n\ndialogs.config({\n    warning: {\n        content: Confirm,\n        text: \"Are you sure you want to continue?\",\n      },\n});";
var contextualModals = {
  name: "Contextual modals",
  files: [{
    name: "App.svelte",
    type: "svelte",
    content: appContent
  }, {
    name: "svelte-dialogs-config.js",
    type: "js",
    content: configContent
  }]
};

var examples = [helloWorld, options, promiseBased, templateEventsBased, htmlString, customComponents, promptInputTypes, configuration, contextualModals];
var mapFile = function mapFile(_ref) {
  var name = _ref.name,
      type = _ref.type,
      content = _ref.content;
  return {
    name: name.replace(/.\w+$/, ""),
    type: type,
    source: content
  };
};

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[5] = list[i].name;
  child_ctx[7] = i;
  return child_ctx;
} // (14:6) {#each examples as { name }


function create_each_block(ctx) {
  var li;
  var t0_value =
  /*name*/
  ctx[5] + "";
  var t0;
  var t1;
  var mounted;
  var dispose;

  function click_handler() {
    return (
      /*click_handler*/
      ctx[3](
      /*idx*/
      ctx[7])
    );
  }

  return {
    c: function c() {
      li = element("li");
      t0 = text(t0_value);
      t1 = space();
      attr(li, "class", "toc-item svelte-k90v06");
      toggle_class(li, "toc-item--active",
      /*idx*/
      ctx[7] ===
      /*selectedIdx*/
      ctx[1]);
    },
    m: function m(target, anchor) {
      insert(target, li, anchor);
      append(li, t0);
      append(li, t1);

      if (!mounted) {
        dispose = listen(li, "click", click_handler);
        mounted = true;
      }
    },
    p: function p(new_ctx, dirty) {
      ctx = new_ctx;

      if (dirty &
      /*selectedIdx*/
      2) {
        toggle_class(li, "toc-item--active",
        /*idx*/
        ctx[7] ===
        /*selectedIdx*/
        ctx[1]);
      }
    },
    d: function d(detaching) {
      if (detaching) detach(li);
      mounted = false;
      dispose();
    }
  };
}

function create_fragment(ctx) {
  var main;
  var nav;
  var h1;
  var t1;
  var ul;
  var t2;
  var repl_1;
  var current;
  var each_value = examples;
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var repl_1_props = {
    orientation: "columns",
    svelteUrl:
    /*svelteUrl*/
    ctx[2],
    fixed: "false",
    relaxed: true,
    workersUrl: "workers"
  };
  repl_1 = new Repl({
    props: repl_1_props
  });
  /*repl_1_binding*/

  ctx[4](repl_1);
  return {
    c: function c() {
      main = element("main");
      nav = element("nav");
      h1 = element("h1");
      h1.textContent = "svelte-dialogs";
      t1 = space();
      ul = element("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t2 = space();
      create_component(repl_1.$$.fragment);
      attr(h1, "class", "title svelte-k90v06");
      attr(ul, "class", "toc svelte-k90v06");
      attr(nav, "class", "sidebar svelte-k90v06");
      attr(main, "class", "container svelte-k90v06");
    },
    m: function m(target, anchor) {
      insert(target, main, anchor);
      append(main, nav);
      append(nav, h1);
      append(nav, t1);
      append(nav, ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(ul, null);
      }

      append(main, t2);
      mount_component(repl_1, main, null);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*selectedIdx, examples*/
      2) {
        each_value = examples;

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(ul, null);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value.length;
      }

      var repl_1_changes = {};
      repl_1.$set(repl_1_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(repl_1.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(repl_1.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(main);
      destroy_each(each_blocks, detaching);
      /*repl_1_binding*/

      ctx[4](null);
      destroy_component(repl_1);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var svelteUrl = "https://unpkg.com/svelte@3.48.0";
  var repl;
  var selectedIdx = 0;

  var click_handler = function click_handler(idx) {
    return $$invalidate(1, selectedIdx = idx);
  };

  function repl_1_binding($$value) {
    binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      repl = $$value;
      $$invalidate(0, repl);
    });
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*repl, selectedIdx*/
    3) {
      repl && repl.set({
        components: examples[selectedIdx].files.map(mapFile)
      });
    }
  };

  return [repl, selectedIdx, svelteUrl, click_handler, repl_1_binding];
}

var App = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(App, _SvelteComponent);

  var _super = _createSuper(App);

  function App(options) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    return _this;
  }

  return _createClass(App);
}(SvelteComponent);

var app = new App({
  target: document.body,
  props: {}
});

export { _typeof$1 as _, app as a };
//# sourceMappingURL=main-ab7b4eca.js.map
