//Loop through the following array and count how many "computers" there are. Log the final count:
var officeItemsArray = [
    "stapler",
    "monitor",
    "computer",
    "desk",
    "lamp",
    "computer",
    "lamp",
    "stapler",
    "computer",
    "computer"

];
var passWordItem = "computer";


function computerCount (officeItems , passWord){
    var passWordCount = 0;
    for (i=0 ; i < officeItems.length ; ++i  ){
        if ( officeItems[i] === passWord){
            passWordCount += 1;
        }
        else {
        console.log(officeItems[i] + " is not the same as " + passWord );  
        }
    }  // end for loop
    console.log("Checked " + passWordItem + " and there are " + passWordCount + " avalible within the array" );
};

computerCount(officeItemsArray , passWordItem);

// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"

    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },
    {
        name: "Sam",
        age: 30,
        gender: "male"  
    },
    {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];

function oldEnoughCheck (people){
    for (i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        //console.log(peopleWhoWantToSeeMadMaxFuryRoad[i]);
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            //console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is " + peopleWhoWantToSeeMadMaxFuryRoad[i].age + " and is old enough to see movie"); 
            if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
                console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is " + peopleWhoWantToSeeMadMaxFuryRoad[i].age + " and She is old enough to see movie"); 
            }
            else{
                console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is " + peopleWhoWantToSeeMadMaxFuryRoad[i].age + " and He is old enough to see movie"); 
            }
            
        }
        else{
           // console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is " + peopleWhoWantToSeeMadMaxFuryRoad[i].age + " and is NOT old enough to see movie");
           if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
               console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is only " + peopleWhoWantToSeeMadMaxFuryRoad[i].age + " dont ler HER in to see movie");
           }
           else{
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is only " + peopleWhoWantToSeeMadMaxFuryRoad[i].age + " dont ler HIM in to see movie");
           }
        }   
        }//end loop
    };

oldEnoughCheck(peopleWhoWantToSeeMadMaxFuryRoad);

//Create a for loop that iterates through 101 numbers (from 0 - 100). If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".
var numberItertation = 100
function oddOrEven (numberToCheck){
for(i=0; i <numberToCheck ; i++){
    if ( i % 2 === 0){
        console.log( i + " is Even");
    }
    else{
        console.log( i + " is Odd");
    }
}//end loop
};
oddOrEven(numberItertation);

//extra credit
var sampleArrays = [
    [ 2, 5, 435, 4, 3 ],
    [ 1, 1, 1, 1, 3 ],
    [ 9, 3, 4, 2]
]
function isTheLightOn ( numberOfToggles){
    for (i=0; i < numberOfToggles.length ; i++){
        var countOfToggles = 0;
        for( x=0 ; x < numberOfToggles[i].length; x++){
            countOfToggles =countOfToggles + numberOfToggles[i][x];
        };//end loop
        if(countOfToggles % 2 === 0){
            console.log(numberOfToggles[i] + " The light is OFF");
        }else{
            console.log(numberOfToggles[i] + " The light is ON");
        }
    }; //endloop
};
isTheLightOn(sampleArrays);