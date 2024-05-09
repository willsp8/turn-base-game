
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

const background_tree = new Sprite2({
    position: {
        x: 1000,
        y: -2000,
    },
    velocity: {
        x: 0,
        y: 200
    },
    imageSrc: './assets/ice land_ideas_foreGround1png.aseprite.png',
    set: 'foreGround'
})

const background_tree2 = new Sprite2({
    position: {
        x: 1000 * 2,
        y: -2000,
    },
    velocity: {
        x: 0,
        y: 200
    },
    imageSrc: './assets/ice land_ideas_foreGround1png.aseprite.png',
    set: 'foreGround'
})

const background_tree3 = new Sprite2({
    position: {
        x: (1000 * 2) - 40,
        y: -2000,
    },
    velocity: {
        x: 0,
        y: 200
    },
    imageSrc: './assets/ice land_ideas_foreGround1png.aseprite.png',
    set: 'foreGround'
})
const background_tree4 = new Sprite2({
    position: {
        x: (1000 * 2) - 100,
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
        x: 200,
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

// create start boundry 
const enemyOneStartSpot = new turnSpot({
    position: {
        x: 100,
        y: 450,
    },
    velocity: {
        x: 0,
        y: 0
    },
})
// create end boundry 
const enemyOneEndSpot = new turnSpot({
    position: {
        x: 900,
        y: 450,
    },
    velocity: {
        x: 0,
        y: 0
    },
})

const enemy_One = {sprite: new Sprite4({
    position: {
        x: 250,
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
    
}),
start: true,

end: false,

chase: false,


}
const enemy_Two = new Sprite4({
    position: {
        x: 450,
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

const enemy_Three = new Sprite4({
    position: {
        x: 650,
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

const enemy_Four = new Sprite4({
    position: {
        x: 800,
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
   AnimateTown()
   //animateBattle2()
}

startAnimating2(120)

//
//startAnimating(120)


const movablesArray = [enemy_Four, background_tree3, background_tree4, background_tree, background_tree2, enemyOneStartSpot, enemyOneEndSpot, enemy_Two, enemy_Three, background, background2, background3, background4, background6, background7, background8]
const movablesArray2 = [enemy_One]



let playSongs = false
let startTheBattle = false


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
  
        // animate sun set 
        background8.update()

        // animate the hills 
        background6.update()

        // animate the forest
        background7.update() 
        
        // animate the snow 
        background3.update()

        // all enemies 
        
        

        enemy_Two.update()
        enemy_Three.update()
        enemy_Four.update()

        // animate the player
        player.update()
        // animate the foreground 
        background2.update()
        background_tree.update()
        background_tree2.update()
        background_tree3.update()
        background_tree4.update()
        // animate black bar
        background4.update()    
        // animate filter
        background5.update()

        // enemyOneStartSpot.update()
        // enemyOneEndSpot.update()


        document.querySelector('#PlayersStatus').style.display ='none'
        document.querySelector('#enemyStatus').style.display ='none'
        document.querySelector('#allMenu').style.display ='none'

        if(endBattle){
            gsap.to('#overlappingDiv', {
                opacity: 0,
                onComplete: () => {
  
                }
            })
            endBattle = false
        }
                
        


        if(rechtangularCollision({
            rectangle1: enemy_Two,
            rectangle2: player,
            posX: 20,
            posY: 0
        })){
            // enemy_One.start = false
            // console.log("movvvvveeeee")
            // enemy_One.end = true
            //window.cancelAnimationFrame(townAnimateId)
            gsap.to('#overlappingDiv', {
                opacity: 1,
                onComplete: () => {
                    window.cancelAnimationFrame(townAnimateId)
                }
            })


            var em = document.getElementById("overlappingDiv");

            var  temp = window.getComputedStyle(em).getPropertyValue("opacity");
            console.log("temop" + temp)
            if(temp > 0.90){
                window.cancelAnimationFrame(townAnimateId)
                
                startTheBattle = true
                startOver()

                animateBattle2()

                

            }
            console.log(startTheBattle)
            if(startTheBattle){
                gsap.to('#overlappingDiv', {
                    opacity: 0,
                    onComplete: () => {
                     window.cancelAnimationFrame(townAnimateId)
                    }
                })

                enemy_Two.position.x = -10000

            }

            
            //window.cancelAnimationFrame(townAnimateId)
            //animateBattle2()
            
            console.log("machine learning ")
        }

        if(rechtangularCollision({
            rectangle1: enemy_Three,
            rectangle2: player,
            posX: 20,
            posY: 0
        })){
            // enemy_One.start = false
            // console.log("movvvvveeeee")
            // enemy_One.end = true
            //window.cancelAnimationFrame(townAnimateId)
            gsap.to('#overlappingDiv', {
                opacity: 1,
                onComplete: () => {
                    window.cancelAnimationFrame(townAnimateId)
                }
            })


            var em = document.getElementById("overlappingDiv");

            var  temp = window.getComputedStyle(em).getPropertyValue("opacity");
            console.log("temop" + temp)
            if(temp > 0.90){
                window.cancelAnimationFrame(townAnimateId)
                
                startTheBattle = true
                
                startOver()
                animateBattle2()

            }
            console.log(startTheBattle)
            if(startTheBattle){
                gsap.to('#overlappingDiv', {
                    opacity: 0,
                    onComplete: () => {
                     window.cancelAnimationFrame(townAnimateId)
                    }
                })

                enemy_Three.position.x = -10000
                
            }

            
            //window.cancelAnimationFrame(townAnimateId)
            //animateBattle2()
            
            console.log("machine learning ")
        }

        if(rechtangularCollision({
            rectangle1: enemy_Four,
            rectangle2: player,
            posX: 20,
            posY: 0
        })){
            // enemy_One.start = false
            // console.log("movvvvveeeee")
            // enemy_One.end = true
            //window.cancelAnimationFrame(townAnimateId)
            gsap.to('#overlappingDiv', {
                opacity: 1,
                onComplete: () => {
                    window.cancelAnimationFrame(townAnimateId)
                }
            })


            var em = document.getElementById("overlappingDiv");

            var  temp = window.getComputedStyle(em).getPropertyValue("opacity");
            console.log("temop" + temp)
            if(temp > 0.90){
                window.cancelAnimationFrame(townAnimateId)
                
                startTheBattle = true
                
                startOver()
                animateBattle2()

            }
            console.log(startTheBattle)
            if(startTheBattle){
                gsap.to('#overlappingDiv', {
                    opacity: 0,
                    onComplete: () => {
                     window.cancelAnimationFrame(townAnimateId)
                    }
                })

                enemy_Four.position.x = -10000
                
            }

            
            //window.cancelAnimationFrame(townAnimateId)
            //animateBattle2()
            
            console.log("machine learning ")
        }



        // ------ Enemies ------
        // enemy.update()
        // enemyTwo.update() 

        enemiesMovbles.forEach((movables) =>{
            //movables.update()
        })

        
        

        if(rechtangularCollision({
            rectangle1: enemy_One.sprite,
            rectangle2: enemyOneStartSpot,
            posX: 20,
            posY: 0
        })){
            enemy_One.start = false
            console.log("movvvvveeeee")
            enemy_One.end = true
        }else if(rechtangularCollision({
            rectangle1: enemy_One.sprite,
            rectangle2: enemyOneEndSpot,
            posX: 20,
            posY: 0
        })){
            enemy_One.start = true
            console.log("endddddd")

            enemy_One.end = false

        }


        




        // if(enemy_One.start){
        //     gsap.to(enemy_One.sprite.position, {
        //         x: enemyOneStartSpot.position.x,
        //         y: enemyOneStartSpot.position.y
        //     })
        // }else if(enemy_One.end){
        //     gsap.to(enemy_One.sprite.position, {
        //         x: enemyOneEndSpot.position.x,
        //         y: enemyOneEndSpot.position.y
        //     })
        // }

        
        




        
        if(playerSpotted && !toggleBattle){
        // console.log(currentEnemyFighting)
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


        // game over 
        if(rechtangularCollision({
            rectangle1: player,
            rectangle2: enemyOneEndSpot,
            posX: 20,
            posY: 0
        })){
            gsap.to('#overlappingDiv', {
                opacity: 1,
                onComplete: () => {
                 window.cancelAnimationFrame(townAnimateId)
                 document.querySelector('#complete').style.display ='grid'
                }
            })



        }

    

        
        
        if(keys.d.pressed)
        {
            
            player.framesMax = 8
            player.image = player.sprites.run.image
            // console.log("heeyye ")
            // console.log(player.position.x)
            if(player.position.x < 400){
                if(keys.space.pressed){
                // console.log("let run")
                    
                   
                    player.velocity.x = player.velocity.x / 1.5
                    
                }else{

                        
                    //console.log("let run")
                    player.velocity.x += 3
                }
                //sconsole.log(player.position.x)
            }else{
                
                player.velocity.x =  0
                //console.log("hey")
                movablesArray.forEach((obj)=>{
                    //console.log(obj.set)
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

                movablesArray2.forEach((obj)=>{
                    //console.log(obj.set)
                   
                        obj.position.x -= 1.5
                    
                        
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
            if(rechtangularCollision({
                rectangle1: player,
                rectangle2: enemyOneStartSpot,
                posX: 20,
                posY: 0
            })){
                enemy_One.start = false
                console.log("movvvvveeeee")
                enemy_One.end = true
            }else{
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

                movablesArray2.forEach((obj)=>{
                    
                    obj.position.x += 1.5
                    
                        
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
                    //console.log("dont alert")
                    if(keys.w.pressed){
                        currentEnemyFighting = movables
                        playerSpotted = true
                    }
                }else{
                    currentEnemyFighting = movables
                    playerSpotted = true
                    enemystriksFrist = true
                    //console.log("alert")
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
                    //console.log("dont alert")
                    if(keys.w.pressed){
                        currentEnemyFighting = movables
                        playerSpotted = true
                    }
                }else{
                    currentEnemyFighting = movables
                    playerSpotted = true
                    enemystriksFrist = true
                    //console.log("alert")
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