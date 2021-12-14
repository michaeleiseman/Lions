var posX = 200;
var posY = 200;
const keys = {};
var background = document.getElementById('playableCanvas').getContext("2d");
var Player = document.getElementById("canvas").getContext("2d");
document.addEventListener("keydown", movementKey, true);
document.addEventListener("keyup", keyReleased, false);
const blockMap = new Map();
var w = 20;
var h = 20;
var strikeCount = 0;






pupulateMap();


Player.fillStyle = "blue";
Player.fillRect(posX,posY, 20,20)



function movementKey(event){
    Player.clearRect(posX,posY,20,20)


    keys[event.which]= true;
    
    
    
    if(keys[87]){collides(0,-5); posY-=5}
    if(keys[83]){collides(0,5); posY+=5}
    if(keys[65]){collides(-5,0);posX-=5}
    if(keys[68]){collides(0,5);posX+=5}

    Player.fillStyle = "blue";
    Player.fillRect(posX,posY,20,20)

}

function keyReleased(event){
    keys[event.which]= false;
}


function pupulateMap(){
    blockPosX =0;
    blockPosY = 0; 

    for(i = 0; i<20; i++){
        background.fillStyle = "gray";
        for(j = 0; j<20;j++){
            if((blockPosX/40)%2==0 && (blockPosY/40)%2==0){

            blockMap.set(blockPosX+","+blockPosY,true);
            
            background.fillRect(blockPosX, blockPosY, 40,40);
            
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

function collides(dx, dy){

    for(i = 1; i<5; i++){
        xt = ((posX+dx)+((i%2)*w))- ((posX+dx)+((i%2)*w))%40;
        yt = ((posY+dy)+((i%2)*h)) - ((posY+dy)+((i%2)*h))%40;

  

        if(blockMap.get(xt+","+yt)){
           if(posX<xt+20
            &&posX+w>xt+10
            &&posY<yt+20
            &&posY+h>yt+10){
                background.fillStyle = "blue";
                background.fillRect(xt,yt,40,40);
                blockMap.set(xt+","+yt,false);
                strikeCount++;
                break;
            }
           
        }
    }
    

}
