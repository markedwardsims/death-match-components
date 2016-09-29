import { expect } from 'chai';
import hasClass from './has-class.js';

describe('the hasClass helper', () => {

	it('should return true if the element has the class', () => {
		const el = document.createElement('div');
		el.className = 'foo bar baz';
		const result = hasClass(el, 'foo');
		expect(hasClass(el, 'foo')).to.eql(true);
		expect(hasClass(el, 'bar')).to.eql(true);
		expect(hasClass(el, 'baz')).to.eql(true);
	});

	it('should return false if the element does not have the class', () => {
		const el = document.createElement('div');
		el.className = 'foo bar baz';
		expect(hasClass(el, 'bash')).to.eql(false);
	});

});