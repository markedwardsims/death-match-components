import Base from './base.js';

const noop = function() {};

class Notification extends Base {

  constructor(el, params = {}) {

    params.elRequired = true;

    if (!super(el, params)) {
      return;
    }

    this.el = el;
    this._bindEventListenerCallbacks();
    this._addEventListeners();

  }

  _bindEventListenerCallbacks() {
    this._onClickBound = this._onClick.bind(this);
  }

  _addEventListeners() {
    this.el.addEventListener('click', this._onClickBound);
  }
  
  _removeEventListeners() {
    this.el.removeEventListener('click', this._onClickBound);
  }

  _onClick(e) {
    this.onClickHandler();
  }

}

Notification.prototype._whitelistedParams = ['onClickHandler'];

Notification.prototype.defaults = {
  el: null,
  onClickHandler: null,
  _onClickBound: null
};

export default Notification;