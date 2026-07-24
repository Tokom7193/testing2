const MAX_SPEED = 1.5;
console.log("INSIDE JS WORKING");

const bubbles = [
    document.getElementById("b1"),
    document.getElementById("b2"),
    document.getElementById("b3"),
    document.getElementById("b4"),
    document.getElementById("b5"),
    document.getElementById("b6"),
    document.getElementById("b7"),
    document.getElementById("b8")
];


const lines = [
    document.getElementById("line1"),
    document.getElementById("line2"),
    document.getElementById("line3"),
    document.getElementById("line4"),
    document.getElementById("line5"),
    document.getElementById("line6"),
    document.getElementById("line7"),
    document.getElementById("line8")
];


const center = document.querySelector(".center");


let objects = [];

const size = Math.min(170, window.innerWidth * 0.28);
const speed = .25;



function random(min,max){

    return Math.random()*(max-min)+min;

}




// CREATE BUBBLE OBJECTS


bubbles.forEach((bubble,index)=>{

    let x;
    let y;

    let safe=false;


    let attempts = 0;

while (!safe && attempts < 100) {

    attempts++;

    x = random(
        20,
        window.innerWidth - size - 20
    );

    y = random(
        20,
        window.innerHeight - size - 20
    );

    safe = true;

    for (let o of objects) {

        let dx = x - o.x;
        let dy = y - o.y;

        let d = Math.sqrt(dx * dx + dy * dy);

        if (d < size + 40) {
            safe = false;
            break;
        }
    }
}



    let obj={

    el:bubble,

    x:x,

    y:y,

    vx:random(-2,2),

    vy:random(-2,2),

    line:lines[index],

    opened:false

};

    objects.push(obj);


});




// CHECK DISTANCE

function distance(a,b){

    let dx=a.x-b.x;
    let dy=a.y-b.y;

    return Math.sqrt(dx*dx+dy*dy);

}




// KEEP AWAY FROM CENTER

function avoidCenter(obj){


    let rect=center.getBoundingClientRect();


    let cx=rect.left+rect.width/2;
    let cy=rect.top+rect.height/2;


    let bx=obj.x+size/2;
    let by=obj.y+size/2;


    let dx=bx-cx;
    let dy=by-cy;


    let dist=Math.sqrt(dx*dx+dy*dy);



    if(dist<230){


        obj.vx += dx/dist;
        obj.vy += dy/dist;


    }


}





// BUBBLE COLLISION


function collision(){


    for(let i=0;i<objects.length;i++){


        for(let j=i+1;j<objects.length;j++){


            let a=objects[i];

            let b=objects[j];



            let dx=b.x-a.x;
            let dy=b.y-a.y;



            let d=Math.sqrt(dx*dx+dy*dy);



            if(d<size){



                let angle=Math.atan2(dy,dx);



                let pushX=Math.cos(angle);
                let pushY=Math.sin(angle);



                a.vx-=pushX;
                a.vy-=pushY;


                b.vx+=pushX;
                b.vy+=pushY;


            }


        }

    }

}





// UPDATE SVG LINES


function updateLines(obj){



    let centerRect=center.getBoundingClientRect();



    let cx=centerRect.left+
    centerRect.width/2;



    let cy=centerRect.top+
    centerRect.height/2;



    let bx=obj.x+size/2;

    let by=obj.y+size/2;



    obj.line.setAttribute(
        "x1",
        cx
    );


    obj.line.setAttribute(
        "y1",
        cy
    );


    obj.line.setAttribute(
        "x2",
        bx
    );


    obj.line.setAttribute(
        "y2",
        by
    );


}




// MAIN ANIMATION LOOP


