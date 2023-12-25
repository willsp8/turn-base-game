
// where the Sprite class is created should help with move the players and changing the x and y
const canvas = document.querySelector('#canvas')
// this c stands for context and its purpose is for drawing out everything in our game 
const c = canvas.getContext('2d')

//this sets the canvas width 
canvas.width = 1024
//this sets the canvas height 
canvas.height = 800



canvas.fillStyle = "blue";

const image = new Image()
image.src = './assets/land_2_copy.png'
//image.src = './assets/Screenshot 2023-06-11 at 10.24.02 PM.png'

// image.onload = () => {
//     c.drawImage(image, 100,400)
// }
console.log("new")
const keys = {
    space: {
        pressed: false
    },
    control: {
        pressed: false
    },
    w: {
        pressed: false
    },
    s: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    f: {
        pressed: false
    },
    q: {
        pressed: false
    },
    e: {
        pressed: false
    },
    t: {
        pressed: false
    },
    r: {
        pressed: false
    }, 
    shift: {
        pressed: false
    }
}

console.log(image.src)
//document.querySelector('#battleInterface').style.display = 'none'
let move = false

fired = false; 
const gravity = 0.2
class Sprite {
    constructor({position, velocity, imageSrc})
    {
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.width = 50
        this.image = imageSrc
    }
    draw()
    {
        
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 100, 100)
       // c.clearRect(0, 0, canvas.width, canvas.height);
    }
    update(){
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if(this.position.y + this.height + this.velocity.y >= canvas.height - 150){
            this.velocity.y = 0
        }else{
            this.velocity.y += gravity
        }
        
    }
}

class Sprite2{
    constructor({position, velocity, imageSrc})
    {
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.image = new Image()
        this.image.src = imageSrc
    }
    draw()
    {
        
        
        c.drawImage(this.image, this.position.x,30)
       // c.clearRect(0, 0, canvas.width, canvas.height);
    }
    update(){
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if(this.position.y + this.height + this.velocity.y >= canvas.height - 100){
            this.velocity.y = 0
        }else{
            this.velocity.y += gravity
        }
        
    }
}


class Sprite3 {
    //note we cannot pass postion second and velocity first we will get errors so  the postion and velocity as one argument
    constructor({position, velocity, imageSrc, scale = 1, fm = 1, offset= {x: 0, y: 0}}) {
        this.position = position
        this.velocity = velocity
        this.width = 50
        this.height = 150
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.fm  = fm 
        this.frameCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 5
        this.offset = offset
        
        
       
    }

    draw() {
        // note the first foru arugments after this.image is a way to crop the image for animaitons 
        // so 0 is where i x starts and the other 0 is where our y starts
        // so instead of getting the entire width we do this in order to get the width of one frame 
        //note make another y frame varible to go the the next frame 
        c.drawImage(
            this.image, 
            this.frameCurrent * this.image.width / this.fm,
            0,
            this.image.width / this.fm,
            this.image.height,
            this.position.x - this.offset.x, 
            this.position.y - this.offset.y, 
            (this.image.width / this.fm) * this.scale, 
            this.image.height * this.scale)
    }

    animateFrames(){
        this.framesElapsed++
        if(this.framesElapsed % this.framesHold == 0){
            if(this.frameCurrent < this.fm - 1){
                this.frameCurrent++
            }else{
                this.frameCurrent = 0
            }
        }
    }

    //this will basically 
    update(){
        this.draw()
        this.animateFrames()
        
    }

    
}

