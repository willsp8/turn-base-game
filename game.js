var stop = false;
var frameCount = 0;
//var $results = $("#results");
var fps, fpsInterval, startTime, now, then, elapsed;


// where I found this method 
// link: https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animateBattle2()
}


// okay we need to make an option menu 

// so we need attack 


// first we need to create an array of all of our enemies and players 

var enetityArray = []
var startBattle = true



// attacking skills 
const normalAttack = {name: 'normal Attack', damage: 40, regenHealth: 0,  focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'fire', forAll: false, healing: false, sleep: false, confused: false, clone: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false}
const normalAttackForAll = {name: 'normal Attack all', damage: 40, regenHealth: 30, focusCost: 30, staminaCost: 0,  healConfused: false, attackConfused: true, element: 'fire', forAll: true, healing: false, sleep: false, confused: false, clone: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false}
const waterAttack = {name: 'water Attack', damage: 40, regenHealth: 0, focusCost: 30, staminaCost: 30, healConfused: false, attackConfused: true, element: 'water', forAll: false, healing: false, sleep: false, confused: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false}
const waterAttackForAll = {name: 'water Attack all', damage: 40, regenHealth: 0, focusCost: 30, staminaCost: 0, healConfused: false, attackConfused: true, element: 'water', forAll: true, healing: false, sleep: false, confused: false, clone: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false}
const sleepAttack = {name: 'sleep Attack', damage: 40, regenHealth: 0, focusCost: 30, staminaCost: 30, healConfused: false, attackConfused: true, element: 'sleep', forAll: false, healing: false, sleep: true, confused: false, clone: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false}
const sleepAttackForAll = {name: 'Country Sleep', damage: 70, regenHealth: 30, focusCost: 30, staminaCost: 0, healConfused: false, attackConfused: true, element: 'sleep', forAll: true, healing: false, sleep: true, confused: false, clone: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false}
const confusedAttack = {name: 'confused Attack', damage: 40, regenHealth: 0, focusCost: 30, staminaCost: 0, healConfused: false, attackConfused: true, element: 'confused', forAll: false, healing: false, sleep: false, confused: true, clone: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false}
const confusedAttackForAll = {name: 'confused Attack all', damage: 40, regenHealth: 0, focusCost: 30, staminaCost: 0, healConfused: false, attackConfused: true, element: 'confused', forAll: true, healing: false, sleep: false, confused: true, clone: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false}
const cloneAttack = {name: 'Project', damage: 0, regenHealth: 0, focusCost: 30, staminaCost: 0, healConfused: false, attackConfused: false, element: 'none', forAll: true, healing: false, sleep: false, confused: false, clone: true, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false}
const divideByZeroAttack = {name: 'Divide By Zero', damage: 100000000000000, regenHealth: 0, focusCost: 30, staminaCost: 0, healConfused: false, attackConfused: false, element: 'none', forAll: false, healing: false, sleep: false, confused: false, clone: true, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false}



// healing skills 
const normalHeal = {name: 'normal heal', damage: 40, regenHealth: 30, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: false, healing: true, sleep: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false}
const normalhealForAll = {name: 'normal heal all', damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false}
const cureSleepHeal = {name: 'cure sleep', damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: false, healing: true, sleep: false, cureConfusion: false, cureSleep: true, cureKnockOut: false, redirect: false, revive: false}
const cureSleepForAll = {name: 'cure sleep for all', damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0,healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, cureConfusion: false, cureSleep: true, cureKnockOut: false, redirect: false, revive: false}
const cureConfusionHeal = {name: 'cure confusion', damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: false, healing: true, sleep: false, cureConfusion: true, cureSleep: false, cureKnockOut: false, redirect: false, revive: false}
const cureConfusionForAll = {name: 'cure confusion for all', damage: 40, regenHealth: 0, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, cureConfusion: true, cureSleep: false, cureKnockOut: false, redirect: false, revive: false}
const revive = {name: 'Revive', damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: false, healing: true, sleep: false, cureConfusion: true, cureSleep: true, cureKnockOut: true, redirect: false, revive: true}
const reviveAll = {name: 'Revive All', damage: 40, regenHealth: 0, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, cureConfusion: true, cureSleep: true, cureKnockOut: true, redirect: false, revive: true}

// healing items 
const normalHealItem = {name: 'normal heal', amount: 1, damage: 40, regenHealth: 30, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: false, healing: true, sleep: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false}
const normalhealForAllItem = {name: 'normal heal all', amount: 10,damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false}
const cureSleepHealItem = {name: 'cure sleep', amount: 10, damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: false, healing: true, sleep: false, cureConfusion: false, cureSleep: true, cureKnockOut: false, redirect: false, revive: false}
const cureSleepForAllItem = {name: 'cure sleep for all', amount: 10, damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0,healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, cureConfusion: false, cureSleep: true, cureKnockOut: false, redirect: false, revive: false}
const cureConfusionHealItem = {name: 'cure confusion', amount: 10, damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: false, healing: true, sleep: false, cureConfusion: true, cureSleep: false, cureKnockOut: false, redirect: false, revive: false}
const cureConfusionForAllItem = {name: 'cure confusion for all', amount: 10, damage: 40, regenHealth: 0, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, cureConfusion: true, cureSleep: false, cureKnockOut: false, redirect: false, revive: false}
const reviveItem = {name: 'Revive', amount: 10, damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: false, healing: true, sleep: false, cureConfusion: true, cureSleep: true, cureKnockOut: true, redirect: false, revive: true}
const reviveAllItem = {name: 'Revive All', amount: 10,damage: 40, regenHealth: 30, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, cureConfusion: true, cureSleep: true, cureKnockOut: true, redirect: false, revive: true}

const attackClass1 = [normalAttack, normalAttackForAll, normalHeal, normalhealForAll, sleepAttack, sleepAttackForAll, confusedAttack, confusedAttackForAll, waterAttack, waterAttackForAll, cloneAttack, divideByZeroAttack]
const attackClass2 = [normalAttack, normalAttackForAll, normalHeal, normalhealForAll, sleepAttack, sleepAttackForAll, confusedAttack, cureSleepHeal, cureConfusionForAll, cureSleepForAll, cureConfusionHeal, revive, reviveAll ]
const arrayAttacks = [normalAttack, normalAttackForAll, normalHeal, normalhealForAll, sleepAttack, sleepAttackForAll, confusedAttack, confusedAttackForAll, waterAttack, waterAttackForAll, cloneAttack, divideByZeroAttack, sleepAttackForAll, confusedAttack, cureSleepHeal, cureConfusionForAll, cureSleepForAll, cureConfusionHeal, revive, reviveAll]
const inventory = [normalHealItem, normalhealForAllItem, cureSleepHealItem, cureConfusionForAllItem, cureConfusionHealItem, cureConfusionForAllItem, reviveItem, reviveAllItem]
const arrayInvtory = [normalHealItem, normalhealForAllItem, cureSleepHealItem, cureConfusionForAllItem, cureConfusionHealItem, cureConfusionForAllItem, reviveItem, reviveAllItem]

const nullClass = [ '']
const nullClass2 = ['fire', 'water']

const weaknessesClass = ['fire', 'earth']
const weaknessesClass2 = ['earth', 'water']

const knockedOutCounter = 1
const confusedCounter = 3
const sleepCounter = 4

const knockedOutCounterPlayer = 1
const confusedCounterPlayer = 3
const sleepCounterPlayer = 4

var playerOne = {
    name: 'Player One',    
    health: 49, 
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    focus: 100,
    maxFocus: 100,
    isPlayAble: true,
    knockedOut: false,
    isSleeping: false,
    nullSleeping: false,
    redirect: false,
    weakness: weaknessesClass,
    attackClass: attackClass1,
    knockedOutCount: 0,
    confusedCount: 0,
    sleepCount: 0,
    confused: false,
    nullify: nullClass2,
    passedTurn: false, 
    isClone: false,
    spawnClone: false,
    cloningAbility: true,
    dead: true,
    nameId: "playerOneName",
    nameStatus: "#playerOneName",
    healthBarId: "playerOneHealth",
    healthBar: "#playerOneHealth",
    staminaBarId: "playerOneStamina",
    staminaBar: "#playerOneStamina",
    focusBarId: "playerOneFocus",
    focusBar: "#playerOneFocus"

}

