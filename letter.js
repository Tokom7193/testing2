const envelope = document.getElementById("envelope");
const background = document.querySelector(".letterBackground");
const typewriter = document.getElementById("typewriter");
const cursor = document.getElementById("cursor");

let opened = false;

/* ==========================================
   LETTER
========================================== */

const letterParts = [

`I've wanted to tell you something for quite a while.`,

`This wasn't just a website.

It was my way of showing you what words alone couldn't.`,

`Every page...
Every animation...
Every tiny detail...

was made while thinking about you.`,

`You probably smiled...
Maybe laughed...
Maybe wondered what was coming next.

That was exactly what I hoped for.`,

`Thank you for staying until the end.

❤️`,

];

/* ==========================================
   OPEN ENVELOPE
========================================== */

function openEnvelope(){

    if(opened) return;

    opened = true;

    envelope.classList.add("open");

    setTimeout(()=>{

        envelope.classList.add("expanded");

        background.classList.add("focus");

    },1200);

    setTimeout(typeParagraphs,1800);

}

/* ==========================================
   TYPE PARAGRAPHS
========================================== */

async function typeParagraphs(){

    for(const paragraph of letterParts){

        const p = document.createElement("p");

        typewriter.appendChild(p);

        await typeText(p, paragraph);

        await pause(900);

    }

    cursor.style.display = "none";

}

/* ==========================================
   TYPE TEXT
========================================== */

function typeText(element,text){

    return new Promise(resolve=>{

        let i = 0;

        function type(){

            if(i >= text.length){

                resolve();
                return;

            }

            const char = text.charAt(i);

            element.textContent += char;

            element.scrollIntoView({
                behavior:"smooth",
                block:"end"
            });

            let speed = 28;

            if(char === ",")
                speed = 140;

            else if(char === ".")
                speed = 300;

            else if(char === "!")
                speed = 350;

            else if(char === "?")
                speed = 350;

            else if(char === "\n")
                speed = 180;

            i++;

            setTimeout(type,speed);

        }

        type();

    });

}

/* ==========================================
   PAUSE
========================================== */

function pause(ms){

    return new Promise(resolve=>{

        setTimeout(resolve,ms);

    });

}
