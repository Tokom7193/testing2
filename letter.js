const envelope = document.getElementById("envelope");

let opened = false;

function openEnvelope(){

    if(opened) return;

    opened = true;

    envelope.classList.add("open");

}
