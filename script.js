let selected="";

let remove=false;

let fireLevel=1;



function startGame(){

home.style.display="none";

game.style.display="block";

createMap();

}



function createMap(){

map.innerHTML="";


for(let i=0;i<225;i++){

let cell=document.createElement("div");

cell.className="cell";


cell.onclick=function(){

if(remove){

if(cell.textContent!="🔥")

cell.textContent="";

}

else if(selected){

cell.textContent=selected;

}


check();

};


map.appendChild(cell);

}


map.children[112].textContent="🔥";

}



function choose(x){

selected=x;

remove=false;

}



function removeMode(){

remove=true;

selected="";

}



function clearBase(){

document.querySelectorAll(".cell").forEach(c=>{

if(c.textContent!="🔥")

c.textContent="";

});

check();

}



function openMenu(){

menu.style.display=

menu.style.display=="block"

?"none"

:"block";

}



function setFire(x){

fireLevel=x;

fire.innerHTML=x;

}



function check(){

let p=0;


document.querySelectorAll(".cell").forEach(c=>{


if(c.textContent=="🌲")p+=3;

if(c.textContent=="🪵")p+=5;

if(c.textContent=="⚔️")p+=4;

if(c.textContent=="🐻")p+=6;


});


if(p>100)p=100;


protect.innerHTML=p;

}