var playertwo = {
    name: 'Player two',    
    health: 30, 
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    focus: 100,
    maxFocus: 100,
    isPlayAble: true,
    knockedOut: false,
    isSleeping: false,
    nullSleeping: false,
    redirect: false,
    dead: false,
    weakness: weaknessesClass,
    attackClass: attackClass2,
    nameId: "playerTwoName",
    nameStatus: "#playerTwoName",
    healthBarId: "playerTwoHealth",
    healthBar: "#playerTwoHealth",
    staminaBarId: "playerTwoStamina",
    staminaBar: "#playerTwoStamina",
    focusBarId: "playerTwoFocus",
    focusBar: "#playerTwoFocus",
    knockedOutCount: 0,
    confusedCount: 0,
    sleepCount: 0,
    confused: false,
    nullify: nullClass2,
    passedTurn: false, 
    isClone: false,
    spawnClone: false,
    cloningAbility: false,


}

var playerThree = {
    name: 'Player Three',    
    health: 70, 
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    focus: 100,
    maxFocus: 100,
    isPlayAble: true,
    knockedOut: false,
    isSleeping: false,
    nullSleeping: false,
    redirect: false,
    dead: true,
    weakness: weaknessesClass,
    attackClass: attackClass2,
    nameId: "player3Name",
    nameStatus: "#player3Name",
    healthBarId: "player3Health",
    healthBar: "#player3Health",
    staminaBarId: "player3Stamina",
    staminaBar: "#player3Stamina",
    focusBarId: "player3Focus",
    focusBar: "#player3Focus",
    knockedOutCount: 0,
    confusedCount: 0,
    sleepCount: 0,
    confused: false,
    nullify: nullClass2,
    passedTurn: false, 
    isClone: false,
    spawnClone: false,
    cloningAbility: false,


}
var enemyOne = {
    name: 'Enemy One',
    health: 100,
    maxHealth: 100,
    isPlayAble: false,
    knockedOut: false,
    isSleeping: false,
    nullSleeping: false,
    redirect: false,
    weakness: weaknessesClass,
    attackClass: attackClass1,
    nameId: "Enemey1Name",
    nameStatus: "#Enemey1Name",
    healthBarId: 'enemy1Health',
    healthBar: '#enemy1Health',
    sleepBarId:"Enemey1Sleep",
    sleepBar:"#Enemey1Sleep",
    confusedBarId:"Enemey1Confused",
    confusedBar:"#Enemey1Confused",
    knockedOutBarId:"Enemey1Out",
    knockedOutBar:"#Enemey1Out",
    knockedOutCount: 0,
    confusedCount: 0,
    sleepCount: 0,
    confused: false,
    nullify: nullClass2,
    passedTurn: false, 
    isClone: false,
    spawnClone: false,
    cloningAbility: false,
    dead: false,

}

var enemy2 = {
    name: 'Enemy Two',
    health: 100,
    maxHealth: 100,
    isPlayAble: false,
    knockedOut: false,
    isSleeping: false,
    nullSleeping: false,
    redirect: false,
    weakness: weaknessesClass,
    attackClass: attackClass1,
    nameId: "Enemey2Name",
    nameStatus: "#Enemey2Name",
    healthBarId: 'enemy2Health',
    healthBar: '#enemy2Health',
    sleepBarId:"Enemey2Sleep",
    sleepBar:"#Enemey2Sleep",
    confusedBarId:"Enemey2Confused",
    confusedBar:"#Enemey2Confused",
    knockedOutBarId:"Enemey2Out",
    knockedOutBar:"#Enemey2Out",
    knockedOutCount: 0,
    confusedCount: 0,
    sleepCount: 0,
    confused: false,
    nullify: nullClass,
    passedTurn: false, 
    isClone: false,
    spawnClone: false,
    cloningAbility: false,
    dead: false,

}

var enemy3 = {
    name: 'Enemy Three',
    health: 100,
    maxHealth: 100,
    isPlayAble: false,
    knockedOut: false,
    isSleeping: false,
    nullSleeping: false,
    redirect: false,
    weakness: weaknessesClass2,
    attackClass: attackClass1,
    nameId: "Enemey3Name",
    nameStatus: "#Enemey3Name",
    healthBarId: 'enemy3Health',
    healthBar: '#enemy3Health',
    sleepBarId:"Enemey3Sleep",
    sleepBar:"#Enemey3Sleep",
    confusedBarId:"Enemey3Confused",
    confusedBar:"#Enemey3Confused",
    knockedOutBarId:"Enemey3Out",
    knockedOutBar:"#Enemey3Out",
    knockedOutCount: 0,
    confusedCount: 0,
    sleepCount: 0,
    confused: false,
    nullify: nullClass,
    passedTurn: false, 
    isClone: false,
    spawnClone: false,
    cloningAbility: false,
    dead: false,

}

var enemy4 = {
    name: 'Enemy Four',
    health: 100,
    maxHealth: 100,
    isPlayAble: false,
    knockedOut: false,
    isSleeping: false,
    nullSleeping: false,
    redirect: false,
    weakness: weaknessesClass2,
    attackClass: attackClass1,
    nameId: "Enemey4Name",
    nameStatus: "#Enemey4Name",
    healthBarId: 'enemy4Health',
    healthBar: '#enemy4Health',
    sleepBarId:"Enemey4Sleep",
    sleepBar:"#Enemey4Sleep",
    confusedBarId:"Enemey4Confused",
    confusedBar:"#Enemey4Confused",
    knockedOutBarId:"Enemey4Out",
    knockedOutBar:"#Enemey4Out",
    knockedOutCount: 0,
    confusedCount: 0,
    sleepCount: 0,
    confused: false,
    nullify: nullClass,
    passedTurn: false, 
    isClone: false,
    spawnClone: false,
    cloningAbility: false,
    dead: false,

}

// clones 
var cloneOne = {
    name: 'clone 1',    
    health: 49, 
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    focus: 100,
    maxFocus: 100,
    isPlayAble: true,
    knockedOut: false,
    isSleeping: false,
    nullSleeping: false,
    redirect: false,
    weakness: weaknessesClass,
    attackClass: attackClass1,

    nameId: "cloneOneName",
    nameStatus: "#cloneOneName",
    healthBarId: "cloneOneHealth",
    healthBar: "#cloneOneHealth",
    staminaBarId: "cloneOneStamina",
    staminaBar: "#cloneOneStamina",
    focusBarId: "cloneOneFocus",
    focusBar: "#cloneOneFocus",
    
    knockedOutCount: 0,
    confusedCount: 0,
    sleepCount: 0,
    confused: false,
    nullify: nullClass2,
    passedTurn: false, 
    isClone: true,
    spawnClone: false,
    cloningAbility: false,
    dead: false,

}

var cloneTwo = {
    name: 'Clone 2',    
    health: 49, 
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    focus: 100,
    maxFocus: 100,
    isPlayAble: true,
    knockedOut: false,
    isSleeping: false,
    nullSleeping: false,
    redirect: false,
    weakness: weaknessesClass,
    attackClass: attackClass1,
    knockedOutCount: 0,
    confusedCount: 0,
    sleepCount: 0,
    confused: false,
    nullify: nullClass2,
    passedTurn: false, 
    isClone: true,
    spawnClone: false,
    cloningAbility: false,
    dead: false,
    nameId: "cloneTwoName",
    nameStatus: "#cloneTwoName",
    healthBarId: "cloneTwoHealth",
    healthBar: "#cloneTwoHealth",
    staminaBarId: "cloneTwoStamina",
    staminaBar: "#cloneTwoStamina",
    focusBarId: "cloneTwoFocus",
    focusBar: "#cloneTwoFocus",

}

var cloneThree = {
    name: 'Clone 3',    
    health: 49, 
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    focus: 100,
    maxFocus: 100,
    isPlayAble: true,
    knockedOut: false,
    isSleeping: false,
    nullSleeping: false,
    redirect: false,
    dead: false,
    weakness: weaknessesClass,
    attackClass: attackClass1,
    nameId: "playerOneName",
    nameStatus: "#playerOneName",
    healthBarId: "playerOneHealth",
    healthBar: "#playerOneHealth",
    staminaBarId: "playerOneStamina",
    staminaBar: "#playerOneStamina",
    focusBarId: "playerOneFocus",
    focusBar: "#playerOneFocus",
    knockedOutCount: 0,
    confusedCount: 0,
    sleepCount: 0,
    confused: false,
    nullify: nullClass2,
    passedTurn: false, 
    isClone: true,
    spawnClone: false,
    cloningAbility: false,

}


