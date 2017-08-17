import events from 'events-mixin';

class Base {

    /**
     * Set parameters and cache elements.
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
     * @param {Object} params
     * @param {Boolean} force Force setting even if the param is not whitelisted.
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
     */
    _unsetParams() {

        for (var property in this) {
            delete this[property];
        }

        return this;
    }

    /**
     *
     * @private
     */
    _bindEvents() {
        if (this.el && this._events) {
            this.events = events(this.el, this);
            for (var property in this._events) {
                this.events.bind(property, this[this._events[property]]);
            }
        }
    }

    /**
     *
     * @private
     */
    _unbindEvents() {
        if(this.events) {
            this.events.unbind();
        }
    }

}


Base.prototype._requiredParams = [];
Base.prototype._events = {};

/**
 * Whitelisted parameters which can be set on construction.
 * @type {Array}
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