// FSW105 - Week 3 - Complete the Pause and Practice: Building JS Functions to Keep Code DRY
var numOne = 10;
var numTwo = 5;
var numThree = 3;
var randNummber = Math.floor(Math.random() * 10);
var iBeAString = "Welcome to Javascript. by Dean"

//*******************************************************************************************************
//********* Write a function that accepts two numbers as parameters, and returns the sum. ***************
//*******************************************************************************************************
function sumOFTwoNumbers( nOne, nTwo){
   var sumResult = nOne + nTwo;
    return sumResult;
};
console.log("When you " + numOne + " + " + numTwo + " = " + sumOFTwoNumbers( numOne, numTwo ));


//*******************************************************************************************************
//* Write a function that accepts three numbers as parameters, and returns the largest of those numbers.*
//*******************************************************************************************************
function findLargeNumber (nOne , nTwo, nThree){
   return Math.max(nOne, nTwo, nThree);
};
console.log("The largest Number out of " + numOne + " ," + numTwo + " and " + numThree + " IS ..." + findLargeNumber(numOne, numTwo, numThree));


//*************************************************************************************************************************************************
//** Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd") *
//*************************************************************************************************************************************************
function amOddOrEven (giveNum){
    if(giveNum % 2 === 0){
        return " an Even Number";
    }else{
        return " an Odd Number";
    }
}
console.log("The number: " + randNummber + amOddOrEven(randNummber));


//**************************************************************************************************************************************** */
//Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
//**************************************************************************************************************************************** */
function countstringChar (theString){
    if( theString.length <=20){
        return theString + " " + theString;
    }else{
        if (theString.length % 2 === 0){
            return theString.slice(0, theString.length / 2);
        }else{
            return "Sorry but the string does not have an Even Number of Char to Split";
        };      
    };
};
console.log(countstringChar(iBeAString));
//*************************************************************************************************** */
//************* extra credit  Fibonacci numbers and return their sum. ********************************/
//*************************************************************************************************** */
var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
var arrayReturned = fibonacci_series(6);
console.log("look This is the array returned " + arrayReturned);
console.log(addThemUP(arrayReturned));
function addThemUP (needAnArray){
    var totalAmount = 0;
    for (i=0; i < needAnArray.length ; i++){
        //console.log("whats in the array " + needAnArray[i])
        console.log("What number are we at "+ i);
        totalAmount = totalAmount + needAnArray[i];
        console.log("Current total amount " + totalAmount);
    };
};

 