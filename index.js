

// ----- create each individual attack ------
let normalAttack = {name: "Strike", damage: 10, cost: 0, healSelf: 0, type: "knife", hitAll: false, confuse: false, healing: false}
let fireAttack = {name: "Fire", damage: 30, cost: 100, healSelf: 0, type: "fire", hitAll: false, confuse: false, healing: false}
let megaFireAttack = {name: "Mega Fire", cost: 5, damage: 40, healSelf: 0, type: "fire", hitAll: true, confuse: false, healing: false}

let waterAttack = {name: "Water", damage: 20, cost: 5, healSelf: 0, type: "water", hitAll: false, confuse: false, healing: false}
let megaWaterAttack = {name: "Mega Water", damage: 20, cost: 5, healSelf: 0, type: "water", hitAll: true, confuse: false, healing: false}

let windAttack = {name: "Wind", damage: 20, cost: 5, healSelf: 0, type: "Wind", hitAll: false, confuse: false, healing: false}
let megaWindAttack = {name: "Mega Wind", damage: 20, cost: 5, healSelf: 0, type: "Wind", hitAll: true, confuse: false, healing: false}

let iceAttack = {name: "Ice", damage: 20, cost: 5, healSelf: 0, type: "ice", hitAll: false, confuse: false, healing: false}
let megaIceAttack = {name: "Mega Ice", damage: 20, cost: 5, healSelf: 0, type: "ice", hitAll: true, confuse: false, healing: false}

let confuseAttack = {name: "Confuse", damage: 0, cost: 5, healSelf: 0, type: "confuse", hitAll: false, confuse: true, healing: false}
let megaConfuseAttack = {name: "Mega Confuse", damage: 0, cost: 5, healSelf: 0, type: "confuse", hitAll: true, confuse: true, healing: false}

let fireAttack2 = {name: "Fire", damage: 100, healSelf: 0, type: "fire", hitAll: false}
let megaFireAttack2 = {name: "Mega Fire", damage: 100, healSelf: 0, type: "fire", hitAll: true}

let healAttack = {name: "Heal",damage: 30, healSelf: 100, cost: 10, type: "heal", redirect: false, hitAll: false, healing: true, revive: false}
let megaHealAttack = {name: "Mega Heal", damage: 30, cost: 10, healSelf: 100, type: "heal", redirect: false, hitAll: true, healing: true, revive: false}

let redirectAttack = {name: "Redirect", damage: 0, cost: 10, healSelf: 100, type: "sp", redirect: true, hitAll: false, revive: false}
let megaRedirectAttack = {name: "Mega Redirect", cost: 10, damage: 0, healSelf: 100, type: "sp", redirect: true, hitAll: true, revive: false}

let reviveAttack = {name: "revive",damage: 30, healSelf: 100, cost: 10, type: "heal", redirect: false, hitAll: false, healing: true, revive: true}
let megaReviveAttack = {name: "Mega revive", damage: 30, cost: 10, healSelf: 100, type: "heal", redirect: false, hitAll: true, healing: true, revive: true}


// ------ Items --------
let healItem = {name: "heal Item", amount: 4, cost: 10, damage: 30,  healSelf: 100, type: "sp", redirect: true, hitAll: false, forPlayer: true, cureConfusion: false, cureKnockOut: true, revive: false}
let megaHealItem = {name: "Mega Heal Item", amount: 4, cost: 10, damage: 50, healSelf: 100, type: "sp", redirect: true, hitAll: true, forPlayer: true, cureConfusion: true, cureKnockOut: false, revive: false }
let megaFireItem = {name: "Fire Heal Item", amount: 4, cost: 10, damage: 40, healSelf: 100, type: "sp", redirect: true, hitAll: true, forPlayer: false, cureConfusion: false, cureKnockOut: false, revive: false}
let reviveItem = {name: "Revive", amount: 4, cost: 10, damage: 40, healSelf: 100, type: "sp", redirect: true, hitAll: false, forPlayer: true, cureConfusion: false, cureKnockOut: false, revive: true}
let megaReviveItem = {name: "mega Revive", amount: 4, cost: 10, damage: 40, healSelf: 100, type: "sp", redirect: true, hitAll: true, forPlayer: true, cureConfusion: false, cureKnockOut: false, revive: true}
// ---- create health Classes ----
let healthClass1 = {heal1: healAttack, heal2: megaHealAttack , heal3: redirectAttack, heal4: megaRedirectAttack, heal5: reviveAttack, heal6: megaReviveAttack}

// ----- create attack Classes -----
let attackClass1 = {attack0: normalAttack, attack1: fireAttack, attack2: megaFireAttack, 
    attack3: megaWaterAttack, attack4: confuseAttack, 
    attack5: megaConfuseAttack, attack6: windAttack, 
    attack7: megaWindAttack, attack8: iceAttack, attack9: megaIceAttack}
let attackClass2 = {attack0: normalAttack, attack1: fireAttack2, attack2: megaFireAttack2}
let attackClass3 = [fireAttack, megaFireAttack, healAttack, megaHealAttack]


// ------- enemy Attack classes ------
let attackClass4 = [normalAttack, fireAttack2, megaFireAttack2, megaWaterAttack]
let attackClass5 = [fireAttack, megaFireAttack]
let attackClass6 = [megaWaterAttack]
let attackClass7 = [confuseAttack]


// ----- toggle Attacks ----
let megaFire = false;
let fire = false;

// ---- array of attacks ----
let arrayAttacks = [normalAttack, fireAttack, megaFireAttack, waterAttack, megaWaterAttack, 
    confuseAttack, megaConfuseAttack, windAttack, 
    megaWindAttack, iceAttack, megaIceAttack]
let arrayHealAttacks = [healAttack, megaHealAttack, megaRedirectAttack, redirectAttack, reviveAttack, megaReviveAttack]

// ------ players invenory array ----
let playersInventory = [healItem, megaHealItem, megaFireItem, reviveItem, megaReviveItem]
let overallItems = [healItem, megaHealItem, megaFireItem]

// --- nullify classes -----
let nullClass = ['water', 'fire']
let nullClass2 = ['']
let nullClass3 = ['wind', 'ice']

// ---- actual players and enemies -----
let player1 = {name: "will", health: 20, divId: "", turnID: 0, stamina: 100, focus: 100, weakness: 'water', strength: '', n: nullClass2, pass: false, passNumber: 0, dead: false, immune: false, knockedOut: true, confused: false, timesConfused: 0, redirect: false, isPlayer: true, attackClass: attackClass1, healthingClass: healthClass1, nextra: false, healthBar: "#playerOneHealth", staminaBar: "#playerOneStamina", focusBar: "#playerOneFocus"}
let player2 = {name: "tim",  health: 100, divId: "", turnID: 1,  stamina: 100, focus: 100, weakness: 'fire',  strength: '', n: nullClass2, pass: false, passNumber: 0, dead: false, immune: false, knockedOut: true, confused: false, timesConfused: 0, redirect: false, isPlayer: true, attackClass: attackClass2, healthingClass: healthClass1, nextra: false, healthBar: "#playerTwoHealth", staminaBar: "#playerTwoStamina", focusBar: "#playerTwoFocus"}
let player2Proxy = {name: "tim",  health: 100, divId: "", turnID: 1,  stamina: 100, focus: 100, weakness: 'fire',  strength: '', n: nullClass2, pass: false, passNumber: 0, dead: false, immune: false, knockedOut: true, confused: true, timesConfused: 0, redirect: false, isPlayer: true, attackClass: attackClass2, healthingClass: healthClass1, nextra: false, healthBar: "#playerTwoHealth", staminaBar: "#playerTwoStamina", focusBar: "#playerTwoFocus"}
let enemy1 = {name: "enemy1", health: 100, divId: "", turnID: 2,  stamina: 100, focus: 100, weakness: 'fire', strength: 'water', n: nullClass3, dead: false, immune: false, knockedOut: false, confused: false, redirect: false, isPlayer: false, attackClass: attackClass6, healthingClass: healthClass1, nextra: false, healthBar: 'enemy1Health', healthBar2: '#enemy1Health', }
let enemy2 = {name: "enemy2", health: 100, divId: "", turnID: 3,  stamina: 100, focus: 100, weakness: 'fire', strength: 'water', n: nullClass3, dead: false, immune: false, knockedOut: false, confused: false, redirect: false, isPlayer: false, attackClass: attackClass6, healthingClass: healthClass1, nextra: false, healthBar: 'enemy2Health', healthBar2: '#enemy2Health',}
let enemy3 = {name: "enemy3", health: 100, divId: "", turnID: 3,  stamina: 100, focus: 100, weakness: 'fire', strength: 'water', n: nullClass3, dead: false, immune: false, knockedOut: false, confused: false, redirect: false, isPlayer: false, attackClass: attackClass7, healthingClass: healthClass1, nextra: false, healthBar: 'enemy3Health', healthBar2: '#enemy3Health',}


document.querySelector('#attackMenu').style.display = 'none'
document.querySelector('#finishAttackMenu').style.display  = 'none'
document.querySelector('#enemyAttackingMenu').style.display = 'none'
document.querySelector('#healingMenu').style.display = 'none'

document.querySelector('#finishHealingMenu').style.display = 'none'



