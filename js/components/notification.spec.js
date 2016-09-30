import { expect } from 'chai';
import sinon from 'sinon';
import Notification from './notification.js';
import { baseClassName, visibleClassName, animationTime } from '../config/notification.js';
import 'zepto';

describe('the Notification component', function() {

	let clock = undefined;

	before(() => {
		clock = sinon.useFakeTimers();
	});

	after(() => {
		clock.restore();
	});

	it('should add the visible class when instantiated', () => {
		let el = document.createElement("div");
		let component = new Notification(el);
		expect($(el).hasClass(visibleClassName)).to.eql(true);
	});

	it('should remove itself on click', () => {
		let parent = document.createElement("div");
		let el = document.createElement("div");
		parent.appendChild(el);
		let component = new Notification(el);
		el.click();
		clock.tick(animationTime);
		expect(parent.childElementCount).to.eql(0);
	});

	it('should remove the visible class on click', () => {
		let el = document.createElement("div");
		let component = new Notification(el);
		el.click();
		expect($(el).hasClass(visibleClassName)).to.eql(false);
	});

	it('should call the onAfterClick callback on click', () => {
		let el = document.createElement("div");
		let handler = sinon.spy();
		let component = new Notification(el, {
			onAfterClick: handler
		});
		el.click();
		clock.tick(animationTime);
		expect(handler.called).to.eql(true);
	});

	it('should auto dismiss if the autoDismissTimeout parameter is provided', () => {
		let autoDismissTimeout = 5000;
		let parent = document.createElement("div");
		let el = document.createElement("div");
		parent.appendChild(el);
		let component = new Notification(el, {
			autoDismissTimeout: autoDismissTimeout
		});
		clock.tick(animationTime + autoDismissTimeout);
		expect(parent.childElementCount).to.eql(0);
	});

	it('should add a theme class if provided', () => {
		let el = document.createElement("div");
		let theme = 'foo';
		let component = new Notification(el, {
			theme: theme
		});
		expect($(el).hasClass(baseClassName + '--foo')).to.eql(true);
	})

});