function animate(){

// console.log(objects);

    objects.forEach(obj=>{


        obj.x += obj.vx;

        obj.y += obj.vy;




        // WALL COLLISION


        if (obj.x <= 0) {

    obj.x = 0;
    obj.vx *= -1;

}

else if (obj.x >= window.innerWidth - size) {

    obj.x = window.innerWidth - size;
    obj.vx *= -1;

}



        if (obj.y <= 0) {

    obj.y = 0;
    obj.vy *= -1;

}

else if (obj.y >= window.innerHeight - size) {

    obj.y = window.innerHeight - size;
    obj.vy *= -1;

}




        avoidCenter(obj);

// Limit maximum speed
let speed = Math.sqrt(obj.vx * obj.vx + obj.vy * obj.vy);

if (speed > MAX_SPEED) {

    obj.vx = (obj.vx / speed) * MAX_SPEED;
    obj.vy = (obj.vy / speed) * MAX_SPEED;

}


        obj.el.style.left=obj.x+"px";

        obj.el.style.top=obj.y+"px";

        if (obj.opened) {

          obj.el.classList.add("opened");

}


        updateLines(obj);



    });



    collision();



    requestAnimationFrame(animate);



}



animate();





// RESPONSIVE


window.addEventListener(
"resize",
()=>{


objects.forEach(obj=>{


    obj.x=random(
        0,
        window.innerWidth-size
    );


    obj.y=random(
        0,
        window.innerHeight-size
    );


});


});
// ===========================
// POPUP CONTENT
// ===========================

let openedQualities = new Set();

const qualities = {

   childish: {

    emoji: "👧",

    title: "Childish",

    image: "childish.jpg",

    text: `Your childish side is something I hope time never takes away from you.

Jis tarah tum bina soche has deti ho, chhoti-chhoti baaton par excited ho jaati ho, aur itna naturally tease karti ho, usse sab kuch thoda aur fun lagne lagta hai.
Aaj kal sab log jaldi bade banne ki race mein lage hain, lekin tumne apni woh innocence abhi bhi sambhal ke rakhi hai.<br> Bas ek promise karna...<b>Never lose ur childishness</b>, kyunki yehi woh quality hai jo ordinary moments ko bhi special bana deti hai.`,

    action: "Haan, main hoon childish 😒"

},

guarded: {

    emoji: "🛡️",

    title: "Guarded",

    image: "guarded.png",

    text: `Log shayad tumhare guarded nature ko distance ya attitude samajhte hain, lekin mujhe pata hai tum kisi par jaldi trust nahi karti, and honestly, that's completely okay. Jo log genuinely tumhari care karte hain, woh kabhi tumhe rush nahi karenge... isliye main bhi nahi karunga.
<br>
Aur jab tum kisi ko apni life mein aane deti ho, unhe tumhara sabse genuine aur caring version dekhne ko milta hai. <b>Main bhi us version ko dekhna chahta hoon, chahe jitna bhi time lage.</b> So, wait until your heart truly feels safe.`,

    action: "VIP entry only 😌"

},
kind: {

    emoji: "❤️",

    title: "Kind",

    image: "kind.png",

    text: `Your kindness is one of those qualities that quietly makes a difference.
<br>
Tumhe care dikhane ke liye grand gestures ki zaroorat nahi padti. Tumhari chhoti-chhoti baatein, the way you notice people's feelings, aur logon ko valued feel karwana hi tumhari kindness ko dikhata hai.
Kabhi ye mat sochna ki being kind is a weakness. Genuinely, it's one of the most beautiful qualities about you.

`,

    action: "Nai main buri hoon 🫣❤️"

},

authentic: {

    emoji: "🎭",

    title: "Authentic",

    image: "authentic.png",

    text: `What makes you special is that you never try to be someone else.
<br>
Tumhari apni soch, apna attitude, aur apna way of expressing yourself hi tumhe alag banata hai. Tu kabhi sirf dusron ko please karne ke liye khud ko nahi badalti, aur uski zaroorat bhi nahi hai. Honestly, <b>Real you is the best version of you.</b>
`,

    action: "Main jaisi hoon khush hoon 😜"

},

independent: {

    emoji: "💪",

    title: "Independent",

    image: "independent.png",

    text: `Tum ek strong independent woman ho. Tum apne decisions khud leti ho, mushkil situations ka saamna khud karti ho, aur kabhi kisi ko apni worth define nahi karne deti. Mujhe tumhari ye confidence aur determination bahut pasand hai.
<br>
Lekin ek baat... strong hone ka matlab ye nahi ki tumhe hamesha strong hi rehna pade. Kabhi-kabhi tumhe bhi weak hone ka chance milna chahiye. Mere saath tumhe sab kuch akele handle karne ki zaroorat nahi hai. Agar main tumhare saath hoon, toh tum mujh par thoda sa depend bhi kar sakti ho. <strong> Not because you can't, but because with me you don't have to.</strong>`,

    action: "Khud kar lungi 😎"

},

principled: {

    emoji: "⚖️",

    title: "Principled",

    image: "principled.png",

    text: `Tumhare principles hi tumhari strength hain. Tumhe achhe se pata hota hai kya sahi hai aur kya galat, aur sirf dusron ko khush karne ke liye tum apne values kabhi compromise nahi karti. Tum jo decisions leti ho, woh hamesha apni beliefs ke basis par leti ho. Aur honestly, ye quality tumhe alag banati hai.`,

    action: "Jo sahi hai wohi karungi 😒"

},

filial: {

    emoji: "👪",

    title: "Filial",

    image: "filial.png",

    text: `Family ke liye tumhara love aur respect hi batata hai ki tum actually kaisi ho. Tum un logon ko kabhi nahi bhoolti jo hamesha tumhare saath khade rahe. Tum apni family ko bahut value karti ho aur unhe hamesha sabse pehle rakhti ho. Ye dekhkar mujhe hamesha bahut achha lagta hai. Aur yehi woh quality hai jo mujhe tumhare baare mein sabse zyada pasand hai.`,

    action: "Pehle family baaki sab baad mein 😌"

},

respectful: {

    emoji: "🤝",

    title: "Respectful",

    image: "respectful.png",

    text: `Although kabhi-kabhi tum thodi rude ho jaati ho, respect dena tumhari aadat ka hissa hai. Tumhari apni soch aur opinions hain, jinko tum openly express karti ho, lekin phir bhi tum dusron ke thoughts, feelings aur choices ka respect karna jaanti ho.

Especially old people ke liye jo respect tum dikhati ho, woh mujhe bahut achha lagta hai. True respect ka matlab sabse agree karna nahi hota, balki apni identity maintain karte hue dusron ke saath dignity aur kindness se behave karna hota hai. Aur is cheez mein tum sach mein kamaal ho.`,

    action: "Izzat do izzat lo 😎🤝"

}

};

