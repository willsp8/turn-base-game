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

class Sprite5{
    constructor({position, velocity, imageSrc, scale = 1, framesMax = 1, offset = {x: 0, y:0 }, sprites})
    {
        this.position = position
        this.velocity = velocity
        this.height = 50
        this.width = 27
        this.framesMax = framesMax
        this.currentFrame = 0
        this.framesElapsed = 0
        this.framesHold = 3
        this.sprites = sprites
        this.offset = offset
        this.scale = scale
        this.image = new Image()
        this.image.src = imageSrc
        for(const sprite in this.sprites){
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }
        
    }

    animateFrames(){
        this.framesElapsed++
        if(this.framesElapsed % this.framesHold === 0){
            if(this.currentFrame < this.framesMax - 1){
                this.currentFrame ++
                
            }else{
                this.currentFrame = 0
            }
        }
    }

    draw()
    {
        // c.fillStyle = 'red'
        // c.fillRect(this.position.x, this.position.y, 27, 50)
        c.drawImage(
            this.image,
            this.currentFrame * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,
            this.position.x - this.offset.x,
            this.position.y - this.offset.y, 
            (this.image.width / this.framesMax) * this.scale,
            this.image.height * this.scale)
        
       // c.clearRect(0, 0, canvas.width, canvas.height);
    }
    update(){
        this.draw()
        this.animateFrames()
        
        //this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        // if(this.position.y + this.height + this.velocity.y >= canvas.height - 305){
        //     this.velocity.y = 0
        // }else{
        //     this.velocity.y += gravity
        // }
        
    }
}


// first we need to create an array of all of our enemies and players 

var enetityArray = []
var enetityArray2 = []
var startBattle = true

const AttackOneAnimations = new Sprite5({
    position: {
        x: 100,
        y: 400,
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset:{
        x: 125,
        y: 151
    },
    sprites: {
        attack: {
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_attack_1.png', 
            framesMax: 15
        },
        attackHit: {
            imageSrc: './assets/IgnoreFolder/50x51 Beam.png', 
            framesMax: 9
        }
    }, 
    framesMax: 15,
    scale: 1.8,
    imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_attack_1.png'
    
})

const AttackTwoAnimations = new Sprite5({
    position: {
        x: 100,
        y: 400,
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset:{
        x: 125,
        y: 151
    },
    sprites: {
        attack: {
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_attack_2.png', 
            framesMax: 24
        },
        attackHit: {
            imageSrc: './assets/IgnoreFolder/50x51 Beam.png', 
            framesMax: 9
        }
    }, 
    framesMax: 24,
    scale: 1.8,
    imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_attack_2.png', 
    
})

// attacking skills 
const normalAttack = {name: 'normal Attack', damage: 40, regenHealth: 0,   focusCost: 20, staminaCost: 0, staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: true, element: 'fire', chancesOfSleep:0.5, chancesOfConfused:0.5, forAll: false, healing: false, sleep: false, confused: false, clone: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}
const normalAttackForAll = {name: 'normal Attack all', damage: 40, regenHealth: 30, focusCost: 30, staminaCost: 0,  staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: true, element: 'fire', chancesOfSleep:0.5, chancesOfConfused:0.5, forAll: true, healing: false, sleep: false, confused: false, clone: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}
const waterAttack = {name: 'water Attack', damage: 40, regenHealth: 0, focusCost: 30, staminaCost: 30, staminaTake: 0, focusTake: 0, healConfused: false, attackConfused: true, element: 'water', chancesOfSleep:0.5, chancesOfConfused:0.5, forAll: false, healing: false, sleep: false, confused: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackTwoAnimations}
const waterAttackForAll = {name: 'water Attack all', damage: 40, regenHealth: 0, focusCost: 30, staminaCost: 0, staminaTake: 0, focusTake: 0, healConfused: false, attackConfused: true, element: 'water', chancesOfSleep:0.5, chancesOfConfused:0.5, forAll: true, healing: false, sleep: false, confused: false, clone: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackTwoAnimations}
const earthAttack = {name: 'earth Attack', damage: 40, regenHealth: 0, focusCost: 30, staminaCost: 30, staminaTake: 0, focusTake: 0, healConfused: false, attackConfused: true, element: 'earth', chancesOfSleep:0.5, chancesOfConfused:0.5, forAll: false, healing: false, sleep: false, confused: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackTwoAnimations}
const earthAttackForAll = {name: 'earth Attack all', damage: 40, regenHealth: 0, focusCost: 30, staminaCost: 0, staminaTake: 0, focusTake: 0, healConfused: false, attackConfused: true, element: 'earth', chancesOfSleep:0.5, chancesOfConfused:0.5, forAll: true, healing: false, sleep: false, confused: false, clone: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackTwoAnimations}
const sleepAttack = {name: 'sleep Attack', damage: 0, regenHealth: 0, focusCost: 30, staminaCost: 30, staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: true, element: 'sleep', chancesOfSleep:0.5, chancesOfConfused:0.5, forAll: false, healing: false, sleep: true, confused: false, clone: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackTwoAnimations}
const sleepAttackForAll = {name: 'Country Sleep', damage: 0, regenHealth: 30, focusCost: 30, staminaCost: 0, staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: true, element: 'sleep', chancesOfSleep:1, chancesOfConfused:1, forAll: true, healing: false, sleep: true, confused: false, clone: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackTwoAnimations}
const confusedAttack = {name: 'confused Attack', damage: 40, regenHealth: 0, focusCost: 30, staminaCost: 0, staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: true, element: 'confused', chancesOfSleep:0.5, chancesOfConfused:0.5, forAll: false, healing: false, sleep: false, confused: true, clone: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackTwoAnimations}
const confusedAttackForAll = {name: 'confused Attack all', damage: 0, regenHealth: 0, focusCost: 30, staminaCost: 0, staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: true, element: 'confused', chancesOfSleep:0.5, chancesOfConfused:0.5, forAll: true, healing: false, sleep: false, confused: true, clone: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackTwoAnimations}
const cloneAttack = {name: 'Project', damage: 0, regenHealth: 0, focusCost: 30, staminaCost: 0, staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: false, element: 'none', chancesOfSleep:0.5, chancesOfConfused:0.5, forAll: true, healing: false, sleep: false, confused: false, clone: true, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackTwoAnimations}
const divideByZeroAttack = {name: 'Divide By Zero', damage: 100000000000000, regenHealth: 0, focusCost: 30, staminaCost: 0, staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: false,  chancesOfSleep:0.5, chancesOfConfused:0.5, element: 'none', forAll: false, healing: false, sleep: false, confused: false, clone: true, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackTwoAnimations}

// healing skills 
const normalHeal = {name: 'normal heal', damage: 40, regenHealth: 30, staminaTake: 0, focusTake: 20, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: false, healing: true, sleep: false, block: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}
const normalhealForAll = {name: 'normal heal all', damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0, staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, block: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}
const cureSleepHeal = {name: 'cure sleep', damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0, staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: true, element: 'heal', forAll: false, healing: true, sleep: false, block: false,  cureConfusion: false, cureSleep: true, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}
const cureSleepForAll = {name: 'cure sleep for all', damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0,staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, block: false, cureConfusion: false, cureSleep: true, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}
const cureConfusionHeal = {name: 'cure confusion', damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0, staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: true, element: 'heal', forAll: false, healing: true, sleep: false, block: false,  cureConfusion: true, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}
const cureConfusionForAll = {name: 'cure confusion for all', damage: 40, regenHealth: 0, focusCost: 20, staminaCost: 0, staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, block: false, cureConfusion: true, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}
const revive = {name: 'Revive', damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0, staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: true, element: 'heal', forAll: false, healing: true, sleep: false, block: false,  cureConfusion: true, cureSleep: true, cureKnockOut: true, redirect: false, revive: true, animation: AttackOneAnimations}
const reviveAll = {name: 'Revive All', damage: 40, regenHealth: 0, focusCost: 20, staminaCost: 0, staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, block: false,  cureConfusion: true, cureSleep: true, cureKnockOut: true, redirect: false, revive: true, animation: AttackOneAnimations}
const changeFr = {name: 'Revive All', damage: 40, regenHealth: 0, focusCost: 20, staminaCost: 0, staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, block: false,  cureConfusion: true, cureSleep: true, cureKnockOut: true, redirect: false, revive: true, animation: AttackOneAnimations}
const redirect = {name: 'Redirct', damage: 0, regenHealth: 0, focusCost: 20, staminaCost: 0, staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: false, element: 'heal', forAll: false, healing: true, sleep: false, block: false,  cureConfusion: true, cureSleep: true, cureKnockOut: true, redirect: true, revive: false, animation: AttackOneAnimations}
const redirectForAll = {name: 'Redirect All', damage: 0, regenHealth: 0, focusCost: 20, staminaCost: 0, staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: false, element: 'heal', forAll: true, healing: true, sleep: false, block: false, cureConfusion: true, cureSleep: true, cureKnockOut: true, redirect: true, revive: false, animation: AttackOneAnimations}
const asympotote = {name: 'Asympotote', damage: 0, regenHealth: 0, focusCost: 20, staminaCost: 0, staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: false, element: 'heal', forAll: false, healing: true, sleep: false, block: true, cureConfusion: false, cureSleep: true, cureKnockOut: true, redirect: true, revive: false, animation: AttackOneAnimations}
const asympototeForAll = {name: 'Asympotote All', damage: 0, regenHealth: 0, focusCost: 20, staminaCost: 0, staminaTake: 0, focusTake: 20, healConfused: false, attackConfused: false, element: 'heal', forAll: true, healing: true, block: true, sleep: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}


// healing items 
const normalHealItem = {name: 'normal heal', amount: 3, damage: 40, regenHealth: 30, focusCost: 0, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: false, healing: true, sleep: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}
const normalhealForAllItem = {name: 'normal heal all', amount: 10,damage: 40, regenHealth: 20, focusCost: 0, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}
const cureSleepHealItem = {name: 'cure sleep', amount: 10, damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: false, healing: true, sleep: false, cureConfusion: false, cureSleep: true, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}
const cureSleepForAllItem = {name: 'cure sleep for all', amount: 10, damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0,healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, cureConfusion: false, cureSleep: true, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}
const cureConfusionHealItem = {name: 'cure confusion', amount: 10, damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: false, healing: true, sleep: false, cureConfusion: true, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}
const cureConfusionForAllItem = {name: 'cure confusion for all', amount: 10, damage: 40, regenHealth: 0, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, cureConfusion: true, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}
const reviveItem = {name: 'Revive', amount: 10, damage: 40, regenHealth: 20, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: false, healing: true, sleep: false, cureConfusion: true, cureSleep: true, cureKnockOut: true, redirect: false, revive: true, animation: AttackOneAnimations}
const reviveAllItem = {name: 'Revive All', amount: 10,damage: 40, regenHealth: 30, focusCost: 20, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, cureConfusion: true, cureSleep: true, cureKnockOut: true, redirect: false, revive: true, animation: AttackOneAnimations}
const restoreFocus = {name: 'Restore Focus', amount: 3, damage: 40, regenHealth: 30, focusCost: 0, staminaCost: 40, healConfused: false, attackConfused: true, element: 'heal', forAll: false, healing: true, sleep: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}
const restoreFocusForAllItem = {name: 'Restore Focus All', amount: 10,damage: 0, regenHealth: 0, focusCost: 0, staminaCost: 40, healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}
const restoreStamina = {name: 'Restore Stamina', amount: 3, damage: 0, regenHealth: 0, focusCost: 40, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: false, healing: true, sleep: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}
const restoreStaminaForAllItem = {name: 'Restore Stamina All', amount: 10,damage: 0, regenHealth: 0, focusCost: 40, staminaCost: 0, healConfused: false, attackConfused: true, element: 'heal', forAll: true, healing: true, sleep: false, cureConfusion: false, cureSleep: false, cureKnockOut: false, redirect: false, revive: false, animation: AttackOneAnimations}


const attackClass1 = [normalAttack, normalAttackForAll, normalHeal, normalhealForAll, sleepAttack, sleepAttackForAll, confusedAttack, confusedAttackForAll, waterAttack, waterAttackForAll, cloneAttack, divideByZeroAttack, redirect, redirectForAll]
const attackClass3 = [earthAttack]
const attackClass2 = [normalAttack, normalAttackForAll, normalHeal, normalhealForAll, sleepAttack, sleepAttackForAll, confusedAttack, cureSleepHeal, cureConfusionForAll, cureSleepForAll, cureConfusionHeal, revive, reviveAll, redirect, redirectForAll]
const arrayAttacks = [normalAttack, normalAttackForAll, normalHeal, normalhealForAll, sleepAttack, sleepAttackForAll, confusedAttack, confusedAttackForAll, waterAttack, waterAttackForAll, cloneAttack, divideByZeroAttack, sleepAttackForAll, confusedAttack, cureSleepHeal, cureConfusionForAll, cureSleepForAll, cureConfusionHeal, revive, reviveAll, redirect, redirectForAll]
const inventory = [normalHealItem, normalhealForAllItem, cureSleepHealItem, cureConfusionForAllItem, cureConfusionHealItem, reviveItem, reviveAllItem, cureSleepForAllItem, restoreFocus, restoreFocusForAllItem, restoreStamina, restoreStaminaForAllItem]
const arrayInvtory = [normalHealItem, normalhealForAllItem, cureSleepHealItem, cureConfusionForAllItem, cureConfusionHealItem, cureConfusionForAllItem, reviveItem, reviveAllItem, cureSleepForAllItem, restoreFocus, restoreFocusForAllItem, restoreStamina, restoreStaminaForAllItem]

const nullClass = ['']
const nullClass2 = ['fire', 'water']

const weaknessesClass = ['fire', 'earth']
const weaknessesClass2 = ['earth', 'water']

const knockedOutCounter = 1
const confusedCounter = 2
const sleepCounter = 1

const knockedOutCounterPlayer = 1
const confusedCounterPlayer = 2
const sleepCounterPlayer = 2
var timerForI = {
    i: 0
}

class turnSpot{
    constructor({position, velocity, }){
        this.position = position
        this.velocity = velocity
        this.width = 50
        this.height = 27
    }

    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 27, 50)
    }
    update(){
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

    }
}


