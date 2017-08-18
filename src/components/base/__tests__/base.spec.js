import test from 'ava';
import sinon from 'sinon';
import Base from '../base.js';

test('should throw error if required parameters are not provided', t => {

    Base.prototype._requiredParams = [ 'foo' ];

    const error = t.throws(() => {
        new Base({
            bar: 'baz'
        });
    }, Error);

    t.is(error.message, 'Required parameters error. Missing parameter: foo');

    Base.prototype._requiredParams = [];

});

test('should set default parameters on construction', t => {
    Base.prototype.defaults = {
        foo: 'bar',
        baz: true,
        bash: 123
    };

    let base = new Base();

    t.true(base.foo === 'bar');
    t.true(base.baz === true);
    t.true(base.bash === 123);

    Base.prototype.defaults = {};
});

test('should only set whitelisted parameters on construction', t => {
    Base.prototype._whitelistedParams = [ 'foo', 'bar' ];

    let base = new Base({
        foo: 123,
        bar: 'baz',
        bash: 'bah'
    });

    t.true(base.foo === 123);
    t.true(base.bar === 'baz');
    t.true(base.bash === undefined);

    Base.prototype._whitelistedParams = [];
});

test('should clean up parameters on remove', t => {
    Base.prototype._whitelistedParams = [ 'foo', 'bar' ];

    let base = new Base({
        foo: 123,
        bar: 'baz'
    });

    base.remove();

    t.true(base.foo === undefined);
    t.true(base.bar === undefined);

    Base.prototype._whitelistedParams = [];
});

test('should set required parameters on construction', t => {
    Base.prototype._requiredParams = [ 'foo' ];

    let base = new Base({
        foo: 'bar'
    });

    t.true(base.foo === 'bar');

    Base.prototype._requiredParams = [];
});

test('should remove the dom element on remove if one exists', t => {
    Base.prototype._requiredParams = [ 'el' ];

    let parentElement = document.createElement('div');
    let childElement = document.createElement('span');
    parentElement.appendChild(childElement);

    let base = new Base({
        el: childElement
    });

    base.remove();

    t.true(parentElement.children.length === 0);

    Base.prototype._requiredParams = [];
});

test('should leave the dom element on remove if specified', t => {
    Base.prototype._requiredParams = [ 'el' ];

    let parentElement = document.createElement('div');
    let childElement = document.createElement('span');
    parentElement.appendChild(childElement);

    let base = new Base({
        el: childElement
    });

    base.remove(true);

    t.true(parentElement.children.length === 1);

    Base.prototype._requiredParams = [];
});

test('should bind dom events if provided', t => {
    Base.prototype._requiredParams = [ 'el', 'handleClick' ];
    Base.prototype._events = {
        click: 'handleClick'
    };

    let el = document.createElement('div');
    let handleClick = sinon.spy();
    new Base({
        el,
        handleClick
    });

    el.click();

    t.true(handleClick.called);

    Base.prototype._events = {};
    Base.prototype._requiredParams = [];

});

test('should unbind dom events on remove', t => {
    Base.prototype._requiredParams = [ 'el', 'handleClick' ];
    Base.prototype._events = {
        click: 'handleClick'
    };

    let el = document.createElement('div');
    let handleClick = sinon.spy();
    let base = new Base({
        el,
        handleClick
    });

    sinon.spy(base, '_unbindEvents');

    base.remove();

    t.true(base._unbindEvents.called);

    Base.prototype._events = {};
    Base.prototype._requiredParams = [];

});

test('should unbind dom events if provided', t => {
    Base.prototype._requiredParams = [ 'el', 'handleClick' ];
    Base.prototype._events = {
        click: 'handleClick'
    };

    let el = document.createElement('div');
    let handleClick = sinon.spy();
    let base = new Base({
        el,
        handleClick
    });

    base._unbindEvents();

    el.click();
    t.false(handleClick.called);

    Base.prototype._events = {};
    Base.prototype._requiredParams = [];

});