var cloneArray = [cloneOne, cloneTwo, cloneThree]
var toggleNextTurn = false

let selectAttack = false;
let selectPassTurn = false;
let selectHealing = false;
let selectingItem = false;



function animateBattle2(whoGoesFirst){
    const animateBattleId =  window.requestAnimationFrame(animateBattle2)
   //    console.log(animateBattleId)

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);

        // Put your drawing code here
        // okay put everything in here

        // ----- start battle --------
        if(startBattle){
            
            if(whoGoesFirst){
                enetityArray.push(playerOne)
                enetityArray.push(playertwo)
                enetityArray.push(playerThree)
                enetityArray.push(enemyOne)
                enetityArray.push(enemy2) 
                enetityArray.push(enemy3) 
                enetityArray.push(enemy4) 
            }else{
                enetityArray.push(enemyOne)
                enetityArray.push(playerOne)
            }

            // creating interface 
            createEnemyInterface(enetityArray)
            createPlayerInterface(enetityArray)
            startBattle = false
        }
        
        
        entity = enetityArray[0]
        if(startBattle == false){
            console.log(entity.dead)
            Object.values(enetityArray).forEach((player, index) =>{
                gsap.to(`${player.healthBar}`, {
                    width: player.health + '%'
                })
            })
            
            // console.log(enetityArray)
            gsap.to(`${entity.nameStatus}`, { 
                rotation: 360,
                
                
                // special properties
                 // how long the animation lasts
                repeat: 1, // the number of repeats - this will play 3 times
                yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
              })

            // enemy status 
            enetityArray.forEach((et) => {
                if(et.health <= 0 && et.isPlayAble == false){
                    document.getElementById(et.nameId).style.display = 'none'
                    document.getElementById(et.healthBarId).style.display = 'none'
                    document.getElementById(et.confusedBarId).style.display = 'none'
                    document.getElementById(et.sleepBarId).style.display = 'none'

                }
                
                if(et.knockedOut == true && et.isPlayAble == false){
                    document.getElementById(et.knockedOutBarId).style.display = 'grid'
                }else if(et.knockedOut == false && et.isPlayAble == false){
                    document.getElementById(et.knockedOutBarId).style.display = 'none'
                }

                if(et.confused == true && et.isPlayAble == false){
                    document.getElementById(et.confusedBarId).style.display = 'grid'
                }else if(et.confused == false && et.isPlayAble == false){
                    document.getElementById(et.confusedBarId).style.display = 'none'
                }
                
    
                if(et.isSleeping == true && et.isPlayAble == false){
                    console.log(et.sleepBar)
                    document.getElementById(et.sleepBarId).style.display = 'grid'
                }else if(et.isSleeping == false && et.isPlayAble == false){
                    document.getElementById(et.sleepBarId).style.display = 'none'
                }
            })
            
            
        }

        
        if(toggleNextTurn == false){
            if(entity.isPlayAble && entity.passedTurn == false){
                
                // then let player play 
                //  console.log('players turn') 

                if(entity.confusedCount == confusedCounter){
                    entity.confused = false
                    entity.confusedCount = 0 
                }

                if(entity.knockedOutCount == knockedOutCounter){
                    entity.knockedOut = false
                    entity.knockedOutCount = 0 
                }

                if(entity.sleepCount == sleepCounter){
                    entity.isSleeping = false
                    entity.sleepCounter = 0 
                }


                if(entity.confused == true && entity.confusedCount < confusedCounter){
                    // confused
                    console.log("heey   ")
                    document.getElementById('attackButton').disabled = true
                    document.getElementById('passTurnButton').disabled = true
                    document.getElementById('healButton').disabled = true
                    document.getElementById('nexTurnButton').addEventListener('click', function() {
                        document.getElementById('nexTurnButton').disabled = true
                            // if clicked disable this button and open a new menu 
                    });
    
                    if(document.getElementById('nexTurnButton').disabled == true){
                        console.log("enemy is confused " + entity.name + ":" + entity.confused + " " + entity.confusedCount)
                        entity.confusedCount += 1
                        nextTurn(enetityArray)
                        document.getElementById('nexTurnButton').disabled = false
                        
                    }  
              
                } else if(entity.knockedOut == true && entity.knockedOutCount < knockedOutCounter){
                    // knocked out 
                    
                        console.log("enemy is knockout " + entity.name + ":" + entity.knockedOut + " " + entity.knockedOutCount)
                        entity.knockedOutCount += 1
                        nextTurn(enetityArray)
                    
                    // sleep 
                }else if(entity.isSleeping == true && entity.sleepCount < sleepCounter){
                    // sleep 
                    
                        console.log("enemy is sleep " + entity.name + ":" + entity.isSleeping + " " + entity.sleepCount)
                        entity.sleepCount += 1
                        nextTurn(enetityArray)
                    
                }else{
                    document.getElementById('attackButton').disabled = false
                    document.getElementById('passTurnButton').disabled = false
                    document.getElementById('healButton').disabled = false
                    
                    /// ------ player selecting attack -----
                    document.getElementById('attackButton').addEventListener('click', () =>{
                        selectAttack = true
                    })
                    if(selectAttack == true){
                        playerAttack(entity)
                        console.log("bob")
                    }
                        
                    /// player selecting healing option 
                    document.getElementById('healButton').addEventListener('click', () =>{
                        selectHealing = true
                            // if clicked disable this button and open a new menu 
                    })

                    if(selectHealing == true){
                        playerHealing(entity)
                    }

                    document.getElementById('itemButton').addEventListener('click', () =>{
                        console.log("clickedeeee")
                        selectingItem = true
                        
                        console.log("oa")
                            // if clicked disable this button and open a new menu 
                    })

                    if(selectingItem == true){
                        playerItem(entity)
                    }

                    // ----------  PassTurn ------------
                    document.getElementById('passTurnButton').addEventListener('click', () =>{
                        selectPassTurn = true
                    })

                    if(selectPassTurn){
                        passTurn(player, enetityArray)
                    }

                    if(document.getElementById('passTurnButton').disabled == true){


                        nextTurn(enetityArray)
                        document.getElementById('passTurnButton').disabled = false
                        console.log("bob")
                    }

                    /// ----------- next Turn 
                    document.getElementById('nexTurnButton').addEventListener('click', function() {
                        document.getElementById('nexTurnButton').disabled = true
                            // if clicked disable this button and open a new menu 
                    });

                    if(document.getElementById('nexTurnButton').disabled == true){
                        nextTurn(enetityArray)
                        document.getElementById('nexTurnButton').disabled = false
                        console.log("bob")
                    }
                }
                    
            }else if(entity.isPlayAble && entity.passedTurn == true){


                

                document.getElementById('attackButton').disabled = false
                
                
                /// ------ player selecting attack -----
                document.getElementById('attackButton').addEventListener('click', () =>{
                    selectAttack = true
                })
                if(selectAttack == true){
                    playerAttack(entity)
                    console.log("bob")
                }
                    
                /// player selecting healing option 
                document.getElementById('healButton').addEventListener('click', () =>{
                    selectHealing = true
                        // if clicked disable this button and open a new menu 
                })

                if(selectHealing == true){
                    playerHealing(entity)
                }

                document.getElementById('itemButton').addEventListener('click', () =>{
                    console.log("clickedeeee")
                    playerItem(entity)
                    console.log("oa")
                        // if clicked disable this button and open a new menu 
                })


                // ----------  PassTurn ------------
                document.getElementById('passTurnButton').disabled = true
                

                /// ----------- next Turn 
                document.getElementById('nexTurnButton').addEventListener('click', function() {
                    document.getElementById('nexTurnButton').disabled = true
                        // if clicked disable this button and open a new menu 
                });

                if(document.getElementById('nexTurnButton').disabled == true){
                    nextTurn(enetityArray)
                    document.getElementById('nexTurnButton').disabled = false
                    console.log("bob")
                }

                

            }else{
                selectAttack = false

                console.log("enemy is knockout " + entity.name + ":" + entity.knockedOut + " " + entity.knockedOutCount)

                // we need to reset the status of the enemy 
                if(entity.confusedCount == confusedCounter){
                    entity.confused = false
                    entity.confusedCount = 0 
                }

                if(entity.knockedOutCount == knockedOutCounter){
                    entity.knockedOut = false
                    entity.knockedOutCount = 0 
                }

                if(entity.sleepCount == sleepCounter){
                    entity.isSleeping = false
                    entity.sleepCounter = 0 
                }


                if(entity.confused == true && entity.confusedCount < confusedCounter){
                    // confused
                    
                        console.log("enemy is confused " + entity.name + ":" + entity.confused + " " + entity.confusedCount)
                        entity.confusedCount += 1
                        nextTurn(enetityArray)
                    
                    
                    
                } else if(entity.knockedOut == true && entity.knockedOutCount < knockedOutCounter){
                    // knocked out 
                    
                        console.log("enemy is knockout " + entity.name + ":" + entity.knockedOut + " " + entity.knockedOutCount)
                        entity.knockedOutCount += 1
                        nextTurn(enetityArray)
                    
                    // sleep 
                }else if(entity.isSleeping == true && entity.sleepCount < sleepCounter){
                    // sleep 
                    
                        console.log("enemy is sleep " + entity.name + ":" + entity.isSleeping + " " + entity.sleepCount)
                        entity.sleepCount += 1
                        nextTurn(enetityArray)
                    
                }else{
                    // then let enemy play 
                    document.getElementById('attackButton').disabled = true
                    document.getElementById('backButton2').style.display = 'none'
                    document.getElementById('nexTurnButton').addEventListener('click', function() {
                    
                        document.getElementById('nexTurnButton').disabled = true
                            // if clicked disable this button and open a new menu 
                    });

                    if(document.getElementById('nexTurnButton').disabled == true){
                        nextTurn(enetityArray)
                        document.getElementById('nexTurnButton').disabled = false
                        console.log("bob")
                    }
        
                    console.log(entity.name)
                }
                
            }
        } 
    }
}

