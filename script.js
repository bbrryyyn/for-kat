// ======================
// Elements
// ======================

const landing = document.getElementById("landing");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const invite = document.getElementById("invite");

const openBtn = document.getElementById("openBtn");
const seal = document.getElementById("seal");
const continueBtn = document.getElementById("continueBtn");

// ======================
// Landing -> Envelope
// ======================

openBtn.addEventListener("click", function () {

    landing.style.display = "none";
    envelope.style.display = "flex";

});

// ======================
// Envelope -> Letter
// ======================

seal.addEventListener("click", function () {

    // Small animation
    document.querySelector(".flap").style.transform = "rotateX(180deg)";
    seal.style.display = "none";

    setTimeout(function () {

        envelope.style.display = "none";
        letter.style.display = "flex";

    }, 500);

});

// ======================
// Letter -> Invitation
// ======================

continueBtn.addEventListener("click", function () {

    letter.style.display = "none";
    invite.style.display = "flex";

});
