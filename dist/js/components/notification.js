(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * # Base Component
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The base class for Spark JS components. This class should never be
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * instantiated directly.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {Element} el
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {Object} params
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module components/base.js
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _each = __webpack_require__(2);

	var _each2 = _interopRequireDefault(_each);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var noop = function noop() {};

	var Base = function () {

	  /**
	   * Set parameters and cache elements.
	   */
	  function Base(el) {
	    var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, Base);

	    if (params.elRequired && !el) {
	      return;
	    }

	    this.setParams(this.defaults || {}, true);
	    this.setParams(params);
	    (this._cacheElements || _get__('noop')).call(this, el, params);
	    (this._parseParams || _get__('noop')).call(this);
	  }

	  /**
	   * Remove the component from the DOM and prepare for garbage collection by dereferencing values.
	   * @param {Boolean} leaveElement Leave the element intact.
	   */


	  _createClass(Base, [{
	    key: 'remove',
	    value: function remove(leaveElement) {

	      if (this._removeEventListeners) {
	        this._removeEventListeners();
	      }

	      if (!leaveElement && this.el && this.el.parentNode) {
	        this.el.parentNode.removeChild(this.el);
	      }

	      this.unsetParams(this.defaults);

	      return this;
	    }

	    /**
	     * Update the component to use a new element or reparse from
	     * the existing element.
	     * @param {Element} el Optional
	     * @param {Object} params Optional
	     */

	  }, {
	    key: 'update',
	    value: function update(el) {
	      var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];


	      if (this._removeEventListeners) {
	        this._removeEventListeners();
	      }

	      (this._cacheElements || _get__('noop')).call(this, el || this.el, params);
	      (this._parseParams || _get__('noop')).call(this);

	      if (this._addEventListeners) {
	        this._addEventListeners();
	      }

	      return this;
	    }

	    /**
	     * Set a hash of parameters if they're whitelisted or we're told to force the set.
	     * This is used to set initial values as well as set passed parameters.
	     * @param {Object} params
	     * @param {Boolean} force Force setting even if the param is not whitelisted.
	     */

	  }, {
	    key: 'setParams',
	    value: function setParams(params, force) {
	      var _this = this;

	      _get__('each')(params, function (k, v) {
	        if (_this._whitelistedParams.indexOf(k) !== -1 || force) {
	          _this[k] = v;
	        }
	      });

	      return this;
	    }

	    /**
	     * Unset all parameters.
	     * @param {Array|Object} keys
	     * @param {Object} scope The object to unset the params from. Defaults to `this`.
	     */

	  }, {
	    key: 'unsetParams',
	    value: function unsetParams(keys, scope) {

	      keys = keys instanceof Array ? keys : Object.keys(keys);
	      scope = scope || this;
	      _get__('each')(keys, function (k) {
	        delete scope[k];
	      });

	      return this;
	    }
	  }]);

	  return Base;
	}();

	/**
	 * Whitelisted parameters which can be set on construction.
	 * @type {Array}
	 */


	_get__('Base').prototype._whitelistedParams = [];

	/**
	 * Default values for internal properties we will be setting.
	 * These are set on each construction so we don't leak properties
	 * into the prototype chain.
	 * @type {Object}
	 */
	_get__('Base').prototype.defaults = {};

	exports.default = _get__('Base');

	var _RewiredData__ = Object.create(null);

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = _RewiredData__[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'noop':
	      return noop;

	    case 'each':
	      return _each2.default;

	    case 'Base':
	      return Base;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    if (value === undefined) {
	      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      _RewiredData__[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof Base === 'undefined' ? 'undefined' : _typeof(Base);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(Base, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(Base)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * # Each
	 * Apply a callback function to a list of any kind: Array, NodeList, HTMLCollection or Object.
	 *
	 * @param {Array|NodeList|HTMLCollection|Object} list
	 * @param {Function} cb
	 *
	 * @example
	 * each([], callback);
	 * each(el.children, callback);
	 * each(el.childNodes, callback);
	 * each({}, callback);
	 *
	 * @module helpers/util/each.js
	 */
	function each(list, cb) {

	  if (!list) {
	    return;
	  }

	  if (typeof cb !== 'function') {
	    throw new Error('Cannot invoke `each` without a callback!');
	  }

	  var i = 0;
	  var len = list.length;

	  // Object
	  if (len === undefined) {
	    for (i in list) {
	      if (i !== 'prototype' && list.hasOwnProperty(i)) {
	        cb(i, list[i]);
	      }
	    }
	  }
	  // Array-like
	  else {
	      for (; i < len; i++) {
	        cb(list[i]);
	      }
	    }
	}

	exports.default = _get__('each');

	var _RewiredData__ = Object.create(null);

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = _RewiredData__[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'each':
	      return each;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    if (value === undefined) {
	      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      _RewiredData__[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof each === 'undefined' ? 'undefined' : _typeof(each);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(each, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(each)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(1);

	var _base2 = _interopRequireDefault(_base);

	var _addClass = __webpack_require__(4);

	var _addClass2 = _interopRequireDefault(_addClass);

	var _removeClass = __webpack_require__(7);

	var _removeClass2 = _interopRequireDefault(_removeClass);

	var _notification = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * # Notification
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A notification element that is removed from DOM on click.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @example
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * new Notification(el, {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   onAfterClick: handlerFunction,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   autoDismissTimeout: 5000
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * });
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @module components/notification.js
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var noop = function noop() {};

	var Notification = function (_get__2) {
	  _inherits(Notification, _get__2);

	  /**
	   * Expand constructor.
	   * @param {Element} el
	   * @param {Object} params
	   */
	  function Notification(el) {
	    var _this;

	    var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, Notification);

	    params.elRequired = true;

	    if (!(_this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, el, params)), _this)) {
	      return _possibleConstructorReturn(_this);
	    }

	    // TODO: what is the advantage of using _cacheElements to create this reference
	    // to the element?
	    _this.el = el;

	    _this._bindDismiss();
	    _this._bindEventListenerCallbacks();
	    _this._addEventListeners();
	    _this._show();

	    if (params.theme) {
	      _get__('addClass')(_this.el, _get__('baseClassName') + '--' + params.theme);
	    }

	    if (params.autoDismissTimeout) {
	      setTimeout(_this._dismissBound, params.autoDismissTimeout);
	    }

	    return _possibleConstructorReturn(_this);
	  }

	  /**
	   * Because we're calling the dismiss method from insise a timeout
	   * we need to bind it to the Notification class context
	   */


	  _createClass(Notification, [{
	    key: '_bindDismiss',
	    value: function _bindDismiss() {
	      this._dismissBound = this._dismiss.bind(this);
	    }

	    /**
	     * Create bound versions of event listener callbacks and store them.
	     * Otherwise we can't unbind from these events later because the
	     * function signatures won't match.
	     */

	  }, {
	    key: '_bindEventListenerCallbacks',
	    value: function _bindEventListenerCallbacks() {
	      this._onClickBound = this._onClick.bind(this);
	    }

	    /**
	     * Add event listeners for DOM events. Auto envoced by the base class on 
	     * update and remove.
	     */

	  }, {
	    key: '_addEventListeners',
	    value: function _addEventListeners() {
	      this.el.addEventListener('click', this._onClickBound);
	    }

	    /**
	     * Remove event listeners for DOM events. Auto envoced by the base class on 
	     * update and remove.
	     */

	  }, {
	    key: '_removeEventListeners',
	    value: function _removeEventListeners() {
	      this.el.removeEventListener('click', this._onClickBound);
	    }

	    /**
	     * When we are clicked, dismiss the notification.
	     * @param {Object} e
	     */

	  }, {
	    key: '_onClick',
	    value: function _onClick(e) {
	      this._dismissBound();
	    }

	    /**
	     * Dismiss
	     */

	  }, {
	    key: '_dismiss',
	    value: function _dismiss() {
	      this._hide();
	      // delay the click callback by the length of the fade transition
	      // TODO: having the animation time in css AND js doesn't feel good
	      setTimeout(this.onAfterClick || _get__('noop'), _get__('animationTime'));
	      setTimeout(this.remove.bind(this), _get__('animationTime'));
	    }

	    /**
	     * Show
	     */

	  }, {
	    key: '_show',
	    value: function _show() {
	      _get__('addClass')(this.el, _get__('visibleClassName'));
	    }

	    /**
	     * Hide
	     */

	  }, {
	    key: '_hide',
	    value: function _hide() {
	      _get__('removeClass')(this.el, _get__('visibleClassName'));
	    }
	  }]);

	  return Notification;
	}(_get__('Base'));

	/**
	 * Whitelisted parameters which can be set on construction.
	 * @type {Array}
	 */


	_get__('Notification').prototype._whitelistedParams = ['onAfterClick', 'autoDismissTimeout'];

	/**
	 * Default values for internal properties we will be setting.
	 * These are set on each construction so we don't leak properties
	 * into the prototype chain.
	 * @type {Object}
	 */
	_get__('Notification').prototype.defaults = {
	  el: null,
	  onAfterClick: null,
	  autoDismissTimeout: null,
	  _onClickBound: null,
	  _dismissBound: null
	};

	exports.default = _get__('Notification');

	var _RewiredData__ = Object.create(null);

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = _RewiredData__[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'addClass':
	      return _addClass2.default;

	    case 'baseClassName':
	      return _notification.baseClassName;

	    case 'noop':
	      return noop;

	    case 'animationTime':
	      return _notification.animationTime;

	    case 'visibleClassName':
	      return _notification.visibleClassName;

	    case 'removeClass':
	      return _removeClass2.default;

	    case 'Base':
	      return _base2.default;

	    case 'Notification':
	      return Notification;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    if (value === undefined) {
	      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      _RewiredData__[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof Notification === 'undefined' ? 'undefined' : _typeof(Notification);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(Notification, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(Notification)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * # Add Class
	                                                                                                                                                                                                                                                   * Add a class on an element.
	                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                   * @param {Element|Array} el An element or array of elements to update.
	                                                                                                                                                                                                                                                   * @param {String} name
	                                                                                                                                                                                                                                                   * @return {Element}
	                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                   * @module helpers/dom/add-class.js
	                                                                                                                                                                                                                                                   */

	var _trim = __webpack_require__(5);

	var _trim2 = _interopRequireDefault(_trim);

	var _hasClass = __webpack_require__(6);

	var _hasClass2 = _interopRequireDefault(_hasClass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ws = /\s+/;
	var cleanup = /\s{2,}/g;

	function addClass(el, name) {

	  if (arguments.length === 2 && typeof name === 'string') {
	    name = _get__('trim')(name).split(_get__('ws'));
	  } else {
	    name = name instanceof Array ? name : Array.prototype.slice.call(arguments, 1);
	  }

	  // optimize for best, most common case
	  if (name.length === 1 && el.classList) {
	    if (name[0]) {
	      el.classList.add(name[0]);
	    }
	    return el;
	  }

	  var toAdd = [];
	  var i = 0;
	  var l = name.length;
	  var item = void 0;
	  var clsName = typeof el.className === 'string' ? el.className : el.getAttribute ? el.getAttribute('class') : '';

	  // see if we have anything to add
	  for (; i < l; i++) {
	    item = name[i];
	    if (item && !_get__('hasClass')(clsName, item)) {
	      toAdd.push(item);
	    }
	  }

	  if (toAdd.length) {
	    if (typeof el.className === 'string') {
	      el.className = _get__('trim')((clsName + ' ' + toAdd.join(' ')).replace(_get__('cleanup'), ' '));
	    } else if (el.setAttribute) {
	      el.setAttribute('class', _get__('trim')((clsName + ' ' + toAdd.join(' ')).replace(_get__('cleanup'), ' ')));
	    }
	  }

	  return el;
	}

	exports.default = _get__('addClass');

	var _RewiredData__ = Object.create(null);

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = _RewiredData__[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'trim':
	      return _trim2.default;

	    case 'ws':
	      return ws;

	    case 'hasClass':
	      return _hasClass2.default;

	    case 'cleanup':
	      return cleanup;

	    case 'addClass':
	      return addClass;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    if (value === undefined) {
	      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      _RewiredData__[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof addClass === 'undefined' ? 'undefined' : _typeof(addClass);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(addClass, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(addClass)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * # Trim
	 * Trim whitespace on a string.
	 *
	 * @param {String} str
	 *
	 * @module helpers/util/trim.js
	 */

	var trimRE = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	function trim(str) {
	  return str.replace(_get__('trimRE'), '');
	}

	exports.default = _get__('trim');

	var _RewiredData__ = Object.create(null);

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = _RewiredData__[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'trimRE':
	      return trimRE;

	    case 'trim':
	      return trim;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    if (value === undefined) {
	      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      _RewiredData__[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof trim === 'undefined' ? 'undefined' : _typeof(trim);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(trim, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(trim)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * # Has Class
	 * See if an element has a class.
	 *
	 * @param {Element|String} el
	 * @param {String} name
	 * @return {Boolean}
	 *
	 * @module helpers/dom/has-class.js
	 */
	function hasClass(el, name) {
	  var cName = ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object' ? el.className || el.getAttribute && el.getAttribute('class') || '' : el || '').replace(/[\t\r\n\f]/g, ' ');
	  return (' ' + cName + ' ').indexOf(' ' + name + ' ') !== -1;
	}

	exports.default = _get__('hasClass');

	var _RewiredData__ = Object.create(null);

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = _RewiredData__[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'hasClass':
	      return hasClass;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    if (value === undefined) {
	      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      _RewiredData__[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof hasClass === 'undefined' ? 'undefined' : _typeof(hasClass);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(hasClass, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(hasClass)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * # Remove Class
	                                                                                                                                                                                                                                                   * Remove a class on an element.
	                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                   * @param {Element|Array} el An element or array of elements to update.
	                                                                                                                                                                                                                                                   * @param {String} name
	                                                                                                                                                                                                                                                   * @return {Element}
	                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                   * @module helpers/dom/remove-class.js
	                                                                                                                                                                                                                                                   */

	var _trim = __webpack_require__(5);

	var _trim2 = _interopRequireDefault(_trim);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ws = /\s+/;
	var cleanup = /\s{2,}/g;

	function removeClass(el, name) {

	  if (arguments.length === 2 && typeof name === 'string') {
	    name = _get__('trim')(name).split(_get__('ws'));
	  } else {
	    name = name instanceof Array ? name : Array.prototype.slice.call(arguments, 1);
	  }

	  // optimize for best, most common case
	  if (name.length === 1 && el.classList) {
	    if (name[0]) el.classList.remove(name[0]);
	    return el;
	  }

	  // store two copies
	  var clsName = ' ' + (typeof el.className === 'string' ? el.className : el.getAttribute ? el.getAttribute('class') : '') + ' ';
	  var result = clsName;
	  var current = void 0;
	  var start = void 0;
	  for (var i = 0, l = name.length; i < l; i++) {
	    current = name[i];
	    start = current ? result.indexOf(' ' + current + ' ') : -1;
	    if (start !== -1) {
	      start += 1;
	      result = result.slice(0, start) + result.slice(start + current.length);
	    }
	  }

	  // only write if modified
	  if (clsName !== result) {
	    if (typeof el.className === 'string') {
	      el.className = _get__('trim')(result.replace(_get__('cleanup'), ' '));
	    } else if (el.setAttribute) {
	      el.setAttribute('class', _get__('trim')(result.replace(_get__('cleanup'), ' ')));
	    }
	  }

	  return el;
	}

	exports.default = _get__('removeClass');

	var _RewiredData__ = Object.create(null);

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = _RewiredData__[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'trim':
	      return _trim2.default;

	    case 'ws':
	      return ws;

	    case 'cleanup':
	      return cleanup;

	    case 'removeClass':
	      return removeClass;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    if (value === undefined) {
	      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      _RewiredData__[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	var _typeOfOriginalExport = typeof removeClass === 'undefined' ? 'undefined' : _typeof(removeClass);

	function addNonEnumerableProperty(name, value) {
	  Object.defineProperty(removeClass, name, {
	    value: value,
	    enumerable: false,
	    configurable: true
	  });
	}

	if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(removeClass)) {
	  addNonEnumerableProperty('__get__', _get__);
	  addNonEnumerableProperty('__GetDependency__', _get__);
	  addNonEnumerableProperty('__Rewire__', _set__);
	  addNonEnumerableProperty('__set__', _set__);
	  addNonEnumerableProperty('__reset__', _reset__);
	  addNonEnumerableProperty('__ResetDependency__', _reset__);
	  addNonEnumerableProperty('__with__', _with__);
	  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var baseClassName = exports.baseClassName = 'notification-list__item';
	var visibleClassName = exports.visibleClassName = _get__('baseClassName') + '--visible';
	var animationTime = exports.animationTime = 300;

	var _RewiredData__ = Object.create(null);

	var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
	var _RewireAPI__ = {};

	(function () {
	  function addPropertyToAPIObject(name, value) {
	    Object.defineProperty(_RewireAPI__, name, {
	      value: value,
	      enumerable: false,
	      configurable: true
	    });
	  }

	  addPropertyToAPIObject('__get__', _get__);
	  addPropertyToAPIObject('__GetDependency__', _get__);
	  addPropertyToAPIObject('__Rewire__', _set__);
	  addPropertyToAPIObject('__set__', _set__);
	  addPropertyToAPIObject('__reset__', _reset__);
	  addPropertyToAPIObject('__ResetDependency__', _reset__);
	  addPropertyToAPIObject('__with__', _with__);
	})();

	function _get__(variableName) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _get_original__(variableName);
	  } else {
	    var value = _RewiredData__[variableName];

	    if (value === INTENTIONAL_UNDEFINED) {
	      return undefined;
	    } else {
	      return value;
	    }
	  }
	}

	function _get_original__(variableName) {
	  switch (variableName) {
	    case 'baseClassName':
	      return baseClassName;
	  }

	  return undefined;
	}

	function _assign__(variableName, value) {
	  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
	    return _set_original__(variableName, value);
	  } else {
	    return _RewiredData__[variableName] = value;
	  }
	}

	function _set_original__(variableName, _value) {
	  switch (variableName) {}

	  return undefined;
	}

	function _update_operation__(operation, variableName, prefix) {
	  var oldValue = _get__(variableName);

	  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

	  _assign__(variableName, newValue);

	  return prefix ? newValue : oldValue;
	}

	function _set__(variableName, value) {
	  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
	    Object.keys(variableName).forEach(function (name) {
	      _RewiredData__[name] = variableName[name];
	    });
	  } else {
	    if (value === undefined) {
	      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
	    } else {
	      _RewiredData__[variableName] = value;
	    }

	    return function () {
	      _reset__(variableName);
	    };
	  }
	}

	function _reset__(variableName) {
	  delete _RewiredData__[variableName];
	}

	function _with__(object) {
	  var rewiredVariableNames = Object.keys(object);
	  var previousValues = {};

	  function reset() {
	    rewiredVariableNames.forEach(function (variableName) {
	      _RewiredData__[variableName] = previousValues[variableName];
	    });
	  }

	  return function (callback) {
	    rewiredVariableNames.forEach(function (variableName) {
	      previousValues[variableName] = _RewiredData__[variableName];
	      _RewiredData__[variableName] = object[variableName];
	    });
	    var result = callback();

	    if (!!result && typeof result.then == 'function') {
	      result.then(reset).catch(reset);
	    } else {
	      reset();
	    }

	    return result;
	  };
	}

	exports.__get__ = _get__;
	exports.__GetDependency__ = _get__;
	exports.__Rewire__ = _set__;
	exports.__set__ = _set__;
	exports.__ResetDependency__ = _reset__;
	exports.__RewireAPI__ = _RewireAPI__;
	exports.default = _RewireAPI__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=notification.js.map