let runOnce = false
let toggleTurnPassedTurnBack = false
function nextTurn(array){

    if(enetityArray[0].passedTurn == true || toggleTurnPassedTurnBack == true){
        toggleTurnPassedTurnBack = true
        toggleNextTurn  = true
        console.log(array)
        enetityArray[0].passedTurn = false
        entity = array.shift()
        console.log(array)
        console.log(enetityArray)
        passOnce = false
        toggleNextTurn  = false
        console.log(toggleNextTurn)
        toggleTurnPassedTurnBack = false
    }else{
        toggleNextTurn  = true
        console.log(array)
        entity = array.shift()
        console.log(array)
        console.log(enetityArray)
        array.push(entity)
        passOnce = false
        toggleNextTurn  = false
        console.log(toggleNextTurn)
    }
    
}

let openAttackMenu = true
let hitOne = false
let hitAll = false
let choosenAttack 
let choosenAttackBoolean = false
let appendEnemyButtons = false

let chooseEntityToAttack = false
let nowHitPlayer = false
let addclone = false
let enemyToHit
let playerToHit


let choosePlayerToHeal = false
let playerChooesen
let choosenItem

// let make the item options as well 
function playerItem(player){
    
    // disable 
    document.getElementById('differentAttacksMenu').style.display = 'none'
    document.querySelector('#attackOptions').style.display = 'grid'
    document.getElementById('backButton2').style.display = 'none'
    document.getElementById('backButton').style.display = 'grid'

    // append attacks 
    if(openAttackMenu == true){
        document.querySelector('#attackOptions').replaceChildren();
        Object.values(inventory).forEach((item) =>{
            if(item.amount > 0){
                const button = document.createElement('button')
                button.innerHTML = item.name
                
                if(item.revive == true){
                    console.log("revive")
                    // now count how many players 
                    const result = enetityArray.filter((entity) => entity.dead == true);
                    if(result.length < 1){
                        button.disabled = true
                    }
                }
                document.querySelector('#attackOptions').append(button)
            }
            
            
        })
        openAttackMenu = false;
    }
    
    document.getElementById('backButton').addEventListener('click', function() {
        choosenAttack = false
        choosenAttackBoolean = false
        appendEnemyButtons = false
        hitAll = false
        hitOne = false
        selectHealing = false
        selectingItem = false
        openAttackMenu = true
        
        document.querySelector('#listEnemies').style.display = 'none'
        document.querySelector('#attackOptions').style.display = 'none'
        document.getElementById('differentAttacksMenu').style.display = 'grid'
        document.getElementById('backButton').style.display = 'none'

    });

    document.getElementById('backButton2').addEventListener('click', function() {
        choosenAttack = false
        choosenAttackBoolean = false
        appendEnemyButtons = false
        hitAll = false
        hitOne = false
        choosePlayerToHeal = false
        // selectAttack = false
        // openAttackMenu = true
        
        document.querySelector('#listEnemies').style.display = 'none'
        document.querySelector('#attackOptions').style.display = 'grid'
        document.getElementById('backButton').style.display = 'grid'
       

    });

    if(choosenAttackBoolean == false && choosePlayerToHeal == false){
       // console.log("true")
        document.querySelectorAll('button').forEach((button) => {        
           
            button.addEventListener('click', (e) =>{
    
            
                Object.values(arrayInvtory).forEach((item) => {
                    console.log(item)
                    if(e.currentTarget.innerHTML == item.name && item.forAll == false)
                    {
                        console.log("true")
                        choosenItem = item
                        hitOne = true
                        choosenAttackBoolean = true
                        console.log("hey")
                    }else if(e.currentTarget.innerHTML == item.name && item.forAll == true)
                    {         
                        console.log("true")
                        choosenItem = item
                        hitAll = true
                        choosenAttackBoolean = true
                    }
    
                })
            })
        })
    }

    if(choosenAttackBoolean == true && choosePlayerToHeal == false){
        if(hitOne == true && appendEnemyButtons == false){
            document.querySelector('#listEnemies').replaceChildren();
            Object.values(enetityArray).forEach((players) =>{
                if(players.isPlayAble == true && choosenItem.revive == false)
                {
                    const button = document.createElement('button')
                    button.innerHTML = players.name 
                    document.querySelector('#listEnemies').append(button)
                }
                if(players.isPlayAble == true && choosenItem.revive == true && players.dead == true)
                {
                    const button = document.createElement('button')
                    button.innerHTML = players.name 
                    document.querySelector('#listEnemies').append(button)
                }
            })
            appendEnemyButtons = true
        }else if(hitAll == true && appendEnemyButtons == false){
            document.querySelector('#listEnemies').replaceChildren();
            document.querySelector('#attackOptions').style.display = 'none'
            const button = document.createElement('button')
            button.innerHTML = 'Hit All'
            document.querySelector('#listEnemies').append(button)
            appendEnemyButtons = true
        }
        choosePlayerToHeal = true
        choosenAttackBoolean = false
    }

    // now grab everyone 
    if(choosePlayerToHeal == true){
        document.querySelector('#attackOptions').style.display = 'none'
        document.getElementById('backButton').style.display = 'none'
        console.log("ehehehhehehe")
        document.getElementById('backButton2').style.display = 'grid'
        document.querySelector('#listEnemies').style.display = 'grid'
        document.querySelectorAll('button').forEach((button) => {        
        
            button.addEventListener('click', (e) =>{
                enetityArray.forEach((players) => {
                    console.log(e.currentTarget.innerHTML)
                    if(players.isPlayAble == true){
                        if(e.currentTarget.innerHTML == players.name)
                        {
                            console.log("prime")
                            playerToHit = players
                            nowHitPlayer = true
                        }else if(e.currentTarget.innerHTML == 'Hit All'){
                            nowHitPlayer = true
                        }
                    }
                })
            })
        })

        if(nowHitPlayer == true){
            if(hitOne == true){
                // we need
                Object.values(enetityArray).forEach((players, index) =>{
                    if(playerToHit.name == players.name ){
                        
                        if(choosenItem.cureConfusion == true){
                            players.confusedCount = 0 
                            players.confused = false
                        }

                        if(choosenItem.cureSleep == true){
                            players.sleepCount = 0 
                            players.isSleeping = false
                        }
    
                        if(choosenItem.cureKnockOut == true){
                            players.knockedOutCount = 0 
                            players.knockedOut = false
                        }

                        if(choosenItem.redirect == true){
                            players.redirect = true
                        }

                        // we have to do this for health
                        if(players.dead == false && choosenItem.revive == false){
                            if(players.health + choosenItem.regenHealth > players.maxHealth){
                                players.health = players.maxHealth
                                gsap.to(`${players.healthBar}`, {
                                    width: players.health + '%'
                                })
                            }else{
                                players.health += choosenItem.regenHealth
                                gsap.to(`${players.healthBar}`, {
                                    width: players.health + '%'
                                })
                            }  
                            
                            if(players.focus + choosenItem.focusCost >= players.maxFocus){
                                players.focus = players.maxFocus
                                gsap.to(`${players.focusBar}`, {
                                    width: players.focus + '%'
                                })
                            }else if(players.focus + choosenItem.focusCost < players.maxFocus){
                                players.focus += choosenItem.focusCost
                                gsap.to(`${players.focusBar}`, {
                                    width: players.focus + '%'
                                })
                            }
    
                            if(players.stamina + choosenItem.staminaCost >= players.maxStamina){
                                players.stamina = players.maxStamina
                                gsap.to(`${players.staminaBar}`, {
                                    width: players.stamina + '%'
                                })
                            }else if(players.stamina + choosenItem.staminaCost < players.maxStamina){
                                players.stamina += choosenItem.staminaCost
                                gsap.to(`${players.staminaBar}`, {
                                    width: players.stamina + '%'
                                })
                            }
                        }else if(players.dead == true && choosenItem.revive == true){

                            if(players.health + choosenItem.regenHealth > players.maxHealth){
                                players.health = players.maxHealth
                                gsap.to(`${players.healthBar}`, {
                                    width: players.health + '%'
                                })
                            }else{
                                players.health += choosenItem.regenHealth
                                gsap.to(`${players.healthBar}`, {
                                    width: players.health + '%'
                                })
                            }
                            players.dead = false    
                        }
                            
            
                        
                          
                        choosenItem.amount -= 1
                        resetAttackVars()
                        choosePlayerToHeal = false
                    }
                    
                })
            }
    
            if(hitAll == true){
    
                Object.values(enetityArray).forEach((players) =>{
                    if(players.isPlayAble == true){
                        console.log("hajdfsdlfhl")
    
                        if(choosenItem.cureConfusion == true){
                            players.confusedCount = 0 
                            players.confused = false
                        }

                        if(choosenItem.cureSleep == true){
                            players.sleepCount = 0 
                            players.isSleeping = false
                        }

                        if(choosenItem.cureKnockOut == true){
                            players.knockedOutCount = 0 
                            players.knockedOut = false
                        }

                        if(choosenItem.redirect == true){
                            players.redirect = true
                        }
    

                        if(players.dead == false && choosenItem.revive == false){
                            if(players.health + choosenItem.regenHealth > players.maxHealth){
                                players.health = players.maxHealth
                                gsap.to(`${players.healthBar}`, {
                                    width: players.health + '%'
                                })
                            }else{
                                players.health += choosenItem.regenHealth
                                gsap.to(`${players.healthBar}`, {
                                    width: players.health + '%'
                                })
                            }  
                            
                            if(players.focus + choosenItem.focusCost >= players.maxFocus){
                                players.focus = players.maxFocus
                                gsap.to(`${players.focusBar}`, {
                                    width: players.focus + '%'
                                })
                            }else if(players.focus + choosenItem.focusCost < players.maxFocus){
                                players.focus += choosenItem.focusCost
                                gsap.to(`${players.focusBar}`, {
                                    width: players.focus + '%'
                                })
                            }
    
                            if(players.stamina + choosenItem.staminaCost >= players.maxStamina){
                                players.stamina = players.maxStamina
                                gsap.to(`${players.staminaBar}`, {
                                    width: players.stamina + '%'
                                })
                            }else if(players.stamina + choosenItem.staminaCost < players.maxStamina){
                                players.stamina += choosenItem.staminaCost
                                gsap.to(`${players.staminaBar}`, {
                                    width: players.stamina + '%'
                                })
                            }
                        }else if(players.dead == true && choosenItem.revive == true){

                            if(players.health + choosenItem.regenHealth > players.maxHealth){
                                players.health = players.maxHealth
                                gsap.to(`${players.healthBar}`, {
                                    width: players.health + '%'
                                })
                            }else{
                                players.health += choosenItem.regenHealth
                                gsap.to(`${players.healthBar}`, {
                                    width: players.health + '%'
                                })
                            }
                            players.dead = false    
                        }    
                    }
                })
                choosenItem.amount -= 1
                console.log("heruyyy    ")
                resetAttackVars()
                choosePlayerToHeal = false
    
            }
        }
        
    }
}


