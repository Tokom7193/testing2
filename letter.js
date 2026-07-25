const envelope = document.getElementById("envelope");
const typewriter = document.getElementById("typewriter");

let opened = false;

const letterText = `

This is where your letter will appear.

We'll make it type one character at a time,
just like someone carefully writing to her.

Every paragraph can pause naturally.

This makes the ending feel much more emotional.

❤️

`;

function openEnvelope(){

    if(opened) return;

    opened = true;

    envelope.classList.add("open");

    setTimeout(startTyping, 1200);

}

function startTyping(){

    let i = 0;

    function type(){

        if(i >= letterText.length) return;

        typewriter.innerHTML += letterText.charAt(i);

        i++;

        setTimeout(type, 35);

    }

    type();

}
