import test from 'ava';
import sinon from 'sinon';
import Notification from '../notification.js';
import { baseClassName, visibleClassName, animationTime } from '../config/notification.js';

let clock = undefined;

test.beforeEach( () => {
    clock = sinon.useFakeTimers();
});

test.afterEach( () => {
    clock.restore();
});

test('should add the visible class when instantiated', t => {
	let el = document.createElement("div");
	new Notification({
		el
    });
	t.true(el.classList.contains(visibleClassName));
});

test('should remove itself on click', t => {
	let parent = document.createElement("div");
	let el = document.createElement("div");
	parent.appendChild(el);
	new Notification({
		el
    });
	el.click();
	clock.tick(animationTime);
	t.true(parent.childElementCount === 0);
});

test('should remove the visible class on click', t => {
	let el = document.createElement("div");
	new Notification({
		el
    });
	el.click();
	t.false(el.classList.contains(visibleClassName));
});

test('should call the onAfterClick callback on click', t => {
	let el = document.createElement("div");
	let handler = sinon.spy();
	new Notification({
		el,
		onAfterClick: handler
	});
	el.click();
    clock.tick(animationTime);
	t.true(handler.called);
});

test('should auto dismiss if the autoDismissTimeout parameter is provided', t => {
	let autoDismissTimeout = 500;
	let parent = document.createElement("div");
	let el = document.createElement("div");
	parent.appendChild(el);
	new Notification({
		el,
		autoDismissTimeout: autoDismissTimeout
	});
    clock.tick(animationTime + autoDismissTimeout);
	t.true(parent.childElementCount === 0);
});

test('should add a theme class if provided', t => {
	let el = document.createElement("div");
	let theme = 'foo';
	new Notification({
		el,
		theme: theme
	});
	t.true(el.classList.contains(baseClassName + '--foo'));
});