function playerHealing(player){
    
    // disable 
    document.getElementById('differentAttacksMenu').style.display = 'none'
    document.querySelector('#attackOptions').style.display = 'grid'
    document.getElementById('backButton2').style.display = 'none'
    document.getElementById('backButton').style.display = 'grid'

    // append attacks 
    if(openAttackMenu == true){
        document.querySelector('#attackOptions').replaceChildren();
        Object.values(player.attackClass).forEach((attack) =>{
            if(attack.healing == true){
                const button = document.createElement('button')
                button.innerHTML = attack.name
                if(attack.staminaCost > player.stamina || attack.focusCost > player.focus){
                    button.disabled = true
                }

                if(attack.revive == true){
                    console.log("revive")
                    // now count how many players 
                    const result = enetityArray.filter((entity) => entity.dead == true);

                    
                    if(result.length < 1){
                        button.disabled = true
                    }
                }
                document.querySelector('#attackOptions').append(button)
            }
        })
        openAttackMenu = false;
    }
    
    document.getElementById('backButton').addEventListener('click', function() {
        choosenAttack = false
        choosenAttackBoolean = false
        appendEnemyButtons = false
        hitAll = false
        hitOne = false
        selectHealing = false
        openAttackMenu = true
        
        document.querySelector('#listEnemies').style.display = 'none'
        document.querySelector('#attackOptions').style.display = 'none'
        document.getElementById('differentAttacksMenu').style.display = 'grid'
        document.getElementById('backButton').style.display = 'none'

    });

    document.getElementById('backButton2').addEventListener('click', function() {
        choosenAttack = false
        choosenAttackBoolean = false
        appendEnemyButtons = false
        hitAll = false
        hitOne = false
        choosePlayerToHeal = false
        // selectAttack = false
        // openAttackMenu = true
        
        document.querySelector('#listEnemies').style.display = 'none'
        document.querySelector('#attackOptions').style.display = 'grid'
        document.getElementById('backButton').style.display = 'grid'
       

    });

    if(choosenAttackBoolean == false && choosePlayerToHeal == false){
        console.log("true")
        document.querySelectorAll('button').forEach((button) => {        
           
            button.addEventListener('click', (e) =>{
    
            
                Object.values(arrayAttacks).forEach((attack) => {
                    console.log(attack)
                    if(e.currentTarget.innerHTML == attack.name && attack.forAll == false)
                    {
                        console.log("true")
                        choosenAttack = attack
                        hitOne = true
                        choosenAttackBoolean = true
                        console.log("hey")
                    }else if(e.currentTarget.innerHTML == attack.name && attack.forAll == true)
                    {         
                        console.log("true")
                        choosenAttack = attack
                        hitAll = true
                        choosenAttackBoolean = true
                    }
    
                })
            })
        })
    }

    if(choosenAttackBoolean == true && choosePlayerToHeal == false){
        if(hitOne == true && appendEnemyButtons == false){
            document.querySelector('#listEnemies').replaceChildren();
            Object.values(enetityArray).forEach((players) =>{
                if(players.isPlayAble == true && choosenAttack.revive == false)
                {
                    const button = document.createElement('button')
                    button.innerHTML = players.name 
                    document.querySelector('#listEnemies').append(button)
                }
                if(players.isPlayAble == true && choosenAttack.revive == true && players.dead == true)
                {
                    const button = document.createElement('button')
                    button.innerHTML = players.name 
                    document.querySelector('#listEnemies').append(button)
                }
            })
            appendEnemyButtons = true
        }else if(hitAll == true && appendEnemyButtons == false){
            document.querySelector('#listEnemies').replaceChildren();
            document.querySelector('#attackOptions').style.display = 'none'
            const button = document.createElement('button')
            button.innerHTML = 'Hit All'
            document.querySelector('#listEnemies').append(button)
            appendEnemyButtons = true
        }
        choosePlayerToHeal = true
        choosenAttackBoolean = false
    }

    // now grab everyone 
    if(choosePlayerToHeal == true){
        document.querySelector('#attackOptions').style.display = 'none'
        document.getElementById('backButton').style.display = 'none'
        console.log("ehehehhehehe")
        document.getElementById('backButton2').style.display = 'grid'
        document.querySelector('#listEnemies').style.display = 'grid'
        document.querySelectorAll('button').forEach((button) => {        
        
            button.addEventListener('click', (e) =>{
                enetityArray.forEach((players) => {
                    console.log(e.currentTarget.innerHTML)
                    if(players.isPlayAble == true){
                        if(e.currentTarget.innerHTML == players.name)
                        {
                            console.log("prime")
                            playerToHit = players
                            nowHitPlayer = true
                        }else if(e.currentTarget.innerHTML == 'Hit All'){
                            nowHitPlayer = true
                        }
                    }
                })
            })
        })

        if(nowHitPlayer == true){
            if(hitOne == true){
                // we need
                Object.values(enetityArray).forEach((players, index) =>{
                    if(playerToHit.name == players.name ){
                        
                        if(choosenAttack.cureConfusion == true){
                            players.confusedCount = 0 
                            players.confused = false
                        }

                        if(choosenAttack.cureSleep == true){
                            players.sleepCount = 0 
                            players.isSleeping = false
                        }
    
                        if(choosenAttack.cureKnockOut == true){
                            players.knockedOutCount = 0 
                            players.knockedOut = false
                        }

                        if(choosenAttack.redirect == true){
                            players.redirect = true
                        }

                        // we have to do this for health
                        if(players.dead == false){
                            if(players.health + choosenAttack.regenHealth > players.maxHealth){
                                players.health = players.maxHealth
                                gsap.to(`${players.healthBar}`, {
                                    width: players.health + '%'
                                })
                            }else{
                                players.health += choosenAttack.regenHealth
                                gsap.to(`${players.healthBar}`, {
                                    width: players.health + '%'
                                })
                            }    
                        }

                        if(players.dead == true && choosenAttack.revive == true){

                            if(players.health + choosenAttack.regenHealth > players.maxHealth){
                                players.health = players.maxHealth
                                gsap.to(`${players.healthBar}`, {
                                    width: players.health + '%'
                                })
                            }else{
                                players.health += choosenAttack.regenHealth
                                gsap.to(`${players.healthBar}`, {
                                    width: players.health + '%'
                                })
                            }
                            players.dead = false    
                        }
                            
            
                        player.focus -= choosenAttack.focusCost
                        gsap.to(`${player.focusBar}`, {
                            width: player.focus + '%'
                        })
    
                        player.stamina -= choosenAttack.staminaCost
                        gsap.to(`${player.staminaBar}`, {
                            width: player.stamina + '%'
                        })
    
                        resetAttackVars()
                        choosePlayerToHeal = false
                    }
                    
                })
            }
    
            if(hitAll == true){
    
                Object.values(enetityArray).forEach((players) =>{
                    if(players.isPlayAble == true){
                        console.log("hajdfsdlfhl")
    
                    
    
                        if(choosenAttack.cureConfusion == true){
                            players.confusedCount = 0 
                            players.confused = false
                        }

                        if(choosenAttack.cureSleep == true){
                            players.sleepCount = 0 
                            players.isSleeping = false
                        }

                        if(choosenAttack.cureKnockOut == true){
                            players.knockedOutCount = 0 
                            players.knockedOut = false
                        }

                        if(choosenAttack.redirect == true){
                            players.redirect = true
                        }
    
                        // we have to do this for health
                        if(players.dead == false){
                            if(players.health + choosenAttack.regenHealth > players.maxHealth){
                                players.health =players.maxHealth
                                gsap.to(`${players.healthBar}`, {
                                    width: players.health + '%'
                                })
                            }else{
                                players.health += choosenAttack.regenHealth
                                gsap.to(`${players.healthBar}`, {
                                    width: players.health + '%'
                                })
                            }    
                        }

                        if(players.dead == true && choosenAttack.revive == true){

                            if(players.health + choosenAttack.regenHealth > players.maxHealth){
                                players.health = players.maxHealth
                                gsap.to(`${players.healthBar}`, {
                                    width: players.health + '%'
                                })
                            }else{
                                players.health += choosenAttack.regenHealth
                                gsap.to(`${players.healthBar}`, {
                                    width: players.health + '%'
                                })
                            }
                            players.dead = false    
                        }        
                    }
                })
                player.focus -= choosenAttack.focusCost
                gsap.to(`${player.focusBar}`, {
                    width: player.focus + '%'
                })

                player.stamina -= choosenAttack.staminaCost
                gsap.to(`${player.staminaBar}`, {
                    width: player.stamina + '%'
                })
                console.log("heruyyy    ")
                resetAttackVars()
                choosePlayerToHeal = false
    
            }
        }
        
    }
}




