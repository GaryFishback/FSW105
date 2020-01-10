//************************************************************************** */
//****** FSW105 Complete Project 2 : Build JS calc in Node and readline-sync */
//************************************************************************** */
const readline = require("readline-sync");

var firstNumber = readline.question('Please enter your first number: ');
//console.log('Thanks for ' + firstNumber);
var opperandWanted = readline.question('Please enter the operation to perform: ');
var secondNumber = readline.question('Please enter your second number: ');

if (opperandWanted === '+'){
    console.log("The result is: " + addTwoNumbers(firstNumber,secondNumber));
}else if (opperandWanted === '-' ){
    console.log("The result is: " + subTwoNumbers(firstNumber,secondNumber));
}else if ( opperandWanted === '*') {
    console.log("The result is: " + mulTwoNumbers(firstNumber,secondNumber));
}else if (opperandWanted === '/'){
    console.log("The result is: " + divTwoNumbers(firstNumber,secondNumber));
}else{
    console.log("You entered  " + opperandWanted + "  Please run again and use one of the following 4 operations  + , - , *  , /");
}

//addition
function addTwoNumbers (addNum1 , addNum2){
    let addAnswer = parseInt(addNum1) + parseInt(addNum2);
    return addAnswer;
};
//Subtraction
function subTwoNumbers (subNum1 , subNum2){
    let subAnswer = parseInt(subNum1) - parseInt(subNum2);
    return subAnswer;
};
//Multiplies
function mulTwoNumbers(mulNum1, mulNum2){
    let mulAnswer = parseInt(mulNum1) * parseInt(mulNum2);
    return mulAnswer;
};
//Divides
function divTwoNumbers(divNum1, divNum2){
    let divAnswer = parseInt(divNum1) / parseInt(divNum2);
    return divAnswer;
};