const background = new Sprite2({
    position: {
        x: 0,
        y: 0,
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/land_3.png'
    
})

const background2 = new Sprite2({
    position: {
        x: 1000,
        y: 0,
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/land_2_copy.png'
    
})
const background3 = new Sprite2({
    position: {
        x: 2000,
        y: 0,
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/land_2_copy.png'
    
})
const background4 = new Sprite2({
    position: {
        x: 3000,
        y: 0,
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/land_2_copy.png'
    
})
const background5 = new Sprite2({
    position: {
        x: 4000,
        y: 0,
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/land_2_copy.png'
    
})

const background6 = new Sprite2({
    position: {
        x: 5000,
        y: 0,
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/land_2_copy.png'
    
})


const player = new Sprite({
    position: {
        x: 100,
        y: 400,
    },
    velocity: {
        x: 0,
        y: 0
    }
})

const enemy = new Sprite({
    position: {
        x: 900,
        y: 200,
    },
    velocity: {
        x: 0,
        y: 0
    }
})

const enemyTwo = new Sprite({
    position: {
        x: 600,
        y: 200,
    },
    velocity: {
        x: 0,
        y: 0
    }
})


var enemystriksFrist = false
var playerSpotted = false
var toggleBattle = false
var currentEnemyFighting 
const enemiesMovbles = [enemy, enemyTwo]


//AnimateTown()
//animateBattle2()
startAnimating(120)


const movablesArray = [background, background2, background3, background4, background5, background6]

function AnimateTown(){
    let townAnimateId =  window.requestAnimationFrame(AnimateTown)
    c.clearRect(0, 0, canvas.width, canvas.height);
    
   // c.drawImage(image, 0, 0)

   // for reference later
   if(!keys.d.pressed)
    {
    background2.update()
    background3.update()
    background4.update()
    background5.update()
    background6.update()
    background .update()
    }


   
    background2.update()
    background3.update()
    background4.update()
    background5.update()
    background6.update()
    background .update()
    
    
    player.update()
    
    // enemy.update()
    // enemyTwo.update() 

    enemiesMovbles.forEach((movables) =>{
        //movables.update()
    })
    //console.log(player.position.y)
   // console.log(player)


   if(playerSpotted && !toggleBattle){
    console.log(currentEnemyFighting)
    c.clearRect(0, 0, canvas.width, canvas.height);
    window.cancelAnimationFrame(townAnimateId)
    animateBattle(enemystriksFrist)
    //toggleBattle = true
   }

   player.velocity.x = 0
   if(player.velocity.y > 1){
        player.velocity.y = 1
    }   

   if(player.velocity > 3){
    player.velocity.x = 3
   }else if(player.velocity < -3){
    player.velocity.x = -3
   }

    if(keys.d.pressed)
    {
        console.log("heeyye ")
        console.log(player.position.x)
        if(player.position.x < 900){
            if(keys.space.pressed){
                console.log("let run")
                
                player.velocity.x += 3
                player.velocity.x = player.velocity.x / 3
                
            }else{

                    
                console.log("let run")
                player.velocity.x += 3
            }
            //sconsole.log(player.position.x)
        }else{
            
            player.velocity.x =  0
            console.log("hey")
            movablesArray.forEach((obj)=>{
                obj.position.x -= 3
            })
            enemiesMovbles.forEach((movables) =>{
                if(keys.space.pressed){
                    movables.position.x -= 3 /3
                    //movables.position.x = movables.position.x / 3 
                }else{
                    movables.position.x -= 3
                }
            })
        }
        
    }

    if(keys.a.pressed)
    {
        
        if(player.position.x > 100){
            // now move the background d
            
            if(keys.space.pressed){
                
                player.velocity.x -= 3
                player.velocity.x = player.velocity.x / 3
            }else{
                
                player.velocity.x -= 3
            }
            console.log(player.position.x)
        }
        else{
            // now move the background
            player.velocity.x = 0
            movablesArray.forEach((obj)=>{
                obj.position.x += 3
            })
            enemiesMovbles.forEach((movables) =>{
                if(keys.space.pressed){
                    movables.position.x += 3 /3
                }else{
                    movables.position.x += 3
                }

                
            })
        } 
    }

    enemiesMovbles.forEach((movables) =>{
        if(rechtangularCollision({
            rectangle1: player,
            rectangle2: movables,
            posX: 20,
            posY: 0
        })){
    
            //console.log('collide')
            if(keys.space.pressed){
                console.log("dont alert")
                if(keys.w.pressed){
                    currentEnemyFighting = movables
                    playerSpotted = true
                }
            }else{
                currentEnemyFighting = movables
                playerSpotted = true
                enemystriksFrist = true
                console.log("alert")
            }
            //player.velocity.x =  +6
           // moving = false
        }
    
        if(rechtangularCollision({
            rectangle1: player,
            rectangle2: movables,
            posX: -20,
            posY: 0
        })){
    
            //console.log('collide')
            if(keys.space.pressed){
                console.log("dont alert")
                if(keys.w.pressed){
                    currentEnemyFighting = movables
                    playerSpotted = true
                }
            }else{
                currentEnemyFighting = movables
                playerSpotted = true
                enemystriksFrist = true
                console.log("alert")
            }
        }
    })
    
    
    
    if(move == true)
    {
        window.cancelAnimationFrame(townAnimateId)
    }
    if(playerSpotted == false){
        window.addEventListener('keydown', (e) => {
            if(playerSpotted == false) {
                if(!fired)
                {
                    fired = true
                    console.log(e.key)
                    if(e.key == 'k')
                    {
                        
                        animateBattle()
                        move = true
                    }
                    
                }
            }
            // document.querySelector('#attackMenu').closest('div.row').remove()
            
                
        })
        window.addEventListener('keyup', (e) => {
            fired = false;
        })
    }
    

    // now we add the background 
    
    
}

function rechtangularCollision({rectangle1, rectangle2, posX, posY}) {
    // console.log(rectangle2.position.x)
    // console.log('now the player')
    // console.log(rectangle1.position.x)
    return(
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x + posX
        && rectangle1.position.x <= (rectangle2.position.x + posX) + rectangle2.width &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y + posY
        && rectangle1.position.y <= (rectangle2.position.y + posY) + rectangle2.height
    )
}

if(playerSpotted){
    console.log("help")
}
if(playerSpotted == false){
    console.log("run")
    window.addEventListener('keydown', (e) => {
        if(playerSpotted == false){
            console.log(e.key)
        if(e.key == ' '){
            console.log('say hello')
        }
        // making an switch case statment 
        switch(e.key){
            case ' ':
                keys.space.pressed = true

                lastkey = ' '
                break
            case 'a':
                keys.a.pressed = true
                lastKey = 'a'
                break
            case 'd':
                keys.d.pressed = true
                lastKey = 'd'
                break
            case 'shift':
                keys.shift.pressed = true
                
                break
            case 'w':
                keys.w.pressed = true
                
                break
            
        }
        }
        
    })

    // var menuToggled = false
    // var dialogueToggled = false
    // //this will listen for when the key is up and will set the keys const statement above to false
    window.addEventListener('keyup', (e) => {
        //console.log(e.key)
        // making an switch case statment 
        
        switch(e.key){
            case ' ':
                keys.space.pressed = false
                break
            case 'a':
                keys.a.pressed = false
                break
            case 'd':
                keys.d.pressed = false
                break
            case 'shift':
                keys.shift.pressed = false
                break
            case 'w':
                keys.w.pressed = false  
                
                break
        }   
    })
}