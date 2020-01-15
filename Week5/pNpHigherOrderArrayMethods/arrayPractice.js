/***************************************************************** */
/******** FSW105 Week 5  pNp Higher Order Array Methods ********** */
/***************************************************************** */

//Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiverAndGreaterOnly(arr){
    // let result = arr.filter(function(num){
    //     if (num > 5){
    //         return true
    //     }
    // })
    //let result = arr.filter(num => num > 5)
//return result
return arr.filter(num => num > 5)
}
console.log("Given array and if > 5 display it : " + fiverAndGreaterOnly([3, 6, 8, 2]));

//Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr){
    // let result = arr.filter(function(num){
    //     if (num % 2 === 0){
    //         return true
    //     }
    // })
    //let result = arr.filter( num => num % 2 === 0)
//return result
return arr.filter( num => num % 2 === 0)
}
console.log("Given array and sort out only the evens: " + evensOnly([3,6,8,2]));

//Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
function fiveCharactersOrFewerOnly(arr){
    return arr.filter(name => name.length <= 5) 
}
console.log("Given an array of words and filter only those <= 5 Char: " + fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]))

//Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
function peopleWhoBelongToTheIllumiati(arr){
    return arr.filter(memTrue => memTrue.member === true)
}
console.log("Given array of people, filter only those that are members: " + peopleWhoBelongToTheIllumiati([{name: "Angelina Jolie", member: true},{name: "Eric Jones", member: false},{name: "Paris Hilton", member: true},{name: "Kayne West", member: false},{name: "Bob Ziroll", member: true}]))
//Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)
function ofAge(arr){
    return arr.filter(num => num.age >= 18)
}
console.log("Given array and filter >= 18: " + ofAge([{name: "Angelina Jolie", age: 80},{name: "Eric Jones", age: 2},{name: "Paris Hilton", age: 5},{name: "Kayne West", age: 16},{name: "Bob Ziroll", age: 100}]))

/*****************************************************************************/
/***Use the built-in .map() method on arrays to solve all of these problems:*/
/*****************************************************************************/

//Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
    return arr.map(num => num + num)
}
console.log("Given array and double the numbers: " + doubleNumbers([2,5,100]))

//Take an array of numbers and make them strings
function stringItUp(arr){
    return arr.map(number => number.toString())
}
console.log("Given array of numbers and make string: " + stringItUp([2,5,10]))

//Capitalize each of an array of names
function capitalizeNames(arr){
    return arr.map(string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())
}
console.log("Given Array of names Capitalize them: " + capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))

//Make an array of strings of the names
function namesOnly(arr){
//     let result = arr.map(function(name){
//         return name.name
//     })
//   return   result
return arr.map(name => name.name )
}
console.log("Take array and make string of names: " + namesOnly([{name: "Angelina Jolie", age: 80},{name: "Eric Jones", age: 2},{name: "Paris Hilton", age: 5},{name: "Kayne West", age: 16},{name: "Bob Ziroll", age: 100}]))

//Make an array of strings of the names saying whether or not they can go to The Matrix
    // function makeStrings(arr){
    //    let result = arr.reduce(function(filterArray, age){
    //         if(age.age >= 18){
    //             filterArray.push(age.name + " " + "can go to The Matrix")
    //         }else{
    //             filterArray.push(age.name + " " + "is under age!!")
    //         }
    //         return filterArray
    //     },[])
    //     return result
    // }
function makeStrings(arr){
    return arr.map(filterArray => filterArray.age >= 18 ? filterArray.name + " can go to The Matrix":filterArray.name + " is under age!!")
}
    
console.log(makeStrings([{name: "Angelina Jolie", age: 80},{name: "Eric Jones", age: 2},{name: "Paris Hilton", age: 5},{name: "Kayne West", age: 16},{name: "Bob Ziroll", age: 100}]))

//Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDom(arr){
    // let result = arr.map(function(addHeader){
    //     return ["<h1>" + addHeader.name + "</h1>"+"<h2>" + addHeader.age + "</h2>"]
    // })
    // return result
    return arr.map(addHeader => ["<h1>" + addHeader.name + "</h1>" + "<h2>" + addHeader.age + "</h2>"])
}
console.log("Given array and put h1 and h2 tags on them: " + readyToPutInTheDom([{name: "Angelina Jolie", age: 80},{name: "Eric Jones", age: 2},{name: "Paris Hilton", age: 5},{name: "Kayne West", age: 16},{name: "Bob Ziroll", age: 100}]))


