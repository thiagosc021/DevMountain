const { match } = require('assert');
const { Console } = require('console');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];

	let total = 0;
	for(i = 1 ; i < tokens.length; i++) {
		switch(mathSymbol) {
			case '+':
				total = sum(total, Number(tokens[i]));
				break;
			case '-':
				total = sub(total, Number(tokens[i]));
				break;
			case '*':
				total = mult(total, Number(tokens[i]));	
				break;
			case '/':
				total = div(total, Number(tokens[i]));	
				break;
			case '√':
				if(tokens.length > 2) 
				{ 
					console.log("√ operation only supports 1 operand");
					return
				}
				total = Math.sqrt(Number(tokens[i]));
				break
			default:
				console.log("operation not supported(supported operations are + - * / √) and format should be operator operand1 operand2...");
				break;
		}
	}
	console.log(input," = " + total);
	// This line closes the connection to the command line interface.
	reader.close()

});

function sum(oper1, oper2)
{
	return oper1 + oper2;
}

function sub(oper1, oper2) 
{
	if(oper1 === 0) return oper2
	return oper1 - oper2
}

function mult(oper1, oper2) 
{
	if(oper1 === 0) return oper2
	return oper1 * oper2
}

function div(oper1, oper2)
{
	if(oper1 === 0) return oper2
	return oper1 / oper2
}
