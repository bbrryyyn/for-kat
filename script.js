const landing = document.getElementById("landing");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const invite = document.getElementById("invite");

const openBtn = document.getElementById("openBtn");
const seal = document.getElementById("seal");
const continueBtn = document.getElementById("continueBtn");

const letterText = document.getElementById("letterText");

const fullLetter = `I made this because I wanted to try something creative, as someone na not creative? Hahaha it's explore and try lang. But it turned out to be pretty fun.

Since it's my birthday, I thought I'd ask if you'd like to celebrate with me if you're up for it.

But please don't feel pressured to say yes because of this or because it's my birthday. I know you've been carrying a lot lately. If you're not feeling up to it, that's completely okay. We can celebrate another time whenever you're ready.`;

function switchPage(current, next){

    current.style.opacity="0";

    setTimeout(()=>{

        current.style.display="none";

        next.style.display="flex";

        next.style.opacity="0";

        requestAnimationFrame(()=>{

            next.style.opacity="1";

        });

    },400);

}

function typeLetter(){

    letterText.innerHTML="";

    continueBtn.style.display="none";

    const words = fullLetter.split(" ");

    let index = 0;

    const timer = setInterval(()=>{

        letterText.innerHTML += words[index] + " ";

        index++;

        if(index >= words.length){

            clearInterval(timer);

            continueBtn.style.display="block";

        }

    },120);

}

openBtn.onclick=function(){

    switchPage(landing,envelope);

};

seal.onclick=function(){

    document.querySelector(".flap").style.transform="rotateX(180deg)";

    seal.style.display="none";

    setTimeout(()=>{

        switchPage(envelope,letter);

        setTimeout(typeLetter,500);

    },500);

};

continueBtn.onclick=function(){

    switchPage(letter,invite);

};
