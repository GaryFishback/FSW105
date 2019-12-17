var numberOne = 5
var numberTwo = 3
var wordOne = "cat"
var wordTwo = "dog"
var headerOne = document.createElement("h1")
var headerTwo = document.createElement("h2")
var headerThree = document.createElement("h3")

// Preliminaries 1. Write an if statement that prints "is greater than" if 5 is greater than 3
if (numberOne > numberTwo){
    headerOne.textContent = numberOne +" is greater than " + numberTwo
    document.body.append(headerOne)
}

// Preliminaries 2. Write an if statement that prints "is the length" if the length of "cat" is 3
if (wordOne.length === 3){
    headerTwo.textContent = wordOne + " is the length" + " 3 "
    document.body.append(headerTwo)
}

//Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.
if (wordOne === wordTwo){
    headerThree.textContent = wordOne + " is equal to " + wordTwo
    document.body.append(headerThree)
}else{
    headerThree.textContent = wordOne + " not the same " + wordTwo
    document.body.append(headerThree) 
}

//Bronze Medal: 1. Using the below object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.
var headerFour = document.createElement("h4")

var person = {
    name: "Bobby",
    age: 12
}
if (person.age > 18 || person.name.charAt[0] === "B"){
    headerFour.textContent = person.name + " is over 18 " + "they are " + person.age + " years old" 
    document.body.append(headerFour)
}else if (person.age < 18 || person.name.charAt[0] === "B"){
    headerFour.textContent = person.name + " is NOt over 18 " + "they are only " + person.age + " years old" 
    document.body.append(headerFour)
}
//Silver Medal:
var headerFive = document.createElement("h4")
var headerSix = document.createElement("h4")
var silverOneNum = 1
var silverOneStr = "1"
var silverTwoNum = 2
//1. Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.
if (silverOneNum === silverOneStr){
    headerFive.textContent = silverOneNum + " Strict Equal to "  + silverOneStr
    document.body.append(headerFive)
}else if( silverOneNum == silverOneStr){
    headerFive.textContent = silverOneNum + " loose or abstract to " + silverOneStr + " String"
    document.body.append(headerFive)
}
//2. Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4.
if (silverOneNum <= silverTwoNum && silverTwoNum === 4){
    headerSix.textContent = silverOneNum + " less than or equal to " + silverTwoNum + " AND " + silverTwoNum + " is equal to 4"
    document.body.append(headerSix)
}else if(silverOneNum <= silverTwoNum && silverTwoNum !== 4){
    headerSix.textContent = silverOneNum + " less than or equal to " + silverTwoNum + " AND " + silverTwoNum + " is NOT equal to 4"
    document.body.append(headerSix)
}else{
    headerSix.textContent = "NO"
    document.body.append(headerSix)
}
//Gold Medal:
var headerSevon = document.createElement("h4")
var headerEight = document.createElement("h4")
var headerNine = document.createElement("h4")
var headerTen = document.createElement("h4")
var randomNum = 10
//1. Write an if statement that checks to see if "dog" is a string
headerSevon.textContent = (isNaN(wordTwo)) ? wordTwo + " Is string" : wordTwo + " Is NOT string"
document.body.append(headerSevon)

//2. Write an if statement that checks to see if "true" is a boolean
headerEight.textContent = (Boolean("true")) ? "true " +  Boolean("true") : "true " +  Boolean("true")
document.body.append(headerEight)

// 3. Write an if statement that checks to see if a variable has been defined or not
headerNine.textContent = (typeof randomNum !== "undefined") ? "Variable is defined" : "Variable is NOT defined"
document.body.append(headerNine)


//6. Write a ternary statement that console.logs whether a number is odd or even. 
var myNum = Math.floor(Math.random() * 100)
headerTen.textContent = (myNum % 2 === 0) ? myNum + " It's Even" : myNum +" It's Odd"
document.body.append(headerTen)