
var keys = {};



document.addEventListener("keydown", movementKey, true);
document.addEventListener("keyup", keyReleased, false);

var canvas = document.createElement("canvas");
var b = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

document.body.appendChild(canvas)

b.fillStyle = "#FF0000";
b.fillRect(0,0,canvas.width, canvas.height);


var posX = 200;
var posY = 200;

b.fillStyle = "white";
b.fillRect(posX,posY, 30,40) 



function movementKey(event){
    console.log(event.key);

    keys[event.which]= true;
    console.log(keys[event.which]);
    console.log(event.which);
    
    
    if(keys[87]){posY-=5}
    if(keys[83]){posY+=5}
    if(keys[65]){posX-=5}
    if(keys[68]){posX+=5}

b.fillStyle = "#FF0000";
b.fillRect(0,0,canvas.width, canvas.height);



b.fillStyle = "white";
b.fillRect(posX,posY, 30,40) 


}

function keyReleased(event){
    console.log(event.key);

    keys[event.which]= false;
    console.log(keys[event.which]);
    
    
    if(keys[119]){posY-=5}
    if(keys[115]){posY+=5}
    if(keys[97]){posX-=5}
    if(keys[100]){posX+=5}

b.fillStyle = "#FF0000";
b.fillRect(0,0,canvas.width, canvas.height);



b.fillStyle = "white";
b.fillRect(posX,posY, 30,40) 

}