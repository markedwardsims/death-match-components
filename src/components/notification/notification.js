/**
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

import Base from '../base/base.js';
import { baseClassName, visibleClassName, animationTime } from './config/notification.js';

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

    // TODO: what is the advantage of using _cacheElements to create this reference
    // to the element?
    this.el = el; 

    this._bindDismiss();
    this._bindEventListenerCallbacks();
    this._addEventListeners();
    this._show();

    if(params.theme) {
      this.el.classList.add(baseClassName + '--' + params.theme);
    }

    if(params.autoDismissTimeout) {
      setTimeout(this._dismissBound, params.autoDismissTimeout);
    }

  }

  /**
   * Because we're calling the dismiss method from insise a timeout
   * we need to bind it to the Notification class context
   */
  _bindDismiss() {
    this._dismissBound = this._dismiss.bind(this);
  }

  /**
   * Create bound versions of event listener callbacks and store them.
   * Otherwise we can't unbind from these events later because the
   * function signatures won't match.
   */
  _bindEventListenerCallbacks() {
    this._onClickBound = this._onClick.bind(this);
  }

  /**
   * Add event listeners for DOM events. Auto envoced by the base class on 
   * update and remove.
   */
  _addEventListeners() {
    this.el.addEventListener('click', this._onClickBound);
  }

  /**
   * Remove event listeners for DOM events. Auto envoced by the base class on 
   * update and remove.
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

/**
 * Whitelisted parameters which can be set on construction.
 * @type {Array}
 */
Notification.prototype._whitelistedParams = ['onAfterClick', 'autoDismissTimeout'];


/**
 * Default values for internal properties we will be setting.
 * These are set on each construction so we don't leak properties
 * into the prototype chain.
 * @type {Object}
 */
Notification.prototype.defaults = {
  el: null,
  onAfterClick: null,
  autoDismissTimeout: null,
  _onClickBound: null,
  _dismissBound: null
};

export default Notification;