/****************FSW105 Week 5 pNp ES6 Part 2 ************ */

const name = "John";
const age = 101;

function runForLoop (pets){
    let petObjects = [] ;
    for (let i = 0; i < pets.length; i++){
        let pet = {type: pets[i]}
        let name;
        if (pets[i] === "cat"){
           name = "fluffy"
        }else{
        name = "spot"
        }
        console.log("pet Name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}
runForLoop(["cat", "dog"])

// rewrite using the arrow function
const carrots = ["bright orange", "ripe", "rotten"]
function mapVegetables(arr){
    return arr.map((carrot) => ({type: "carrot", name:carrot}))
    // return arr.map(function(carrot) {
    //     return { type: "carrot", name: carrot}
    // })
}
console.log(mapVegetables(carrots))

const people = [
    { name: "Princess Peach", friendly: false},
    { name: "Luigi", friendly: true},
    { name: "Mario", friendly: true},
    { name: "Bowser", friendly: false}
]
function filterForFriendly(arr){
    return arr.filter((person) => person.friendly)
    // return arr.filter(function(person){
    //     return person.friendly
    // })
}
console.log(filterForFriendly(people))

var a = 5
var b = 6
doMathSum = (a,b) => a + b;
// function doMathSum(a,b){
//     return a + b
// }
console.log(doMathSum(a,b))
const produceProduct = (a,b) => a*b;
// function(a,b){
//     return a * b
// }
console.log(produceProduct(a,b))

function printString (firstName = 'Jane', lastName = 'Doe', age = 100){
    //return "Hi " + firstName + " " + lastName + " how does it fell to be " + age
    // NOTE: Template literals need the back tick `
    return `Hi ${firstName} ${lastName} how does it feel to be ${age}`
}
console.log(printString("Dean"))

const animals = [
    {type: "dog", name: "theodore"},
    {type: "cat", name: "whiskers"},
    {type: "pig", name: "piglette"},
    {type: "dog", name: "sparky"}
]
function filterForDogs(arr){
    return arr.filter(animal => animal.type === "dog" ? true : false)
    // return arr.filter(animal => {
    //     if (animal.type === "dog"){
    //         return true
    //     }else{
    //         return false
    //     }
    // })
}
//filterForDogs = (animal) => animal.type === "dog" ? true | false
console.log(filterForDogs(animals))

function tempLiteral (location ="Hawaii", name = "Janice"){
    return `Hi ${name} !
    Welcome to ${location}.
    I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
}
console.log(tempLiteral())