const playersTurnSpot = new turnSpot({
    position: {
        x: 200,
        y: 500,
    },
    velocity: {
        x: 0,
        y: 0
    },
})

const enemiesTurnSpot = new turnSpot({
    position: {
        x: 400,
        y: 500,
    },
    velocity: {
        x: 0,
        y: 0
    },
})

const playerOneAnimations = new Sprite5({
    position: {
        x: 100,
        y: 400,
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset:{
        x: 125,
        y: 151
    },
    sprites: {
        idle: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle.png',
            framesMax: 12
        },
        idleLeft: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_left.png',
            framesMax: 12
        },
        run: {
            imageSrc: './assets/IgnoreFolder/Shadow_Run.png',
            framesMax: 8
        },
        runLeft: {
            imageSrc: './assets/IgnoreFolder/Shadow_Run_left.png',
            framesMax: 8
        }, 
        healing: {
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_healingNow.png',
            framesMax: 16,
            timesPlayed: 6,
        },
        confused: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_confused.png',
            framesMax: 12
        },
        sleeping: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_sleeping_left.png',
            framesMax: 12
        }, 
        knockedOut: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_knockedOut_left.png',
            framesMax: 12
        }, 
        hitLeft:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_left.png',
            framesMax: 3
        },
        missed:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_miss.png',
            framesMax: 3
        },
        dodge:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_Dodge.png',
            framesMax: 3
        },
        reflect:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_reflect.png',
            framesMax: 3
        }

        
    }, 
    framesMax: 12,
    scale: 1.8,
    imageSrc: './assets/IgnoreFolder/shadowStormIdle.png'
    
})

const playerTwoAnimations = new Sprite5({
    position: {
        x: 150,
        y: 500,
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset:{
        x: 125,
        y: 151
    },
    sprites: {
        idle: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle.png',
            framesMax: 12
        },
        idleLeft: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_left.png',
            framesMax: 12
        },
        run: {
            imageSrc: './assets/IgnoreFolder/Shadow_Run.png',
            framesMax: 8
        },
        runLeft: {
            imageSrc: './assets/IgnoreFolder/Shadow_Run_left.png',
            framesMax: 8
        }, 
        healing: {
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_healingNow.png',
            framesMax: 16,
            timesPlayed: 6,
        },
        confused: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_confused.png',
            framesMax: 12
        },
        sleeping: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_sleeping_left.png',
            framesMax: 12
        }, 
        knockedOut: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_knockedOut_left.png',
            framesMax: 12
        }, 
        hitLeft:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_left.png',
            framesMax: 3
        },
        missed:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_miss.png',
            framesMax: 3
        },
        dodge:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_Dodge.png',
            framesMax: 3
        },
        reflect:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_reflect.png',
            framesMax: 3
        }

        
    }, 
    framesMax: 12,
    scale: 1.8,
    imageSrc: './assets/IgnoreFolder/shadowStormIdle.png'
    
})

const playerThreeAnimations = new Sprite5({
    position: {
        x: 100,
        y: 560,
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset:{
        x: 125,
        y: 151
    },
    sprites: {
        idle: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle.png',
            framesMax: 12
        },
        idleLeft: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_left.png',
            framesMax: 12
        },
        run: {
            imageSrc: './assets/IgnoreFolder/Shadow_Run.png',
            framesMax: 8
        },
        runLeft: {
            imageSrc: './assets/IgnoreFolder/Shadow_Run_left.png',
            framesMax: 8
        }, 
        healing: {
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_healingNow.png',
            framesMax: 16,
            timesPlayed: 6,
        },
        confused: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_confused.png',
            framesMax: 12
        },
        sleeping: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_sleeping_left.png',
            framesMax: 12
        }, 
        knockedOut: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_knockedOut_left.png',
            framesMax: 12
        }, 
        hitLeft:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_left.png',
            framesMax: 3
        },
        missed:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_miss.png',
            framesMax: 3
        },
        dodge:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_Dodge.png',
            framesMax: 3
        },
        reflect:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_reflect.png',
            framesMax: 3
        }

        
    }, 
    framesMax: 12,
    scale: 1.8,
    imageSrc: './assets/IgnoreFolder/shadowStormIdle.png'
    
})

const enemyOneAnimations = new Sprite5({
    position: {
        x: 500,
        y: 400,
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset:{
        x: 125,
        y: 151
    },
    sprites: {
        idle: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle.png',
            framesMax: 12
        },
        idleLeft: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_left.png',
            framesMax: 12
        },
        run: {
            imageSrc: './assets/IgnoreFolder/Shadow_Run.png',
            framesMax: 8
        },
        runLeft: {
            imageSrc: './assets/IgnoreFolder/Shadow_Run_left.png',
            framesMax: 8
        }, 
        hitLeft:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_left.png',
            framesMax: 3
        },
        confusedLeft: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_confused.png',
            framesMax: 12
        },
        sleepingLeft: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_sleeping_left.png',
            framesMax: 12
        }, 
        knockedOut: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_knockedOut_left.png',
            framesMax: 12
        }, 
        deathLeft: {
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_death_left.png',
            framesMax: 13
        },
        missed:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_miss.png',
            framesMax: 3
        },
        dodge:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_Dodge.png',
            framesMax: 3
        },
        reflect:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_reflect.png',
            framesMax: 3
        }

        

        
    }, 
    framesMax: 12,
    scale: 1.8,
    imageSrc: './assets/IgnoreFolder/shadowStormIdle_left.png'
    
})
const enemyTwoAnimations = new Sprite5({
    position: {
        x: 500,
        y: 500,
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset:{
        x: 125,
        y: 151
    },
    sprites: {
        idle: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle.png',
            framesMax: 12
        },
        idleLeft: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_left.png',
            framesMax: 12
        },
        run: {
            imageSrc: './assets/IgnoreFolder/Shadow_Run.png',
            framesMax: 8
        },
        runLeft: {
            imageSrc: './assets/IgnoreFolder/Shadow_Run_left.png',
            framesMax: 8
        }, 
        hitLeft:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_left.png',
            framesMax: 3
        },
        confusedLeft: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_confused.png',
            framesMax: 12
        },
        sleepingLeft: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_sleeping_left.png',
            framesMax: 12
        }, 
        knockedOut: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_knockedOut_left.png',
            framesMax: 12
        }, 
        deathLeft: {
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_death_left.png',
            framesMax: 13
        },
        missed:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_miss.png',
            framesMax: 3
        },
        dodge:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_Dodge.png',
            framesMax: 3
        },
        reflect:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_reflect.png',
            framesMax: 3
        }

        
    }, 
    framesMax: 12,
    scale: 1.8,
    imageSrc: './assets/IgnoreFolder/shadowStormIdle_left.png'
    
})

const enemyThreeAnimations = new Sprite5({
    position: {
        x: 500,
        y: 560,
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset:{
        x: 125,
        y: 151
    },
    sprites: {
        idle: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle.png',
            framesMax: 12
        },
        idleLeft: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_left.png',
            framesMax: 12
        },
        run: {
            imageSrc: './assets/IgnoreFolder/Shadow_Run.png',
            framesMax: 8
        },
        runLeft: {
            imageSrc: './assets/IgnoreFolder/Shadow_Run_left.png',
            framesMax: 8
        }, 
        hitLeft:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_left.png',
            framesMax: 3
        },
        confusedLeft: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_confused.png',
            framesMax: 12
        },
        sleepingLeft: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_sleeping_left.png',
            framesMax: 12
        }, 
        knockedOut: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_knockedOut_left.png',
            framesMax: 12
        }, 
        deathLeft: {
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_death_left.png',
            framesMax: 13
        },
        missed:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_miss.png',
            framesMax: 3
        },
        dodge:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_Dodge.png',
            framesMax: 3
        },
        reflect:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_reflect.png',
            framesMax: 3
        }

        
    }, 
    framesMax: 12,
    scale: 1.8,
    imageSrc: './assets/IgnoreFolder/shadowStormIdle_left.png'
    
})

const enemyFourAnimations = new Sprite5({
    position: {
        x: 500,
        y: 600,
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset:{
        x: 125,
        y: 151
    },
    sprites: {
        idle: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle.png',
            framesMax: 12
        },
        idleLeft: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_left.png',
            framesMax: 12
        },
        run: {
            imageSrc: './assets/IgnoreFolder/Shadow_Run.png',
            framesMax: 8
        },
        runLeft: {
            imageSrc: './assets/IgnoreFolder/Shadow_Run_left.png',
            framesMax: 8
        }, 
        hitLeft:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_left.png',
            framesMax: 3
        },
        confusedLeft: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_confused.png',
            framesMax: 12
        },
        sleepingLeft: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_sleeping_left.png',
            framesMax: 12
        }, 
        knockedOut: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_knockedOut_left.png',
            framesMax: 12
        }, 
        deathLeft: {
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_death_left.png',
            framesMax: 13
        },
        missed:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_miss.png',
            framesMax: 3
        },
        dodge:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_Dodge.png',
            framesMax: 3
        },
        reflect:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_reflect.png',
            framesMax: 3
        }

        
    }, 
    framesMax: 12,
    scale: 1.8,
    imageSrc: './assets/IgnoreFolder/shadowStormIdle_left.png'
    
})

const cloneOneAnimations = new Sprite5({
    position: {
        x: 50,
        y: 400,
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset:{
        x: 125,
        y: 151
    },
    sprites: {
        idle: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle.png',
            framesMax: 12
        },
        idleLeft: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_left.png',
            framesMax: 12
        },
        run: {
            imageSrc: './assets/IgnoreFolder/Shadow_Run.png',
            framesMax: 8
        },
        runLeft: {
            imageSrc: './assets/IgnoreFolder/Shadow_Run_left.png',
            framesMax: 8
        }, 
        healing: {
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_healingNow.png',
            framesMax: 16,
            timesPlayed: 6,
        },
        confused: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_confused.png',
            framesMax: 12
        },
        sleeping: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_sleeping_left.png',
            framesMax: 12
        }, 
        knockedOut: {
            imageSrc: './assets/IgnoreFolder/shadowStormIdle_knockedOut_left.png',
            framesMax: 12
        }, 
        hitLeft:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_left.png',
            framesMax: 3
        },
        missed:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_miss.png',
            framesMax: 3
        },
        dodge:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_Dodge.png',
            framesMax: 3
        },
        reflect:{
            imageSrc: './assets/IgnoreFolder/Shadow_Of_Storms_reflect.png',
            framesMax: 3
        }

        
    }, 
    framesMax: 12,
    scale: 1.8,
    imageSrc: './assets/IgnoreFolder/shadowStormIdle.png'
    
})

