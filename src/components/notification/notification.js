/**
 * # Notification
 * A notification element that is removed from DOM on click.
 *
 * @example
 * new Notification({
 *   el,
 *   onAfterClick: handlerFunction,
 *   autoDismissTimeout: 5000
 * });
 *
 * @module components/notification.js
 */

import Base from '../base/base.js';
import {baseClassName, visibleClassName, animationTime} from './config/notification.js';

const noop = () => {};

class Notification extends Base {

    /**
     * Expand constructor.
     * @param {Object} params
     */
    constructor(params = {}) {
        super(params);

        this._boundDismiss = this._dismiss.bind(this);

        this._show();

        if (params.theme) {
            this.el.classList.add(baseClassName + '--' + params.theme);
        }

        if (params.autoDismissTimeout) {
            setTimeout(this._boundDismiss, params.autoDismissTimeout);
        }

    }

    /**
     * When we are clicked, dismiss the notification.
     * @param {Object} e
     */
    _onClick(e) {
        this._boundDismiss();
    }

    /**
     * Dismiss
     */
    _dismiss() {
        this._hide();
        // delay the click callback by the length of the fade transition
        // TODO: having the animation time in css AND js doesn't feel good
        setTimeout((this.onAfterClick || noop), animationTime);
        setTimeout(this.remove.bind(this), animationTime);
    }

    /**
     * Show
     */
    _show() {
        this.el.classList.add(visibleClassName);
    }

    /**
     * Hide
     */
    _hide() {
        this.el.classList.remove(visibleClassName);
    }

}

Notification.prototype._events = {
    click: '_onClick'
};

Notification.prototype._requiredParams = ['el'];

/**
 * Whitelisted parameters which can be set on construction.
 * @type {Array}
 */
Notification.prototype._whitelistedParams = [
    'onAfterClick',
    'autoDismissTimeout'
];


/**
 * Default values for internal properties we will be setting.
 * These are set on each construction so we don't leak properties
 * into the prototype chain.
 * @type {Object}
 */
Notification.prototype.defaults = {
    onAfterClick: null,
    autoDismissTimeout: false
};

export default Notification;