// ----- init battle booleans ----
let startBattle = true
let endBattle = false
let pushPlayersInBattle = true
let toggleNextTurn = false;
let toggleReadyToAttack = false;
let toggleNextra = false;
let goToNextTurn = false

let hitAllEnemies = false


// ---- Attack Fields for PlayerAttack method -----
var attackDamage = 0
var weakness = ''
var strength = ''
var typeOfAttack = ''
var attackVar;

// ---- Heal Fields -----
var HealthRegen = 0
var typeOfHealth = ''
var currentHealAttack

// ---- toggle Health combat ----
let toggleHealthMenu = false
let toggleReadyToHeal = false;
let healAllPlayers = false;
let iterateThroughPlayers = 0


// ---- player and enemy array ------
var array = [];

var endTurns;
var nextTurn = 0

var currentTurn = 0
var i = 0

let iterateThroughEnemies = 0




// for the fired solution // toggling the i https://stackoverflow.com/questions/6087959/prevent-javascript-keydown-event-from-being-handled-multiple-times-while-held-do#:~:text=To%20avoid%20repeated%20keydown%20event,in%20older%20version%20of%20JS.
let fired = false; 

// for toggling the attack button 
let triggerAttackMenu = false; 

let playerStatString = ''
let playerStatString2 = ''
let stringUpdated = false
let stringTimesUpdated = 0

let enemyAttackArray = [] 
let playerToAttack = []
let findRandomAttack = true
let readyToAttack = false
let togglePlayerGettingHit = false
let currentEnemy 
let resetEnemyAttacks = false
let randomAttack = false
let radnomPlayer
let findRandomPlayer = false
let megaString = ' '
let stayLockedIn = true
let toggleHealEnemy = false
let turnPlayerBack = false
let playerLoseHealth = false
let decreasePlayersHealth = false
let enemyHealString = ''
let enemyOldHealth 
// enemies heal each other 


let playersOldHealth 


let createEnemyInterface = true
//animateTown()

function animateBattle(){
    const animateBattleId =  window.requestAnimationFrame(animateBattle)
   // document.querySelector('#battleInterface').style.display = 'block'
    
   // adds players into the game 
    if(pushPlayersInBattle)
    {
       //player1.divId
        // note you can change the way 
        array.push(player1)
        array.push(enemy1)
        array.push(player2)
        
        array.push(enemy2)
        array.push(enemy3)
        endTurns = array.length - 1

        pushPlayersInBattle = false
    }

    // create the enemy interface depending on the enemies 
    if(createEnemyInterface){
        Object.values(array).forEach((enemy) => {
            if(enemy.isPlayer == false)
            {

                var enemyH1 = document.createElement('h1');
                enemyH1.style.fontSize = '16px'
                enemyH1.innerHTML = enemy.name


                // <div style="position: relative;">
                
                // health bar part one 
                var enemyDiv = document.createElement('div');
                enemyDiv.style.height = '5px'
                enemyDiv.style.border = '1px black solid'
                enemyDiv.style.backgroundColor   = '#ccc'

                // health bar 
                var enemyDiv2 = document.createElement('div');
                enemyDiv2.id = enemy.healthBar
                enemyDiv2.style.height = '5px'
                enemyDiv2.style.border = '1px black solid'
                enemyDiv2.style.backgroundColor  = 'green'
                
                enemyDiv2.style.position = 'relative'
                enemyDiv2.style.top =  '0'
                enemyDiv2.style.left =  '0'
                enemyDiv2.style.right =  '0'

                document.querySelector('#enemyStatus').append(enemyH1)
                
                document.querySelector('#enemyStatus').append(enemyDiv)
                document.querySelector('#enemyStatus').append(enemyDiv2)
                
            }
            

        })

        createEnemyInterface = false
        
    }

    // this creates the player health/ status interface 
    Object.values(array).forEach((player) => {
        
        if(player.name == 'tim')
        {
            playerStatString = player.name + " Health " + player.health + ", weakness" + player.weakness + ", confused "  + player.confuse + player.timesConfused + ",  stamina " + player.stamina + ", focus "+ player.focus + "."
            
        }
        if(player.name == 'will')
        {
            playerStatString2 = player.name + " Health " + player.health + ", weakness" + player.weakness + ", confused "  + player.confuse + player.timesConfused + ",  stamina " + player.stamina + ", focus "+ player.focus + "."
            
        }

        if(stringUpdated == false)
        {
            
            document.querySelector('#PlayerStatMenu').innerHTML = playerStatString
            document.querySelector('#PlayerStatMenu2').innerHTML = playerStatString2
            if(stringTimesUpdated > 0)
            {
                stringUpdated = true
            }
            stringTimesUpdated += 1
            
        }
        
        
    })
    

    // basically starts the battle 
    if(pushPlayersInBattle == false)
    {
        
        // stating facts about the player 

        if(goToNextTurn)
        {
            if(!array[i].isPlayer)
            {
                console.log("confusedd")
                if(array[i].confuse)
                {
                    //array[i].confuse = false
                    console.log("confusedd")
                    array[i].confuse = false
                }
                if(array[i].knockedOut)
                {
                    //array[i].confuse = false
                    console.log("knocked out")
                    array[i].knockedOut = false
                }
            }

            if(array[i].isPlayer)
            {
                
                if(array[i].timesConfused > 3)
                {
                    array[i].confused = false
                    array[i].timesConfused = 0
                    
                }

                
            }

            
            


            
            decreasePlayersHealth = false
            playerLoseHealth = false
            
            
            console.log(array[i].name)
            if(array[i].isPlayer == true)
            {
                if(array[i].pass == true && array[i].passNumber == 0)
                {
                    console.log("should be gone")
                }

                if(array[i].pass == false){
                    array.push(array[i])
                }
            }else if(array[i].isPlayer == false){
                array.push(array[i])
            }
            
            
            
            // if(array[i].isPlayer)
            // {
            //     console.log("reset players knockout" + array[i].knockedOut)
            //     array[i].knockedOut = false
            // }
            
            resetEnemyAttacks = true
            currentTurn += 1
            document.querySelector('#listEnemies').replaceChildren();
            document.querySelector('#listPlayers').replaceChildren();
            document.querySelector('#attackOptions').replaceChildren();
            document.querySelector('#healthingOptions').replaceChildren();
            array.shift()

            // if(array[i].isPlayer)
            // {
            //     document.querySelector('#differentAttacksMenu').style.display = 'grid'
            // }

            // ---- item divs --- 
            document.querySelector('#selectingPlayerToUse').style.display = 'none'
            document.querySelector('#selectingItem').style.display = 'none'
            document.querySelector('#selectingItemButtons').style.display = 'none'
            document.querySelector('#selectingPlayerToPass').style.display = 'none'
            // ---- item booleans
            loadingPlayersItems = false
            toggleSelectingItemScreen = false
            selectPlayerToPass = false
            selectPlayerToUseOn = false
            loadingPlayersToUsItems = false
            decreaseAmount = false

            document.querySelector('#healthInterface').style.display = 'none'
            document.querySelector('#PlayerStatMenu').innerHTML = ''
            document.querySelector('#PlayerStatMenu2').innerHTML = ''
        
            document.querySelector('#enemyAttackingMenu').style.display = 'none'
            playerLoseHealth = false
            increaseTimeConfused2 = false
            stringTimesUpdated = 0
            stringUpdated = false

            triggerAttackMenu = false

            healAllPlayers = false
            toggleReadyToAttack = false
            hitAllEnemies = false
            
            document.querySelector('#finishAttackMenu').style.display = 'none'
            document.querySelector('#finishHealingMenu').style.display = 'none'
           // document.querySelector('#attackMenu').style.display = 'none'
            document.querySelector('#differentAttacksMenu').style.display = 'grid'
            
            console.log("move to next turn")
            addOnce = false
            goToNextTurn = false
            
        }

        // console.log(array[i])
        

        window.addEventListener('keyup', (e) => {
            fired = false;
        })

        if(array[i].isPlayer == true && selectPlayerToPass == false)
        {
                
            // console.log(array[i].attackClass)
            // console.log(array[i].healthingClass)
            document.querySelector('#differentAttacksMenu').style.display = 'grid'

        }else if(array[i].isPlayer == false){
            document.querySelector('#differentAttacksMenu').style.display = 'none'
        }


    }


    //console.log(array[i].name)
    
    if(array[i].isPlayer && array[i].health > 0)
    {
        // ----- Player Passing turn ------
        PassTurn()

        // ------- player Using Item ---------
        UseItem()

        // ---------- Healing Players --------
        PlayerHealing()
        
        // ---- player attacking 
        PlayerAttacking()
    }else if(array[i].isPlayer && array[i].health <= 0 )
    {
        // player is dead 
        console.log("player has died")
        //goToNextTurn = true
        array[i].dead = true
        goToNextTurn = true
        
    }

    // ---- enemy attacking -----
    EnemyAttacking()
    
}



