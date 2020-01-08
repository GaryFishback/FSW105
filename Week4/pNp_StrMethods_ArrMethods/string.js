//********************************************************************** */
//********* FSW105 Week 4 pNp String methods & array Methods *********** */
//********************************************************************** */
var wordOne = "Hello";
var wordTwo = "Hello World"

//Make a function that will return any given string into all caps followed by the same string all lowercase.
function upper2Low (passStr){
return passStr.toUpperCase().concat(passStr.toLowerCase());
};
console.log("Took String and made it all Upper case then added all lowercase to it ...result..." + upper2Low(wordOne));

//Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
//Make a function that uses slice() and the other functions you've written to return the first half of the string.

function halfLength (passString){
    var charArrays = passString.split("");
    var halfArrayLength = Math.floor(charArrays.length/2);
    //return Math.floor(charArrays.length/2)
  return passString.slice(0,halfArrayLength)
}
//console.log("The Number of half the length of " + wordTwo + " is " + halfLength(wordTwo))
//console.log("The Number of half the length of " + wordOne + " is " + halfLength(wordOne))
console.log("The half the length and put back together  " + wordTwo + " is " + halfLength(wordTwo));
console.log("The half the length and put back together  " + wordOne + " is " + halfLength(wordOne))

//Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)

function capAnLowCase(passMeString){
    var chaArrays = passMeString.split("");
    var halfedArrayLength = Math.floor(chaArrays.length/2);
    if(halfedArrayLength % 2 === 0) {
        //return passMeString.toUpperCase().concat(passMeString.toLowerCase());
        return passMeString.slice(0,halfedArrayLength).toUpperCase().concat(passMeString.slice(halfedArrayLength).toLowerCase());
    }else{
        return passMeString.slice(0,halfedArrayLength).toUpperCase().concat(passMeString.slice(halfedArrayLength).toLowerCase());
    };
};
console.log("This string when halfed is ... " + capAnLowCase(wordOne));
console.log("This string when halfed is ... " + capAnLowCase(wordTwo));

//************************************************************************************************************ */
//********Make a function that takes any string and capitalizes any character that follows a space. ********** */
//************************************************************************************************************ */
var stringSent = "hey friends! practice practice practice";

function capEveryWordWithSpace(sentArray){
    var sentArray = sentArray.split(" ")
    var arrayCaped =[]
    for(i=0; i < sentArray.length ; ++i){
        var addMe = sentArray[i].charAt(0).toUpperCase() + sentArray[i].slice(1)
        arrayCaped.push(addMe)
        //console.log(sentArray[i].charAt(0).toUpperCase() + sentArray[i].slice(1))
    };
    return arrayCaped.join(" ")
}
console.log(capEveryWordWithSpace(stringSent))