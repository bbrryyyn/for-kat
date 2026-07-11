// =====================
// Elements
// =====================

const landing = document.getElementById("landing");
const envelopeScene = document.getElementById("envelopeScene");
const letterScene = document.getElementById("letterScene");
const inviteScene = document.getElementById("inviteScene");

const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const seal = document.getElementById("seal");
const continueBtn = document.getElementById("continueBtn");


// =====================
// Open Button
// =====================

openBtn.addEventListener("click", () => {

    landing.classList.remove("active");

    setTimeout(() => {

        envelopeScene.classList.add("active");

    }, 600);

});


// =====================
// Open Envelope
// =====================

seal.addEventListener("click", () => {

    // Open the flap
    const flap = document.querySelector(".envelope-flap");

    flap.style.transform = "rotateX(180deg)";

    // Hide seal
    seal.style.opacity = "0";

    // Fade out envelope
    setTimeout(() => {

        envelope.style.opacity = "0";
        document.querySelector(".helperText").style.opacity = "0";

    }, 900);

    // Show letter
    setTimeout(() => {

        envelopeScene.classList.remove("active");
        letterScene.classList.add("active");

    }, 1500);

});


// =====================
// Continue
// =====================

continueBtn.addEventListener("click", () => {

    letterScene.classList.remove("active");

    setTimeout(() => {

        inviteScene.classList.add("active");

    }, 500);

});