let loadPlayersToPass = false
let selectPlayerToPass = false
let addOnce = false
function PassTurn()
{
    // console.log(array[i].pass)
    // console.log(array[i].name)
    // Object.values(array).forEach((items) =>{
    //     if(items.isPlayer)
    //     // {
    //     //     console.log(items.name)
    //     // }
        
    // })  
    
    if(array[i].pass)
    {
        document.querySelector('#passTurnButton').disabled = true
    }else if(!array[i].pass)
    {
        document.querySelector('#passTurnButton').disabled = false
    }
    document.querySelector('#passTurnButton').addEventListener('click', (e) =>{
        console.log('pass')
        loadPlayersToPass = true
        // if player clicks then we close the attack interface 
        //and we append the players onto the passInterface 
        // document.ATTRIBUTE_NODE
        // selectPlayerToPassTurn
    })

    document.querySelector('#passTurnButton').addEventListener('click', (e) =>{
        console.log('pass')
        loadPlayersToPass = true
        // if player clicks then we close the attack interface 
        //and we append the players onto the passInterface 
        // document.ATTRIBUTE_NODE
        // selectPlayerToPassTurn
    })

    if(loadPlayersToPass == true)
    {


        document.querySelector('#selectingPlayerToPass').replaceChildren();
        
        
        Object.values(array).forEach((player) =>{
            if(player.isPlayer && player.name != array[i].name && player.dead == false)
            {
                const button = document.createElement('button')
                console.log(player.name)
                button.innerHTML = player.name
                document.querySelector('#selectingPlayerToPass').append(button)
            }
            
        })  

        // quick way to change the pointer of the object 
        
        selectPlayerToPass = true
        
        loadPlayersToPass = false
    }


    if(selectPlayerToPass)
    {
        document.querySelector('#backToMainMenuFromPass').style.display = 'grid'
        document.querySelector('#differentAttacksMenu').style.display = 'none'
        document.querySelector('#selectingPlayerToPass').style.display = 'grid'
        document.querySelectorAll('button').forEach((button) => {
            button.addEventListener('click', (e) => {
                Object.values(array).forEach((player) => {
                    if(e.currentTarget.innerHTML == player.name && addOnce == false)
                    {
                        let proxyPlayer = JSON.parse(JSON.stringify(player))
                        proxyPlayer.pass = true
                        proxyPlayer.name = 'pass players ' + player.name
                    
                        array.splice(i+1, 0, proxyPlayer);
                        console.log(player)
                        
                        console.log(array.join())
                        document.querySelector('#backToMainMenuFromPass').style.display = 'none'
                        goToNextTurn = true
                        addOnce = true
                        selectPlayerToPass = false
                        
                    }
                    
                })
            })
        })

        // let proxyPlayer = JSON.parse(JSON.stringify(array[i]))
        // proxyPlayer.pass = true
        // proxyPlayer.name = 'pass players ' + array[i].name
    
        // array.splice(i+1, 0, proxyPlayer);
        // console.log(array[i])
        
        // console.log(array.join())
      // goToNextTurn = true
       //selectPlayerToPass = false

        console.log("sleeep")
    }

    document.querySelector('#backToMainMenuFromPass').addEventListener('click', (e) => {
        console.log("button to go backs")
        selectPlayerToPass = false
        document.querySelector('#selectingPlayerToPass').replaceChildren(); 
        document.querySelector('#selectingPlayerToPass').style.display = 'none'
        document.querySelector('#backToMainMenuFromPass').style.display = 'none'
        
    })
    

}
let loadingPlayersItems = false
let toggleSelectingItemScreen = false
let selectPlayerToUseOn = false
let loadingPlayersToUsItems = false
var currentItemSelected 
let increaseHealthOnce = false
let decreaseAmount = false
let wedontConfusionItem = false



function UseItem(){

    
    if(array[i].isPlayer == true){
       // console.log(array[i].name)
        
        
        
        if(loadingPlayersItems == false)
        {
            document.getElementById('itemButton').addEventListener('click', () =>{

                loadingPlayersItems = true
                
            })
        }
        

        // loading players items and appending the items as buttons inside the div 
        if(loadingPlayersItems)
        {

            
            document.querySelector('#differentAttacksMenu').style.display = 'none'
            document.querySelector('#selectingItem').style.display = 'grid'
            document.querySelector('#selectingItemButtons').style.display = 'grid'
            
            document.querySelector('#selectingItemButtons').replaceChildren();
            Object.values(playersInventory).forEach((items) =>{
                
                if(items.amount > 0)
                {
                    const button = document.createElement('button')
                    console.log(items)
                    button.innerHTML = items.name
                    document.querySelector('#selectingItemButtons').append(button)
                }
                
            })
            toggleSelectingItemScreen = true
            loadingPlayersItems = false
        }

        

        // ----- this opens up the attack selector ------
        if(toggleSelectingItemScreen)
        {
            // for some reason we need this 
            document.querySelector('#differentAttacksMenu').style.display = 'none'

            // if they want to go back to the main menu 
            document.getElementById('backToMainMenu').addEventListener('click', () =>{
                console.log("clicked")
                document.querySelector('#selectingItem').style.display = 'none'
                document.querySelector('#selectingItemButtons').style.display = 'none'
                document.querySelector('#differentAttacksMenu').style.display = 'grid'
                selectPlayerToUseOn = false
                loadingPlayersItems = false
                selectPlayerToUseOn = false
                toggleSelectingItemScreen = false
            })

            // ------- if you actual selected an attack -------
            document.querySelectorAll('button').forEach((button) => {
                button.addEventListener('click', (e) => {
                    Object.values(playersInventory).forEach((item) => {
                        if(e.currentTarget.innerHTML == item.name)
                        {
                            currentItemSelected = item 
                            console.log(e.currentTarget.innerHTML)
                            loadingPlayersToUsItems = true
                            
                            toggleSelectingItemScreen = false

                            
                        }
                    })
                })
            })

            

      
        }



        // loading players // or hitAll 
        if(loadingPlayersToUsItems)
        {
            if(currentItemSelected.hitAll == false)
            {
                if(currentItemSelected.forPlayer)
                {
                    //selectingPlayerToUse
                    console.log("op")
                    document.querySelector('#selectingPlayerToUse').replaceChildren();
                    Object.values(array).forEach((players) =>{
                        if(players.isPlayer && players.dead === false)
                        {
                            const button = document.createElement('button')
                            console.log(players.name)
                            button.innerHTML = players.name
                            document.querySelector('#selectingPlayerToUse').append(button)
                        }
                        
                    })
                    
                    selectPlayerToUseOn = true
                    loadingPlayersToUsItems = false
                    


                }

                if(currentItemSelected.revive  == true){
                    console.log("op")
                    document.querySelector('#selectingPlayerToUse').replaceChildren();
                    Object.values(array).forEach((players) =>{
                        if(players.isPlayer && players.dead === true)
                        {
                            const button = document.createElement('button')
                            console.log(players.name)
                            button.innerHTML = players.name
                            document.querySelector('#selectingPlayerToUse').append(button)
                        }
                        
                    })
                    
                    selectPlayerToUseOn = true
                    loadingPlayersToUsItems = false
                }

                

                if(currentItemSelected.forPlayer)
                {

                    toggleSelectingItemScreen = false 
                }
            }else if(currentItemSelected.hitAll )
            {
                if(currentItemSelected.forPlayer)
                {

                }

                if(currentItemSelected.forPlayer)
                {

                }
            }
            selectPlayerToUseOn = true
            
        }

        // ---- now We select the enemy or the player ------
        if(selectPlayerToUseOn)
        {
            
            loadingPlayersToUsItems = false
            document.querySelector('#differentAttacksMenu').style.display = 'none'
            document.querySelector('#selectingItemButtons').style.display = 'none'
            document.querySelector('#selectingItemButtons').style.display = 'none'
            document.querySelector('#selectingPlayerToUse').style.display = 'grid'
            // ------  just in case we want to go back to the Item menu -------
            document.getElementById('backToMainMenu').addEventListener('click', () =>{
                console.log("clicked")
                document.getElementById('HitAllSelected').style.display = 'none'
                document.querySelector('#selectingPlayerToUse').style.display = 'none'
                document.querySelector('#selectingItem').style.display = 'grid'
                document.querySelector('#selectingItemButtons').style.display = 'grid'
               // document.querySelector('#differentAttacksMenu').style.display = 'grid'
                selectPlayerToUseOn = false
                loadingPlayersToUsItems = false
                toggleSelectingItemScreen = true
                selectPlayerToUseOn = false
                
            })

            // now we need to get the buuton and the inner html
            if(currentItemSelected.forPlayer)
            {
                
                if(currentItemSelected.hitAll == false)
                {

                    document.querySelectorAll('button').forEach((button) => {
                        button.addEventListener('click', (e) => {
                            Object.values(array).forEach((players) =>{
                                if(players.dead == true)
                                {
                                    console.log("cannot heal becuase they are")
                                }
                                if(players.isPlayer)
                                {
                                    if(e.currentTarget.innerHTML == players.name)
                                    {
                                        console.log("clean")
                                        // now add all info
                                        if(players.health > 70 && players.dead == false)
                                        {
                                            if(goToNextTurn == false)
                                            {   
                                                let newPlayerHealth = 100
                                                gsap.to(`${players.healthBar}`, {
                                                    width: newPlayerHealth + '%'
                                                }) 
                                                players.health = 100
                                                console.log(players.health)
                                                currentItemSelected.amount -= 1
                                                console.log(currentItemSelected.amount)
                                                
                                                if(currentItemSelected.cureConfusion)
                                                {
                                                    console.log("confuse is fixed")
                                                    players.confused = false
                                                    radnomPlayer.timesConfused = 0
                                                    
                                                }

                                                if(currentItemSelected.cureKnockOut)
                                                {
                                                    
                                                    players.knockedOut = false
                                                    console.log("knock out is fixed")
                                                    console.log(players.knockedOut)
                                                }

                                                loadingPlayersToUsItems = false
                                                goToNextTurn = true
                                            }
                                                
                                            
                                            selectPlayerToUseOn = false
                                        }else if(players.health < 70 && players.dead == false)
                                        {
                                            if(goToNextTurn == false)
                                            {   
                                                let newPlayerHealth = players.health + currentItemSelected.damage
                                                gsap.to(`${players.healthBar}`, {
                                                    width: newPlayerHealth + '%'
                                                }) 
                                                players.health += currentItemSelected.damage
                                                console.log(players.health)
                                                currentItemSelected.amount -= 1
                                                console.log(currentItemSelected.amount)

                                                if(currentItemSelected.cureConfusion)
                                                {
                                                    console.log("confuse is fixed")
                                                    players.confused = false
                                                    radnomPlayer.timesConfused = 0
                                                   
                                                }
                                                if(currentItemSelected.cureKnockOut)
                                                {
                                                    players.knockedOut = false
                                                    console.log("knock is fixed")
                                                    console.log(players.knockedOut)
                                                }
                                                // now add gsap 
                                                
                                                loadingPlayersToUsItems = false
                                                goToNextTurn = true
                                            }
                                             
                                            selectPlayerToUseOn = false
                                        }else if(players.dead == true){
                                            console.log("player has been revived")
                                            players.health = 100
                                            loadingPlayersToUsItems = false
                                            goToNextTurn = true
                                            players.dead = false


                                        }
                                    }
                                }
                                
                                
                            })
                        })
                    })
                
                    

                }else if(currentItemSelected.hitAll)
                {
                    document.querySelector('#selectingPlayerToUse').style.display = 'none'
                    document.getElementById('HitAllSelected').style.display = 'grid'
                    document.getElementById('HitAllSelected').addEventListener('click', () =>{
                        // make a for loop 
                        for(let k = 0; k < array.length; k++)
                        {
                            if(array[k].isPlayer && array[k].dead == true && currentItemSelected.revive == true)
                            {
                                console.log("cannot heal becuase they are")
                                array[k].health = 100
                                loadingPlayersToUsItems = false
                                goToNextTurn = true
                                array[k].dead = false
                            }
                            if(array[k].isPlayer && array[k].dead === false)
                            {

                                // -- this is for health
                                
                                if(array[k].health > 70 && array[k].dead == false)
                                {
                                    let newPlayerHealth = 100
                                    gsap.to(`${array[k].healthBar}`, {
                                        width: newPlayerHealth + '%'
                                    }) 

                                }else if(array[k].health < 70 && array[k].dead == false)
                                {
                                    let newPlayerHealth = array[k].health + currentItemSelected.damage
                                    gsap.to(`${array[k].healthBar}`, {
                                        width: newPlayerHealth + '%'
                                    }) 
                                    array[k].health += currentItemSelected.damage
                                }

                                if(currentItemSelected.cureConfusion)
                                {
                                    array[k].confused = false
                                    console.log("confuse is fixed")
                                    console.log(array[k].confused)
                                }

                                if(currentItemSelected.cureKnockOut)
                                {
                                    array[k].knockedOut = false
                                    console.log("confuse is fixed")
                                    console.log(array[k].knockedOut)
                                }
                        
                                document.getElementById('HitAllSelected').style.display = 'none'
                                
                                if(decreaseAmount == false)
                                {

                                    currentItemSelected.amount -= 1
                                    decreaseAmount = true
                                }
                                console.log(currentItemSelected.amount)
                                loadingPlayersToUsItems = false
                                goToNextTurn = true
                            }
                        }

                        console.log("hit all")
                    })
                }

            }else if(currentItemSelected.forPlayer == false)
            {
                if(currentItemSelected.hitAll == false)
                {

                    document.querySelectorAll('button').forEach((button) => {
                        button.addEventListener('click', (e) => {
                            Object.values(array).forEach((players) =>{
                                
                                if(players.isPlayer == false)
                                {
                                    if(e.currentTarget.innerHTML == players.name)
                                    {
                                        console.log("clean")
                                        // now add all info
                                    }
                                }
                                
                                
                            })
                        })
                    })
                
                    

                }else if(currentItemSelected.hitAll)
                {
                    document.getElementById('HitAllSelected').style.display = 'grid'
                    document.getElementById('HitAllSelected').addEventListener('click', () =>{
                        console.log("hit all")
                    })
                }
            }


           
        }


        // if the player presses the item button 
            // run though the player items 
                // if the amount > 0 then append the button into the div
            // if the name selected equals the overall item array then select that item from the array 
                // if item that was selected is health then only being able to select the players 
                    // if the item selected.hitall == false
                        // then select a player 
                    // else if it selected.hitall == true 
                        // then hit all players in the array 
                //else if its a attack then only be able to select a enemy

    }

}