//Use the built-in .reduce() method on arrays to solve all of these problems:
function total(arr){
    return "Sum of the passed array is " + arr.reduce((final, num)=> final += num)
}
console.log(total([1,2,3]))

//Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr){
    let result = arr.reduce(function(final, num) {
        return  final + "" + num
    })
    return result
}
console.log("Given array and make long sting of numbers: " + stringConcat([1,2,3]))

//Turn an array of voter objects into a count of how many people voted
var voters = [
    {name: 'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
function totalVotes(arr){
    let result = arr.reduce(function(countVote, vote){
        if (vote.voted){
            countVote.didVote++
        }
        return countVote
    },{didVote: 0})
    return result.didVote
}
console.log("From the array the total number of people who voted: " + totalVotes(voters))

//Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
var whishlist = [
    {title: "Tesla Model 5", price: 90000},
    {title: "4 carat diamond ring", price: 45000},
    {title: "Fancy hacky Sack", price: 5},
    {title: "Gold fidget Spinner", price: 2000},
    {title: "a second Tesla Model 5", price: 90000}
];
function shoppingSpree(arr){
    let result =  arr.reduce(function(totalCost, price) {
       totalCost.newSum += price.price
       return totalCost
    },{newSum:0})
    return result.newSum
}
console.log("Whishlist Total cost: $" + shoppingSpree(whishlist));

//Given an array of arrays, flatten them into a single array
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]
function flatten(arr){
    //let result = arr.reduce((final, array) => final.concat(array),[])
    return arr.reduce((final, array) => final.concat(array),[])
}
console.log("Given arrays and flatten into one : " + flatten(arrays));

//Given an array of potential voters, return an object representing the results of the vote
//Include how many of the potential voters were in the ages 18-25, how many from 26-35, 
//how many from 36-55, and how many of each of those age ranges actually voted. 
//The resulting object containing this data should have 6 properties. 
//****  NOTE: Array already in above that I will be using */
function voterResults (arr){
    let result = arr.reduce(function(final,voterAge){
        if (voterAge.age >= 18 && voterAge.age <= 25){
            final.youth++
            if (voterAge.voted){
                final.youngVotes++
            }
        }else if (voterAge.age >= 26 && voterAge.age <= 35){
            final.mids++
            if (voterAge.voted){
                final.midVotes++
            }
        }else if (voterAge.age >= 36 && voterAge.age <= 55){
            final.olds++
            if (voterAge.voted){
                final.oldVotes++
            }
        }
        return final
    },{youngVotes:0, youth:0, midVotes:0, mids:0, oldVotes:0, olds:0})
    
    return  result
}
console.log( voterResults(voters));

/********************************************************************************* */
/****Use the built-in .sort() method on arrays to solve all of these problems: *** */
/********************************************************************************* */
//Sort an array from smallest number to largest
function leastToGreatest(arr){
    return arr.sort((a, b) => a-b )
}
console.log(" Given array of numbers and sort least to greatest: " + leastToGreatest([1,3,5,2,90,20]))

//Sort an array from largest number to smallest
function greatestToLeast(arr){
    return arr.sort((a, b) => b - a )
}
console.log(" Given array of numbers and sort greatest to least : " + greatestToLeast([1,3,5,2,90,20]))

//Sort an array from shortest string to longest
function lengthSort(arr){
    return arr.sort((a, b) => a.length - b.length )
}
console.log("Given array of string sort least amount of char to greatest: " +lengthSort(["dog", "wolf", "by", "family", "eaten"]))

//Sort an array alphabetically
function alphabetical(arr){
    return arr.sort()
}
console.log("Given string array and sort alphabeticaly: " + alphabetical(["dog", "wolf", "by", "family", "eaten"]))

//Sort the objects in the array by age
function byAge(arr){
return  arr.sort((a, b) => a.age - b.age)
}
console.log( byAge([{name: "Quiet Samurai", age: 22},{name: "Arrogant Ambassador", age: 100}, {name: "Misunderstood Observer", age: 2}, {name: "Unlucky Swami", age: 77}]))