var playerOne = {
    name: 'Player One',    
    health: 400, 
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    focus: 100,
    dodge: 0.4,
    dodged: false,
    maxFocus: 100,
    isPlayAble: true,
    knockedOut: false,
    isSleeping: false,
    nullSleeping: false,
    redirect: true,
    weakness: weaknessesClass2,
    attackClass: attackClass1,
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
    block: false,
    nameId: "playerOneName",
    nameStatus: "#playerOneName",
    healthBarId: "playerOneHealth",
    healthBar: "#playerOneHealth",
    staminaBarId: "playerOneStamina",
    staminaBar: "#playerOneStamina",
    focusBarId: "playerOneFocus",
    focusBar: "#playerOneFocus",
    spriteAnimation: playerOneAnimations,
    playAnimation: false,
    playHealingAnimation: false,
    playHealingAnimationOnce: false,
    inttialSpot: {
        x: 100,
        y: 400,
    },

}

var playertwo = {
    name: 'Player two',    
    health: 100, 
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    focus: 100,
    dodge: 0.5,
    dodged: false,
    maxFocus: 100,
    isPlayAble: true,
    knockedOut: false,
    isSleeping: false,
    nullSleeping: false,
    redirect: false,
    dead: false,
    block: false,
    weakness: weaknessesClass2,
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
    spriteAnimation: playerTwoAnimations,
    playAnimation: false,
    playHealingAnimation: false,
    playHealingAnimationOnce: false,
    inttialSpot: {
        x: 150,
        y: 500,
    },
    


}

var playerThree = {
    name: 'Player Three',    
    health: 100, 
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    focus: 100,
    dodge: 0.5,
    dodged: false,
    maxFocus: 100,
    isPlayAble: true,
    knockedOut: false,
    isSleeping: false,
    nullSleeping: false,
    redirect: false,
    dead: false,
    block: false,
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
    spriteAnimation: playerThreeAnimations,
    playAnimation: false,
    playHealingAnimation: false,
    playHealingAnimationOnce: false,
    inttialSpot: {
        x: 100,
        y: 560,
    },


}

var enemyOne = {
    name: 'Enemy One',
    health: 100,
    maxHealth: 100,
    dodge: 0.0,
    dodged: false,
    isPlayAble: false,
    knockedOut: false,
    isSleeping: false,
    nullSleeping: false,
    redirect: true,
    block: false,
    weakness: weaknessesClass,
    attackClass: attackClass3,
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
    spriteAnimation: enemyOneAnimations,
    playAnimation: false,
    inttialSpot: {
        x: 500,
        y: 400,
    }

}

var enemy2 = {
    name: 'Enemy Two',
    health: 20,
    maxHealth: 100,
    dodge: 0.7,
    dodged: false,
    isPlayAble: false,
    knockedOut: false,
    isSleeping: false,
    nullSleeping: false,
    redirect: true,
    block: false,
    weakness: weaknessesClass,
    attackClass: attackClass3,
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
    spriteAnimation: enemyTwoAnimations,
    playAnimation: false,
    inttialSpot: {
        x: 500,
        y: 500,
    }

}

var enemy3 = {
    name: 'Enemy Three',
    health: 20,
    dodge: 0,
    dodged: false,
    maxHealth: 100,
    isPlayAble: false,
    knockedOut: false,
    isSleeping: false,
    nullSleeping: false,
    redirect: true,
    block: false,
    weakness: weaknessesClass2,
    attackClass: attackClass3,
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
    spriteAnimation: enemyThreeAnimations,
    playAnimation: false,
    inttialSpot: {
        x: 500,
        y: 560,
    }

}

var enemy4 = {
    name: 'Enemy Four',
    health: 10,
    dodge: 0.0,
    dodged: false,
    maxHealth: 100,
    isPlayAble: false,
    knockedOut: false,
    isSleeping: false,
    nullSleeping: false,
    redirect: true,
    block: false,
    weakness: weaknessesClass2,
    attackClass: attackClass3,
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
    spriteAnimation: enemyFourAnimations,
    playAnimation: false,
    inttialSpot: {
        x: 500,
        y: 600,
    }

}

// clones 
var cloneOne = {
    name: 'clone 1',    
    health: playerOne.health, 
    maxHealth: 100,
    stamina: 100,
    dodge: 0.5,
    dodged: false,
    maxStamina: 100,
    focus: 100,
    maxFocus: 100,
    isPlayAble: true,
    knockedOut: false,
    isSleeping: false,
    nullSleeping: false,
    redirect: false,
    block: false,
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
    spriteAnimation: cloneOneAnimations,
    playAnimation: false,
    playHealingAnimation: false,
    playHealingAnimationOnce: false,
    inttialSpot: {
        x: 50,
        y: 400,
    },

}

var cloneTwo = {
    name: 'Clone 2',    
    health: 49, 
    maxHealth: 100,
    stamina: 100,
    dodge: 0.5,
    dodged: false,
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
    spriteAnimation: playerOneAnimations

}