function EnemyAttacking(){

    
    if(array[i].isPlayer == false){
        document.querySelector('#differentAttacksMenu').style.display = 'none'
        document.querySelector('#enemyAttackingMenu').style.display = 'block'
        if(resetEnemyAttacks){
            console.log("reset enemies attacks")
            megaString = ' '
            findRandomAttack = true
            readyToAttack = false
            resetEnemyAttacks = false
        }
        if(!array[i].knockedOut && !array[i].confuse || stayLockedIn == false)
        {
            
            //  this finds a radom attack and a radom player 
            if(findRandomAttack)
            {
                
                Object.values(array).forEach((player) =>{
                    if(player.isPlayer)
                    {
                        playerToAttack.push(player)
                    }
                })
                
                radnomPlayer =  playerToAttack[Math.floor(Math.random() * playerToAttack.length)]
                console.log(radnomPlayer)
                randomAttack = array[i].attackClass[Math.floor(Math.random() * array[i].attackClass.length)]
                console.log(randomAttack)
                enemyHealString = ''
                toggleHealEnemy = true
                togglePlayerGettingHit = true
                readyToAttack = true
                
                findRandomAttack = false
            }


            if(readyToAttack)
            {
                
                if(randomAttack.healing == true && toggleHealEnemy == false){
                    
                    window.addEventListener('keydown', (e) => {
                        
                        // document.querySelector('#attackMenu').closest('div.row').remove()
                        if(!fired)
                        {
                            fired = true
                            console.log(e.key)
                            if(e.key == 'w')
                            {
                                //console.log(i)
                                // array[i].confuse = false
                                // array[i].knockedOut = false
                                pushPlayersInBattle = false
                                goToNextTurn = true
                                // decreasePlayersHealth = false
                                // playerLoseHealth = false
                                
                                // array.push(array[i])
                                // document.querySelector('#attackOptions').replaceChildren();
                                // array.shift()
                                // document.querySelector('#enemyAttackingMenu').style.display = 'none'
                                // resetEnemyAttacks = true
                            }
                            
                        }
                            
                    })
                    window.addEventListener('keyup', (e) => {
            
                        fired = false;
                         
                    })
                }   
                if(randomAttack.healing == true && toggleHealEnemy == true)
                {
                    
                    playersOldHealth = radnomPlayer.health
                    console.log("heal")
                    if(randomAttack.hitAll == false)
                    {
                        enemyOldHealth = array[i].health
                        console.log("heal enemy ")
                        console.log(array[i].health - randomAttack.damage)
                        // now just find a random enemy 
                        if(enemyOldHealth > enemyOldHealth - randomAttack.damage)
                        {
                            let newPlayerHealth = 100
                            gsap.to(`${array[i].healthBar2}`, {
                                width: newPlayerHealth + '%'
                            })      

                            array[i].health = 100
                        }else {
                            console.log("NOoooo")
                            let newPlayerHealth = array[i].health + randomAttack.damage
                            gsap.to(`${array[i].healthBar2}`, {
                                width: newPlayerHealth + '%'
                            })
                            array[i].health += randomAttack.damage
                        }
                        
                        enemyHealString += array[i].name + " just Healed himself with " + randomAttack.name + ", Enemy Health was: " + enemyOldHealth + ", but now: " + array[i].health
                        enemyHealString += ' -------- Player Stats' + radnomPlayer.name + ' with ' + randomAttack.name + ". orginal health " + playersOldHealth + " now its: " + radnomPlayer.health
                        document.querySelector('#enemyAttackingMenu').innerHTML = enemyHealString
                        toggleHealEnemy = false

                    }else if(randomAttack.hitAll == true)
                    {
                        console.log("heal all enemies ")
                        console.log(randomAttack.name)  
                        console.log(array[i].health)  
                        for(let j = 0; j < array.length; j++)
                        {
                            enemyOldHealth = array[j].health
                            if(array[j].isPlayer == false)
                            {   
                                
                                console.log(array[j].name)
                                console.log(array[j].health)
                                if(array[j].health > array[j].health - randomAttack.damage)
                                {
                                    let newPlayerHealth = 100     
                                    gsap.to(`${array[j].healthBar2}`, {
                                        width: newPlayerHealth + '%'
                                    })

                                    // array[j].health += randomAttack.damage
                                    array[j].health = 100
                                }else{
                                    let newPlayerHealth = array[j].health - randomAttack.damage
                                    gsap.to(`${array[j].healthBar2}`, {
                                        width: newPlayerHealth + '%'
                                    })

                                    array[j].health += randomAttack.damage
                                }
                                
                                
                                console.log(array[j].health)
                            }
                            if(array[j].isPlayer == false)
                            {
                                enemyHealString += "@" + array[i].name + " just Healed " + array[j].name + " with "+ randomAttack.name + ", Health was: " + enemyOldHealth + ", but now: " + array[j].health + " - "
                           
                            }else{
                                enemyHealString += " "
                           
                            }

                            
                        }   
                        // if()
                        // enemyHealString += ' -------- ' + array[i].name + ' hit ' + radnomPlayer.name + ' with ' + randomAttack.name + ". orginal health " + playersOldHealth + " now its: " + radnomPlayer.health
                        
                        document.querySelector('#enemyAttackingMenu').innerHTML = enemyHealString
                        
                        toggleHealEnemy = false
                    }
                }else if(randomAttack.healing == false){
                    //console.log("we're heare")
                    if(togglePlayerGettingHit)
                    {
                        if(randomAttack.hitAll == false)
                        {
                            if(radnomPlayer.redirect == false)
                            {
                                if(radnomPlayer.weakness == randomAttack.type)
                                {
                                    radnomPlayer.knockedOut = true
                                }
                                console.log("trees")
                                console.log(radnomPlayer.name)
                                console.log(radnomPlayer.timesConfused)
                                console.log(radnomPlayer.confused)
                                if(randomAttack.confuse && radnomPlayer.timesConfused == 0 && radnomPlayer.confused == false)
                                {
                                    
                                    radnomPlayer.confused = true
                                    console.log("trees")
                                }
                                console.log(radnomPlayer.confused)
                                playersOldHealth = radnomPlayer.health
                                console.log(radnomPlayer)
                                if(playerLoseHealth == false)
                                {
                                    Object.values(radnomPlayer.n).forEach((p) =>{
                                        console.log(p)
                                        console.log(randomAttack.type)
                                        if(p == randomAttack.type){
                                            console.log("dont players health  1")
                                            decreasePlayersHealth = true
                                        }
                                    })
                                    playerLoseHealth = true
                                }

                                if(playerLoseHealth == true && decreasePlayersHealth == false){
                                    let newPlayerHealth = radnomPlayer.health - randomAttack.damage
                                    gsap.to(`${radnomPlayer.healthBar}`, {
                                        width: newPlayerHealth + '%'
                                    })
                                    radnomPlayer.health -= randomAttack.damage
                                    if(radnomPlayer.health <= 0)
                                    {
                                        radnomPlayer.dead = true
                                    }
                                    document.querySelector('#enemyAttackingMenu').innerHTML = array[i].name + ' hit ' + radnomPlayer.name + ' with ' + randomAttack.name + ". orginal health " + playersOldHealth + " now its: " + radnomPlayer.health 
                                }else if(playerLoseHealth == true && decreasePlayersHealth == true){
                                    document.querySelector('#enemyAttackingMenu').innerHTML = "Player" + array[i].name + "is immune to  " +  randomAttack.type + ' hit ' + radnomPlayer.name + ' with ' + randomAttack.name + ". orginal health " + playersOldHealth + " now its: " + radnomPlayer.health 
                                }
                            
                                
                               // document.querySelector('#enemyAttackingMenu').innerHTML = array[i].name + ' hit ' + radnomPlayer.name + ' with ' + randomAttack.name + ". orginal health " + playersOldHealth + " now its: " + radnomPlayer.health 
                            }else if(radnomPlayer.redirect == true)
                            {
                                if(array[i].weakness == randomAttack.type)
                                {
                                    stayLockedIn = false
                                    array[i].knockedOut = true 
                                }
                                if(randomAttack.confuse)
                                {
                                    stayLockedIn = false
                                    array[i].confuse = true 
                                }
                                
                                console.log("hey22")
                                playersOldHealth = radnomPlayer.health
                                
                                let newPlayerHealth = array[i].health - randomAttack.damage
                                gsap.to(`${array[i].healthBar2}`, {
                                    width: newPlayerHealth + '%'
                                })
                                array[i].health -= randomAttack.damage
                                document.querySelector('#enemyAttackingMenu').innerHTML = array[i].name + ' hit ' + radnomPlayer.name + ' with ' + randomAttack.name + ". orginal health " + playersOldHealth + " now its: " + radnomPlayer.health + " Emeny Confused: " + array[i].confuse + " "
                                radnomPlayer.redirect = false
                            }
                            

                            
                            togglePlayerGettingHit = false
                        }else if(randomAttack.hitAll)
                        {

                            let nextPlayer = false
                            Object.values(array).forEach((player) =>{

                                
                                
                                if(player.isPlayer)
                                {
                                    Object.values(player.n).forEach((immune) =>{
                                        if(immune == randomAttack.type)
                                        {
                                            player.immune = true
                                            console.log(player.name)
                                            console.log(player.n)
                                           
                                        }else{
                                            player.immune = false
                                            console.log('------')
                                            console.log(player.name)
                                            console.log(player.n)
                                        }
    
                                    })
                                    if(player.redirect == false)
                                    {
                                        if(player.weakness == randomAttack.type)
                                        {
                                            player.knockedOut = true
                                        }
                                        console.log("trees")
                                        if(randomAttack.confuse && player.timesConfused == 0)
                                        {
                                            console.log("trees")

                                            player.confused = true
                                            console.log(player.name)
                                            console.log(player.confused)
                                        }
                                        playersOldHealth = player.health

                                        // you can delete this 
                                        if(playerLoseHealth == false)
                                        {
                                            
                                            
                        
                                            playerLoseHealth = true
                                            
                                        }

                                        if(player.immune == true)
                                        {
                                            console.log("immune")
                                            console.log(player.name)
                                            document.querySelector('#enemyAttackingMenu').innerHTML = "Player: " + player.name + "is immune to  " +  randomAttack.type + ' hit ' + radnomPlayer.name + ' with ' + randomAttack.name + ". orginal health " + playersOldHealth + " now its: " + radnomPlayer.health 
                                            player.immune = false
                                        }else{
                                            console.log("should be immune")
                                            let newPlayerHealth = player.health - randomAttack.damage
                                            gsap.to(`${player.healthBar}`, {
                                                width: newPlayerHealth + '%'
                                            })
                                            player.health -= randomAttack.damage
                                            if(player.health <= 0)
                                            {
                                                player.dead = true
                                            }
                                            console.log("immune")
                                            console.log(player.name)
                                            //player.health -= randomAttack.damage
                                        }

                                        
                                        console.log(array[i].name + " health:" + array[i].health)
                                        megaString += array[i].name + ' hit ' + player.name + ' with ' + randomAttack.name + ". orginal health " + playersOldHealth + " now its: " + player.health + " - " + " Emeny Confused: " + array[i].confuse + " " 
                                        
                                    }else if(player.redirect == true)
                                    {
                                        if(array[i].weakness == randomAttack.type)
                                        {
                                            console.log("redict knockoute")
                                            stayLockedIn = false
                                            array[i].knockedOut = true 
                                        }
                                        if(randomAttack.confuse == true)
                                        {
                                            console.log("redict confuse")
                                            stayLockedIn = false
                                            array[i].confuse = true 
                                        }
                                        playersOldHealth = player.health
                                        let newPlayerHealth = array[i].health - randomAttack.damage
                                        gsap.to(`${array[i].healthBar2}`, {
                                            width: newPlayerHealth + '%'
                                        })
                                        array[i].health -= randomAttack.damage
                                        megaString += array[i].name + ' hit ' + player.name + ' with ' + randomAttack.name + ". orginal health " + playersOldHealth + " now its: " + player.health + " - " + " Emeny Confused: " + array[i].confuse + " "
                                        console.log(player.name + " health:" + array[i].health)
                                        player.redirect = false
                                    }
                                    console.log(array[i].name + " health:" + array[i].health)
                                    
                                }
                                
                            })

                            document.querySelector('#enemyAttackingMenu').innerHTML = megaString 
                            togglePlayerGettingHit = false
                        }
                        togglePlayerGettingHit = false
                        console.log(radnomPlayer.name + " "+ radnomPlayer.health + radnomPlayer.confuse )
                        

                    }
                    window.addEventListener('keydown', (e) => {
                        
                        // document.querySelector('#attackMenu').closest('div.row').remove()
                        if(!fired)
                        {
                            fired = true
                            console.log(e.key)
                            if(e.key == 'w')
                            {
                                pushPlayersInBattle = false
                                goToNextTurn = true
                                
                            }
                            
                        }
                            
                    })
                    window.addEventListener('keyup', (e) => {
            
                        fired = false;
                         
                    })

                    
                }
            }

            


            // enemy picks a random attack 
                // after that enemy randomly picks player to choose from 
        }else{
            //array[i].knockedOut = false
            if(array[i].confuse)
            {
                //array[i].confuse = false
                document.querySelector('#enemyAttackingMenu').innerHTML = array[i].name + " is Confused" 
            }
            if(array[i].knockedOut)
            {
                //array[i].confuse = false
                document.querySelector('#enemyAttackingMenu').innerHTML = array[i].name + " is knocked Out" 
                console.log("stay locked in  ")
                stayLockedIn = true
                window.addEventListener('keydown', (e) => {
                        
                    // document.querySelector('#attackMenu').closest('div.row').remove()
                    if(!fired)
                    {
                    fired = true
                    console.log(e.key)
                    if(e.key == 'w')
                    {
                        pushPlayersInBattle = false
                        goToNextTurn = true
                    }
                        
                    }
                        
                })
    
                window.addEventListener('keyup', (e) => {
                
                    fired = false;
                     
                })
                
            }
           // document.querySelector('#enemyAttackingMenu').innerHTML = array[i].name + " is Confused" 
            
            window.addEventListener('keydown', (e) => {
                        
                // document.querySelector('#attackMenu').closest('div.row').remove()
                if(!fired)
                {
                fired = true
                console.log(e.key)
                if(e.key == 'w')
                {
                    pushPlayersInBattle = false
                    goToNextTurn = true
                    
                }
                    
                }
                    
            })

            window.addEventListener('keyup', (e) => {
            
                fired = false;
                 
            })
        }

    
        
        
    } 
}

