
document.addEventListener("keydown", movementKey, true);
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
    
    if(event.key == "w"){posY-=5}
    if(event.key == "s"){posY+=5}
    if(event.key == "a"){posX-=5}
    if(event.key == "d"){posX+=5}

b.fillStyle = "#FF0000";
b.fillRect(0,0,canvas.width, canvas.height);



b.fillStyle = "white";
b.fillRect(posX,posY, 30,40) 


}