function playerAttack(player){
    // now we need to disable the everything and open a new menu with all of the attacks 

    // disable 
    document.getElementById('differentAttacksMenu').style.display = 'none'
    document.querySelector('#attackOptions').style.display = 'grid'
    document.getElementById('backButton2').style.display = 'none'
    document.getElementById('backButton').style.display = 'grid'
    // append attacks 
    if(openAttackMenu == true){
        document.querySelector('#attackOptions').replaceChildren();
        Object.values(player.attackClass).forEach((attack) =>{
            
            if(attack.healing == false){
                
                const button = document.createElement('button')
                console.log(attack)
                if(attack.staminaCost > player.stamina || attack.focusCost > player.focus){
                    button.disabled = true
                }
                button.innerHTML = attack.name
                document.querySelector('#attackOptions').append(button)
            }
            
        })
        openAttackMenu = false;
    }
    
    document.getElementById('backButton').addEventListener('click', function() {
        choosenAttack = false
        choosenAttackBoolean = false
        appendEnemyButtons = false
        hitAll = false
        hitOne = false
        chooseEntityToAttack = false
        selectAttack = false
        openAttackMenu = true
        document.querySelector('#listEnemies').style.display = 'none'
        document.querySelector('#attackOptions').style.display = 'none'
        document.getElementById('differentAttacksMenu').style.display = 'grid'
        document.getElementById('backButton').style.display = 'none'
    });

    document.getElementById('backButton2').addEventListener('click', function() {
        choosenAttack = false
        choosenAttackBoolean = false
        appendEnemyButtons = false
        chooseEntityToAttack = false
        hitAll = false
        hitOne = false
        // selectAttack = false
        // openAttackMenu = true
        
        document.querySelector('#listEnemies').style.display = 'none'
        document.querySelector('#attackOptions').style.display = 'grid'
        document.getElementById('backButton').style.display = 'grid'
       

    });

    if(choosenAttackBoolean == false && chooseEntityToAttack == false){
        console.log("delete")
        document.querySelectorAll('button').forEach((button) => {        
    
            button.addEventListener('click', (e) =>{    
                Object.values(arrayAttacks).forEach((attack) => {
                    
                    if(e.currentTarget.innerHTML == attack.name && attack.forAll == false)
                    {
    
                        
                        choosenAttack = attack
                        hitOne = true
                        choosenAttackBoolean = true
                        
                        // now we have to decide who to hit 
    
                    }else if(e.currentTarget.innerHTML == attack.name && attack.forAll == true)
                    {
                       
                        choosenAttack = attack
                        hitAll = true
                        choosenAttackBoolean = true
                        // we hit all the players 
                    }
    
                })
            })
        })
    }

    if(choosenAttackBoolean == true && chooseEntityToAttack == false){
        document.querySelector('#attackOptions').style.display = 'none'
        document.getElementById('backButton').style.display = 'none'
        document.getElementById('backButton2').style.display = 'grid'
        document.querySelector('#listEnemies').style.display = 'grid'
        if(hitOne == true && appendEnemyButtons == false){
            console.log("heyyy")
            document.querySelector('#listEnemies').replaceChildren();
            Object.values(enetityArray).forEach((enemy) =>{    
                if(enemy.isPlayAble == false )
                {
                    const button = document.createElement('button')
                    button.innerHTML = enemy.name
                    document.querySelector('#listEnemies').append(button)
                }
            })
            appendEnemyButtons = true
        }else if(hitAll == true && appendEnemyButtons == false){
            document.querySelector('#listEnemies').replaceChildren();
            document.querySelector('#attackOptions').style.display = 'none'
            const button = document.createElement('button')
            button.innerHTML = 'Hit All'
            document.querySelector('#listEnemies').append(button)
            appendEnemyButtons = true
        }

        if(appendEnemyButtons == true){
            document.querySelectorAll('button').forEach((button) => {   
                button.addEventListener('click', (e) =>{
                    Object.values(enetityArray).forEach((enemy, index) =>{
                        if(e.currentTarget.innerHTML == enemy.name ){
                            console.log(enemy.name)
                            enemyToHit = enemy
                            nowHitPlayer = true


                        }else if(e.currentTarget.innerHTML == 'Hit All'){
                            nowHitPlayer = true
                        }
                    })
                })

            })
        }
    }

    if(nowHitPlayer == true){

        // now we need to take away from their health and etc 

        if(hitOne == true){
            // we need
            Object.values(enetityArray).forEach((enemy, index) =>{
                if(enemyToHit.name == enemy.name ){
                    console.log("hajdfsdlfhl")

                    if(enemy.weakness.includes(choosenAttack.element) == true  && enemy.isSleeping == false && enemy.confused == false && enemy.nullify.includes(choosenAttack.element) == false){
                        enemy.knockedOut = true
                    }

                    if(choosenAttack.confused == true && enemy.isSleeping == false &&  enemy.nullify.includes(choosenAttack.element) == false){
                        enemy.confused = true
                    }

                    if(choosenAttack.sleep == true && enemy.confused == false && enemy.nullify.includes(choosenAttack.element) == false){
                        enemy.isSleeping = true
                        console.log("nothing will happen")
                        //resetAttackVars()
                    }

                    

                    if(player.health + choosenAttack.regenHealth < player.maxHealth ){
                        player.health += choosenAttack.regenHealth
                        gsap.to(`${player.healthBar}`, {
                            width: player.health + '%'
                        })
                    }else{
                        console.log("hellosjdvas")
                        player.health = player.maxHealth
                        gsap.to(`${player.healthBar}`, {
                            width: player.health + '%'
                        })
                    }
                    
                    // now take away health and etc 
                    // take away players stamina and magica or whatever 
                    if(enemy.nullify.includes(choosenAttack.element) == false){
                        enemy.health -= choosenAttack.damage
                        gsap.to(`${enemy.healthBar}`, {
                            width: enemy.health + '%'
                        })
                    }

                    
                    
                    console.log("health thing")
                    console.log(enemy.health)
                    

                    console.log(enetityArray)
                    console.log(enemy)

                    
                    if(enetityArray[index].health <= 0){
                        enetityArray.splice(index, 1)
                        createEnemyInterface(enetityArray)
                    }
                    
                    player.focus -= choosenAttack.focusCost
                    gsap.to(`${player.focusBar}`, {
                        width: player.focus + '%'
                    })

                    player.stamina -= choosenAttack.staminaCost
                    gsap.to(`${player.staminaBar}`, {
                        width: player.stamina + '%'
                    })

                    resetAttackVars()
                }
                
            })
        }

        if(hitAll == true){

            Object.values(enetityArray).forEach((enemy) =>{
                if(enemy.isPlayAble == false ){
                    console.log("hajdfsdlfhl")

                    if(enemy.weakness.includes(choosenAttack.element) == true && enemy.isSleeping == false && enemy.confused == false && enemy.nullify.includes(choosenAttack.element) == false){
                        enemy.knockedOut = true
                    }

                    if(choosenAttack.confused == true && enemy.isSleeping == false &&  enemy.nullify.includes(choosenAttack.element) == false){
                        enemy.confused = true
                    }

                    if(choosenAttack.sleep == true && enemy.confused == false && enemy.nullify.includes(choosenAttack.element) == false){
                        enemy.isSleeping = true
                        console.log("nothing will happen")
                        //resetAttackVars()
                    }

                    if(enemy.nullify.includes(choosenAttack.element) == false){
                        enemy.health -= choosenAttack.damage
                        gsap.to(`${enemy.healthBar}`, {
                            width: enemy.health + '%'
                        })
                    }

                    if(enemy.health <= 0){
                        
                        let index = enetityArray.indexOf(enemy)
                        enetityArray.splice(index, 1)
                        createEnemyInterface(enetityArray)
                    }
                    
                    
                }
                
            })
            if(player.health + choosenAttack.regenHealth < player.maxHealth ){
                player.health += choosenAttack.regenHealth
                gsap.to(`${player.healthBar}`, {
                    width: player.health + '%'
                })
            }else{
                player.health = player.maxHealth
                gsap.to(`${player.healthBar}`, {
                    width: player.health + '%'
                })
            }

            if(choosenAttack.clone == true && addclone == false){
                const result = enetityArray.filter((entity) => entity.isPlayAble == true);

                    console.log(cloneArray[0]);
                    console.log("heyeyeyeyeyeyeyeyey")

                    if(result.length < 4){
                        if(result.length == 1){
                            if(cloneArray[0].spawnClone == false){
                                enetityArray.push(cloneArray[0])
                                cloneArray[0].spawnClone = true
                            }

                            if(cloneArray[1].spawnClone == false){
                                enetityArray.push(cloneArray[1])
                                cloneArray[1].spawnClone = true
                            }

                            if(cloneArray[2].spawnClone == false){
                                enetityArray.push(cloneArray[2])
                                cloneArray[2].spawnClone = true
                            }
                            
                        }else if(result.length == 2){
                            if(cloneArray[0].spawnClone == false){
                                enetityArray.push(cloneArray[0])
                                cloneArray[0].spawnClone = true
                            }

                            if(cloneArray[1].spawnClone == false){
                                enetityArray.push(cloneArray[1])
                                cloneArray[1].spawnClone = true
                            }
                        }else if(result.length == 3){
                            if(cloneArray[0].spawnClone == false){
                                enetityArray.push(cloneArray[0])
                                cloneArray[0].spawnClone = true
                            }

                            
                        }

                        createCloneInterface(enetityArray)
                        addclone = true
                    }
                
            }
            player.focus -= choosenAttack.focusCost
            gsap.to(`${player.focusBar}`, {
                width: player.focus + '%'
            })

            player.stamina -= choosenAttack.staminaCost
            gsap.to(`${player.staminaBar}`, {
                width: player.stamina + '%'
            })
            resetAttackVars()

        }

        // reset 
       

    }
    // now grab the current player

}





