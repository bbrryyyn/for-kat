// ======================
// Get Pages
// ======================

const landing = document.getElementById("landing");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const invite = document.getElementById("invite");

// ======================
// Get Buttons
// ======================

const openBtn = document.getElementById("openBtn");
const seal = document.getElementById("seal");
const continueBtn = document.getElementById("continueBtn");

// ======================
// Open Button
// ======================

openBtn.addEventListener("click", function () {

    landing.classList.add("hidden");

    envelope.classList.remove("hidden");

});

// ======================
// Open Envelope
// ======================

seal.addEventListener("click", function () {

    document.querySelector(".flap").style.transform = "rotateX(180deg)";

    setTimeout(function () {

        envelope.classList.add("hidden");

        letter.classList.remove("hidden");

    }, 700);

});

// ======================
// Continue
// ======================

continueBtn.addEventListener("click", function () {

    letter.classList.add("hidden");

    invite.classList.remove("hidden");

});
