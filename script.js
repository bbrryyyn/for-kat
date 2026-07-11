// ===== Elements =====

const landing = document.getElementById("landing");
const envelopeScene = document.getElementById("envelopeScene");
const letterScene = document.getElementById("letterScene");
const inviteScene = document.getElementById("inviteScene");

const openBtn = document.getElementById("openBtn");
const seal = document.getElementById("seal");
const continueBtn = document.getElementById("continueBtn");


// ===== Open Landing =====

openBtn.onclick = function(){

    landing.classList.remove("active");

    envelopeScene.classList.add("active");

};


// ===== Open Envelope =====

seal.onclick = function(){

    document.querySelector(".envelope-flap").style.transform="rotateX(180deg)";

    seal.style.display="none";

    setTimeout(function(){

        envelopeScene.classList.remove("active");

        letterScene.classList.add("active");

    },1000);

};


// ===== Continue =====

continueBtn.onclick=function(){

    letterScene.classList.remove("active");

    inviteScene.classList.add("active");

};
