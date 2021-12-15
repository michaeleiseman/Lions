var posX;
var posY;
let keys = {};
var background = document.getElementById('playableCanvas').getContext("2d");
var Player = document.getElementById("canvas").getContext("2d");
var img = document.getElementById("character");
document.getElementById("initialize").addEventListener("click", initialize, false);
let arr = [];
var w = 40;
var h = 40;
var livesLeft;

initialize();
function initialize(){
    keys = {}
    Player.clearRect(0,0,840,840)
    posX = 200;
    posY = 200;
    livesLeft = 3;

    document.getElementById("youWon").style.setProperty("visibility","hidden")

    document.addEventListener("keydown", movementKey, false);
    document.addEventListener("keyup", keyReleased, false);

    arr = [
        {x: 30, y: 40, notYetHit: true, bad: true},
        {x: 120, y: 40, notYetHit: true, bad: true},
        {x: 34, y: 200, notYetHit: true, bad: true},
        {x: 523, y: 620, notYetHit: true, bad: false}
    ]

    populateMap();


    Player.drawImage(img,posX,posY, w,h)



}

function movementKey(event){
    Player.clearRect(posX,posY,w,h)


    keys[event.which]= true;
    
    
    
    if(keys[87]){posY = Math.max(0,posY-10)}
    if(keys[83]){posY=Math.min(840-h, posY+10)}
    if(keys[65]){posX=Math.max(0,posX-10)}
    if(keys[68]){posX=Math.min(840-w, posX+10)}
    collides();

    
    Player.drawImage(img,posX,posY,w,h)
   
}

function keyReleased(event){
    keys[event.which]= false;
}


function populateMap(){
    blockPosX =0;
    blockPosY = 0; 

   
   
    for(const block of arr){
        background.fillStyle = "black";
        background.fillRect(block.x,block.y, 40,40);
    }

}

function collides(){
    for(const block of arr.filter(x => x.notYetHit)){
        if(posX<block.x+20
            &&posX+w>block.x+10
            &&posY<block.y+20
            &&posY+h>block.y+10){
                let color = "green";
                if(block.bad){
                    color = "blue";
                    livesLeft--;
                    document.getElementById("livesLeft").textContent = livesLeft;
                    if(livesLeft == 0){
                        document.removeEventListener("keydown",movementKey,false);
                        document.removeEventListener("keyup",keyReleased,false);
                        
                        
                    }
                }else{
                    document.getElementById("youWon").style.setProperty("visibility","visible")
                    document.removeEventListener("keydown",movementKey,false);
                    document.removeEventListener("keyup",keyReleased,false);
                }
            background.fillStyle = color;
            background.fillRect(block.x,block.y, 40,40);
            block.notYetHit = false;
        }
    }
    

}



