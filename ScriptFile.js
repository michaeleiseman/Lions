var posX;
var posY;
let keys = {};
var background = document.getElementById('playableCanvas').getContext("2d");
var Player = document.getElementById("canvas").getContext("2d");
var img = document.getElementById("character");
var crate = document.getElementById("crate");
var badCrate = document.getElementById("badCrate");
var goodCrate = document.getElementById("goodCrate");
var stone1 = document.getElementById("stone1");
var stone2 = document.getElementById("stone2");
var stone3 = document.getElementById("stone3");
var stone4 = document.getElementById("stone4");

document.getElementById("initialize").addEventListener("click", initialize, false);
let arr = [];
var w = 40;
var h = 40;
var livesLeft;
let exist = [];

initialize();
function initialize(){
    keys = {}
    exist = [];
    background.clearRect(0,0,840,840);
    Player.clearRect(0,0,840,840);
    posX = 200;
    posY = 200;
    livesLeft = 3;

    document.getElementById("youWon").style.setProperty("visibility","hidden")

    document.addEventListener("keydown", movementKey, false);
    document.addEventListener("keyup", keyReleased, false);

    giveCoordinate();

    arr = [
        {x: exist[0].x, y:  exist[0].y, notYetHit: true, bad: true},
        {x: exist[1].x, y:  exist[1].y, notYetHit: true, bad: true},
        {x: exist[2].x, y:  exist[2].y, notYetHit: true, bad: true},
        {x: exist[3].x, y:  exist[3].y, notYetHit: true, bad: false},
        {x: exist[4].x, y:  exist[4].y, notYetHit: true, bad: true},
        {x: exist[5].x, y:  exist[5].y, notYetHit: true, bad: true},
        {x: exist[6].x, y:  exist[6].y, notYetHit: true, bad: true},
        {x: exist[7].x, y:  exist[7].y, notYetHit: true, bad: true},
        {x: exist[8].x, y:  exist[8].y, notYetHit: true, bad: true},
        {x: exist[9].x, y:  exist[9].y, notYetHit: true, bad: true}
    ]

    populateMap();


    Player.drawImage(img,posX,posY, w,h)



}

function movementKey(event){
    Player.clearRect(posX,posY,w,h)


    keys[event.which]= true;
    
    
    
    if(keys[87]){posY=Math.max(0,posY-10)}
    if(keys[83]){posY=Math.min(660-h, posY+10)}
    if(keys[65]){posX=Math.max(0,posX-10)}
    if(keys[68]){posX=Math.min(840-w, posX+10)}
    collides();

    
    Player.drawImage(img,posX,posY,w,h)
   
}

function keyReleased(event){
    keys[event.which]= false;
}


function populateMap(){
    var f;

    for(i = 0; i < 840; i+=60){
        for(j = 0; j<660; j+=60){
             f = Math.floor(Math.random()*(5-1)+1);
             
            if(f == 1){
                background.drawImage(stone1,i,j,60,60);
            }else if(f == 2){
                background.drawImage(stone2,i,j,60,60);
            }else if(f == 3){
                background.drawImage(stone3,i,j,60,60);
            }else{
                background.drawImage(stone4,i,j,60,60);
            }
        }
    }

   
   
    for(const block of arr){
        
        background.drawImage(crate,block.x,block.y, 40,40);
    }

}

function collides(){
    for(const block of arr.filter(x => x.notYetHit)){
        if(posX<block.x+20
            &&posX+w>block.x+10
            &&posY<block.y+20
            &&posY+h>block.y+10){
                let image = goodCrate;
                if(block.bad){
                    image= badCrate;
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
            
            background.drawImage(image,block.x,block.y, 40,40);
            block.notYetHit = false;
        }
    }
    

}


function giveCoordinate(){
    
for(i = 0; i<=10; i++){
    var x = Math.random()*(620-40)+40;
    var y = Math.random()*(620-40)+40;
    for(const block of exist){
        if(block.x == x && block.y == y || Math.abs(block.x-x)<40 && Math.abs(block.y-y)<40){
            x=block.x+40;
            y=block.y+40;
            for(const block of exist){
                if(block.x == x && block.y == y || Math.abs(block.x-x)<40 && Math.abs(block.y-y)<40){
                    x=block.x+40;
                    y=block.y-40;
                }
            }
        } 
    }
    exist.push({x: x, y:y});

 }
}



