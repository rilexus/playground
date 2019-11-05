import {isLetter, isNumber, isOperator, isWhiteSpace} from "../identify";

describe('identify', ()=>{
	
	describe('isNumber', ()=>{
		it('should recongnize numbers', function () {
			expect(isNumber('2')).toBe(true);
		});
	});
	
	describe('isWhiteSapce', ()=>{
		it('should recongnize white space', function () {
			expect(isWhiteSpace(' ')).toBe(true);
		});
	});
	
	describe('isOperator', ()=>{
		it('should recongnize operators +', function () {
			expect(isOperator('+')).toBe(true);
		});
		it('should recongnize operators -', function () {
			expect(isOperator('-')).toBe(true);
		});
		
		it('should recongnize operators *', function () {
			expect(isOperator('*')).toBe(true);
		});
		
		it('should recongnize operators %', function () {
			expect(isOperator('*')).toBe(true);
		});
	});
	
	describe('isLetter', ()=>{
		it('should recongnize small letter', function () {
			expect(isLetter('a')).toBeTruthy();
		});
		
		it('should recongnize big letter', function () {
			expect(isLetter('A')).toBe(true);
		});
	});
	
})
