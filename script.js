const landing=document.getElementById("landing");
const envelope=document.getElementById("envelope");
const letter=document.getElementById("letter");
const invite=document.getElementById("invite");

const openBtn=document.getElementById("openBtn");
const seal=document.getElementById("seal");
const continueBtn=document.getElementById("continueBtn");

function switchPage(current,next){

current.classList.add("fadeOut");

setTimeout(()=>{

current.style.display="none";

next.style.display="flex";

next.classList.add("fadeIn");

},400);

}

openBtn.onclick=function(){

switchPage(landing,envelope);

};

seal.onclick=function(){

document.querySelector(".flap").style.transform="rotateX(180deg)";

seal.style.display="none";

setTimeout(()=>{

switchPage(envelope,letter);

},500);

};

continueBtn.onclick=function(){

switchPage(letter,invite);

};
