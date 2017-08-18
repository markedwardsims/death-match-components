import events from 'events-mixin';

class Base {

    /**
     * The Base class contructor
     * @param {Object} params The parameters/options object
     *
     */
    constructor(params = {}) {

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
    remove(leaveElement) {

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
    _setParams(params, force) {

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
    _unsetParams() {

        for (let property in this) {
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
    _bindEvents() {
        if (this.el && this._events) {
            this.events = events(this.el, this);
            for (let property in this._events) {
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
    _unbindEvents() {
        if(this.events) {
            this.events.unbind();
        }
        return this;
    }

}

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

export default Base;