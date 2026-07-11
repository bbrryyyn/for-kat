const landing = document.getElementById("landing");
const envelopeScene = document.getElementById("envelopeScene");

const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const seal = document.getElementById("seal");

const tapText = document.querySelector(".tap-text");

openBtn.addEventListener("click", () => {

    // Fade out landing
    landing.classList.remove("active");

    // Show envelope after fade
    setTimeout(() => {

        envelopeScene.classList.add("active");

    }, 600);

});

seal.addEventListener("click", () => {

    envelope.classList.add("open");

    // Remove seal after opening
    seal.style.opacity = "0";
    seal.style.pointerEvents = "none";

    // Update helper text
    tapText.innerHTML = "Take your time.";

});
