import { expect } from 'chai';
import removeClass from './remove-class.js';

describe('the removeClass helper', () => {

	it('should remove a class from the element', () => {
		const el = document.createElement('div');
		el.className = 'foo';
		removeClass(el, 'foo');
		expect(el.className).to.eql('');
	});

	it('should remove multiple classes from the element', () => {
		const el = document.createElement('div');
		el.className = 'foo bar baz';
		removeClass(el, ['foo', 'baz']);
		expect(el.className).to.eql('bar');
	});

});