var posX = 200;
var posY = 200;
const keys = {};
var canvas = document.createElement("canvas");
var Player = canvas.getContext("2d");
document.addEventListener("keydown", movementKey, true);
document.addEventListener("keyup", keyReleased, false);
const blockMap = new Map();



canvas.width = window.innerWidth;
canvas.height = window.innerHeight;





document.body.appendChild(canvas);
pupulateMap();
console.log(window.innerWidth);
console.log(window.innerHeight);



Player.fillStyle = "blue";
Player.fillRect(posX,posY, 20,20)



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
            }else if((blockPosX/40)%2!=0){
                blockMap.set(blockPosX+","+blockPosY,false);  
            }

            console.log(blockMap.get(blockPosX+","+blockPosY));
            console.log(blockPosX+","+blockPosY);
        
            blockPosX+=40;
    
        }
        blockPosX=0;
        blockPosY+=40;
    }

}

function collides(x, y){

    

}





