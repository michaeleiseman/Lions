document.addEventListener("keyup", movementKey, false);
var elem = document.getElementById('box');

function movementKey(event){
    var key = event.key.toLowerCase();

    if(key == "w"){
        elem.style.position.top+=3;
    }
    if(key == "S"){
        elem.style.position.down+=3;
    }
    if(key == "A"){
        elem.style.position.left+=3;
    }
    if(key == "D"){
        elem.style.position.right+=3;
    }

}
