import {isLetter, isNumber, isParenthesis, isWhiteSpace, TokenTypes} from "./identify";


export const createToken = (type, char) => {
	if (isNumber(char)) return {
		type: type,
		value: parseInt(char,10)
	}
	return {
		type: type,
		value: char
	}
}

export const tokenize = (input) => {
	const tokens = [];
	let cursor = 0;
	
	while (cursor < input.length){
		const char = input[cursor];
		
		if (isParenthesis(char)){
			tokens.push(createToken(TokenTypes.Paranthesis, char));
			cursor ++;
			continue;
		}
		
		if (isWhiteSpace(char)){
			cursor++;
			continue;
		}
		
		if (isLetter(char)){
			let symbol = char;
			while (isLetter(input[++cursor]) && cursor < input.length){
				symbol += input[cursor];
				cursor++;
			}
			tokens.push(createToken(TokenTypes.Symbol, symbol));
			continue;
		}
		
		if (isNumber(char)){
			let number = char;
			while (isNumber(input[++cursor])){
				number += input[cursor];
			}
			tokens.push(createToken(TokenTypes.Number, number));
			continue;
		}
		
		throw new Error(`${char} not known`);
		
	}
	
	return tokens;
}