var cloneThree = {
    name: 'Clone 3',    
    health: 49, 
    dodge: 0.5,
    dodged: false,
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
    spriteAnimation: playerOneAnimations

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
let timesAnimateShouldPlay = 0
let runHealingOnce = false


let animationArray = []
let animateFirstPart = false
let animateSecondPart = false
let animateEndPart = false

let passOnce = false
let madeChoiceToPass = false

let runOnce = false
let toggleTurnPassedTurnBack = false
let runIdleAnimationOnce = false


var cloneArray = [cloneOne, cloneTwo, cloneThree]
var toggleNextTurn = false

let selectAttack = false;
let selectPassTurn = false;
let selectHealing = false;
let selectingItem = false;
let enemyAttacking = false;
let playSong = false
let enemiesDead = []
let playersDead = []
let playerWins = false
let enemyWins = false

let playAnimation

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
                enetityArray2.push(playerOne)
                enetityArray2.push(playertwo)
                enetityArray2.push(playerThree)
                enetityArray2.push(enemyOne)
                enetityArray2.push(enemy2) 
                enetityArray2.push(enemy3) 
                enetityArray2.push(enemy4) 
                
            }else{
                enetityArray.push(enemyOne)
                enetityArray.push(playerOne)
            }

            // creating interface 
            createEnemyInterface(enetityArray)
            createPlayerInterface(enetityArray)
            startBattle = false
        }
        
        if(playerWins == false && enemyWins == false){

        
            entity = enetityArray[0]

            background8.update()

            // animate the hills 
            background6.update()
        
            // animate the forest
            background7.update() 
            
            // animate the snow 
            background3.update()

            
            playersTurnSpot.update()
            enemiesTurnSpot.update()

       
            if(entity.isPlayAble && entity.playAnimation == false){
                
                gsap.to(entity.spriteAnimation.position, {
                    x: playersTurnSpot.position.x,
                    y: playersTurnSpot.position.y
                })

                if(rechtangularCollision({
                    rectangle1: entity.spriteAnimation,
                    rectangle2: playersTurnSpot,
                    posX: 20,
                    posY: 0
                })){
                    
                    if(entity.confused){
                        entity.spriteAnimation.framesMax = entity.spriteAnimation.sprites.confused.framesMax
                        entity.spriteAnimation.image = entity.spriteAnimation.sprites.confused.image
                    }else if(entity.knockedOut){
                        entity.spriteAnimation.framesMax = entity.spriteAnimation.sprites.confused.framesMax
                        entity.spriteAnimation.image = entity.spriteAnimation.sprites.confused.image
                    }else if(entity.isSleeping){
                        entity.spriteAnimation.framesMax = entity.spriteAnimation.sprites.confused.framesMax
                        entity.spriteAnimation.image = entity.spriteAnimation.sprites.confused.image
                    }else{
                        entity.spriteAnimation.framesMax = 12
                        entity.spriteAnimation.image = player.sprites.idle.image
                    }
                    
                }else{

                    // change run sprite to the confused and etc dots and circles 
                    if(entity.confused){
                        entity.spriteAnimation.framesMax = entity.spriteAnimation.sprites.confused.framesMax
                        entity.spriteAnimation.image = entity.spriteAnimation.sprites.confused.image
                    }else if(entity.knockedOut){
                        entity.spriteAnimation.framesMax = entity.spriteAnimation.sprites.knockedOut.framesMax
                        entity.spriteAnimation.image = entity.spriteAnimation.sprites.knockedOut.image
                    }else if(entity.sleep){
                        entity.spriteAnimation.framesMax = entity.spriteAnimation.sprites.sleeping.framesMax
                        entity.spriteAnimation.image = entity.spriteAnimation.sprites.sleeping.image
                    }else{
                        entity.spriteAnimation.framesMax = 8
                        entity.spriteAnimation.image = player.sprites.run.image
                    }
                    
                }
            
                // entity.spriteAnimation.position.x = playersTurnSpot.position.x
                // entity.spriteAnimation.position.y = playersTurnSpot.position.y
            }else if (entity.isPlayAble == false && entity.playAnimation == false){
                if(entity.confused || entity.isSleeping || entity.knockedOut){
                    if(entity.confused){
                        entity.spriteAnimation.framesMax = 12
                        entity.spriteAnimation.image = entity.spriteAnimation.sprites.confusedLeft.image
                    }else if(entity.isSleeping){
                        entity.spriteAnimation.framesMax = 12
                        entity.spriteAnimation.image = entity.spriteAnimation.sprites.sleepingLeft.image
                    }else if(entity.knockedOut){
                        entity.spriteAnimation.framesMax = 12
                        entity.spriteAnimation.image = entity.spriteAnimation.sprites.knockedOut.image
                    }
                    else{
                        entity.spriteAnimation.framesMax = 12
                        entity.spriteAnimation.image = entity.spriteAnimation.sprites.idleLeft.image
                        
                    }

                    gsap.to(entity.spriteAnimation.position, {
                        x: enemiesTurnSpot.position.x,
                        y: enemiesTurnSpot.position.y
                    })

                }else{
                    gsap.to(entity.spriteAnimation.position, {
                        x: enemiesTurnSpot.position.x,
                        y: enemiesTurnSpot.position.y
                    })
        
                    if(rechtangularCollision({
                        rectangle1: entity.spriteAnimation,
                        rectangle2: enemiesTurnSpot,
                        posX: 0,
                        posY: 0
                    })){
                        if(entity.playAnimation == false){
                            entity.spriteAnimation.framesMax = 12
                            entity.spriteAnimation.image = player.sprites.idleLeft.image
                        }   
                        
                    }else{
                        entity.spriteAnimation.framesMax = 8
                        entity.spriteAnimation.image = player.sprites.runLeft.image
                    }
                }
                
                
            }

            // // animate the foreground 
            // background2.update()
            // // animate black bar
            // background4.update()    
            // // animate filter
            // background5.update()
            

            enetityArray.forEach((e) => {
                
                if(e.isPlayAble == true && e.name != entity.name && entity.playAnimation == false){
                
                    gsap.to(e.spriteAnimation.position, {
                        x: e.inttialSpot.x,
                        y: e.inttialSpot.y
                    })

                    if(e.confused){
                        e.spriteAnimation.framesMax = e.spriteAnimation.sprites.confused.framesMax
                        e.spriteAnimation.image = e.spriteAnimation.sprites.confused.image
                    }else if(e.knockedOut){
                        e.spriteAnimation.framesMax = e.spriteAnimation.sprites.knockedOut.framesMax
                        e.spriteAnimation.image = e.spriteAnimation.sprites.knockedOut.image
                    }else if(e.isSleeping){
                        e.spriteAnimation.framesMax = e.spriteAnimation.sprites.sleeping.framesMax
                        e.spriteAnimation.image = e.spriteAnimation.sprites.sleeping.image
                    }else{
                        e.spriteAnimation.framesMax = 12
                        e.spriteAnimation.image = player.sprites.idle.image
                    }

                    
                    
                    
                    // e.spriteAnimation.position.x = e.inttialSpot.x
                    // e.spriteAnimation.position.y = e.inttialSpot.y
                }else if (e.isPlayAble == false && e.name != entity.name && entity.playAnimation == false){
                    if(e.confused){
                        e.spriteAnimation.framesMax = 12
                        e.spriteAnimation.image = e.spriteAnimation.sprites.confusedLeft.image
                    }else if(e.isSleeping){
                        console.log("conole:")
                        e.spriteAnimation.framesMax = 12
                        e.spriteAnimation.image = e.spriteAnimation.sprites.sleepingLeft.image
                    }else if(e.knockedOut){
                        e.spriteAnimation.framesMax = 12
                        e.spriteAnimation.image = e.spriteAnimation.sprites.knockedOut.image
                    }
                    else{
                        e.spriteAnimation.framesMax = 12
                        e.spriteAnimation.image = e.spriteAnimation.sprites.idleLeft.image
                        
                    }

                    gsap.to(e.spriteAnimation.position, {
                        x: e.inttialSpot.x,
                        y: e.inttialSpot.y
                    })
                    
                }
                e.spriteAnimation.update()
            })


            //sentity.spriteAnimation.update()
            if(startBattle == false){
                
                // winning conditon
                enemiesDead = enetityArray.filter((entities) => entities.isPlayAble == false );
                playersDead = enetityArray.filter((entities) => entities.isPlayAble == true && entities.dead);

                if(playersDead.length == enetityArray.filter((entities) => entities.isPlayAble == true).length){
                    console.log("losss")
                    enemyWins = true
                }else if(enemiesDead.length == 0){
                    playerWins = true
                    console.log("winners")
                }

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

                // check to see if someone is dead 
                


                if(entity.isPlayAble && entity.dead == true){
                    resetAttackVars()
                }
                if(entity.isPlayAble && entity.passedTurn == false && entity.dead == false){
                    
                    // then let player play 
                    //  console.log('players turn') 

                    if(entity.confusedCount == confusedCounter && entity.playAnimation == false){
                        entity.confused = false
                        entity.confusedCount = 0 
                    }

                    if(entity.knockedOutCount == knockedOutCounter && entity.playAnimation == false){
                        entity.knockedOut = false
                        entity.knockedOutCount = 0 
                    }

                    if(entity.sleepCount == sleepCounter && entity.playAnimation == false){
                        entity.isSleeping = false
                        entity.sleepCounter = 0 
                    }


                    if(entity.confused == true && entity.confusedCount < confusedCounter && entity.playAnimation == false){
                        // confused
                        console.log("heey   confused")
                        document.getElementById('attackButton').disabled = true
                        document.getElementById('passTurnButton').disabled = true
                        document.getElementById('healButton').disabled = true

                        document.getElementById('itemButton').addEventListener('click', () =>{
                            console.log("clickedeeee")
                            selectingItem = true
                            
                            console.log("oa")
                                // if clicked disable this button and open a new menu 
                        })

                        if(selectingItem == true){
                            playerItem(entity)
                        }
                        document.getElementById('nexTurnButton').addEventListener('click', function() {
                            document.getElementById('nexTurnButton').disabled = true
                                // if clicked disable this button and open a new menu 
                        });
        
                        if(document.getElementById('nexTurnButton').disabled == true){
                            console.log("player is confused " + entity.name + ":" + entity.confused + " " + entity.confusedCount)
                            entity.confusedCount += 1
                            resetAttackVars()
                            //nextTurn(enetityArray)
                            document.getElementById('nexTurnButton').disabled = false
                            
                        }  
                
                    } else if(entity.knockedOut == true && entity.knockedOutCount < knockedOutCounter && entity.playAnimation == false){
                        // knocked out 
                        
                            console.log("player is knockout " + entity.name + ":" + entity.knockedOut + " " + entity.knockedOutCount)
                            entity.knockedOutCount += 1
                            nextTurn(enetityArray)
                        
                        // sleep 
                    }else if(entity.isSleeping == true && entity.sleepCount < sleepCounter && entity.playAnimation == false){
                        // sleep 
                        
                            console.log("player is sleep " + entity.name + ":" + entity.isSleeping + " " + entity.sleepCount)
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
                            
                        }

                        /// ----------- next Turn 
                        document.getElementById('nexTurnButton').addEventListener('click', function() {
                            document.getElementById('nexTurnButton').disabled = true
                                // if clicked disable this button and open a new menu 
                        });

                        if(document.getElementById('nexTurnButton').disabled == true){
                            nextTurn(enetityArray)
                            document.getElementById('nexTurnButton').disabled = false
                            
                        }
                    }
                        
                }else if(entity.isPlayAble && entity.passedTurn == true && entity.dead == false){


                    

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
                        selectingItem = true
                        
                        console.log("oa")
                            // if clicked disable this button and open a new menu 
                    })

                    if(selectingItem == true){
                        playerItem(entity)
                    }



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

                    if(rechtangularCollision({
                        rectangle1: entity.spriteAnimation,
                        rectangle2: enemiesTurnSpot,
                        posX: 0,
                        posY: 0
                    })){
                        selectAttack = false

                        //console.log("enemy is knockout " + entity.name + ":" + entity.knockedOut + " " + entity.knockedOutCount)

                        // we need to reset the status of the enemy 
                        if(entity.confusedCount == confusedCounter  && entity.playAnimation == false){
                            entity.confused = false
                            entity.confusedCount = 0 
                        }

                        if(entity.knockedOutCount == knockedOutCounter  && entity.playAnimation == false){
                            entity.knockedOut = false
                            entity.knockedOutCount = 0 
                        }

                        if(entity.sleepCount == sleepCounter  && entity.playAnimation == false){
                            entity.isSleeping = false
                            entity.sleepCounter = 0 
                        }


                        if( entity.confused == true && entity.confusedCount < confusedCounter && entity.playAnimation == false){
                            // confused
                            
                            // console.log("enemy is confused " + entity.name + ":" + entity.confused + " " + entity.confusedCount)
                                entity.confusedCount += 1
                                nextTurn(enetityArray)
                            
                            
                            
                        } else if(entity.knockedOut == true && entity.knockedOutCount < knockedOutCounter  && entity.playAnimation == false){
                            // knocked out 
                            
                                //console.log("enemy is knockout " + entity.name + ":" + entity.knockedOut + " " + entity.knockedOutCount)
                                entity.knockedOutCount += 1
                                nextTurn(enetityArray)
                            
                            // sleep 
                        }else if(entity.isSleeping == true && entity.sleepCount < sleepCounter && entity.playAnimation == false){
                            // sleep 
                            
                                //console.log("enemy is sleep " + entity.name + ":" + entity.isSleeping + " " + entity.sleepCount)
                                entity.sleepCount += 1
                                nextTurn(enetityArray)
                            
                        }else{
                            console.log("hehehehehehe")
                            if(enemyAttacking == false){
                                document.getElementById('nexTurnButton').disabled = true
                                enemyAttack(entity)
                            }else if(enemyAttacking){
                                // then let enemy play 
                                
                                document.getElementById('attackButton').disabled = true
                                document.getElementById('backButton2').style.display = 'none'
                                
                                //console.log(entity.name)
                            }
                        
                            
                        }
                    }
                    
                }
            } 
        }else{
            playerWins = true
            console.log("winners ")
        }
    }
}

let findAttackAndPlayer = false
let findHit = false
let enemyEndTurn = false
let randomAttack 
let radnomPlayer 
let playerArray = []
let startEnemyAnimation = false
let hitAllRedict = false
let hitAllRedictAnimation = false
let redirectAttack = false