let passOnce = false
let madeChoiceToPass = false
function passTurn(player, array){
    document.getElementById('differentAttacksMenu').style.display = 'none'
    document.querySelector('#attackOptions').style.display = 'grid'
    document.getElementById('backButton2').style.display = 'none'
    document.getElementById('backButton').style.display = 'grid'

    // append attacks 
    if(openAttackMenu == true){
        document.querySelector('#attackOptions').replaceChildren();
        Object.values(array).forEach((players) =>{
            if(players.isPlayAble == true && players.name != array[0].name){
                const button = document.createElement('button')
                console.log(players)
                button.innerHTML = players.name
                document.querySelector('#attackOptions').append(button)
            }
        })
        openAttackMenu = false;
    }

    let copyEntity
    if(openAttackMenu == false){
        document.querySelectorAll('button').forEach((button) => {        
            button.addEventListener('click', (e) =>{
                
                Object.values(array).forEach((players, index) => {
                    
                    
                    if(e.currentTarget.innerHTML == players.name)
                    {
                        console.log("true")

                        console.log(players.name)
                        // now we need to find the player with this name copy it 
                        copyEntity = players
                        copyEntity.passedTurn = true
                        madeChoiceToPass = true
                        //console.log(copyEntity)
                        
                        
                        // now we have to decide who to hit 
    
                    }
    
                })
                if(passOnce == false && madeChoiceToPass == true ){
                    console.log("heyyyyyy")
                    enetityArray.splice(1, 0, copyEntity);

                    resetAttackVars()
                    passOnce = true
                }
                
                
                
            })
        })
    }
    

    document.getElementById('backButton').addEventListener('click', function() {
        choosenAttack = false
        choosenAttackBoolean = false
        appendEnemyButtons = false
        hitAll = false
        hitOne = false
        chooseEntityToAttack = false
        selectAttack = false
        selectPassTurn = false
        openAttackMenu = true
        document.querySelector('#listEnemies').style.display = 'none'
        document.querySelector('#attackOptions').style.display = 'none'
        document.getElementById('differentAttacksMenu').style.display = 'grid'
        document.getElementById('backButton').style.display = 'none'
    })
}

