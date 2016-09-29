import { expect } from 'chai';
import addClass from './add-class.js';

describe('the addClass helper', () => {

	it('should add the class to an element with no existing classes', () => {
		const el = document.createElement('div');
		addClass(el, 'foo');
		expect(el.className).to.eql('foo');
	});

	it('should add the class to an element with existing classes', () => {
		const el = document.createElement('div');
		el.className = 'baz bash';
		addClass(el, 'foo');
		expect(el.className).to.eql('baz bash foo');
	});

	it('should only add a duplicate class once', () => {
		const el = document.createElement('div');
		addClass(el, 'foo');
		addClass(el, 'foo');
		expect(el.className).to.eql('foo');
	});

	it('should trim the added class if it contains spaces', () => {
		const el = document.createElement('div');
		addClass(el, ' foo ');
		expect(el.className).to.eql('foo');
	});

	it('should add multiple classes to the element', () => {
		const el = document.createElement('div');
		addClass(el, ['foo', 'bar']);
		expect(el.className).to.eql('foo bar');
	});

});