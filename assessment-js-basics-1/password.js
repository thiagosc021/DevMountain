const { Console } = require('console');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.stdoutMuted = true

const PASSWORD_MIN_LENGTH = 10

const checkForMinimumLength = function(string) {
    return string.length >= PASSWORD_MIN_LENGTH
}

const checkForSpecialCharacters = function(string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(string);
}

const checkForUpperCaseCharacters = function(string) {
    const upperCaseChars = /(?=.*[A-Z])/;
    return upperCaseChars.test(string)
}

reader.question("Please type your password => ", function(input){
    readline.moveCursor(process.stdout, 0,-1)
    let computer =        "                      _____________________ \n" 
    computer = computer +  "                     /                 `  \\ \n" 
    computer = computer +  "                     |  .-----------.  |   |-----.\n"  
    computer = computer +  "                     |  |           |  |   |-=---|\n"
    computer = computer +  "                     |  |[ RESULT  ]|  |   |-----|\n"
    computer = computer +  "                     |  |           |  |   |-----|\n"
    computer = computer +  "                     |  |           |  |   |-----|\n"
    computer = computer +  "                     |  `-----------'  |   |-----'/\\ \n"
    computer = computer +  "                      \\________________/___'     /  \\ \n"
    computer = computer +  "                         /                      / / /\n"
    computer = computer +  "                        / //               //  / / /\n"
    computer = computer +  "                       /                      / / /\n"
    computer = computer +  "                      / _/_/_/_/_/_/_/_/_/_/ /   /\n"
    computer = computer +  "                     / _/_/_/_/_/_/_/_/_/_/ /   /\n"
    computer = computer + "                     / _/_/_/_______/_/_/_/ / __/\n"
    computer = computer + "                    /______________________/ /\n"    
    computer = computer + "                    \______________________\/"

    if(checkForMinimumLength(input) && checkForUpperCaseCharacters(input) && checkForSpecialCharacters(input)) {
        console.log(computer.replace('[ RESULT  ]','[*SUCCESS*]'))
    }else{
        console.log(computer.replace('[ RESULT  ]','[**FAIL** ]'))
    }

    console.log(" - password contains more than 10 characters - " +  (checkForMinimumLength(input) ? "√" : "X"))
    console.log(" - password contains uppercase characters - " +  (checkForUpperCaseCharacters(input) ? "√" : "X"))
    console.log(" - password contains special characters - " +  (checkForSpecialCharacters(input) ? "√" : "X"))

	// This line closes the connection to the command line interface.
	reader.close()

});

reader._writeToOutput = function _writeToOutput(stringToWrite) {
    if (reader.stdoutMuted)
        reader.output.write("*");
    else
        reader.output.write(stringToWrite);
};