function openCard(name){

    openedQualities.add(name);

    const bubbleMap = {
        childish: "b1",
        guarded: "b2",
        kind: "b3",
        authentic: "b4",
        independent: "b5",
        principled: "b6",
        filial: "b7",
        respectful: "b8"
    };

    objects.forEach(obj => {

        if (obj.el.id === bubbleMap[name]) {

            obj.opened = true;

        }

    });

    // ⭐ Show Final Surprise after all 8 are opened
if (openedQualities.size === 8) {

    const alertBox = document.getElementById("glassAlert");

    alertBox.classList.add("show");


    setTimeout(()=>{

        alertBox.classList.remove("show");


        document
            .getElementById("finalUnlock")
            .classList.add("show");


    },2000);

}

    
   console.log(openedQualities.size);

   const data = qualities[name];

   console.log(data.image);

    document.getElementById("popupEmoji").textContent =
        data.emoji;

    document.getElementById("popupTitle").textContent =
        data.title;

    document.getElementById("popupText").innerHTML =
    qualities[name].text;

    document.getElementById("popupAction").textContent =
        data.action;


    const imageBox = document.querySelector(".popupImage");

if(imageBox){

    imageBox.style.backgroundImage = 
    `url(${data.image}?v=${Date.now()})`;

}


    document.getElementById("overlay")
        .classList.add("show");

}
function closeCard(){

    document.getElementById("overlay")
        .classList.remove("show");

}