var healthAttackGlobal
let disableHealAllButton = false

function PlayerHealing(){
    if(array[i].isPlayer == true && array[i].confused == false){

        

        document.getElementById('healButton').addEventListener('click', () =>{
            document.querySelector('#beforeAttackPlayer').style.display = 'none'
            document.querySelector('#healthInterface').style.display = 'block'
           if(!toggleHealthMenu){

                
                Object.values(array[i].healthingClass).forEach((healing) =>{
                     
                    const button = document.createElement('button')
                    console.log(healing)
                    button.innerHTML = healing.name
                    document.querySelector('#healthingOptions').append(button)
                })
                
                toggleHealthMenu = true;
           }

        })

        if(toggleHealthMenu)
        {
            
            document.querySelector('#differentAttacksMenu').style.display = 'none'
           
            document.querySelector('#healthingOptions').style.display = 'grid'
            document.querySelector('#healingMenu').style.display = 'grid'
            document.querySelectorAll('button').forEach((button) => {
                button.addEventListener('mouseenter', (e) => {
                    console.log(e.currentTarget.innerHTML)
                    Object.values(arrayHealAttacks).forEach((healAttack) => {
                        if(e.currentTarget.innerHTML == healAttack.name)
                        {
                            console.log('they are the same')
                            
                            let playersFutureHealth = array[i].health + healAttack.damage
                            document.querySelector('#healthName').innerHTML = 'Name: ' + healAttack.name
                            document.querySelector('#healthCost').innerHTML = 'Cost: ' + healAttack.cost
                            document.querySelector('#healthDamage').innerHTML = 'Damage: ' + healAttack.damage
                            document.querySelector('#healthPlayer').innerHTML = 'Player Health: ' + array[i].health
                            document.querySelector('#healthFutureHealth').innerHTML = 'Player FHealth: ' + playersFutureHealth

                        }
                    })
                    
                })
                Object.values(arrayHealAttacks).forEach((healAttack) => {
                    if(button.innerHTML == healAttack.name && array[i].focus < healAttack.cost)
                    {
                        
                        button.disabled = true
                    }

                })
                
                button.addEventListener('click', (e) =>{
                    Object.values(arrayHealAttacks).forEach((healAttack) => {
                        
                        Attack(e.currentTarget.innerHTML)
                        if(e.currentTarget.innerHTML == healAttack.name && healAttack.hitAll == false)
                        {
                            //iterateThroughEnemies = 0
                            
                            currentHealAttack = healAttack
                            toggleReadyToHeal = true;

                            
                        }else if(e.currentTarget.innerHTML == healAttack.name && healAttack.hitAll == true)
                        {
                            
                            currentHealAttack = healAttack
                            healAllPlayers = true;
                            
                            toggleReadyToHeal = true;
                        }

                    })
                    
                    
                    
                })
            })
            
            
        }

        if(toggleReadyToHeal)
        {
            document.querySelector('#healingMenu').style.display = 'none'
            document.querySelector('#healthingOptions').style.display = 'none'
            document.querySelector('#finishHealingMenu').style.display = 'block'
            if(iterateThroughPlayers == 0){
 
                console.log("dream")
                document.querySelector('#listPlayers').replaceChildren();

                Object.values(array).forEach((player) =>{
                    
                    if(player.isPlayer == true && player.pass == false && player.dead == false && currentHealAttack.revive == false)
                    {

                        const button = document.createElement('button')
                        button.innerHTML = player.name
                        document.querySelector('#listPlayers').append(button)
                        
                    }else if(currentHealAttack.revive == true && player.dead == true){
                        console.log(currentHealAttack)
                        console.log("tired")
                        const button = document.createElement('button')
                        button.innerHTML = player.name
                        document.querySelector('#listPlayers').append(button)
                    }
                })
                iterateThroughPlayers += 1
            }
            console.log(array[i].health)
            if(healAllPlayers == false)
            {
                document.querySelector('#HealAllButton').style.display = 'none'
                document.querySelector('#listPlayers').style.display = 'grid'
                document.querySelectorAll('button').forEach((button) => {

                    button.addEventListener('mouseenter', (e) => {
                        console.log(e.currentTarget.innerHTML)
                        Object.values(array).forEach((player) => {
                            if(e.currentTarget.innerHTML == player.name)
                            {
                                console.log('they are the same')
                                
                                let playersFutureHealth = player.health + currentHealAttack.damage
                                document.querySelector('#healthName').innerHTML = 'Name: ' + player.name
                                document.querySelector('#healthCost').innerHTML = 'Cost: ' + currentHealAttack.cost
                                document.querySelector('#healthDamage').innerHTML = 'Damage: ' + currentHealAttack.damage
                                document.querySelector('#healthPlayer').innerHTML = 'Player Health: ' + player.health
                                document.querySelector('#healthFutureHealth').innerHTML = 'Player FHealth: ' + playersFutureHealth
    
                            }
                        })
                        
                    })
                    button.addEventListener('click', (e) =>{
    
                        
    
                        Object.values(array).forEach((player, index) =>{
                            
                            if(e.currentTarget.innerHTML == player.name)
                            {
                               
                               if(currentHealAttack.redirect == true)
                               {
                                    player.redirect = true
                               }

                               if(player.dead == true && currentHealAttack.revive == true)
                               {
                                player.dead = false
                               }

                               if(goToNextTurn == false && player.health > player.health - currentHealAttack.damage && player.dead == false){
                                
                                    let newPlayerHealth = 100
                                    gsap.to(`${player.healthBar}`, {
                                        width: newPlayerHealth + '%'
                                    }) 

                                    let newPlayerFocus = player.focus - currentHealAttack.cost
                                    gsap.to(`${array[i].focusBar}`, {
                                        width: newPlayerFocus  + '%'
                                    }) 

                                    array[i].focus -= currentHealAttack.cost
                                    player.health += currentHealAttack.damage
                               }else if(goToNextTurn == false && player.health < player.health - currentHealAttack.damage && player.dead == false){
                                    let newPlayerHealth = 100
                                    gsap.to(`${player.healthBar}`, {
                                        width: newPlayerHealth + '%'
                                    }) 

                                    let newPlayerFocus = player.focus - currentHealAttack.cost
                                    gsap.to(`${array[i].focusBar}`, {
                                        width: newPlayerFocus  + '%'
                                    }) 
                                    array[i].focus -= currentHealAttack.cost
                                    player.health = 100

                               }else if(player.dead == true)
                               {
                                console.log('cannot heal because the ')
                               }
                               
                                
                                
                               iterateThroughPlayers = 0
                                goToNextTurn = true

                                toggleHealthMenu = false
                                toggleReadyToHeal = false
                                // now reset the entire turn 
    
                            }
                        })
                        
                        
                    })
                })
            }
            
            if(healAllPlayers)
            {
                // if(disableHealAllButton == false && currentHealAttack.revive == true)
                document.querySelector('#listPlayers').style.display = 'none'
                document.querySelector('#HealAllButton').style.display = 'grid'
                document.querySelector('#HealAllButton').addEventListener('click', (e) =>{
                    Object.values(array).forEach((player, index) =>{
                        
                        
                           // enemy.name = "bob"\
                        if(player.isPlayer == true)
                        {
                            
                          
                            if(currentHealAttack.redirect == true)
                            {
                                player.redirect = true
                            }

                            if(player.dead == true && currentHealAttack.revive == true)
                            {
                                player.dead = false
                            }

                            if(goToNextTurn == false && player.health < player.health -  currentHealAttack.damage && player.dead == false){

                                let newPlayerHealth = player.health + currentHealAttack.damage
                                gsap.to(`${player.healthBar}`, {
                                    width: newPlayerHealth + '%'
                                }) 

                                let newPlayerFocus = array[i].focus - currentHealAttack.cost
                                gsap.to(`${array[i].focusBar}`, {
                                    width: newPlayerFocus  + '%'
                                }) 
                                array[i].focus -= currentHealAttack.cost
                                player.health += currentHealAttack.damage
                                
                            }else if(goToNextTurn == false && player.health > player.health -  currentHealAttack.damage && player.dead == false)
                            {
                                let newPlayerHealth = 100
                                gsap.to(`${player.healthBar}`, {
                                    width: newPlayerHealth + '%'
                                }) 

                                let newPlayerFocus = array[i].focus - currentHealAttack.cost
                                gsap.to(`${array[i].focusBar}`, {
                                    width: newPlayerFocus  + '%'
                                }) 
                                array[i].focus -= currentHealAttack.cost
                                player.health = 100
                                
                            }
                            console.log(player.health)
                            // document.querySelector('#listEnemies').style.display = 'none'
                            
                            // now reset the entire turn 
                        }
                        
                        
                        
                    })

                    iterateThroughPlayers = 0
                    goToNextTurn = true
                    toggleHealthMenu = false
                    toggleReadyToHeal = false
                    healAllPlayers = false

                })
                
            }
            

           


        }

        // also add the back button 
        document.getElementById('backToHealkMenu').addEventListener('click', () =>{
                
            console.log("back to the heal magic selection")
            document.querySelector('#finishHealingMenu').style.display = 'none'
            
            document.querySelector('#healingMenu').style.display = 'grid'
            iterateThroughPlayers = 0
            healAllPlayers = false

            // you might need to check this 
            document.querySelector('#listPlayers').replaceChildren();
            
            // document.querySelector('#listEnemies').replaceChildren();
            
            toggleReadyToHeal = false
                // if clicked disable this button and open a new menu 
        })

        document.getElementById('backMainMenu2').addEventListener('click', () =>{
            console.log("clicked")
            document.querySelector('#differentAttacksMenu').style.display = 'grid'
            document.querySelector('#healthInterface').style.display = 'none'
            document.querySelector('#healingMenu').style.display = 'none'
            document.querySelector('#healthingOptions').style.display = 'none'
            document.querySelector('#healthingOptions').replaceChildren();
            document.querySelector('#listPlayers').replaceChildren();
            toggleHealthMenu = false;
                // if clicked disable this button and open a new menu 
        })
    }else if(array[i].isPlayer == true && array[i].confused == true){
        document.querySelector('#healButton').disabled = true 
        document.querySelector('#nexTurnButton').disabled = false    
    }


     
}
let increaseTimeConfused = false

