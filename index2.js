
// where the Sprite class is created should help with move the players and changing the x and y
const canvas = document.querySelector('#canvas')
// this c stands for context and its purpose is for drawing out everything in our game 
const c = canvas.getContext('2d')

//this sets the canvas width 
canvas.width = 1024
//this sets the canvas height 
canvas.height = 800



canvas.fillStyle = "blue";


var stop = false;
var frameCount = 0;
//var $results = $("#results");
var fps, fpsInterval, startTime, now, then, elapsed;



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
        this.height = 50
        this.width = 27
        
        
    }
    draw()
    {
    

        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 27, 50)
       // c.clearRect(0, 0, canvas.width, canvas.height);
    }
    update(){
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if(this.position.y + this.height + this.velocity.y >= canvas.height - 305){
            this.velocity.y = 0
        }else{
            this.velocity.y += gravity
        }
        
    }
}

class Sprite4 {
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
        
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if(this.position.y + this.height + this.velocity.y >= canvas.height - 305){
            this.velocity.y = 0
        }else{
            this.velocity.y += gravity
        }
        
    }
}

class Sprite2{
    constructor({position, velocity, imageSrc, set})
    {
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.image = new Image()
        this.image.src = imageSrc
        this.set = set
        
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
    imageSrc: './assets/ice land_v3.png',
    set: 'none'
    
})

const background2 = new Sprite2({
    position: {
        x: 0,
        y: -2000,
    },
    velocity: {
        x: 0,
        y: 200
    },
    imageSrc: './assets/ice land_ideas_foreGround1png.aseprite.png',
    set: 'foreGround'
})
const background3 = new Sprite2({
    position: {
        x: 0,
        y: 0,
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/level_one_ground.png',
    set: 'snow'
    
})
const background4 = new Sprite2({
    position: {
        x: 0,
        y: -100,
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/level_one.png',
    set: 'none'
    
})
const background5 = new Sprite2({
    position: {
        x: 0,
        y: 0,
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/ice land_ideas_filter.png',
    set: 'none'
    
})

const background6 = new Sprite2({
    position: {
        x: 0,
        y: 0,
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/level_one_hills_2.png',
    set: 'hills'
    
})

const background7 = new Sprite2({
    position: {
        x: 0,
        y: 0,
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/level_one_hills.png',
    set: 'forest'
    
})

const background8 = new Sprite2({
    position: {
        x: 0,
        y: 0,
    },
    velocity: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/ice land_ideas_sunset.png',
    set: 'sunset'
    
})


const player = new Sprite4({
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
        }

        
    }, 
    framesMax: 12,
    scale: 1.8,
    imageSrc: './assets/IgnoreFolder/shadowStormIdle.png'
    
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



function startAnimating2(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    console.log("hey")
   // AnimateTown()
   animateBattle2()
}

startAnimating2(120)

//
//startAnimating(120)


const movablesArray = [background, background2, background3, background4, background5, background6, background7, background8]

let playSongs = false
function AnimateTown(){
    //console.log("hadh")
    let townAnimateId =  window.requestAnimationFrame(AnimateTown)
    console.log(townAnimateId)

    now = Date.now();
    elapsed = now - then;
    
    //console
    

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {
     
        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);

        
        c.clearRect(0, 0, canvas.width, canvas.height);

    // c.drawImage(image, 0, 0)
    
    
    // so we need to animate the front 
    
    
    // for reference later
    //background2.update()
    
    
    
    

    // animate sun set 
    background8.update()

    // animate the hills 
    background6.update()

    // animate the forest
    background7.update() 
    
    // animate the snow 
    background3.update()
    // animate the player
    player.update()
    // animate the foreground 
    background2.update()
    // animate black bar
    background4.update()    
    // animate filter
    background5.update()


    // ------ Enemies ------
    // enemy.update()
    // enemyTwo.update() 

    enemiesMovbles.forEach((movables) =>{
        //movables.update()
    })
    
    if(playerSpotted && !toggleBattle){
        console.log(currentEnemyFighting)
        c.clearRect(0, 0, canvas.width, canvas.height);
        window.cancelAnimationFrame(townAnimateId)
        animateBattle(enemystriksFrist)
        //toggleBattle = true
    }

    player.velocity.x = 0
    if(player.velocity.y > 15){
            player.velocity.y = 15
        }   

    if(player.velocity > 3){
        player.velocity.x = 3
    }else if(player.velocity < -3){
        player.velocity.x = -3
    }

   

    
    
    if(keys.d.pressed)
    {
        player.framesMax = 8
        player.image = player.sprites.run.image
        console.log("heeyye ")
        console.log(player.position.x)
        if(player.position.x < 400){
            if(keys.space.pressed){
                console.log("let run")
                
                player.velocity.x += 
                player.velocity.x = player.velocity.x / 1.5
                
            }else{

                    
                console.log("let run")
                player.velocity.x += 3
            }
            //sconsole.log(player.position.x)
        }else{
            
            player.velocity.x =  0
            console.log("hey")
            movablesArray.forEach((obj)=>{
                console.log(obj.set)
                if(obj.set == 'foreGround'){
                    obj.position.x -= 3
                }else if(obj.set == 'forest'){
                    obj.position.x -= 0.2
                }else if(obj.set == 'snow'){
                    obj.position.x -= 1.5
                }else if(obj.set == 'hills'){
                    obj.position.x -= 0.3
                }else if(obj.set == 'sunset'){
                    obj.position.x -= 0
                }else{
                    obj.position.x -= 1.5
                }
                    
            })
            enemiesMovbles.forEach((movables) =>{
                if(keys.space.pressed){
                    movables.position.x -= 3 /3
                    //movables.position.x = movables.position.x / 3 
                }else{
                    console.log(movables.set)
                    if(movables.set == 'foreGround'){
                        movables.position.x -= 7
                    }else{
                        movables.position.x -= 3
                    }
                    
                }
            })
        }
        
    }else if(keys.a.pressed)
    {
        player.framesMax = 8
        player.image = player.sprites.runLeft.image
        if(player.position.x > 100){
            // now move the background d
            
            if(keys.space.pressed){
                
                player.velocity.x -= 3
                player.velocity.x = player.velocity.x / 3
            }else{
                
                
                player.velocity.x -= 3

                // for slopes 
                // player.velocity.y = 0
                // player.position.y -= 1
            }
            console.log(player.position.x)
        }
        else{
            // now move the background
            player.velocity.x = 0
            movablesArray.forEach((obj)=>{
                if(obj.set == 'foreGround'){
                    obj.position.x += 3
                }else if(obj.set == 'forest'){
                    obj.position.x += 0.2
                }else if(obj.set == 'snow'){
                    obj.position.x += 1.5
                }else if(obj.set == 'hills'){
                    obj.position.x += 0.3
                }else if(obj.set == 'sunset'){
                    obj.position.x += 0
                }else{
                    obj.position.x += 1.5
                }
            })
            enemiesMovbles.forEach((movables) =>{
                if(keys.space.pressed){
                    movables.position.x += 3 /3
                }else{
                    

                    movables.position.x += 3
                }

                
            })
        } 
    }else{
        if(lastKey == 'd' && keys.d.pressed == false){
            player.framesMax = 12
            player.image = player.sprites.idle.image
        
        }if(lastKey == 'a' && keys.a.pressed == false){
            player.framesMax = 12
            player.image = player.sprites.idleLeft.image
        
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