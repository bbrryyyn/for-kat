const landing=document.getElementById("landing");

const envelope=document.getElementById("envelopeScreen");

document.getElementById("openButton").onclick=()=>{

landing.classList.add("hidden");

setTimeout(()=>{

envelope.classList.remove("hidden");

},900);

};
