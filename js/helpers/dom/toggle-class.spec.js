import { expect } from 'chai';
import toggleClass from './toggle-class.js';

describe('the toggleClass helper', () => {

	it('should return out if el is not passed', () => {
		expect(toggleClass()).to.eql(undefined);
	});

	it('should add the class to the element if it does not exists', () => {
		const el = document.createElement('div');
		el.className = 'foo';
		toggleClass(el, 'foo');
		expect(el.className).to.eql('');
	});

	it('should remove the class from the element if it exists', () => {
		const el = document.createElement('div');
		el.className = 'foo';
		toggleClass(el, 'foo');
		expect(el.className).to.eql('');
	});

	it('should add the class to multiple elements', () => {
		const el = document.createElement('div');
		const otherEl = document.createElement('div');
		toggleClass([el, otherEl], 'foo');
		expect(el.className).to.eql('foo');
		expect(otherEl.className).to.eql('foo');
	});

	it('should remove the class from multiple elements', () => {
		const el = document.createElement('div');
		const otherEl = document.createElement('div');
		el.className = 'foo';
		otherEl.className = 'foo';
		toggleClass([el, otherEl], 'foo');
		expect(el.className).to.eql('');
		expect(otherEl.className).to.eql('');
	});

});