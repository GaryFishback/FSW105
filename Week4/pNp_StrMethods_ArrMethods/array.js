//********************************************************************** */
//********* FSW105 Week 4 pNp String methods & array Methods *********** */
//********************************************************************** */
var fruit = [
    "bannana",
    "apple",
    "orange",
    "watermelon"
];
var vegetables = [
    "carrot",
    "tomato",
    "pepper",
    "lettuce"
];
function manyThinsHappens(fruitArray, vegArray){
    //Remove the last item from the vegetable array.
    vegArray.pop();
    console.log(vegArray);

    //Remove the first item from the fruit array.
    fruitArray.shift();
    console.log(fruitArray);

    //Find the index of "orange."
    var orangeIndex = fruitArray.indexOf("orange");
    console.log("Orange index is.." + orangeIndex);

    //Add that number to the end of the fruit array.
    fruitArray.push(orangeIndex);
    console.log(fruitArray);

    //Use the length property to find the length of the vegetable array.
    var lengthOfVegsArr = vegArray.length;
    console.log("The length of Veg Array is ..." + lengthOfVegsArr);

    //Add that number to the end of the vegetable array.
    vegArray.push(lengthOfVegsArr);
    console.log(vegArray);

    //Put the two arrays together into one array. Fruit first. Call the new Array "food".
    var foodArray = fruitArray.concat(vegArray);
    console.log(foodArray);

    //Remove 2 elements from your new array starting at index 4 with one method.
    foodArray.splice(4,2);
    console.log(foodArray);

    //Reverse your array.
    foodArray.reverse();
    console.log(foodArray);

    //Turn the array into a string and return it.
    return foodArray.join(",")
};
console.log (manyThinsHappens(fruit,vegetables));