function enemyAttack(enemy){
    //console.log("enemy can Attack")
    

    // first select random attack and player
    if(findAttackAndPlayer == false){
        enemy.playAnimation = true
        randomAttack = enemy.attackClass[Math.floor(Math.random() * enemy.attackClass.length)]
        
        //console.log()
        // playerArray = enetityArray.filter((entity) => entity.isPlayAble == true);
        

        if(randomAttack.healing){
            Object.values(enetityArray).forEach((players) =>{
                if(players.isPlayAble == false){
                    console.log("playerrssss ")
                    playerArray.push(players)
                }
            })
            radnomPlayer =  playerArray [Math.floor(Math.random() * playerArray .length)]
        }else if(randomAttack.healing == false){
            Object.values(enetityArray).forEach((players) =>{
                if(players.isPlayAble && players.dead == false ){
                    console.log("playerrssss ")
                    playerArray.push(players)
                }
            })
            radnomPlayer =  playerArray[Math.floor(Math.random() * playerArray .length)]
        }
        console.log(radnomPlayer)
        
        console.log(randomAttack)
        findHit = true

        
        findAttackAndPlayer = true
        
    }
    
    // second figure out if it will hit all or hit one 
    if(findHit == true){

        if(randomAttack.forAll == false){



            if(radnomPlayer.isPlayAble && radnomPlayer.redirect == false){
                radnomPlayer.dodged = false
                let d2 = Math.random();
                if (d2 < radnomPlayer.dodge){
                        
                    console.log("worked") 
                    if(radnomPlayer.knockedOut == false && radnomPlayer.isSleeping == false && radnomPlayer.confused == false){
                        radnomPlayer.dodged = true
                    }else{
                        radnomPlayer.dodged = false
                    }
                    
                }else{
                    radnomPlayer.dodged = false
                    console.log("didnt work: " + radnomPlayer.name + " : " +  d2) 
                    
                
                } 
                
                if(radnomPlayer.dodged == false && radnomPlayer.weakness.includes(randomAttack.element) == true  && radnomPlayer.isSleeping == false && radnomPlayer.confused == false && radnomPlayer.nullify.includes(randomAttack.element) == false){
                    radnomPlayer.knockedOut = true
                }
    
                if(radnomPlayer.dodged == false && randomAttack.confused == true && radnomPlayer.isSleeping == false && radnomPlayer.knockedOut == false &&  radnomPlayer.nullify.includes(randomAttack.element) == false){
                    radnomPlayer.confused = true
                }
    
                if(radnomPlayer.dodged == false && randomAttack.sleep == true && radnomPlayer.confused == false  && radnomPlayer.knockedOut == false && radnomPlayer.nullify.includes(randomAttack.element) == false){
                    radnomPlayer.isSleeping = true
                    console.log("nothing will happen")
                    //resetAttackVars()
                }
    
                if(radnomPlayer.dodged == false && radnomPlayer.nullify.includes(randomAttack.element) == false){
                    radnomPlayer.health -= randomAttack.damage
                    gsap.to(`${radnomPlayer.healthBar}`, {
                        width: radnomPlayer.health + '%'
                    })
                }
                
                if(radnomPlayer.dodged == false &&  radnomPlayer.focus - randomAttack.focusTake > 0 ){
                    radnomPlayer.focus -= randomAttack.focusTake
                    gsap.to(`${radnomPlayer.focusBar}`, {
                        width: radnomPlayer.focus + '%'
                    })
                }else if(radnomPlayer.dodged == false &&  radnomPlayer.focus - randomAttack.focusTake <= 0){
                    radnomPlayer.focus = 0
                    gsap.to(`${radnomPlayer.focusBar}`, {
                        width: radnomPlayer.focus + '%'
                    })
                }
                

                if(radnomPlayer.dodged == false &&  radnomPlayer.stamina - randomAttack.staminaTake > 0){
                    radnomPlayer.stamina -= randomAttack.staminaTake
                    gsap.to(`${radnomPlayer.staminaBar}`, {
                        width: radnomPlayer.stamina + '%'
                    })
                }else if(radnomPlayer.dodged == false && radnomPlayer.stamina - randomAttack.staminaTake <= 0){
                    radnomPlayer.stamina = 0
                    gsap.to(`${radnomPlayer.staminaBar}`, {
                        width: radnomPlayer.stamina + '%'
                    })
                }
                

                if(radnomPlayer.health <= 0){
                    radnomPlayer.dead = true
                }

                let enemyAnimations = createAttackAnimation(radnomPlayer.spriteAnimation, randomAttack)
                animationArray.push(enemyAnimations)
                startEnemyAnimation = true
                //enemyEndTurn = true
                findHit = false
            }else if(radnomPlayer.dodged == false && radnomPlayer.isPlayAble && radnomPlayer.redirect == true){
               
                hitAllRedictAnimation = true
                    
                
                if(enemy.weakness.includes(randomAttack.element) == true  && enemy.isSleeping == false && enemy.confused == false && enemy.nullify.includes(randomAttack.element) == false){
                    enemy.knockedOut = true
                }
    
                if(randomAttack.confused == true && enemy.isSleeping == false && enemy.knockedOut == false &&  enemy.nullify.includes(randomAttack.element) == false){
                    enemy.confused = true
                }
    
                if(randomAttack.sleep == true && enemy.confused == false  && enemy.knockedOut == false && enemy.nullify.includes(randomAttack.element) == false){
                    enemy.isSleeping = true
                    console.log("nothing will happen")
                    //resetAttackVars()
                }
    
                if(enemy.nullify.includes(randomAttack.element) == false){
                    enemy.health -= randomAttack.damage
                    gsap.to(`${enemy.healthBar}`, {
                        width: enemy.health + '%'
                    })
                }
                
                
                if(enemy.health <= 0){
                    enemy.dead = true
                }
                let enemyAnimations = createAttackAnimation(enemy.spriteAnimation, randomAttack, false)
                animationArray.push(enemyAnimations)
                startEnemyAnimation = true
                //enemyEndTurn = true
                findHit = false

            }else if(radnomPlayer.isPlayAble == false){

                if(radnomPlayer.health + randomAttack.damage >= radnomPlayer.maxHealth){
                    radnomPlayer.health = radnomPlayer.maxHealth
                    gsap.to(`${radnomPlayer.healthBar}`, {
                        width: radnomPlayer.health + '%'
                    })
                }else{
                    radnomPlayer.health += randomAttack.damage
                    gsap.to(`${radnomPlayer.healthBar}`, {
                        width: radnomPlayer.health + '%'
                    })
                }
                startEnemyAnimation = true
                //enemyEndTurn = true
                findHit = false
            }
            

            

            
        }else if(randomAttack.forAll){
            console.log()
            Object.values(enetityArray).forEach((players) =>{
                if(players.isPlayAble == true && randomAttack.healing == false ){
                    console.log(players.name)
                    players.dodged = false
                    let d2 = Math.random();
                    if (d2 < players.dodge){
                            
                        console.log("worked") 
                        //players.dodged = true
                        if(players.knockedOut == false && players.isSleeping == false && players.confused == false){
                            players.dodged = true
                        }else{
                            players.dodged = false
                        }
                    }else{
                        players.dodged = false
                        console.log("didnt work: " + players.name + " : " +  d2) 
                        
                    
                    } 
                    if(players.dodged == false && players.redirect){
                        hitAllRedictAnimation = true
                        hitAllRedict = true
                    }
                    if(players.dodged == false && players.redirect == false && players.weakness.includes(randomAttack.element) == true  && players.isSleeping == false && players.confused == false && players.nullify.includes(randomAttack.element) == false){
                        players.knockedOut = true
                    }
        
                    if(players.dodged == false && players.redirect == false && randomAttack.confused == true && players.isSleeping == false && players.knockedOut == false &&  players.nullify.includes(randomAttack.element) == false){
                        players.confused = true
                    }
        
                    if(players.dodged == false && players.redirect == false && randomAttack.sleep == true && players.confused == false  && players.knockedOut == false && players.nullify.includes(randomAttack.element) == false){
                        players.isSleeping = true
                        console.log("nothing will happen")
                        //resetAttackVars()
                    }
        
                    if(players.dodged == false && players.redirect == false && players.nullify.includes(randomAttack.element) == false){
                        players.health -= randomAttack.damage
                        gsap.to(`${players.healthBar}`, {
                            width: players.health + '%'
                        })
                    }
                    
                    if(players.dodged == false && players.redirect == false && players.focus - randomAttack.focusTake > 0){
                        players.focus -= randomAttack.focusTake
                        gsap.to(`${players.focusBar}`, {
                            width: players.focus + '%'
                        })
                    }else if(players.dodged == false && players.redirect == false && players.focus - randomAttack.focusTake <= 0){
                        players.focus = 0
                        gsap.to(`${players.focusBar}`, {
                            width: players.focus + '%'
                        })
                    }
                    

                    if(players.dodged == false && players.redirect == false && players.stamina - randomAttack.staminaTake > 0){
                        players.stamina -= randomAttack.staminaTake
                        gsap.to(`${players.staminaBar}`, {
                            width: players.stamina + '%'
                        })
                    }else if(players.dodged == false && players.redirect == false && players.stamina - randomAttack.staminaTake <= 0){
                        players.stamina = 0
                        gsap.to(`${players.staminaBar}`, {
                            width: players.stamina + '%'
                        })
                    }
        
                   

                    if(players.redirect == false && players.health <= 0){
                        players.dead = true
                    }
                    if(players.dodged == false && players.redirect == false ){
                        let enemyAnimations = createAttackAnimation(players.spriteAnimation, randomAttack, false)
                        animationArray.push(enemyAnimations)
                    }
                    
                }else if(players.dodged == false && players.isPlayAble == true && randomAttack.healing == false && players.redirect == false){
                    if(players.health + randomAttack.damage >= players.maxHealth){
                        players.health = players.maxHealth
                        gsap.to(`${players.healthBar}`, {
                            width: players.health + '%'
                        })
                    }else{
                        players.health += randomAttack.damage
                        gsap.to(`${ players.healthBar}`, {
                            width: players.health + '%'
                        })
                    }
                    
                }
            })
                
            if(hitAllRedict){
                if(enemy.weakness.includes(randomAttack.element) == true  && enemy.isSleeping == false && enemy.confused == false && enemy.nullify.includes(randomAttack.element) == false){
                    enemy.knockedOut = true
                }
    
                if(randomAttack.confused == true && enemy.isSleeping == false && enemy.knockedOut == false &&  enemy.nullify.includes(randomAttack.element) == false){
                    enemy.confused = true
                }
    
                if(randomAttack.sleep == true && enemy.confused == false  && enemy.knockedOut == false && enemy.nullify.includes(randomAttack.element) == false){
                    enemy.isSleeping = true
                    console.log("nothing will happen")
                    //resetAttackVars()
                }
    
                if(enemy.nullify.includes(randomAttack.element) == false){
                    enemy.health -= randomAttack.damage
                    gsap.to(`${enemy.healthBar}`, {
                        width: enemy.health + '%'
                    })
                }
                
                
                if(enemy.health <= 0){
                    enemy.dead = true
                }
                
                let enemyAnimations = createAttackAnimation(enemy.spriteAnimation, randomAttack, true)
                animationArray.push(enemyAnimations)
                hitAllRedict = false
            }

            startEnemyAnimation = true
            
            findHit = false
        }

    }


    if(startEnemyAnimation){
        console.log("heheh")
        enemy.playAnimation = true
        enemy.spriteAnimation.framesMax = randomAttack.animation.sprites.attack.framesMax
        enemy.spriteAnimation.image = randomAttack.animation.sprites.attack.image
        
        startEnemyAnimation = false
        
    }

    // once the animation is done then play thing 
    if(
        enemy.spriteAnimation.currentFrame == randomAttack.animation.sprites.attack.framesMax - 1
        && enemy.spriteAnimation.image == randomAttack.animation.sprites.attack.image

    ){
        // enemy.spriteAnimation.framesMax = randomAttack.animation.sprites.attack.framesMax
        // enemy.spriteAnimation.image = randomAttack.animation.sprites.attack.image
        // console.log("heheh2")
        // enemyEndTurn = true
        animateSecondPart = true
        enemy.spriteAnimation.currentFrame = 0

    }


    if(animateSecondPart){
        if(randomAttack.forAll){
            Object.values(enetityArray).forEach((players) =>{
                console.log("cole: " +  players.name + players.nullify.includes(randomAttack.element))

                if(players.dodged == false && players.isPlayAble == true && players.nullify.includes(randomAttack.element) == false && players.redirect == false){
                    console.log("cole: " +  players.name)
                    players.spriteAnimation.framesMax = players.spriteAnimation.sprites.hitLeft.framesMax
                    players.spriteAnimation.image = players.spriteAnimation.sprites.hitLeft.image
                    
                }else if(players.dodged == true && players.isPlayAble == true && players.nullify.includes(randomAttack.element) == false && players.redirect == false){
                    players.spriteAnimation.framesMax = players.spriteAnimation.sprites.dodge.framesMax
                    players.spriteAnimation.image = players.spriteAnimation.sprites.dodged.image
                    
                }else if(players.redirect == true && players.dodged == false && players.isPlayAble == true && players.nullify.includes(randomAttack.element) == false){
                    players.spriteAnimation.framesMax = players.spriteAnimation.sprites.reflect.framesMax
                    players.spriteAnimation.image = players.spriteAnimation.sprites.reflect.image
                    
                }

                if(hitAllRedictAnimation){
                    
                    console.log("cole: " +  enemy.name)
                    enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.hitLeft.framesMax
                    enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.hitLeft.image
                    //hitAllRedictAnimation = false
                }
            })
        }else if(!randomAttack.forAll){
            if(radnomPlayer.dodged == false && radnomPlayer.isPlayAble == true && radnomPlayer.nullify.includes(randomAttack.element) == false && radnomPlayer.redirect == false){
                    
                radnomPlayer.spriteAnimation.framesMax = radnomPlayer.spriteAnimation.sprites.hitLeft.framesMax
                radnomPlayer.spriteAnimation.image = radnomPlayer.spriteAnimation.sprites.hitLeft.image
                
            }else if(radnomPlayer.dodged == true && radnomPlayer.isPlayAble == true && radnomPlayer.nullify.includes(randomAttack.element) == false && radnomPlayer.redirect == false){
                    
                radnomPlayer.spriteAnimation.framesMax = radnomPlayer.spriteAnimation.sprites.dodge.framesMax
                radnomPlayer.spriteAnimation.image = radnomPlayer.spriteAnimation.sprites.dodge.image
                
            }else if(radnomPlayer.redirect == true && radnomPlayer.dodged == false && radnomPlayer.isPlayAble == true && radnomPlayer.nullify.includes(randomAttack.element) == false ){
                    
                radnomPlayer.spriteAnimation.framesMax = radnomPlayer.spriteAnimation.sprites.reflect.framesMax
                radnomPlayer.spriteAnimation.image = radnomPlayer.spriteAnimation.sprites.reflect.image
                
            }

            if(hitAllRedictAnimation){
                enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.hitLeft.framesMax
                enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.hitLeft.image
                //hitAllRedictAnimation = false
            }
        }
        
        if(hitAllRedictAnimation == false){
            enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.idle.framesMax
            enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.idle.image 
        }
        
        animationArray.forEach((animations) => {
           
            if(animations.currentFrame < animations.framesMax - 1){
                animations.update()
                
            }else{
                enemyEndTurn = true
                animateSecondPart = false
            }
                
        })
    }




    if(enemyEndTurn){

        if(enemy.confused && !enemy.dead){
            enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.confusedLeft.framesMax
            enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.confusedLeft.image
        }else if(enemy.isSleeping && !enemy.dead){
            enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.sleepingLeft.framesMax
            enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.sleepingLeft.image
        }else if(enemy.dead){
            console.log('hellp')
            enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.deathLeft.framesMax
            enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.deathLeft.image
        
        } 

        if(hitAllRedictAnimation){
           // we need to change the players aibl
            if(randomAttack.forAll == false){
                radnomPlayer.redirect = false
            }else if(randomAttack.forAll == true){
                Object.values(enetityArray).forEach((players) =>{
                    if(players.isPlayAble){
                        players.redirect = false
                    }
                })
            }

        }
        // now we need to take this and 

        document.getElementById('nexTurnButton').disabled = false
        enemyAttacking = true
        resetAttackVars()
        //enemyAttacking = true
    }
    
}

