const LETTER = /[a-zA-Z]/i;
const NUMBER = /^[0-9]+$/;
const WHITE_SPACE = /\s+/;
const OPERATOR = ['+', '*', '/', '%','-'];

export enum TokenTypes {
	Paranthesis = 'Paranthesis',
	Letter = 'Letter',
	Number = 'Number',
	Operator = 'Operator',
	Whitespace = 'Whitespace',
	Quote = 'Quote',
	Symbol = 'Symbol'
}

export const isLetter = char => LETTER.test(char);

export const isNumber = char => NUMBER.test(char);

export const isOperator = char => OPERATOR.includes(char);

export const isOpenParenthesis = char => char === '(';

export const isClosingParenthesis = char => char === ')';

export const isParenthesis = char => isClosingParenthesis(char) || isOpenParenthesis(char);

export const isWhiteSpace = char => WHITE_SPACE.test(char);

export const isQuote = char => char === '"';






