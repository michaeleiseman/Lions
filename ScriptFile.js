var posX = 200;
var posY = 200;
const keys = {};
var Player = document.getElementById("canvas").getContext("2d");
document.addEventListener("keydown", movementKey, true);
document.addEventListener("keyup", keyReleased, false);
const character = document.getElementById("character");
const blockMap = new Map();






pupulateMap();


Player.drawImage(character, posX, posY, 30, 30);




function movementKey(event){
    Player.clearRect(posX,posY,20,20)


    keys[event.which]= true;
    
    
    
    if(keys[87]){posY-=5}
    if(keys[83]){posY+=5}
    if(keys[65]){posX-=5}
    if(keys[68]){posX+=5}

    Player.fillStyle = "blue";
    Player.fillRect(posX,posY,20,20)

}

function keyReleased(event){
    keys[event.which]= false;
}


function pupulateMap(){
    blockPosX =0;
    blockPosY = 0; 

    for(i = 0; i<=20; i++){
        for(j = 0; j<=20;j++){
            if((blockPosX/40)%2==0 && (blockPosY/40)%2==0){

            blockMap.set(blockPosX+","+blockPosY,true);
            
            console.log(blockPosX+","+blockPosY);
            }else if((blockPosX/40)%2!=0){
                blockMap.set(blockPosX+","+blockPosY,false);  
            }

            
        
            blockPosX+=40;
    
        }
        blockPosX=0;
        blockPosY+=40;
    }

}

function collides(x, y){

    

}
