import {isOperator, TokenTypes} from "../identify";
import {createToken, tokenize} from "../tokenize";

describe('createToken', () => {
	it('should create token object', function () {
		expect(createToken(TokenTypes.Paranthesis, 's')).toEqual({
			type:TokenTypes.Paranthesis,
			value: 's'
		})
	});
});

describe('tokenize',() => {
	it('should tokenize paranthesis', function () {
		const input = '()';
		const res = [
			{
				type: TokenTypes.Paranthesis, value: '('
			},
			{
				type: TokenTypes.Paranthesis, value: ')'
			}
		];
		expect(tokenize(input)).toEqual(res);
	});
	
	it('should ignore white space', function () {
		const inp = '      ';
		expect(tokenize(inp)).toEqual([]);
	});
	
	
	it('should get letter', function () {
		const inp = 'a';
		const res = createToken(TokenTypes.Symbol, 'a');
		expect(tokenize(inp)).toEqual([res]);
	});
	
	it('should get single digit numbers', function () {
		const inp = '1';
		const res = createToken(TokenTypes.Number, 1);
		expect(tokenize(inp)).toEqual([res]);
	});
	
	it('should get multi digit  numbers', function () {
		const inp = '11';
		const res = createToken(TokenTypes.Number, 11);
		expect(tokenize(inp)).toEqual([res]);
	});
	
	it('should get multi digit numbers with paranthesis', function () {
		const inp = '(11)';
		const res = [
			createToken(TokenTypes.Paranthesis, '('),
			createToken(TokenTypes.Number, 11),
			createToken(TokenTypes.Paranthesis, ')'),
		];
		expect(tokenize(inp)).toEqual(res);
	});
	
	it('should get numbers in paranthesis', function () {
		const inp = '(1)';
		const res = [
			createToken(TokenTypes.Paranthesis, '('),
			createToken(TokenTypes.Number, 1),
			createToken(TokenTypes.Paranthesis, ')'),
		];
		expect(tokenize(inp)).toEqual(res);
	});
	
	it('should get letter in paranthesis', function () {
		const inp = '(a b)';
		const res = [
			createToken(TokenTypes.Paranthesis, '('),
			createToken(TokenTypes.Symbol, 'a'),
			createToken(TokenTypes.Symbol, 'b'),
			createToken(TokenTypes.Paranthesis, ')'),
		];
		expect(tokenize(inp)).toEqual(res);
	});
	
	
})
