const envelope = document.getElementById("envelope");
const typewriter = document.getElementById("typewriter");
const cursor = document.getElementById("cursor");

let opened = false;

const letterParts = [

`Dear SUAR,

`,

`I've wanted to tell you something for a long time.

`,

`This website wasn't made just to show you something.
It was made so you could experience how I see you.

`,

`Every page...
Every animation...
Every little detail...

was created with you in mind.

`,

`And now you've reached the final page.

❤️

`,

`— Rijin`

];

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