let increaseTimeConfused2 = false
function PlayerAttacking(){

    //console.log(array[i].timesConfused)
    if(array[i].confused == false)
    {

        document.querySelector('#attackButton').disabled = false
        document.querySelector('#healButton').disabled = false
    }
    if(array[i].isPlayer == true && array[i].confused == true && increaseTimeConfused2 == false){
        array[i].timesConfused += 1  
        increaseTimeConfused2 = true
    }else if(array[i].isPlayer == true && array[i].confused == false && array[i].timesConfused > 0)
    {
        array[i].timesConfused = 0
    }

    // to see whos confused 

    // console.log(array[i].name)
    // console.log(array[i].timesConfused)
    

    if(array[i].timesConfused > 3)
    {
        document.querySelector('#attackButton').disabled = false
        document.querySelector('#healButton').disabled = false
        console.log("no longer confused")

        array[i].confused = false
        array[i].timesConfused = 0
    }
    if(array[i].isPlayer == true && array[i].confused == false){
        // console.log("player" + array[i])
        if(turnPlayerBack)
        {
            array[i].knockedOut = false

            turnPlayerBack = false
        }
        

        
            // --- this is the open attack option button 
            document.getElementById('attackButton').addEventListener('click', () =>{
                console.log("clicked")
                document.querySelector('#beforeAttackPlayer').style.display = 'grid'
                if(!triggerAttackMenu)
                {
                    //triggerAttackMenu = false
                    document.querySelector('#attackOptions').replaceChildren();
                    Object.values(array[i].attackClass).forEach((attack) =>{
                        
                        const button = document.createElement('button')
                        console.log(attack)
                        button.innerHTML = attack.name
                        document.querySelector('#attackOptions').append(button)
                    })
                
                    triggerAttackMenu = true;
                }
                    // if clicked disable this button and open a new menu 
            })
    
            // --- This takes us back to the main menu 
            document.getElementById('backMainMenu').addEventListener('click', () =>{
                console.log("clicked")
                
                document.querySelector('#beforeAttackPlayer').style.display = 'none'
                
                document.querySelector('#differentAttacksMenu').style.display = 'display'
                triggerAttackMenu = false
                document.querySelector('#attackMenu').style.display = 'none'
                document.querySelector('#attackOptions').style.display = 'none'
                // if clicked disable this button and open a new menu 
            })
            

            // ---- this opens the attack menu 
            if(triggerAttackMenu == true)
            {
                //console.log("la")
                
                document.querySelector('#differentAttacksMenu').style.display = 'none'
                document.querySelector('#attackMenu').style.display = 'grid'
                document.querySelector('#attackOptions').style.display = 'grid'
                //console.log("player is deciding a magical attack")
                document.querySelectorAll('button').forEach((button) => {
                    
                    Object.values(arrayAttacks).forEach((attack) => {
                      //  console.log("players stamina " + array[i].stamina)
                        if(attack.name == button.innerHTML && array[i].stamina < attack.cost)
                        {
                            button.disabled = true
                        }else if(attack.name == button.innerHTML && array[i].stamina >= attack.cost)
                        {
                            button.disabled = false
                        }
                    })

                    button.addEventListener('mouseenter', (e) => {
                        Object.values(arrayAttacks).forEach((attack) => {
                            if(e.currentTarget.innerHTML == attack.name)
                            {
                                console.log(attack.name)
                                let futureCost = array[i].stamina - attack.cost
                                document.querySelector('#attackInfoPlayerName').innerHTML = "Name: " + attack.name
                                document.querySelector('#attackInfoPlayerDamage').innerHTML = "Damage: " + attack.damage
                                document.querySelector('#attackInfoPlayerStamina').innerHTML = "player Stamina: " + array[i].stamina
                                document.querySelector('#attackInfoPlayerCost').innerHTML = "cost: " + attack.cost
                                document.querySelector('#attackInfoPlayerConfuse').innerHTML = "Confusion: " + attack.confuse
                                document.querySelector('#attackInfoPlayerFuture').innerHTML = "Future loss: " + futureCost
                                document.querySelector('#attackInfoPlayerType').innerHTML = "health: " + attack.type

                                // now show info about the attack 

                            }
                        })

                    })

                    button.addEventListener('click', (e) =>{
                        
    
                        Object.values(arrayAttacks).forEach((attack) => {
                            if(e.currentTarget.innerHTML == attack.name && attack.hitAll == false)
                            {
                                
                                console.log(attackDamage)
                                attackDamage = attack.damage
                                attackVar = attack
                                weakness = attack.weakness
                                typeOfAttack = attack.type
                                console.log(attack.name)
                                iterateThroughEnemies = 0
                                toggleReadyToAttack = true;
    
                            
                            
                            }else if(array[i].stamina < attack.cost)
                            {
                                button.disabled = false
                            }
                            if(e.currentTarget.innerHTML == attack.name && attack.hitAll == true){
    
                            attackDamage = attack.damage
                            attackVar = attack
                            weakness = attack.weakness
                            typeOfAttack = attack.type
                            console.log(attack.name)
                            console.log(attackDamage)
                            hitAllEnemies = true
                            console.log('==')
                            iterateThroughEnemies = 0
                            toggleReadyToAttack = true;
                            }else if(array[i].stamina < attack.cost)
                            {
                                
                            }
                        })
                        Attack(e.currentTarget.innerHTML)
                        
                        
                        
                    })
                })
            }

            // --- this opens the finish / select which player you want to hit 
            if(toggleReadyToAttack)
            {
                document.querySelector('#beforeAttackPlayer').style.display = 'none'
                document.querySelector('#beforeAttackEnemy').style.display = 'grid'
                document.querySelector('#attackMenu').style.display = 'none'
                
                document.querySelector('#attackOptions').style.display = 'none'
                document.querySelector('#finishAttackMenu').style.display = 'flex'
                document.querySelector('#listEnemies').style.display = 'grid'
                // selecting which enemy to attack 
                if(iterateThroughEnemies == 0){
    
                    console.log("dream")
                    Object.values(array).forEach((enemy) =>{
                        
                        if(enemy.isPlayer == false )
                        {
    
    
                            const button = document.createElement('button')
                            button.innerHTML = enemy.name
                            document.querySelector('#listEnemies').append(button)
                            
                        }
                    })
                    iterateThroughEnemies += 1
    
                
                }
                
                if(hitAllEnemies == false)
                {
                    document.querySelector('#HitAllButton').style.display = 'none'
                    
                    document.querySelectorAll('button').forEach((button) => {
                        button.addEventListener('mouseenter', (e) => {
                            
                            
                            Object.values(array).forEach((enemy, index) =>{
                                
                               // document.querySelector('#attackInfoPlayer').innerHTML = enemy.name
                                if(enemy.isPlayer == false && e.currentTarget.innerHTML == enemy.name)
                                {
                                    let FutureHealth = enemy.health - attackVar.damage
                                    document.querySelector('#attackInfoEnemy').innerHTML = "Name: " + enemy.name
                                    document.querySelector('#attackInfoEnemyHealth').innerHTML = "health: " + enemy.health
                                    
                                    document.querySelector('#attackInfoEnemyFutureHealth').innerHTML = "Future Health: " + FutureHealth
                                    
                                    document.querySelector('#attackInfoEnemyWeakness').innerHTML = "Weakness: " + enemy.weakness
                                    document.querySelector('#attackInfoEnemyStrengths').innerHTML = "Strength: " + enemy.strength
                                  //  document.querySelector('#attackInfoEnemyNull').innerHTML = "Nullify: " + enemy.n
                                    document.querySelector('#attackInfoEnemyConfused').innerHTML = "confused: " + enemy.confuse
                                    document.querySelector('#attackInfoEnemyKnockOut').innerHTML = "knocked Out: " + enemy.knockedOut
                                    if(attackVar.type == enemy.weakness)
                                    {
                                        document.querySelector('#attackInfoEnemyNull').innerHTML = "Weak"
                                    }else{
                                        document.querySelector('#attackInfoEnemyNull').innerHTML = " not weak"
                                    }

                                }
                            })
                            
                        })
                        button.addEventListener('click', (e) =>{
                        console.log(e.currentTarget.innerHTML)
                            Attack(e.currentTarget.innerHTML)
                        if(hitAllEnemies == false)
                        {
                            Object.values(array).forEach((enemy, index) =>{
                                // console.log(enemy.name)
                                if(enemy.isPlayer == false)
                                {
                                    Object.values(enemy.n).forEach((immune) =>{
                                        if(immune == typeOfAttack)
                                        {
                                            enemy.immune = true
                                            console.log(enemy.name)
                                            console.log(enemy.n)
                                           
                                        }else{
                                            enemy.immune = false
                                            console.log('------')
                                            console.log(enemy.name)
                                            console.log(enemy.n)
                                        }
    
                                    })
                                    
                                        
                                }
                            
                                    if(e.currentTarget.innerHTML == enemy.name )
                                    {
                                        // enemy.name = "bob"\
                                        //console.log(index)
                                        if(enemy.isPlayer == false)
                                        {
                                            Object.values(enemy.n).forEach((immune) =>{
                                                if(immune == typeOfAttack)
                                                {
                                                    enemy.immune = true
                                                    console.log(enemy.name)
                                                    console.log(enemy.n)
                                                
                                                }else{
                                                    enemy.immune = false
                                                    console.log('------')
                                                    console.log(enemy.name)
                                                    console.log(enemy.n)
                                                }
            
                                            })
                                            
                                                
                                        }
                                        if(goToNextTurn == false && enemy.health > 0)
                                        {

                                            
                                            if(enemy.weakness == typeOfAttack)
                                            {
                                                
                                                enemy.knockedOut = true;

                                                let newStamina = array[i].stamina - attackVar.cost
                                                gsap.to(`${array[i].staminaBar}`, {
                                                    width: newStamina + '%'
                                                })
                                                array[i].stamina -= attackVar.cost

                                                let newEnemyHealth = enemy.health - attackDamage
                                                gsap.to(`${enemy.healthBar2}`, {
                                                    width: newEnemyHealth + '%'
                                                })
                                                enemy.health -= attackDamage
                                            }else if(enemy.strength == typeOfAttack)
                                            {
                                                console.log('you hit their strength')
                                                
                                                if(enemy.health < 90)
                                                {
                                                    let newStamina = array[i].stamina - attackVar.cost
                                                    gsap.to(`${array[i].staminaBar}`, {
                                                        width: newStamina + '%'
                                                    })
                                                    array[i].stamina -= attackVar.cost

                                                    let newEnemyHealth = enemy.health + attackDamage
                                                    gsap.to(`${enemy.healthBar2}`, {
                                                        width: newEnemyHealth + '%'
                                                    })
                                                    enemy.health += attackDamage
                                                }else{
                                                    let newStamina = array[i].stamina - attackVar.cost
                                                    gsap.to(`${array[i].staminaBar}`, {
                                                        width: newStamina + '%'
                                                    })
                                                    array[i].stamina -= attackVar.cost
                                                    
                                                    let newEnemyHealth = 100
                                                    gsap.to(`${enemy.healthBar2}`, {
                                                        width: newEnemyHealth + '%'
                                                    })
                                                    enemy.health = 100
                                                }
                                                
                                            }else if(enemy.immune == true)
                                            {
                                                console.log("enemy is immune")
                                                enemy.immune = false
                                            }
                                            else if(attackVar.confuse == true)
                                            {
                                                console.log("hey")
                                                let newStamina = array[i].stamina - attackVar.cost
                                                
                                                gsap.to(`${array[i].staminaBar}`, {
                                                    width: newStamina + '%'
                                                })
                                                array[i].stamina -= attackVar.cost
                                                enemy.confuse = true
                                            }else{
                                                let newStamina = array[i].stamina - attackVar.cost
                                                gsap.to(`${array[i].staminaBar}`, {
                                                    width: newStamina + '%'
                                                })
                                                array[i].stamina -= attackVar.cost

                                                let newEnemyHealth = enemy.health - attackDamage
                                                gsap.to(`${enemy.healthBar2}`, {
                                                    width: newEnemyHealth + '%'
                                                })
                                                enemy.health -= attackDamage
                                            }
                                        

                                        }
                                        if(enemy.health < 0)
                                        {
                                            array.splice(index, 1); 
                                        }
                                        //  console.log("pride")
                                        // document.querySelector('#listEnemies').style.display = 'none'
                                        iterateThroughEnemies = 0
                                        goToNextTurn = true
                                        // now reset the entire turn 
        
                                }
            
            
                                })
                        }
                        
                            
                            
                        })
                    })
                }else if(hitAllEnemies == true)
                {
                    
                    document.querySelector('#listEnemies').style.display = 'none'
                    document.querySelector('#HitAllButton').style.display = 'block'
                    document.querySelector('#HitAllButton').addEventListener('click', (e) =>{
                        console.log(e.currentTarget.innerHTML)
                            Attack(e.currentTarget.innerHTML)           
                            Object.values(array).forEach((enemy, index) =>{
                                if(enemy.isPlayer == false )
                                {
                                    if(goToNextTurn == false && enemy.health > 0){
                                        
                                        if(enemy.weakness == typeOfAttack)
                                            {
                                                array[i].stamina -= attackVar.cost
                                                enemy.knockedOut = true;

                                                let newEnemyHealth = enemy.health - attackDamage
                                                gsap.to(`${enemy.healthBar2}`, {
                                                    width: newEnemyHealth + '%'
                                                })
                                                enemy.health -= attackDamage
                                            }else if(enemy.strength == typeOfAttack)
                                            {
                                                
                                                if(enemy.health < enemy.health - attackDamage)
                                                {
                                                    console.log("this is enemies strength")
                                                    array[i].stamina -= attackVar.cost
                                                    let newEnemyHealth = enemy.health + attackDamage
                                                    gsap.to(`${enemy.healthBar2}`, {
                                                        width: newEnemyHealth + '%'
                                                    })
                                                    enemy.health += attackDamage

                                                }else{
                                                    array[i].stamina -= attackVar.cost
                                                    let newEnemyHealth = 100
                                                    gsap.to(`${enemy.healthBar2}`, {
                                                        width: newEnemyHealth + '%'
                                                    })
                                                    enemy.health = 100
                                                }
                                                
                                            }else if(attackVar.confuse == true)
                                            {
                                                array[i].stamina -= attackVar.cost
                                                enemy.confuse = true
                                            }else
                                            {
                                                array[i].stamina -= attackVar.cost

                                                let newEnemyHealth = enemy.health - attackDamage
                                                gsap.to(`${enemy.healthBar2}`, {
                                                    width: newEnemyHealth + '%'
                                                })
                                                enemy.health -= attackDamage
                                            }
                                    }
                                    if(enemy.health < 0)
                                    {
                                        array.splice(index, 1); 
                                    }
                                    
                                    //console.log("pride")
                                    // document.querySelector('#listEnemies').style.display = 'none'
                                        
                                }
                            })
                            iterateThroughEnemies = 0
                            goToNextTurn = true 
                    })
                }
                
    
                
                // also add the back button 
                document.getElementById('backToAttackMenu').addEventListener('click', () =>{
                    document.querySelector('#beforeAttackPlayer').style.display = 'grid'
                    document.querySelector('#beforeAttackEnemy').style.display = 'none'
                    document.querySelector('#finishAttackMenu').style.display = 'none'
                    console.log("attack button working")
                    document.querySelector('#attackMenu').style.display = 'grid'
                    hitAllEnemies = false
                    iterateThroughEnemies = 0
                    

                    // you might need to check this 
                    document.querySelector('#listEnemies').replaceChildren();
                    
                    // document.querySelector('#listEnemies').replaceChildren();
                    
                    toggleReadyToAttack = false
                        // if clicked disable this button and open a new menu 
                })
    
                
            }
     
 
        
        
        

        
    }else if(array[i].isPlayer == true && array[i].confused == true){
        document.querySelector('#attackButton').disabled = true
        
        document.querySelector('#nexTurnButton').disabled = false   
        document.querySelector('#nexTurnButton').addEventListener('click', () =>{

            if(goToNextTurn == false){
                console.log(array[i].name)
                console.log(array[i].confused)
                console.log(array[i].timesConfused)
                // if(array[i].confused){
                //     array[i].timesConfused += 1  
                // }
                //array[i].timesConfused += 1
                console.log(array[i].timesConfused)
                goToNextTurn = true
            }
            
            
        })
    }
}


function Attack(attack){
    //console.log(attack)

}