function resetAttackVars(){
    nextTurn(enetityArray)
    nowHitPlayer = false
    choosenAttack = false
    choosenAttackBoolean = false
    choosePlayerToHeal = false
    madeChoiceToPass = false
    addclone = false
    selectPassTurn = false
    selectHealing = false
    selectingItem = false
    appendEnemyButtons = false
    hitAll = false
    hitOne = false
    chooseEntityToAttack = false
    selectAttack = false
    selectPassTurn = false
    openAttackMenu = true
    
    
    document.querySelector('#listEnemies').style.display = 'none'
    document.querySelector('#attackOptions').style.display = 'none'
    document.getElementById('differentAttacksMenu').style.display = 'grid'
    document.getElementById('backButton').style.display = 'none'
    document.getElementById('backButton2').style.display = 'none'
    nowHitPlayer = false

}


function enemyAttack(){
    console.log("enemy can Attack")
}

function createEnemyInterface(array){
    document.querySelector('#enemyStatus').replaceChildren();
    Object.values(array).forEach((enemy) => {
        if(enemy.isPlayAble == false)
        {

            var enemyH1 = document.createElement('h1');
            enemyH1.style.fontSize = '16px'
            enemyH1.innerHTML = enemy.name
            enemyH1.id  = enemy.nameId

            var enemyDiv2 = document.createElement('div');
            enemyDiv2.id = enemy.healthBarId
            enemyDiv2.style.height = '5px'
            enemyDiv2.style.border = '1px black solid'
            enemyDiv2.style.backgroundColor  = 'green'
            
            enemyDiv2.style.position = 'relative'
            enemyDiv2.style.top =  '0'
            enemyDiv2.style.left =  '0'
            enemyDiv2.style.right =  '0'

            var enemyDiv3 = document.createElement('div');
            enemyDiv3.id = enemy.confusedBarId
            enemyDiv3.style.height = '5px'
            enemyDiv3.style.border = '1px black solid'
            enemyDiv3.style.backgroundColor  = 'red'
            
            enemyDiv3.style.position = 'relative'
            enemyDiv3.style.top =  '0'
            enemyDiv3.style.left =  '0'
            enemyDiv3.style.right =  '10'

            var enemyDiv4 = document.createElement('div');
            enemyDiv4.id = enemy.sleepBarId
            enemyDiv4.style.height = '5px'
            enemyDiv4.style.border = '1px black solid'
            enemyDiv4.style.backgroundColor  = 'blue'
            
            enemyDiv4.style.position = 'relative'
            enemyDiv4.style.top =  '0'
            enemyDiv4.style.left =  '0'
            enemyDiv4.style.right =  '20'

            var enemyDiv5 = document.createElement('div');
            enemyDiv5.id = enemy.knockedOutBarId
            enemyDiv5.style.height = '5px'
            enemyDiv5.style.border = '1px black solid'
            enemyDiv5.style.backgroundColor  = 'blue'
            
            enemyDiv5.style.position = 'relative'
            enemyDiv5.style.top =  '0'
            enemyDiv5.style.left =  '0'
            enemyDiv5.style.right =  '20'

            document.querySelector('#enemyStatus').append(enemyH1)
            document.querySelector('#enemyStatus').append(enemyDiv2)
            document.querySelector('#enemyStatus').append(enemyDiv3)
            document.querySelector('#enemyStatus').append(enemyDiv4)
            document.querySelector('#enemyStatus').append(enemyDiv5)
            
        }
        

    })

}

function createPlayerInterface(array){
    
    Object.values(array).forEach((enemy) => {
        if(enemy.isPlayAble == true)
        {

            var enemyH1 = document.createElement('h1');
            enemyH1.style.fontSize = '16px'
            enemyH1.innerHTML = enemy.name
            enemyH1.id  = enemy.nameId


            // <div style="position: relative;">
            
            
            // health bar 
            var enemyDiv2 = document.createElement('div');
            enemyDiv2.id = enemy.healthBarId
            enemyDiv2.style.height = '5px'
            enemyDiv2.style.border = '1px black solid'
            enemyDiv2.style.backgroundColor  = 'green'
            
            enemyDiv2.style.position = 'relative'
            enemyDiv2.style.top =  '0'
            enemyDiv2.style.left =  '0'
            enemyDiv2.style.right =  '0'


            // dead 
            var enemyDiv3 = document.createElement('div');
            enemyDiv3.id = enemy.staminaBarId
            enemyDiv3.style.height = '5px'
            enemyDiv3.style.border = '1px black solid'
            enemyDiv3.style.backgroundColor  = 'purple'
            
            enemyDiv3.style.position = 'relative'
            enemyDiv3.style.top =  '0'
            enemyDiv3.style.left =  '0'
            enemyDiv3.style.right =  '10'

            var enemyDiv4 = document.createElement('div');
            enemyDiv4.id = enemy.focusBarId
            enemyDiv4.style.height = '5px'
            enemyDiv4.style.border = '1px black solid'
            enemyDiv4.style.backgroundColor  = 'blue'
            
            enemyDiv4.style.position = 'relative'
            enemyDiv4.style.top =  '0'
            enemyDiv4.style.left =  '0'
            enemyDiv4.style.right =  '20'


            // asleep 

            // knocked out 


            document.querySelector('#PlayersStatus').append(enemyH1)
            

            document.querySelector('#PlayersStatus').append(enemyDiv2)
            document.querySelector('#PlayersStatus').append(enemyDiv3)
            document.querySelector('#PlayersStatus').append(enemyDiv4)
            
        }
        

    })

}

function createCloneInterface(array){

    Object.values(array).forEach((enemy) => {
        if(enemy.isClone == true)
        {

            var enemyH1 = document.createElement('h1');
            enemyH1.style.fontSize = '16px'
            enemyH1.innerHTML = enemy.name
            enemyH1.id  = enemy.nameId


            // <div style="position: relative;">
            
            
            // health bar 
            var enemyDiv2 = document.createElement('div');
            enemyDiv2.id = enemy.healthBarId
            enemyDiv2.style.height = '5px'
            enemyDiv2.style.border = '1px black solid'
            enemyDiv2.style.backgroundColor  = 'green'
            
            enemyDiv2.style.position = 'relative'
            enemyDiv2.style.top =  '0'
            enemyDiv2.style.left =  '0'
            enemyDiv2.style.right =  '0'


            // 
            var enemyDiv3 = document.createElement('div');
            enemyDiv3.id = enemy.staminaBarId
            enemyDiv3.style.height = '5px'
            enemyDiv3.style.border = '1px black solid'
            enemyDiv3.style.backgroundColor  = 'purple'
            
            enemyDiv3.style.position = 'relative'
            enemyDiv3.style.top =  '0'
            enemyDiv3.style.left =  '0'
            enemyDiv3.style.right =  '10'

            var enemyDiv4 = document.createElement('div');
            enemyDiv4.id = enemy.focusBarId
            enemyDiv4.style.height = '5px'
            enemyDiv4.style.border = '1px black solid'
            enemyDiv4.style.backgroundColor  = 'blue'
            
            enemyDiv4.style.position = 'relative'
            enemyDiv4.style.top =  '0'
            enemyDiv4.style.left =  '0'
            enemyDiv4.style.right =  '20'

            var enemyDiv5 = document.createElement('div');
            enemyDiv5.id = enemy.focusBarId
            enemyDiv5.style.height = '5px'
            enemyDiv5.style.border = '1px black solid'
            enemyDiv5.style.backgroundColor  = 'red'
            
            enemyDiv5.style.position = 'relative'
            enemyDiv5.style.top =  '0'
            enemyDiv5.style.left =  '0'
            enemyDiv5.style.right =  '20'

            document.querySelector('#PlayersStatus').append(enemyH1)
            document.querySelector('#PlayersStatus').append(enemyDiv2)
            document.querySelector('#PlayersStatus').append(enemyDiv3)
            document.querySelector('#PlayersStatus').append(enemyDiv4)
            
        }
        

    })

}
