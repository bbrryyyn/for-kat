const landing = document.getElementById("landing");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const invite = document.getElementById("invite");

const openBtn = document.getElementById("openBtn");
const seal = document.getElementById("seal");
const continueBtn = document.getElementById("continueBtn");

// ----------------------------
// Smooth Page Transition
// ----------------------------

function switchPage(current, next) {

    // Fade out current page
    current.style.opacity = "0";

    setTimeout(() => {

        current.style.display = "none";

        // Prepare next page
        next.style.display = "flex";
        next.style.opacity = "0";

        // Wait one frame so CSS can animate
        requestAnimationFrame(() => {
            next.style.opacity = "1";
        });

    }, 400);

}

// ----------------------------
// Landing → Envelope
// ----------------------------

openBtn.addEventListener("click", () => {

    switchPage(landing, envelope);

});

// ----------------------------
// Envelope → Letter
// ----------------------------

seal.addEventListener("click", () => {

    document.querySelector(".flap").style.transform = "rotateX(180deg)";

    seal.style.display = "none";

    setTimeout(() => {

        switchPage(envelope, letter);

    }, 500);

});

// ----------------------------
// Letter → Invitation
// ----------------------------

continueBtn.addEventListener("click", () => {

    switchPage(letter, invite);

});
