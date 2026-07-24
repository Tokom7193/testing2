const allowedNames = [
    "ShemonSharma",
    "Shemonsharma",
    "Shemon Sharma",
    "shemonsharma",
    "shemon sharma",
    "shemon",
    "Shemon"
].map(name => name.toLowerCase());

const input = document.getElementById("nameInput");
const button = document.getElementById("continueBtn");
const message = document.getElementById("message");

button.addEventListener("click", checkName);

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        checkName();
    }
});

function checkName() {

    const value = input.value.trim().toLowerCase();

    if (allowedNames.includes(value)) {

        window.location.href = "welcome.html";

    } else {

        message.innerHTML = "🚫 <b>Go Away!</b>";
        message.style.color = "#ff4d4d";

    }

}