const envelope = document.getElementById("envelope");
const typewriter = document.getElementById("typewriter");
const cursor = document.getElementById("cursor");

let opened = false;

const letterText = `Dear SUAR,

This is where your real letter will be.

Every sentence will appear naturally,
as if someone is writing it just for you.

I wanted this experience to feel personal,
not like reading a normal webpage.

Thank you for reaching this far.

❤️
`;

function openEnvelope(){

    if(opened) return;

    opened = true;

    envelope.classList.add("open");

    setTimeout(()=>{

        envelope.classList.add("expanded");

    },1200);

    setTimeout(startTyping,1800);

}

function startTyping(){

    let i = 0;

    function type(){

        if(i >= letterText.length){

            cursor.style.display="none";
            return;

        }

        typewriter.textContent += letterText.charAt(i);

        typewriter.parentElement.scrollTop =
            typewriter.parentElement.scrollHeight;

        const ch = letterText.charAt(i);

        i++;

        let speed = 28;

        if(ch === ",")

            speed = 180;

        else if(ch === ".")

            speed = 350;

        else if(ch === "\n")

            speed = 220;

        setTimeout(type,speed);

    }

    type();

}
