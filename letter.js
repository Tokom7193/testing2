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

    if(!envelope || !background) return;

    opened = true;

   envelope.style.pointerEvents = "none";


    // Start envelope opening
    envelope.classList.add("open");


    // Expand paper after flap opens
    setTimeout(()=>{

        envelope.classList.add("expanded");

        background.classList.add("focus");

    },1200);



    // Start typing after paper settles
    setTimeout(()=>{

        typeParagraphs();

    },2300);

}
/* ==========================================
   TYPE PARAGRAPHS
========================================== */

async function typeParagraphs(){

    for(const paragraph of letterParts){

        const p = document.createElement("p");

        typewriter.appendChild(p);


        await typeText(p, paragraph);


        // Natural pause between thoughts
        await pause(1200);

    }


    // Hide cursor after finishing
    cursor.style.display = "none";


    // Optional final reveal
    showFinalSignature();

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


            // Keep latest text visible
            const letterBox =
    document.querySelector(".letterContent");


if(letterBox){

    letterBox.scrollTop =
        letterBox.scrollHeight;

}



            let speed = 45;


            // Natural handwriting pauses

            if(char === ","){

                speed = 180;

            }

            else if(char === "."){

                speed = 450;

            }

            else if(char === "!"){

                speed = 500;

            }

            else if(char === "?"){

                speed = 500;

            }

            else if(char === "\n"){

                speed = 250;

            }

            // Longer pause after heart emoji

            else if(char === "❤️"){

                speed = 600;

            }


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

/* ==========================================
   FINAL SIGNATURE REVEAL
========================================== */

function showFinalSignature(){

    setTimeout(()=>{


        const signature =
            document.getElementById("signature");


        if(signature){

            document
                .body
                .classList
                .add("endingMode");
           
            signature.classList.add("show");

        }


        setTimeout(()=>{


            const finalMessage =
                document.getElementById("finalMessage");


            if(finalMessage){

                finalMessage.classList.add("show");

            }


        },2500);


    },1200);

}
/* ==========================================
   LETTER PAGE STAR GENERATOR
========================================== */

const letterStars = document.querySelector(".letterStars");


function createLetterStars(){

    if(!letterStars) return;


    letterStars.innerHTML = "";


    for(let i = 0; i < 80; i++){

        const star = document.createElement("span");


        const size =
            Math.random() * 3 + 1;


        star.style.width =
            size + "px";


        star.style.height =
            size + "px";


        star.style.left =
            Math.random() * 100 + "%";


        star.style.top =
            Math.random() * 100 + "%";


        star.style.animationDuration =
            (3 + Math.random() * 5) + "s";


        star.style.animationDelay =
            Math.random() * 5 + "s";


        letterStars.appendChild(star);

    }

}


createLetterStars();

// ==========================================
// FLOATING PARTICLES
// ==========================================

function createParticles(){

    if(!letterStars) return;


    if(letterStars.querySelector(".particle")) return;


    for(let i = 0; i < 25; i++){

        const particle = document.createElement("span");

        particle.className = "particle";


        const size =
            Math.random() * 4 + 2;


        particle.style.width =
            size + "px";


        particle.style.height =
            size + "px";


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.top =
            Math.random() * 100 + "%";


        particle.style.animationDuration =
            (8 + Math.random() * 8) + "s";


        particle.style.animationDelay =
            Math.random() * 5 + "s";


        letterStars.appendChild(particle);

    }

}


createParticles();
