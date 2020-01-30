/******************************************************************************************************** */
/*********FSW105 Week 7 Capstone Project: Build a Role Playing Game in Node with readline-sync *********** /
/******************************************************************************************************** */
const readline = require("readline-sync");
const name = readline.question("What is your name? ").toUpperCase();
console.log("/////////////////////////////////////////////////////////////////////////////////")
console.log("/////////    " + name + " WELCOME!!!  You are NOW in THE LAND!!  ///////////////////")
console.log("///////////         ... buckle up buttercup...                       ////////////")
console.log("//////          this is going to be FUN!!!!                          ////////////")
console.log("/////////////////////////////////////////////////////////////////////////////////")
const lootDrop = [" Piece of leather ", " Hunk of Cheese " , " Broken Key ", " Something shiny ", "Dragon Egg", "Broken Sword"]
let userLoot =[]
let userHP = 100

//****************************************************************************************** */
//                       Main List of User Options
//****************************************************************************************** */
function theList(num){
    console.log("  ")
    console.log("********* YOUR OPTIONS!!!! ***************")
    console.log("**                                      **")
    console.log("**     w ........to Walk                **")
    console.log("**     p ....to Show Inventory          **")
    console.log("**     q ........to Quit                **")
    console.log("**                                      **")
    console.log("******************************************")
    console.log("  ")
    let theOption = readline.question("What would you like to do ?: ").toLocaleLowerCase();
    if (theOption === "w"){
        return theOption
    }else if(theOption === "p"){
        return theOption
    }else if (theOption === "q"){
        userQuit()
    }else{
        console.log("SORRY!! " + name + " I dont understand that input")
        theList()
    }
    
}
//****************************************************************************************** */
//                User Options ... Attack or Runaway
//****************************************************************************************** */
function userOptions(){
    console.log("  ")
    console.log("********* WHAT TO DO!! *************")
    console.log("**                                **")
    console.log("**      a .... to attack          **")
    console.log("**                                **")
    console.log("**      r .... to run away        **")
    console.log("**                                **")
    console.log("************************************")
    console.log("  ")
    let userAction = readline.question( name + " What ACTION do you take? -->  ").toLowerCase()
    if (userAction === "a"){
        return userAction
    }else if(userAction === "r"){
        return userAction
    }else{
        console.log("  ")
        console.log("SORRY!! " + name + " I dont understand that input")
        userOptions()
    }
}
//****************************************************************************************** */
//                                      Monster area
//****************************************************************************************** */
function Monsters (name, type, hp){
    this.name = name;
    this.type = type;
    this.hp = hp;
};

Monsters.prototype.printStats = function(){
    console.log("                           Name : " + this.name);
    console.log("                         MAX HP : " + this.hp);
    console.log("                           Type : " + this.type);
    console.log(" ")
}
const monster0 = new Monsters("Goblin" , "Caster", 35);
const monster1 = new Monsters("Skeeling" , "Melee" , 50);
const monster2 = new Monsters("BugBear" , "Melee" , 55);
const monster3 = new Monsters("Decamer Knight", "Hybrid", 60);
// Find monster function
function randomMonster(){
    let numMonster = (Math.floor(Math.random()* 4))
    if (numMonster === 1){
        return monster1
    }else if (numMonster === 2){
        return monster2
    }else if (numMonster === 3){
        return monster3
    }else{
        return monster0
    }
}
// END of Monsters
//****************************************************************************************** */
//                                      User wants to Quit
//****************************************************************************************** */
function userQuit(){
    console.log(name + "  Thanks for playing.")
    userHP = 0
    // option to put logic to display users Loot , HP and how many monsters slain (maybe sorted )
}
//****************************************************************************************** */
//                                      Display User info
//****************************************************************************************** */
function userInventory(){
    console.log(name + "  Your Inventory:")
    for (i=0; i < userLoot.length ; i++){
        console.log(userLoot[i])
    }
}
//****************************************************************************************** */
//                          MAIN function of the Game
//****************************************************************************************** */
function theGame(){
    //const userAP = Math.floor(Math.random()* (6 - 2 +1 ) +7)
    let currentMonster = randomMonster()
    let monsterHP = currentMonster.hp
   
    const userOption = theList()
    if (userOption === "q" ){
        console.log("quit")
        userQuit()
    }else if (userOption === "p"){
        // call function
        userInventory()
    }else if (userOption ==="w" ){
        let odds = Math.random()
        if (odds <= .3){
            console.log("walking...")
           
        }else if (odds >= .3){
            console.log("  ")
            console.log( name + " you are faced with a ")
            currentMonster.printStats()
           actionLoop:
            while (monsterHP > 0 && userHP > 0){ //both alive
                let userPicked = userOptions(); // returns a attack  or r run
                let monsterAP = Math.floor(Math.random()* 20)+1
                let userAP = Math.floor(Math.random()* 25) +1
                switch (userPicked){
                    case "r":
                        let userRun = Math.random()
                        if (userRun < .5){
                            console.log("You try to run away but ... " + currentMonster.name + " attacks you for " + monsterAP)
                            continue actionLoop
                        }else{
                            console.log( name + " You successfully ran away")
                            break actionLoop
                        }
                    case "a":
                        currentMonster.hp -= userAP
                        console.log("")
                        console.log("--->" + name + " You landed a hit for " + userAP )
                        console.log("--->" +currentMonster.name + " reamining HP: " + currentMonster.hp)
                        console.log(" ")
                        userHP -= monsterAP
                        console.log(" ")
                        console.log("--->" +currentMonster.name + " hit you for " + monsterAP )
                        console.log("--->" + name + " Your current HP:  " + userHP)
                        console.log(" ")
                        console.log(" ")
                        if  (userHP <= 0){
                            if(currentMonster.hp <= 0){
                                console.log(" ")
                                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                                console.log(name + " Sorry to tell you but  " + currentMonster.name + " killed you ")
                                console.log("BUT.... GOOD NEWS!!! ")
                                console.log("                                           @@@@@@@@@@@@@@                    !!!!!!!!!!!!!!!!!!!!!")
                                console.log( "You also killed ... " + currentMonster.name + "The God's have resurrected becuase of your bravery")
                                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                                break actionLoop
                            }else{
                                console.log(" ")
                                console.log(name + " Sorry to tell you but  " + currentMonster.name + " killed you ")
                                console.log(" Good try!!")
                                console.log(" ")
                                userQuit()
                            }
                        }else if (currentMonster.hp <= 0 ){
                            let drop =  lootDrop[Math.floor(Math.random()* lootDrop.length)];
                            console.log(" Nice job!!!")
                            console.log(" You have slayen " + currentMonster.name)
                            console.log(" " )
                            console.log("You search the " + currentMonster.name + " body and find...")
                            console.log( "......." + drop + " and is now in your inventory") 
                            console.log(" ")
                            userLoot.push(drop)
                            break actionLoop
                        }

                }
            }
        }// w Odds else if end
    }//userOption else if end

}
while (userHP > 0){
    healUser =function(){
        userHP = 100
    }
    healUser()
    theGame()
}