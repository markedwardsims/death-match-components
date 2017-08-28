import Base from '../base/base.js';
import {baseClassName, visibleClassName, animationTime} from './config/notification.js';

/**
 * @module src/components/notification/notification.js
 *
 * @signature `new Notification(params)`
 * @param {Object} params the parameters to add to the instance
 * @return {notification} Notification instance
 */
export class Notification extends Base {

    /**
     * The Notification constructor
     * @param {Object} params the parameters to add to the instance
     * @param {Element} params.el (Required) The DOM element to use
     * @param {Function} params.onAfterClick (Optional) The function to invoke after clicking on the notification element
     * @param {Number} params.autoDismissTimeout (Optional) The number in milliseconds to wait before auto-dismissing the notification
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
     * @private
     */
    _onClick() {
        this._boundDismiss();
    }

    /**
     * Dismiss the notification
     * @private
     */
    _dismiss() {
        this._hide();
        // delay the click callback by the length of the fade transition
        // TODO: having the animation time in css AND js doesn't feel good
        setTimeout((this.onAfterClick || function() {}), animationTime);
        setTimeout(this.remove.bind(this), animationTime);
    }

    /**
     * Show the notification
     * @private
     */
    _show() {
        this.el.classList.add(visibleClassName);
    }

    /**
     * Hide the notification
     * @private
     */
    _hide() {
        this.el.classList.remove(visibleClassName);
    }

}

Notification.prototype._events = {
    click: '_onClick'
};

Notification.prototype._requiredParams = ['el'];

Notification.prototype._whitelistedParams = [
    'onAfterClick',
    'autoDismissTimeout'
];

Notification.prototype.defaults = {
    onAfterClick: null,
    autoDismissTimeout: false
};

export default Notification;