const landing = document.getElementById("landing");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

const openBtn = document.getElementById("openBtn");
const seal = document.getElementById("seal");

// Open landing
openBtn.addEventListener("click", function(){

    landing.style.display = "none";

    envelope.style.display = "flex";

});

// Open envelope
seal.addEventListener("click", function(){

    envelope.style.display = "none";

    letter.style.display = "flex";

});
