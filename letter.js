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


    // Start envelope opening
    envelope.classList.add("open");



    // Expand after flap animation

    setTimeout(()=>{

    envelope.classList.add("expanded");

    background.classList.add("focus");


},1800);



    // Start typing after expansion settles

    setTimeout(()=>{

        typeParagraphs();


    },2300);


}
/* ==========================================
   TYPE PARAGRAPHS
========================================== */

async function typeParagraphs(){

    if(!typewriter) return;


    for(const paragraph of letterParts){


        const p = document.createElement("p");


        typewriter.appendChild(p);



        await typeText(p, paragraph);



        // Natural pause between thoughts

        await pause(1200);


    }



    // Hide typing cursor

    if(cursor){

        cursor.style.display = "none";

    }



    // Extra emotional pause after final paragraph

    await pause(2000);



    // Move slightly down before signature

    const letterBox =
        document.querySelector(".letterContent");


    if(letterBox){

        letterBox.scrollTo({

            top:
                letterBox.scrollHeight + 180,

            behavior:"smooth"

        });

    }



    // Wait for scroll movement

    await pause(1800);



    // Reveal signature

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



            // ==========================================
            // CINEMATIC AUTO SCROLL
            // follows every small line/detail
            // ==========================================

            const letterBox =
                document.querySelector(".letterContent");


            if(letterBox){


                const elementBottom =
                    element.offsetTop +
                    element.offsetHeight;


                const visibleHeight =
                    letterBox.clientHeight;



                const targetScroll =
                    elementBottom -
                    (visibleHeight * 0.55);



                letterBox.scrollTo({

                    top:targetScroll,

                    behavior:"smooth"

                });


            }



            // ==========================================
            // HANDWRITING SPEED
            // ==========================================

            let speed = 45;



            if(char === ","){

                speed = 180;

            }


            else if(char === "."){

                speed = 420;

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


            else if(char === "❤️"){

                speed = 700;

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

async function showFinalSignature(){


    const signature =
        document.getElementById("signature");



    // Reveal signature

    if(signature){

        signature.classList.add("show");

    }



    // Give time to read signature

    await pause(3500);



    const letterBox =
        document.querySelector(".letterContent");



    // Scroll further for final message

    if(letterBox){

        letterBox.scrollTo({

            top:
                letterBox.scrollHeight + 220,

            behavior:"smooth"

        });

    }



    await pause(1500);



    const finalMessage =
        document.getElementById("finalMessage");



    if(finalMessage){

        finalMessage.classList.add("show");

    }


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
