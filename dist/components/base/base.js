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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _eventsMixin = __webpack_require__(2);

	var _eventsMixin2 = _interopRequireDefault(_eventsMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Base = function () {

	    /**
	     * The Base class contructor
	     * @param {Object} params The parameters/options object
	     *
	     */
	    function Base() {
	        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, Base);

	        this._requiredParams.forEach(function (key) {
	            if (params[key] === undefined) {
	                throw Error('Required parameters error. Missing parameter: ' + key);
	            }
	        });

	        this._setParams(this.defaults || {}, true);
	        this._setParams(params);

	        this._bindEvents();
	    }

	    /**
	     * Remove the component from the DOM and prepare for garbage collection by dereferencing values.
	     * @param {Boolean} leaveElement Leave the element intact.
	     * @returns {Object} the class instance
	     */


	    _createClass(Base, [{
	        key: 'remove',
	        value: function remove(leaveElement) {

	            if (!leaveElement && this.el && this.el.parentNode) {
	                this.el.parentNode.removeChild(this.el);
	            }

	            this._unsetParams();
	            this._unbindEvents();

	            return this;
	        }

	        /**
	         * Set a hash of parameters if they're whitelisted or we're told to force the set.
	         * This is used to set initial values as well as set passed parameters.
	         * @private
	         * @param {Object} params the parameters to add to the instance
	         * @param {Boolean} force Force setting parameters even if the parameter is not whitelisted.
	         * @returns {Object} the class instance
	         */

	    }, {
	        key: '_setParams',
	        value: function _setParams(params, force) {

	            for (var property in params) {
	                if (this._whitelistedParams.indexOf(property) !== -1 || this._requiredParams.indexOf(property) !== -1 || force) {
	                    this[property] = params[property];
	                }
	            }

	            return this;
	        }

	        /**
	         * Unset all parameters.
	         * @private
	         * @returns {Object} the class instance
	         */

	    }, {
	        key: '_unsetParams',
	        value: function _unsetParams() {

	            for (var property in this) {
	                if (this.hasOwnProperty(property)) {
	                    delete this[property];
	                }
	            }

	            return this;
	        }

	        /**
	         * Bind the DOM events provided in the config
	         * @private
	         * @returns {Object} the class instance
	         */

	    }, {
	        key: '_bindEvents',
	        value: function _bindEvents() {
	            if (this.el && this._events) {
	                this.events = (0, _eventsMixin2.default)(this.el, this);
	                for (var property in this._events) {
	                    if (this._events.hasOwnProperty(property)) {
	                        this.events.bind(property, this[this._events[property]]);
	                    }
	                }
	            }
	            return this;
	        }

	        /**
	         * Unbind the DOM events
	         * @private
	         * @returns {Object} the class instance
	         */

	    }, {
	        key: '_unbindEvents',
	        value: function _unbindEvents() {
	            if (this.events) {
	                this.events.unbind();
	            }
	            return this;
	        }
	    }]);

	    return Base;
	}();

	/**
	 * The required parameters list
	 * @type {Array}
	 * @private
	 */


	Base.prototype._requiredParams = [];

	/**
	 * The events object in key (event name) and value (function name string) format
	 * @type {Object}
	 * @private
	 */
	Base.prototype._events = {};

	/**
	 * The whitelisted parameters which can be set on construction
	 * @type {Array}
	 * @private
	 */
	Base.prototype._whitelistedParams = [];

	/**
	 * Default values for internal properties we will be setting.
	 * These are set on each construction so we don't leak properties
	 * into the prototype chain.
	 * @type {Object}
	 */
	Base.prototype.defaults = {};

	exports.default = Base;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2Jhc2UvYmFzZS5qcyJdLCJuYW1lcyI6WyJCYXNlIiwicGFyYW1zIiwiX3JlcXVpcmVkUGFyYW1zIiwiZm9yRWFjaCIsImtleSIsInVuZGVmaW5lZCIsIkVycm9yIiwiX3NldFBhcmFtcyIsImRlZmF1bHRzIiwiX2JpbmRFdmVudHMiLCJsZWF2ZUVsZW1lbnQiLCJlbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIl91bnNldFBhcmFtcyIsIl91bmJpbmRFdmVudHMiLCJmb3JjZSIsInByb3BlcnR5IiwiX3doaXRlbGlzdGVkUGFyYW1zIiwiaW5kZXhPZiIsImhhc093blByb3BlcnR5IiwiX2V2ZW50cyIsImV2ZW50cyIsImJpbmQiLCJ1bmJpbmQiLCJwcm90b3R5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRU1BLEk7O0FBRUY7Ozs7O0FBS0Esb0JBQXlCO0FBQUEsWUFBYkMsTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUVyQixhQUFLQyxlQUFMLENBQXFCQyxPQUFyQixDQUE2QixVQUFVQyxHQUFWLEVBQWU7QUFDeEMsZ0JBQUlILE9BQU9HLEdBQVAsTUFBZ0JDLFNBQXBCLEVBQStCO0FBQzNCLHNCQUFNQyxNQUFNLG1EQUFtREYsR0FBekQsQ0FBTjtBQUNIO0FBQ0osU0FKRDs7QUFNQSxhQUFLRyxVQUFMLENBQWdCLEtBQUtDLFFBQUwsSUFBaUIsRUFBakMsRUFBcUMsSUFBckM7QUFDQSxhQUFLRCxVQUFMLENBQWdCTixNQUFoQjs7QUFFQSxhQUFLUSxXQUFMO0FBQ0g7O0FBR0Q7Ozs7Ozs7OzsrQkFLT0MsWSxFQUFjOztBQUVqQixnQkFBSSxDQUFDQSxZQUFELElBQWlCLEtBQUtDLEVBQXRCLElBQTRCLEtBQUtBLEVBQUwsQ0FBUUMsVUFBeEMsRUFBb0Q7QUFDaEQscUJBQUtELEVBQUwsQ0FBUUMsVUFBUixDQUFtQkMsV0FBbkIsQ0FBK0IsS0FBS0YsRUFBcEM7QUFDSDs7QUFFRCxpQkFBS0csWUFBTDtBQUNBLGlCQUFLQyxhQUFMOztBQUVBLG1CQUFPLElBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7bUNBUVdkLE0sRUFBUWUsSyxFQUFPOztBQUV0QixpQkFBSyxJQUFJQyxRQUFULElBQXFCaEIsTUFBckIsRUFBNkI7QUFDekIsb0JBQUksS0FBS2lCLGtCQUFMLENBQXdCQyxPQUF4QixDQUFnQ0YsUUFBaEMsTUFBOEMsQ0FBQyxDQUEvQyxJQUFvRCxLQUFLZixlQUFMLENBQXFCaUIsT0FBckIsQ0FBNkJGLFFBQTdCLE1BQTJDLENBQUMsQ0FBaEcsSUFBcUdELEtBQXpHLEVBQWdIO0FBQzVHLHlCQUFLQyxRQUFMLElBQWlCaEIsT0FBT2dCLFFBQVAsQ0FBakI7QUFDSDtBQUNKOztBQUVELG1CQUFPLElBQVA7QUFDSDs7QUFHRDs7Ozs7Ozs7dUNBS2U7O0FBRVgsaUJBQUssSUFBSUEsUUFBVCxJQUFxQixJQUFyQixFQUEyQjtBQUN2QixvQkFBSSxLQUFLRyxjQUFMLENBQW9CSCxRQUFwQixDQUFKLEVBQW1DO0FBQy9CLDJCQUFPLEtBQUtBLFFBQUwsQ0FBUDtBQUNIO0FBQ0o7O0FBRUQsbUJBQU8sSUFBUDtBQUNIOztBQUVEOzs7Ozs7OztzQ0FLYztBQUNWLGdCQUFJLEtBQUtOLEVBQUwsSUFBVyxLQUFLVSxPQUFwQixFQUE2QjtBQUN6QixxQkFBS0MsTUFBTCxHQUFjLDJCQUFPLEtBQUtYLEVBQVosRUFBZ0IsSUFBaEIsQ0FBZDtBQUNBLHFCQUFLLElBQUlNLFFBQVQsSUFBcUIsS0FBS0ksT0FBMUIsRUFBbUM7QUFDL0Isd0JBQUksS0FBS0EsT0FBTCxDQUFhRCxjQUFiLENBQTRCSCxRQUE1QixDQUFKLEVBQTJDO0FBQ3ZDLDZCQUFLSyxNQUFMLENBQVlDLElBQVosQ0FBaUJOLFFBQWpCLEVBQTJCLEtBQUssS0FBS0ksT0FBTCxDQUFhSixRQUFiLENBQUwsQ0FBM0I7QUFDSDtBQUNKO0FBQ0o7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7O3dDQUtnQjtBQUNaLGdCQUFHLEtBQUtLLE1BQVIsRUFBZ0I7QUFDWixxQkFBS0EsTUFBTCxDQUFZRSxNQUFaO0FBQ0g7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7Ozs7OztBQUlMOzs7Ozs7O0FBS0F4QixLQUFLeUIsU0FBTCxDQUFldkIsZUFBZixHQUFpQyxFQUFqQzs7QUFFQTs7Ozs7QUFLQUYsS0FBS3lCLFNBQUwsQ0FBZUosT0FBZixHQUF5QixFQUF6Qjs7QUFFQTs7Ozs7QUFLQXJCLEtBQUt5QixTQUFMLENBQWVQLGtCQUFmLEdBQW9DLEVBQXBDOztBQUdBOzs7Ozs7QUFNQWxCLEtBQUt5QixTQUFMLENBQWVqQixRQUFmLEdBQTBCLEVBQTFCOztrQkFFZVIsSSIsImZpbGUiOiJiYXNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJrc2ltcy9fY2xpZW50cy9kZWF0aC1tYXRjaC9jb21wb25lbnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV2ZW50cyBmcm9tICdldmVudHMtbWl4aW4nO1xuXG5jbGFzcyBCYXNlIHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBCYXNlIGNsYXNzIGNvbnRydWN0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIFRoZSBwYXJhbWV0ZXJzL29wdGlvbnMgb2JqZWN0XG4gICAgICpcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xuXG4gICAgICAgIHRoaXMuX3JlcXVpcmVkUGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKHBhcmFtc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVycyBlcnJvci4gTWlzc2luZyBwYXJhbWV0ZXI6ICcgKyBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9zZXRQYXJhbXModGhpcy5kZWZhdWx0cyB8fCB7fSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3NldFBhcmFtcyhwYXJhbXMpO1xuXG4gICAgICAgIHRoaXMuX2JpbmRFdmVudHMoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IGZyb20gdGhlIERPTSBhbmQgcHJlcGFyZSBmb3IgZ2FyYmFnZSBjb2xsZWN0aW9uIGJ5IGRlcmVmZXJlbmNpbmcgdmFsdWVzLlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gbGVhdmVFbGVtZW50IExlYXZlIHRoZSBlbGVtZW50IGludGFjdC5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgY2xhc3MgaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZW1vdmUobGVhdmVFbGVtZW50KSB7XG5cbiAgICAgICAgaWYgKCFsZWF2ZUVsZW1lbnQgJiYgdGhpcy5lbCAmJiB0aGlzLmVsLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Vuc2V0UGFyYW1zKCk7XG4gICAgICAgIHRoaXMuX3VuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhIGhhc2ggb2YgcGFyYW1ldGVycyBpZiB0aGV5J3JlIHdoaXRlbGlzdGVkIG9yIHdlJ3JlIHRvbGQgdG8gZm9yY2UgdGhlIHNldC5cbiAgICAgKiBUaGlzIGlzIHVzZWQgdG8gc2V0IGluaXRpYWwgdmFsdWVzIGFzIHdlbGwgYXMgc2V0IHBhc3NlZCBwYXJhbWV0ZXJzLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyB0aGUgcGFyYW1ldGVycyB0byBhZGQgdG8gdGhlIGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBmb3JjZSBGb3JjZSBzZXR0aW5nIHBhcmFtZXRlcnMgZXZlbiBpZiB0aGUgcGFyYW1ldGVyIGlzIG5vdCB3aGl0ZWxpc3RlZC5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgY2xhc3MgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBfc2V0UGFyYW1zKHBhcmFtcywgZm9yY2UpIHtcblxuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl93aGl0ZWxpc3RlZFBhcmFtcy5pbmRleE9mKHByb3BlcnR5KSAhPT0gLTEgfHwgdGhpcy5fcmVxdWlyZWRQYXJhbXMuaW5kZXhPZihwcm9wZXJ0eSkgIT09IC0xIHx8IGZvcmNlKSB7XG4gICAgICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBwYXJhbXNbcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBVbnNldCBhbGwgcGFyYW1ldGVycy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBjbGFzcyBpbnN0YW5jZVxuICAgICAqL1xuICAgIF91bnNldFBhcmFtcygpIHtcblxuICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiB0aGlzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpc1twcm9wZXJ0eV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIHRoZSBET00gZXZlbnRzIHByb3ZpZGVkIGluIHRoZSBjb25maWdcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBjbGFzcyBpbnN0YW5jZVxuICAgICAqL1xuICAgIF9iaW5kRXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5lbCAmJiB0aGlzLl9ldmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzKHRoaXMuZWwsIHRoaXMpO1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2V2ZW50cy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHMuYmluZChwcm9wZXJ0eSwgdGhpc1t0aGlzLl9ldmVudHNbcHJvcGVydHldXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuYmluZCB0aGUgRE9NIGV2ZW50c1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGhlIGNsYXNzIGluc3RhbmNlXG4gICAgICovXG4gICAgX3VuYmluZEV2ZW50cygpIHtcbiAgICAgICAgaWYodGhpcy5ldmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLnVuYmluZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG4vKipcbiAqIFRoZSByZXF1aXJlZCBwYXJhbWV0ZXJzIGxpc3RcbiAqIEB0eXBlIHtBcnJheX1cbiAqIEBwcml2YXRlXG4gKi9cbkJhc2UucHJvdG90eXBlLl9yZXF1aXJlZFBhcmFtcyA9IFtdO1xuXG4vKipcbiAqIFRoZSBldmVudHMgb2JqZWN0IGluIGtleSAoZXZlbnQgbmFtZSkgYW5kIHZhbHVlIChmdW5jdGlvbiBuYW1lIHN0cmluZykgZm9ybWF0XG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuQmFzZS5wcm90b3R5cGUuX2V2ZW50cyA9IHt9O1xuXG4vKipcbiAqIFRoZSB3aGl0ZWxpc3RlZCBwYXJhbWV0ZXJzIHdoaWNoIGNhbiBiZSBzZXQgb24gY29uc3RydWN0aW9uXG4gKiBAdHlwZSB7QXJyYXl9XG4gKiBAcHJpdmF0ZVxuICovXG5CYXNlLnByb3RvdHlwZS5fd2hpdGVsaXN0ZWRQYXJhbXMgPSBbXTtcblxuXG4vKipcbiAqIERlZmF1bHQgdmFsdWVzIGZvciBpbnRlcm5hbCBwcm9wZXJ0aWVzIHdlIHdpbGwgYmUgc2V0dGluZy5cbiAqIFRoZXNlIGFyZSBzZXQgb24gZWFjaCBjb25zdHJ1Y3Rpb24gc28gd2UgZG9uJ3QgbGVhayBwcm9wZXJ0aWVzXG4gKiBpbnRvIHRoZSBwcm90b3R5cGUgY2hhaW4uXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5CYXNlLnByb3RvdHlwZS5kZWZhdWx0cyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlOyJdfQ==

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var events = __webpack_require__(3);
	var delegate = __webpack_require__(4);
	var forceCaptureEvents = ['focus', 'blur'];

	/**
	 * Expose `Events`.
	 */

	module.exports = Events;

	/**
	 * Initialize an `Events` with the given
	 * `el` object which events will be bound to,
	 * and the `obj` which will receive method calls.
	 *
	 * @param {Object} el
	 * @param {Object} obj
	 * @api public
	 */

	function Events(el, obj) {
	  if (!(this instanceof Events)) return new Events(el, obj);
	  if (!el) throw new Error('element required');
	  if (!obj) throw new Error('object required');
	  this.el = el;
	  this.obj = obj;
	  this._events = {};
	}

	/**
	 * Subscription helper.
	 */

	Events.prototype.sub = function(event, method, cb){
	  this._events[event] = this._events[event] || {};
	  this._events[event][method] = cb;
	};

	/**
	 * Bind to `event` with optional `method` name.
	 * When `method` is undefined it becomes `event`
	 * with the "on" prefix.
	 *
	 * Examples:
	 *
	 *  Direct event handling:
	 *
	 *    events.bind('click') // implies "onclick"
	 *    events.bind('click', 'remove')
	 *    events.bind('click', 'sort', 'asc')
	 *
	 *  Delegated event handling:
	 *
	 *    events.bind('click li > a')
	 *    events.bind('click li > a', 'remove')
	 *    events.bind('click a.sort-ascending', 'sort', 'asc')
	 *    events.bind('click a.sort-descending', 'sort', 'desc')
	 *
	 *  Multiple events handling:
	 *
	 *    events.bind({
	 *      'click .remove': 'remove',
	 *      'click .add': 'add'
	 *    });
	 *
	 * @param {String|object} - object is used for multiple binding,
	 *                               string for single event binding
	 * @param {String|function} [arg2] - method to call (optional)
	 * @param {*} [arg3] - data for single event binding (optional)
	 * @return {Function} callback
	 * @api public
	 */

	Events.prototype.bind = function(arg1, arg2){
	  var bindEvent = function(event, method) {
	    var e = parse(event);
	    var el = this.el;
	    var obj = this.obj;
	    var name = e.name;
	    var method = method || 'on' + name;
	    var args = [].slice.call(arguments, 2);

	    // callback
	    function cb(){
	      var a = [].slice.call(arguments).concat(args);

	      if (typeof method === 'function') {
	          method.apply(obj, a);
	          return;
	      }

	      if (!obj[method]) {
	          throw new Error(method + ' method is not defined');
	      } else {
	          obj[method].apply(obj, a);
	      }
	    }

	    // bind
	    if (e.selector) {
	      cb = delegate.bind(el, e.selector, name, cb);
	    } else {
	      events.bind(el, name, cb);
	    }

	    // subscription for unbinding
	    this.sub(name, method, cb);

	    return cb;
	  };

	  if (typeof arg1 == 'string') {
	    bindEvent.apply(this, arguments);
	  } else {
	    for(var key in arg1) {
	      if (arg1.hasOwnProperty(key)) {
	        bindEvent.call(this, key, arg1[key]);
	      }
	    }
	  }
	};

	/**
	 * Unbind a single binding, all bindings for `event`,
	 * or all bindings within the manager.
	 *
	 * Examples:
	 *
	 *  Unbind direct handlers:
	 *
	 *     events.unbind('click', 'remove')
	 *     events.unbind('click')
	 *     events.unbind()
	 *
	 * Unbind delegate handlers:
	 *
	 *     events.unbind('click', 'remove')
	 *     events.unbind('click')
	 *     events.unbind()
	 *
	 * @param {String|Function} [event]
	 * @param {String|Function} [method]
	 * @api public
	 */

	Events.prototype.unbind = function(event, method){
	  if (0 == arguments.length) return this.unbindAll();
	  if (1 == arguments.length) return this.unbindAllOf(event);

	  // no bindings for this event
	  var bindings = this._events[event];
	  var capture = (forceCaptureEvents.indexOf(event) !== -1);
	  if (!bindings) return;

	  // no bindings for this method
	  var cb = bindings[method];
	  if (!cb) return;

	  events.unbind(this.el, event, cb, capture);
	};

	/**
	 * Unbind all events.
	 *
	 * @api private
	 */

	Events.prototype.unbindAll = function(){
	  for (var event in this._events) {
	    this.unbindAllOf(event);
	  }
	};

	/**
	 * Unbind all events for `event`.
	 *
	 * @param {String} event
	 * @api private
	 */

	Events.prototype.unbindAllOf = function(event){
	  var bindings = this._events[event];
	  if (!bindings) return;

	  for (var method in bindings) {
	    this.unbind(event, method);
	  }
	};

	/**
	 * Parse `event`.
	 *
	 * @param {String} event
	 * @return {Object}
	 * @api private
	 */

	function parse(event) {
	  var parts = event.split(/ +/);
	  return {
	    name: parts.shift(),
	    selector: parts.join(' ')
	  }
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
	    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
	    prefix = bind !== 'addEventListener' ? 'on' : '';

	/**
	 * Bind `el` event `type` to `fn`.
	 *
	 * @param {Element} el
	 * @param {String} type
	 * @param {Function} fn
	 * @param {Boolean} capture
	 * @return {Function}
	 * @api public
	 */

	exports.bind = function(el, type, fn, capture){
	  el[bind](prefix + type, fn, capture || false);
	  return fn;
	};

	/**
	 * Unbind `el` event `type`'s callback `fn`.
	 *
	 * @param {Element} el
	 * @param {String} type
	 * @param {Function} fn
	 * @param {Boolean} capture
	 * @return {Function}
	 * @api public
	 */

	exports.unbind = function(el, type, fn, capture){
	  el[unbind](prefix + type, fn, capture || false);
	  return fn;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var closest = __webpack_require__(5)
	  , event = __webpack_require__(3);

	/**
	 * Delegate event `type` to `selector`
	 * and invoke `fn(e)`. A callback function
	 * is returned which may be passed to `.unbind()`.
	 *
	 * @param {Element} el
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} fn
	 * @param {Boolean} capture
	 * @return {Function}
	 * @api public
	 */

	// Some events don't bubble, so we want to bind to the capture phase instead
	// when delegating.
	var forceCaptureEvents = ['focus', 'blur'];

	exports.bind = function(el, selector, type, fn, capture){
	  if (forceCaptureEvents.indexOf(type) !== -1) capture = true;

	  return event.bind(el, type, function(e){
	    var target = e.target || e.srcElement;
	    e.delegateTarget = closest(target, selector, true, el);
	    if (e.delegateTarget) fn.call(el, e);
	  }, capture);
	};

	/**
	 * Unbind event `type`'s callback `fn`.
	 *
	 * @param {Element} el
	 * @param {String} type
	 * @param {Function} fn
	 * @param {Boolean} capture
	 * @api public
	 */

	exports.unbind = function(el, type, fn, capture){
	  if (forceCaptureEvents.indexOf(type) !== -1) capture = true;

	  event.unbind(el, type, fn, capture);
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var matches = __webpack_require__(6)

	module.exports = function (element, selector, checkYoSelf) {
	  var parent = checkYoSelf ? element : element.parentNode

	  while (parent && parent !== document) {
	    if (matches(parent, selector)) return parent;
	    parent = parent.parentNode
	  }
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	
	/**
	 * Element prototype.
	 */

	var proto = Element.prototype;

	/**
	 * Vendor function.
	 */

	var vendor = proto.matchesSelector
	  || proto.webkitMatchesSelector
	  || proto.mozMatchesSelector
	  || proto.msMatchesSelector
	  || proto.oMatchesSelector;

	/**
	 * Expose `match()`.
	 */

	module.exports = match;

	/**
	 * Match `el` to `selector`.
	 *
	 * @param {Element} el
	 * @param {String} selector
	 * @return {Boolean}
	 * @api public
	 */

	function match(el, selector) {
	  if (vendor) return vendor.call(el, selector);
	  var nodes = el.parentNode.querySelectorAll(selector);
	  for (var i = 0; i < nodes.length; ++i) {
	    if (nodes[i] == el) return true;
	  }
	  return false;
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=base.js.map