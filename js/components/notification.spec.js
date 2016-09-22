import { expect } from 'chai';
import sinon from 'sinon';
import Notification, { visibleClassName, animationTime } from './notification.js';

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
		expect(el.className).to.eql(visibleClassName);
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
		expect(el.className).to.eql('');
	});

	it('should call the onClickHandler callback on click', () => {
		let el = document.createElement("div");
		let handler = sinon.spy();
		let component = new Notification(el, {
			onClickHandler: handler
		});
		el.click();
		clock.tick(animationTime);
		expect(handler.called).to.eql(true);
	});

});