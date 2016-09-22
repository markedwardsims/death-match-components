/**
 * # Notification
 * A notification element that is removed from DOM on click.
 *
 * @example
 * new Notification(el, {
 *   onClickHandler: handlerFunction,
 *   autoDismissTimeout: 5000
 * });
 *
 * @module components/notification.js
 */

import Base from './base.js';
import addClass from '../helpers/dom/add-class.js';
import removeClass from '../helpers/dom/remove-class.js';


// TODO: these exports are to decouple the values from the test, feels a little uncomfortable
// but is there a better alternative?
export const visibleClassName = 'notification-list__item--visible';
export const animationTime = 300;

const noop = () => {};

class Notification extends Base {

  /**
   * Expand constructor.
   * @param {Element} el
   * @param {Object} params
   */
  constructor(el, params = {}) {

    params.elRequired = true;

    if (!super(el, params)) {
      return;
    }

    this.el = el;
    this._bindEventListenerCallbacks();
    this._addEventListeners();
    this._show();

    if(params.autoDismissTimeout) {
      setTimeout(this._dismissBound, params.autoDismissTimeout);
    }

  }

  /**
   * Create bound versions of event listener callbacks and store them.
   * Otherwise we can't unbind from these events later because the
   * function signatures won't match.
   */
  _bindEventListenerCallbacks() {
    this._onClickBound = this._onClick.bind(this);
    this._dismissBound = this._dismiss.bind(this);
  }

  /**
   * Add event listeners for DOM events.
   */
  _addEventListeners() {
    this.el.addEventListener('click', this._onClickBound);
  }

  /**
   * Remove event listeners for DOM events..
   */
  _removeEventListeners() {
    this.el.removeEventListener('click', this._onClickBound);
  }

  /**
   * When we are clicked, dismiss the notification.
   * @param {Object} e
   */
  _onClick(e) {
    this._dismissBound();
  }

  /**
   * Dismiss
   */
   _dismiss() {
    this._hide();
    // delay the click callback by the length of the fade transition
    // TODO: having the animation time in css AND js doesn't feel good
    setTimeout((this.onClickHandler || noop), animationTime);
    setTimeout(this.remove.bind(this), animationTime);
  }

  /**
   * Show
   */
  _show() {
    addClass(this.el, visibleClassName);
  }

  /**
   * Hide
   */
  _hide() {
    removeClass(this.el, visibleClassName);
  }

}

/**
 * Whitelisted parameters which can be set on construction.
 * @type {Array}
 */
Notification.prototype._whitelistedParams = ['onClickHandler', 'autoDismissTimeout'];


/**
 * Default values for internal properties we will be setting.
 * These are set on each construction so we don't leak properties
 * into the prototype chain.
 * @type {Object}
 */
Notification.prototype.defaults = {
  el: null,
  onClickHandler: null,
  autoDismissTimeout: null,
  _onClickBound: null,
  _dismissBound: null
};

export default Notification;