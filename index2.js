
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
image.src = './assets/Sprite-0002.png'
//image.src = './assets/Screenshot 2023-06-11 at 10.24.02 PM.png'

image.onload = () => {
    c.drawImage(image, 0, 0)
}
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

class Sprite {
    constructor(position)
    {
        this.position = position
    }
    draw()
    {
        
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 100, 100)
       // c.clearRect(0, 0, canvas.width, canvas.height);
    }
}


const player = new Sprite({
    x: 100,
    y: 200
})

player.draw()
//AnimateTown()
animateBattle()



function AnimateTown(){
    //console.log("hey")
    c.clearRect(0, 0, canvas.width, canvas.height);
    
        c.drawImage(image, 0, 0)
    
    player.draw()
   // console.log(player)
    if(keys.d.pressed)
    {
        player.position.x += 3
        console.log(player.position.x)
    }
    if(keys.a.pressed)
    {
        player.position.x -= 3
        console.log(player.position.x)
    }
    let townAnimateId =  window.requestAnimationFrame(AnimateTown)
    if(move == true)
    {
        window.cancelAnimationFrame(townAnimateId)
    }
    window.addEventListener('keydown', (e) => {
                        
        // document.querySelector('#attackMenu').closest('div.row').remove()
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
            
    })
    window.addEventListener('keyup', (e) => {
        fired = false;
    })

    // now we add the background 
    
    
}



// window.addEventListener('keydown', (e) => {
//     console.log(e.key)
//     if(e.key == ' '){
//         console.log('say hello')
//     }
//     // making an switch case statment 
//     switch(e.key){
//         case ' ':
//             keys.space.pressed = true

//             lastkey = ' '
//             break
//         case 'a':
//             keys.a.pressed = true
//             lastKey = 'a'
//             break
//         case 'd':
//             keys.d.pressed = true
//             lastKey = 'd'
//             break
        
//     }
// })

// var menuToggled = false
// var dialogueToggled = false
// //this will listen for when the key is up and will set the keys const statement above to false
// window.addEventListener('keyup', (e) => {
//     //console.log(e.key)
//     // making an switch case statment 

//     switch(e.key){
//         case ' ':
//             //keys.space.pressed = false
//             break
        
//         case 'a':
//             keys.a.pressed = false
//             break
//         case 'd':
//             keys.d.pressed = false
//             break
        
//     }   
// })