function nextTurn(array){
    document.getElementById('allMenu').style.display = 'flex'
    enetityArray[0].playAnimation = false

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

function resetAttackVars(){
    
    nextTurn(enetityArray)
    runIdleAnimationOnce = false
    animateEndPart = false
    hitAllRedictAnimation = false
    nowHitPlayer = false
    choosenAttack = false
    choosenAttackBoolean = false
    choosePlayerToHeal = false
    madeChoiceToPass = false
    addclone = false
    selectPassTurn = false
    selectHealing = false
    selectingItem = false

    enetityArray.forEach((enemy) => {
        if(enemy.isPlayAble == false && redirectAttack == true && enemy.redirect == true){
            enemy.redirect = false
        }
    })
    
    redirectAttack = false
    appendEnemyButtons = false
    hitAll = false
    hitOne = false
    chooseEntityToAttack = false
    selectAttack = false
    selectPassTurn = false
    runHealingOnce = false
    animationArray = []
    timesAnimateShouldPlay = 0
    console.log("hands")
    runIdleAnimationOnce = false
    findAttackAndPlayer = false
    enemyAttacking = false
    findHit = false
    enemyEndTurn = false
    playerArray = []
    openAttackMenu = true
    
    
    document.querySelector('#listEnemies').style.display = 'none'
    document.querySelector('#attackOptions').style.display = 'none'
    document.getElementById('differentAttacksMenu').style.display = 'grid'
    document.getElementById('backButton').style.display = 'none'
    document.getElementById('backButton2').style.display = 'none'
    nowHitPlayer = false

}
// let make the item options as well 
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
            document.getElementById('allMenu').style.display = 'none'
            player.playAnimation = true
            if(hitOne == true){
                // we need
                Object.values(enetityArray).forEach((players, index) =>{
                    if(playerToHit.name == players.name ){
                        
                        if(runHealingOnce == false){
                            players.playHealingAnimation = true
                            
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
                            
                            player.spriteAnimation.framesMax = choosenAttack.animation.sprites.attack.framesMax
                            player.spriteAnimation.image = choosenAttack.animation.sprites.attack.image
                                   
                            animateFirstPart = true   
                            runHealingOnce = true
                        }
                    }
                    
                        
                    
                    
                })

                if(animateFirstPart ){
                    
                    if(player.spriteAnimation.currentFrame == choosenAttack.animation.sprites.attack.framesMax - 1
                        && player.spriteAnimation.image == choosenAttack.animation.sprites.attack.image
                    ){
                        if(player.name == playerToHit.name){
                            console.log("opp")
                            // player.spriteAnimation.framesMax = player.spriteAnimation.sprites.healing.framesMax
                            // player.spriteAnimation.image = player.spriteAnimation.sprites.healing.image
                            animateSecondPart = true
                            console.log("opp45")
                            animateFirstPart = false
                        }else{
                            player.spriteAnimation.framesMax = player.spriteAnimation.sprites.idle.framesMax
                            player.spriteAnimation.image = player.spriteAnimation.sprites.idle.image
                            player.spriteAnimation.currentFrame = 0
                            animateSecondPart = true
                            animateFirstPart = false
                        }
                    }
                    
                    
                }
    
                if(animateSecondPart){
                   
                    Object.values(enetityArray).forEach((enemy) =>{

                        if(playerToHit.name == enemy.name && enemy.isPlayAble == true && enemy.playHealingAnimation == true && enemy.dead == false){
                            enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.healing.framesMax
                            enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.healing.image
                            
                        }

                        if(playerToHit.name == enemy.name && enemy.isPlayAble == true && enemy.spriteAnimation.currentFrame == enemy.spriteAnimation.sprites.healing.framesMax - 1 
                            && enemy.spriteAnimation.image  == enemy.spriteAnimation.sprites.healing.image){
                            console.log('opps for real: ' + enemy.name)
                            animateEndPart = true
                            animateSecondPart = false
                            enemy.playHealingAnimation = false
                            playerToHit.spriteAnimation.currentFrame = 0  
                        }
                    })
                }
    
                if(animateEndPart == true){
                    
                    if(playerToHit.spriteAnimation.currentFrame == playerToHit.spriteAnimation.sprites.healing.framesMax - 1 ){

                        playerToHit.spriteAnimation.framesMax = playerToHit.spriteAnimation.sprites.idle.framesMax
                        playerToHit.spriteAnimation.image = playerToHit.spriteAnimation.sprites.idle.image
                        playerToHit.spriteAnimation.currentFrame = 0
                          
                    }

                    if(playerToHit.spriteAnimation.currentFrame == playerToHit.spriteAnimation.sprites.idle.framesMax - 1 &&
                        playerToHit.spriteAnimation.image == playerToHit.spriteAnimation.sprites.idle.image)
                    {
                        resetAttackVars() 
                    }
    
                }
            }
    
            if(hitAll == true){
                if(runHealingOnce == false){
                    Object.values(enetityArray).forEach((players) =>{
                        if(players.isPlayAble == true){
                            
                                // player.spriteAnimation.framesMax = player.spriteAnimation.sprites.healing.framesMax
                                // player.spriteAnimation.image = player.spriteAnimation.sprites.healing.image
                              
                                console.log("hajdfsdlfhl")
            
                                players.playHealingAnimation = true
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
                    player.spriteAnimation.framesMax = choosenAttack.animation.sprites.attack.framesMax
                    player.spriteAnimation.image = choosenAttack.animation.sprites.attack.image
                    player.spriteAnimation.currentFrame = 0      
                    animateFirstPart = true
                    runHealingOnce = true
                }
                
                
                
                if(runHealingOnce == false){
                    // player.spriteAnimation.framesMax = player.spriteAnimation.sprites.healing.framesMax
                    // player.spriteAnimation.image = player.spriteAnimation.sprites.healing.image
                    player.focus -= choosenAttack.focusCost
                    gsap.to(`${player.focusBar}`, {
                        width: player.focus + '%'
                    })

                    player.stamina -= choosenAttack.staminaCost
                    gsap.to(`${player.staminaBar}`, {
                        width: player.stamina + '%'
                    })
                    runHealingOnce = true
                }
                
                if(animateFirstPart ){
                    
                    
                    if(player.spriteAnimation.currentFrame == choosenAttack.animation.sprites.attack.framesMax - 1
                        && player.spriteAnimation.image == choosenAttack.animation.sprites.attack.image
                    ){

                        console.log("cray")
                            player.spriteAnimation.framesMax = player.spriteAnimation.sprites.idle.framesMax
                            player.spriteAnimation.image = player.spriteAnimation.sprites.idle.image
                            player.spriteAnimation.currentFrame = 0
                            animateSecondPart = true
                            animateFirstPart = false
                        
                    }
                    
                    
                }
    
                if(animateSecondPart){
                   console.log("cray2")
                    Object.values(enetityArray).forEach((enemy) =>{

                        if( enemy.isPlayAble == true && enemy.playHealingAnimation == true && enemy.dead == false){
                            enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.healing.framesMax
                            enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.healing.image
                            
                        }

                        if(enemy.isPlayAble == true && enemy.spriteAnimation.currentFrame == enemy.spriteAnimation.sprites.healing.framesMax - 1 
                            && enemy.spriteAnimation.image  == enemy.spriteAnimation.sprites.healing.image && enemy.dead == false){
                            console.log('opps for real: ' + enemy.name)
                            animateEndPart = true
                            animateSecondPart = false
                            enemy.playHealingAnimation = false
                            enemy.spriteAnimation.currentFrame = 0  
                        }
                    })
                }
    
                if(animateEndPart == true){
                    if(runIdleAnimationOnce){
                        runIdleAnimationOnce = false
                    }
                    
                    Object.values(enetityArray).forEach((players) =>{
                        if(players.isPlayAble && players.dead == false){
                            const result = enetityArray.filter((entity) => entity.isPlayAble == true && entity.spriteAnimation.image == entity.spriteAnimation.sprites.idle.image && entity.dead == false); 
                            const result2 = enetityArray.filter((entity) => entity.isPlayAble == true && entity.dead == false);
                            const result3 = enetityArray.filter((entity) => entity.isPlayAble == true && entity.playHealingAnimationOnce == false && entity.dead == false);
                            console.log(result.length + " : " + result2.length)
                            if(players.spriteAnimation.currentFrame == players.spriteAnimation.sprites.healing.framesMax - 1 ){
                                Object.values(enetityArray).forEach((players2) =>{
                                    if(players2.isPlayAble && players2.dead == false){
                                        players2.spriteAnimation.framesMax = players2.spriteAnimation.sprites.idle.framesMax
                                        players2.spriteAnimation.image = players2.spriteAnimation.sprites.idle.image
                                        players2.playHealingAnimationOnce = true
                                        players2.spriteAnimation.currentFrame = 0
                                    }
                                })       
                            }
    
                            if(result.length == result2.length && players.spriteAnimation.currentFrame == players.spriteAnimation.sprites.idle.framesMax - 1 &&
                                players.spriteAnimation.image == players.spriteAnimation.sprites.idle.image && players.dead == false)
                            {
                                if(runIdleAnimationOnce == false && result3.length == result2.length){
                                    resetAttackVars() 
                                    runIdleAnimationOnce = true
                                }else{
                                    players.playHealingAnimationOnce = false
                                    players.spriteAnimation.currentFrame = 0 
                                }
                            }
                        }
                    })
    
                } 
            }
        } 
    }
}

let enemyChancesOfGettingHit = false


// so if sleep is true 
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
        
        document.querySelectorAll('button').forEach((button) => {        
    
            button.addEventListener('click', (e) =>{    
                Object.values(arrayAttacks).forEach((attack) => {
                    
                    if(e.currentTarget.innerHTML == attack.name && attack.forAll == false)
                    {
                        choosenAttack = attack
                        hitOne = true
                        choosenAttackBoolean = true

                    }else if(e.currentTarget.innerHTML == attack.name && attack.forAll == true)
                    {
                        choosenAttack = attack
                        hitAll = true
                        choosenAttackBoolean = true
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
        document.getElementById('allMenu').style.display = 'none'
        
        // now we need to take away from their health and etc 

        if(hitOne == true){
            // we need
            player.playAnimation = true
            if(runHealingOnce == false){
                Object.values(enetityArray).forEach((enemy, index) =>{
                    if(enemyToHit.name == enemy.name  && enemyToHit.redirect == false){
                        console.log("hajdfsdlfhl")
                        enemy.dodged = false
                        let d2 = Math.random();
                        if (d2 < enemy.dodge){
                                
                            console.log("worked") 
                            enemy.dodged = true
                        }else{
                            enemy.dodged = false
                            console.log("didnt work") 
                           
                        
                        } 

                        if(enemy.dodged == false && enemy.weakness.includes(choosenAttack.element) == true  && enemy.isSleeping == false && enemy.confused == false && enemy.nullify.includes(choosenAttack.element) == false){

                            enemy.knockedOut = true
                        }

                        if(enemy.dodged == false &&  choosenAttack.confused == true && enemy.isSleeping == false && enemy.knockedOut == false &&  enemy.nullify.includes(choosenAttack.element) == false){
                            let d = Math.random();
                            if (d < choosenAttack.chancesOfConfused){
                                
                                console.log("worked") 
                                enemy.confused = true
                            }else{
                                
                                console.log("didnt work") 
                               
                            
                            }
                            //enemy.confused = true
                        }

                        if(enemy.dodged == false && choosenAttack.sleep == true && enemy.confused == false  && enemy.knockedOut == false && enemy.nullify.includes(choosenAttack.element) == false){
                            
                            let d = Math.random();
                            if (d < choosenAttack.chancesOfSleep){
                                
                                console.log("worked") 
                                enemy.isSleeping = true
                            }else{
                                
                                console.log("didnt work") 
                               
                            
                            }
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
                        
                        if(enemy.dodged == false && enemy.nullify.includes(choosenAttack.element) == false){
                            enemy.health -= choosenAttack.damage
                            gsap.to(`${enemy.healthBar}`, {
                                width: enemy.health + '%'
                            })
                        }
                
                        if(enetityArray[index].health <= 0){
                            enetityArray[index].dead = true
                            // enetityArray.splice(index, 1)
                            // createEnemyInterface(enetityArray)
                        }
                        
                        player.focus -= choosenAttack.focusCost
                        gsap.to(`${player.focusBar}`, {
                            width: player.focus + '%'
                        })

                        player.stamina -= choosenAttack.staminaCost
                        gsap.to(`${player.staminaBar}`, {
                            width: player.stamina + '%'
                        })
                        console.log("hey2345")
                        let enemyAnimations = createAttackAnimation(enemy.spriteAnimation, choosenAttack, false)
                        animationArray.push(enemyAnimations)
                            
                        console.log(player.spriteAnimation.image)
                        console.log(choosenAttack.animation )
                        player.spriteAnimation.framesMax = choosenAttack.animation.sprites.attack.framesMax
                        player.spriteAnimation.image = choosenAttack.animation.sprites.attack.image
                        animateFirstPart = true
                        runHealingOnce = true
                    // resetAttackVars()
                    }
                    if(enemyToHit.name == enemy.name  && enemyToHit.redirect == true){

                        // now add relfect and dodge mechanics 
                        if(player.weakness.includes(choosenAttack.element) == true  && player.isSleeping == false && player.confused == false && player.nullify.includes(choosenAttack.element) == false){
                            player.knockedOut = true
                        }

                        if(choosenAttack.confused == true && player.isSleeping == false && player.knockedOut == false &&  player.nullify.includes(choosenAttack.element) == false){
                            player.confused = true
                        }

                        if(choosenAttack.sleep == true && player.confused == false  && player.knockedOut == false && player.nullify.includes(choosenAttack.element) == false){
                            player.isSleeping = true
                          
                        }

                        
                        
                        if(player.nullify.includes(choosenAttack.element) == false){
                            player.health -= choosenAttack.damage
                            gsap.to(`${player.healthBar}`, {
                                width: player.health + '%'
                            })
                        }
                
                        if(enetityArray[index].health <= 0){
                            enetityArray[index].dead = true
                            // enetityArray.splice(index, 1)
                            // createEnemyInterface(enetityArray)
                        }
                        
                        player.focus -= choosenAttack.focusCost
                        gsap.to(`${player.focusBar}`, {
                            width: player.focus + '%'
                        })

                        player.stamina -= choosenAttack.staminaCost
                        gsap.to(`${player.staminaBar}`, {
                            width: player.stamina + '%'
                        })
                        console.log("hey2345")
                        let enemyAnimations = createAttackAnimation(enemy.spriteAnimation, choosenAttack, false)
                        animationArray.push(enemyAnimations)
                            
                        console.log(player.spriteAnimation.image)
                        console.log(choosenAttack.animation )
                        player.spriteAnimation.framesMax = choosenAttack.animation.sprites.attack.framesMax
                        player.spriteAnimation.image = choosenAttack.animation.sprites.attack.image
                        animateFirstPart = true
                        runHealingOnce = true
                    }
                    
                })
            }

            //console.log("heyeyyeyeyeye23")
            Object.values(enetityArray).forEach((enemy) =>{
                if(enemy.isPlayAble == false ){
                    
                    if(enemy.spriteAnimation.image == enemy.spriteAnimation.sprites.hitLeft.image &&
                        enemy.spriteAnimation.currentFrame == enemy.spriteAnimation.sprites.hitLeft.framesMax - 1){
        
                        if(enemy.confused && !enemy.dead){
                            enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.confusedLeft.framesMax
                            enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.confusedLeft.image
                        }else if(enemy.isSleeping && !enemy.dead){
                            enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.sleepingLeft.framesMax
                            enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.sleepingLeft.image
                        }else if(enemy.dead){
                            console.log('hellp')
                            enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.deathLeft.framesMax
                            enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.deathLeft.image
                        
                        }else{
                            enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.hitLeft.framesMax
                            enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.hitLeft.image
                        }
                    }
                }
            })

            //console.log("cole: " + enetityArray.length)
            if(animateFirstPart){
                
                if(player.spriteAnimation.currentFrame >= choosenAttack.animation.sprites.attack.framesMax - 1){
                    
                    animateSecondPart = true
                    animateFirstPart = false
                    
                }
            }

            if(animateSecondPart){
                Object.values(enetityArray).forEach((enemy) =>{
                    if(enemy.dodged == false && enemy.redirect == false && enemy.name == enemyToHit.name && enemy.isPlayAble == false && enemy.nullify.includes(choosenAttack.element) == false ){
                        
                        
                        enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.hitLeft.framesMax
                        enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.hitLeft.image

                    }else if(enemy.dodged == true && enemy.redirect == false && enemy.name == enemyToHit.name && enemy.isPlayAble == false && enemy.nullify.includes(choosenAttack.element) == false ){
                        enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.dodge.framesMax
                        enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.dodge.image

                    }else if(enemy.dodged == false && enemy.redirect == true && enemy.name == enemyToHit.name && enemy.isPlayAble == false && enemy.nullify.includes(choosenAttack.element) == false ){
                        enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.reflect.framesMax
                        enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.reflect.image

                    }else if(enemy.redirect == true && enemy.name == enemyToHit.name && enemy.isPlayAble == false){
                        player.spriteAnimation.framesMax = player.spriteAnimation.sprites.hitLeft.framesMax
                        player.spriteAnimation.image = player.spriteAnimation.sprites.hitLeft.image
                    }
                })

                if(enemyToHit.redirect == false){
                    player.spriteAnimation.framesMax = player.spriteAnimation.sprites.idle.framesMax
                    player.spriteAnimation.image = player.spriteAnimation.sprites.idle.image 
                }
                
                animationArray.forEach((animations) => {
                    console.log("cole1234")
                    if(animations.currentFrame < animations.framesMax - 1){
                        animations.update()
                        
                    }else{
                        animateEndPart = true
                        animateSecondPart = false
                    }
                        
                })
            }

            if(animateEndPart == true){
                const numberDead = enetityArray.filter((entity) => entity.dead == true && entity.isPlayAble == false);
                console.log("heellllee: " + numberDead.length)
                if(numberDead.length == 0 ){
                    enemyToHit.redirect = false

                    resetAttackVars()   
                }else if(numberDead.length > 0){
                    console.log("heellllee")
                    Object.values(enetityArray).forEach((enemy) =>{
                        if(enemy.isPlayAble == false ){
        
                            if(enemy.dead == true &&
                                enemy.spriteAnimation.image == enemy.spriteAnimation.sprites.deathLeft.image &&
                                enemy.spriteAnimation.currentFrame == enemy.spriteAnimation.sprites.deathLeft.framesMax - 1){

                                let index = enetityArray.indexOf(enemy)
                                enetityArray.splice(index, 1)
                                createEnemyInterface(enetityArray)
                            }
                        }
                    })
                }

            }

            
        }

        if(hitAll == true){
            player.playAnimation = true
            
            if(runHealingOnce == false){
                Object.values(enetityArray).forEach((enemy) =>{
                    if(enemy.isPlayAble == false ){
                        console.log("hajdfsdlfhl")
                        enemy.dodged = false
                        let d2 = Math.random();
                        if (d2  < enemy.dodge){
                                
                            console.log("worked") 
                            enemy.dodged = true
                        }else{
                            enemy.dodged = false
                            console.log("didnt work: " + enemy.name + " : " +  d2) 
                    
                
                        } 

                        if(enemy.redirect == true && enemy.dodged == false){
                            redirectAttack = true
                        }

                        if(enemy.dodged == false && enemy.redirect == false && enemy.weakness.includes(choosenAttack.element) == true && enemy.isSleeping == false && enemy.confused == false && enemy.nullify.includes(choosenAttack.element) == false){
                            enemy.knockedOut = true
                        }

                        if(enemy.dodged == false && enemy.redirect == false && choosenAttack.confused == true && enemy.isSleeping == false && enemy.knockedOut == false && enemy.nullify.includes(choosenAttack.element) == false){
                            let d = Math.random();
                            console.log("conole: " +  d)
                            if (d < choosenAttack.chancesOfConfused){
                                
                                console.log("worked") 
                                enemy.confused = true
                            }else{
                                
                                console.log("didnt work") 
                               
                            
                            }
                            
                        }

                        if(enemy.dodged == false && enemy.redirect == false && choosenAttack.sleep == true && enemy.confused == false && enemy.knockedOut == false && enemy.nullify.includes(choosenAttack.element) == false){
                            let d = Math.random();
                            if (d < choosenAttack.chancesOfSleep){
                                
                                console.log("worked") 
                                enemy.isSleeping = true
                            }else{
                                
                                console.log("didnt work") 
                               
                            
                            }
                            //resetAttackVars()
                        }

                        if(enemy.dodged == false && enemy.redirect == false && enemy.nullify.includes(choosenAttack.element) == false){
                            enemy.health -= choosenAttack.damage
                            gsap.to(`${enemy.healthBar}`, {
                                width: enemy.health + '%'
                            })
                        }

                        if(enemy.dodged == false && enemy.redirect == false && enemy.health <= 0){
                            enemy.dead = true
                            // let index = enetityArray.indexOf(enemy)
                            // enetityArray.splice(index, 1)
                            // createEnemyInterface(enetityArray)
                        }
                        
                        let enemyAnimations = createAttackAnimation(enemy.spriteAnimation, choosenAttack, false)
                        animationArray.push(enemyAnimations)
                        
                        console.log(player.spriteAnimation.image)
                        console.log(choosenAttack.animation )
                        player.spriteAnimation.framesMax = choosenAttack.animation.sprites.attack.framesMax
                        player.spriteAnimation.image = choosenAttack.animation.sprites.attack.image
                        
                    }
                    
                })

                if(redirectAttack == false){
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
                }else if(redirectAttack == true){
                    if(player.health - choosenAttack.regenHealth > 0 ){
                        player.health -= choosenAttack.regenHealth
                        gsap.to(`${player.healthBar}`, {
                            width: player.health + '%'
                        })
                    }else{
                        player.health = 0
                        gsap.to(`${player.healthBar}`, {
                            width: player.health + '%'
                        })
                    }
                }
                
                

                if(choosenAttack.clone == true && addclone == false){
                    const result = enetityArray.filter((entity) => entity.isPlayAble == true);

                        console.log(cloneArray[0]);
                        console.log("heyeyeyeyeyeyeyeyey")

                        if(result.length < 4){
                            if(result.length == 1){
                                if(cloneArray[0].spawnClone == false){
                                    cloneArray[0].health = player.health
                                    enetityArray.push(cloneArray[0])
                                    cloneArray[0].spawnClone = true
                                }

                                if(cloneArray[1].spawnClone == false){
                                    cloneArray[1].health = player.health
                                    enetityArray.push(cloneArray[1])
                                    cloneArray[1].spawnClone = true
                                }

                                if(cloneArray[2].spawnClone == false){
                                    cloneArray[2].health = player.health
                                    enetityArray.push(cloneArray[2])
                                    cloneArray[2].spawnClone = true
                                }
                                
                            }else if(result.length == 2){
                                if(cloneArray[0].spawnClone == false){
                                    cloneArray[0].health = player.health
                                    enetityArray.push(cloneArray[0])
                                    cloneArray[0].spawnClone = true
                                }

                                if(cloneArray[1].spawnClone == false){
                                    cloneArray[1].health = player.health
                                    enetityArray.push(cloneArray[1])
                                    cloneArray[1].spawnClone = true
                                }
                            }else if(result.length == 3){
                                if(cloneArray[0].spawnClone == false){
                                    cloneArray[0].health = player.health
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
                animateFirstPart = true
                runHealingOnce = true
            }


            
            Object.values(enetityArray).forEach((enemy) =>{
                if(enemy.isPlayAble == false ){

                    if(enemy.redirect == false && enemy.spriteAnimation.image == enemy.spriteAnimation.sprites.hitLeft.image &&
                        enemy.spriteAnimation.currentFrame == enemy.spriteAnimation.sprites.hitLeft.framesMax - 1){
        
                        if(enemy.dodged == false && enemy.confused && !enemy.dead){
                            enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.confusedLeft.framesMax
                            enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.confusedLeft.image
                        }else if(enemy.dodged == false && enemy.isSleeping && !enemy.dead){
                            enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.sleepingLeft.framesMax
                            enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.sleepingLeft.image
                        }else if(enemy.dead){
                            console.log('hellp')
                            enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.deathLeft.framesMax
                            enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.deathLeft.image
                        
                        }   
                        else{
                            if(enemy.dodged == false){
                                enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.hitLeft.framesMax
                                enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.hitLeft.image
                            }else if(enemy.dodged == true){
                                console.log("old")
                                enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.dodge.framesMax
                                enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.dodge.image
                            }
                            
                        }
                    }
                }
            })

            //console.log("cole: " + enetityArray.length)
            if(animateFirstPart){
                if(player.spriteAnimation.currentFrame >= choosenAttack.animation.sprites.attack.framesMax - 1){
                    animateSecondPart = true
                    animateFirstPart = false
                    
                }

            }
            
            if(animateSecondPart){
                Object.values(enetityArray).forEach((enemy) =>{
                    if(enemy.dodged == false && enemy.redirect == false && enemy.isPlayAble == false && enemy.nullify.includes(choosenAttack.element) == false ){
                        
                        enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.hitLeft.framesMax
                        enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.hitLeft.image
                        
                    }else if(enemy.dodged == true && enemy.isPlayAble == false && enemy.nullify.includes(choosenAttack.element) == false ){
                        enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.dodge.framesMax
                        enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.dodge.image
                    }else if(enemy.redirect == true && enemy.dodged == false && enemy.isPlayAble == false && enemy.nullify.includes(choosenAttack.element) == false ){
                        enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.reflect.framesMax
                        enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.reflect.image
                    }
                })

                if(redirectAttack == false){
                    player.spriteAnimation.framesMax = player.spriteAnimation.sprites.idle.framesMax
                    player.spriteAnimation.image = player.spriteAnimation.sprites.idle.image 
                }else if(redirectAttack == true){
                    player.spriteAnimation.framesMax = player.spriteAnimation.sprites.hitLeft.framesMax
                    player.spriteAnimation.image = player.spriteAnimation.sprites.hitLeft.image
                }
                
                animationArray.forEach((animations) => {
                    console.log("cole")
                    if(animations.currentFrame < animations.framesMax - 1){
                        animations.update()
                        
                    }else{
                        animateEndPart = true
                        animateSecondPart = false
                    }
                        
                })
            }

            if(animateEndPart == true){
                const numberDead = enetityArray.filter((entity) => entity.dead == true && entity.isPlayAble == false);
                console.log("heellllee: " + numberDead.length)
                if(numberDead.length == 0 ){
                    resetAttackVars()
                }else if(numberDead.length > 0){
                    console.log("heellllee")
                    Object.values(enetityArray).forEach((enemy) =>{
                        if(enemy.isPlayAble == false ){
        
                            if(enemy.dead == true &&
                                enemy.spriteAnimation.image == enemy.spriteAnimation.sprites.deathLeft.image &&
                                enemy.spriteAnimation.currentFrame == enemy.spriteAnimation.sprites.deathLeft.framesMax - 1){
                
                                let index = enetityArray.indexOf(enemy)
                                enetityArray.splice(index, 1)
                                createEnemyInterface(enetityArray)
                            }
                        }
                    })
                }
                

            }

            
          
            

            
            


           
            // if(player.spriteAnimation.currentFrame >= player.spriteAnimation.sprites.healing.framesMax - 2){
            //     resetAttackVars()
                
                
            // }
                
            
            
            

        }

        // reset 
       

    }
    // now grab the current player

}

function playerItem(player){
    
    // disable 
    console.log("favorite")
    document.getElementById('differentAttacksMenu').style.display = 'none'
    document.querySelector('#attackOptions').style.display = 'grid'
    document.getElementById('backButton2').style.display = 'none'
    document.getElementById('backButton').style.display = 'grid'
    console.log("iuiui: " + timerForI.i)
    timerForI.i = 0
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
        console.log('888')
        document.querySelectorAll('button').forEach((button) => {        
           
            button.addEventListener('click', (e) =>{
    
            
                Object.values(arrayInvtory).forEach((item) => {
                    console.log(item)
                    if(e.currentTarget.innerHTML == item.name && item.forAll == false)
                    {
                        console.log("true")
                        choosenItem = item
                        hitOne = true
                        console.log('888')
                        
                        choosenAttackBoolean = true
                        console.log('888')
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


    if(choosenAttackBoolean == true && choosePlayerToHeal == false ){
        console.log('888 :')
        if(hitOne == true && appendEnemyButtons == false){
            document.querySelector('#listEnemies').replaceChildren();
            Object.values(enetityArray).forEach((players) =>{
                if(players.isPlayAble == true && choosenItem.revive == false && players.dead == false)
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
        console.log("888")
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
            document.getElementById('allMenu').style.display = 'none'
            if(hitOne == true){
                // we need
                i = 0
                player.playAnimation = true
                if(runHealingOnce == false){
                    Object.values(enetityArray).forEach((players, index) =>{
                        if(playerToHit.name == players.name ){
                            players.playHealingAnimation = true
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
                                
                            player.spriteAnimation.framesMax = choosenItem.animation.sprites.attack.framesMax
                            player.spriteAnimation.image = choosenItem.animation.sprites.attack.image
                                
                            
                            choosenItem.amount -= 1
                            animateFirstPart = true
                            console.log("opp46")
                            //choosePlayerToHeal = false
                            runHealingOnce = true
                        }
                        
                        
                    })
                    
                    
                    
                }

                if(animateFirstPart ){
                    
                    if(player.spriteAnimation.currentFrame == choosenItem.animation.sprites.attack.framesMax - 1
                        && player.spriteAnimation.image == choosenItem.animation.sprites.attack.image
                    ){
                        if(player.name == playerToHit.name){
                            console.log("opp")
                            // player.spriteAnimation.framesMax = player.spriteAnimation.sprites.healing.framesMax
                            // player.spriteAnimation.image = player.spriteAnimation.sprites.healing.image
                            animateSecondPart = true
                            console.log("opp45")
                            animateFirstPart = false
                        }else{
                            player.spriteAnimation.framesMax = player.spriteAnimation.sprites.idle.framesMax
                            player.spriteAnimation.image = player.spriteAnimation.sprites.idle.image
                            player.spriteAnimation.currentFrame = 0
                            animateSecondPart = true
                            animateFirstPart = false
                        }
                    }
                    
                    
                }
    
                if(animateSecondPart){
                   
                    Object.values(enetityArray).forEach((enemy) =>{

                        if(playerToHit.name == enemy.name && enemy.isPlayAble == true && enemy.playHealingAnimation == true){
                            enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.healing.framesMax
                            enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.healing.image
                            
                        }

                        if(playerToHit.name == enemy.name && enemy.isPlayAble == true && enemy.spriteAnimation.currentFrame == enemy.spriteAnimation.sprites.healing.framesMax - 1 
                            && enemy.spriteAnimation.image  == enemy.spriteAnimation.sprites.healing.image){
                            console.log('opps for real: ' + enemy.name)
                            animateEndPart = true
                            animateSecondPart = false
                            enemy.playHealingAnimation = false
                            playerToHit.spriteAnimation.currentFrame = 0  
                        }
                    })
                }
    
                if(animateEndPart == true){
                    
                    if(playerToHit.spriteAnimation.currentFrame == playerToHit.spriteAnimation.sprites.healing.framesMax - 1 ){

                        playerToHit.spriteAnimation.framesMax = playerToHit.spriteAnimation.sprites.idle.framesMax
                        playerToHit.spriteAnimation.image = playerToHit.spriteAnimation.sprites.idle.image
                        playerToHit.spriteAnimation.currentFrame = 0
                          
                    }

                    if(playerToHit.spriteAnimation.currentFrame == playerToHit.spriteAnimation.sprites.idle.framesMax - 1 &&
                        playerToHit.spriteAnimation.image == playerToHit.spriteAnimation.sprites.idle.image)
                    {
                        resetAttackVars() 
                    }
    
                }
            }
    
            if(hitAll == true){
                
                player.playAnimation = true
                if(runHealingOnce == false){
                    Object.values(enetityArray).forEach((players) =>{
                        if(players.isPlayAble == true){
                            console.log("hajdfsdlfhl")
                            players.playHealingAnimation = true
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
                                let enemyAnimations = createAttackAnimation(players.spriteAnimation, choosenItem, false)
                                animationArray.push(enemyAnimations)
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
                                let enemyAnimations = createAttackAnimation(players.spriteAnimation, choosenItem)
                                animationArray.push(enemyAnimations)
                                players.dead = false    
                            }   
                            
                            console.log(player.spriteAnimation.image)
                            
                            player.spriteAnimation.framesMax = choosenItem.animation.sprites.attack.framesMax
                            player.spriteAnimation.image = choosenItem.animation.sprites.attack.image
                            
                        }
                    })
                    choosenItem.amount -= 1
                    animateFirstPart = true
                    runHealingOnce = true
                }

                

                if(animateFirstPart ){
                    i = 0
                    
                    if(player.spriteAnimation.currentFrame == choosenItem.animation.sprites.attack.framesMax - 1
                        && player.spriteAnimation.image == choosenItem.animation.sprites.attack.image
                    ){
                        
                            player.spriteAnimation.framesMax = player.spriteAnimation.sprites.idle.framesMax
                            player.spriteAnimation.image = player.spriteAnimation.sprites.idle.image
                            player.spriteAnimation.currentFrame = 0
                            animateSecondPart = true
                            animateFirstPart = false
                        
                    }
                    
                    
                }
    
                if(animateSecondPart){
                   
                    Object.values(enetityArray).forEach((enemy) =>{

                        if( enemy.isPlayAble == true && enemy.playHealingAnimation == true && enemy.dead == false){
                            enemy.spriteAnimation.framesMax = enemy.spriteAnimation.sprites.healing.framesMax
                            enemy.spriteAnimation.image = enemy.spriteAnimation.sprites.healing.image
                            
                        }

                        if(enemy.isPlayAble == true && enemy.spriteAnimation.currentFrame == enemy.spriteAnimation.sprites.healing.framesMax - 1 
                            && enemy.spriteAnimation.image  == enemy.spriteAnimation.sprites.healing.image && enemy.dead == false){
                            console.log('opps for real: ' + enemy.name)
                            animateEndPart = true
                            animateSecondPart = false
                            enemy.playHealingAnimation = false
                            enemy.spriteAnimation.currentFrame = 0  
                        }
                    })
                }
    
                if(animateEndPart == true){
                    if(runIdleAnimationOnce){
                        runIdleAnimationOnce = false
                    }
                    
                    Object.values(enetityArray).forEach((players) =>{
                        if(players.isPlayAble && players.dead == false){

                            const result = enetityArray.filter((entity) => entity.isPlayAble == true && entity.spriteAnimation.image == entity.spriteAnimation.sprites.idle.image && entity.dead == false
                            );
                            
                            //console.log(result2)
                            const result2 = enetityArray.filter((entity) => entity.isPlayAble == true && entity.dead == false);
                            const result3 = enetityArray.filter((entity) => entity.isPlayAble == true && entity.playHealingAnimationOnce == false && entity.dead == false);
                            console.log(players.spriteAnimation.currentFrame + " : " +  players.spriteAnimation.sprites.healing.framesMax)
                            if(players.spriteAnimation.currentFrame == players.spriteAnimation.sprites.healing.framesMax - 1 && players.dead == false){

                                console.log("iuiui")
                                Object.values(enetityArray).forEach((players2) =>{
                                    //console.log("iuiui")
                                    if(players2.isPlayAble){

                                        players2.spriteAnimation.framesMax = players2.spriteAnimation.sprites.idle.framesMax
                                        players2.spriteAnimation.image = players2.spriteAnimation.sprites.idle.image
                                        players2.playHealingAnimationOnce = true
                                        players2.spriteAnimation.currentFrame = 0
                                    }
                                    
                                })
                                
                            }
    
                            if(result.length == result2.length && players.spriteAnimation.currentFrame == players.spriteAnimation.sprites.idle.framesMax - 1 &&
                                players.spriteAnimation.image == players.spriteAnimation.sprites.idle.image && players.dead == false)
                            {
                                
                                
                                console.log("hehehe")
                                if(runIdleAnimationOnce == false && result3.length == result2.length){
                                    resetAttackVars() 
                                    
                                    runIdleAnimationOnce = true
                                }else{
                                    players.playHealingAnimationOnce = false
                                    players.spriteAnimation.currentFrame = 0
                                    
                                }
                            }
                            
                        }
                        
                    })
    
                }


                
                // console.log("heruyyy    ")
                // resetAttackVars()
                // choosePlayerToHeal = false
    
            }
        }
        
    }
}

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

function createAttackAnimation(enetityReceivingAttack,animation, hitCurrentEntity){
    const animate = new Sprite5({
        position: {
            x:  enetityReceivingAttack.position.x - 35,
            y:  enetityReceivingAttack.position.y - 20,
        },
        velocity: {
            x: 0,
            y: 0
        },
        offset:{
            x: 0,
            y: 0
        },
        
        framesMax: animation.animation.sprites.attackHit.framesMax,
        scale: 1.8,
        imageSrc: animation.animation.sprites.attackHit.imageSrc
        
    })
    return animate
    
    
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
