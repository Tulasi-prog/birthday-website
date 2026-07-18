// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 2500);

});

// ===============================
// FLOATING HEARTS
// ===============================

const heartContainer = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*25) + "px";

    heart.style.animationDuration = (5 + Math.random()*4) + "s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

setInterval(createHeart,350);

// ===============================
// MUSIC
// ===============================

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        music.play();

        musicBtn.innerHTML="⏸ Pause Music";

    }

    else{

        music.pause();

        musicBtn.innerHTML="🎵 Play Music";

    }

    playing=!playing;

});

// ===============================
// START BUTTON
// ===============================

document.getElementById("startBtn").addEventListener("click",()=>{

    document.getElementById("cake").scrollIntoView({

        behavior:"smooth"

    });

});

// ===============================
// TYPEWRITER LETTER
// ===============================

const message = `

Happy Birthday ❤️

You are not just my sister,

you are my best friend,

my biggest supporter,

and one of the most wonderful people in my life.

May your life always be filled with happiness,

good health,

success,

and endless smiles.

Thank you for always being there.

Happy Birthday once again! 🎂🎉❤️

`;

let i=0;

function typeLetter(){

    const text=document.getElementById("typingText");

    if(i<message.length){

        text.innerHTML+=message.charAt(i);

        i++;

        setTimeout(typeLetter,40);

    }

}

window.addEventListener("load",()=>{

    setTimeout(typeLetter,3500);

});
// =========================================
// FIREWORKS
// =========================================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];

function createFirework() {

    const x = Math.random() * canvas.width;
    const y = Math.random() * (canvas.height / 2);

    for (let i = 0; i < 80; i++) {

        particles.push({

            x: x,
            y: y,

            dx: (Math.random() - 0.5) * 8,
            dy: (Math.random() - 0.5) * 8,

            life: 100,

            color: `hsl(${Math.random()*360},100%,60%)`

        });

    }

}

function animateFireworks(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let i=particles.length-1;i>=0;i--){

        const p = particles[i];

        ctx.beginPath();

        ctx.arc(p.x,p.y,3,0,Math.PI*2);

        ctx.fillStyle = p.color;

        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        p.life--;

        if(p.life <= 0){

            particles.splice(i,1);

        }

    }

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

setInterval(createFirework,1800);


// =========================================
// BIRTHDAY CAKE
// =========================================

const cake = document.getElementById("cakeContainer");

cake.innerHTML = `

<div class="cake-top"></div>

<div class="cake-layer"></div>

<div class="cake-base"></div>

`;


// =========================================
// GIFT BOX
// =========================================

const gift = document.getElementById("giftBox");

gift.addEventListener("click",()=>{

    gift.innerHTML="🎉";

    gift.style.transform="scale(1.3) rotate(15deg)";

    createFirework();
    createFirework();

    setTimeout(()=>{

        alert("🎁 Surprise!\n\nWishing you endless happiness, love and success! ❤️");

    },800);

});


// =========================================
// EXTRA FIREWORKS
// =========================================

document.getElementById("startBtn").addEventListener("click",()=>{

    createFirework();

    setTimeout(createFirework,400);

    setTimeout(createFirework,800);

});
// ====================================
// PHOTO LIGHTBOX
// ====================================

const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeBtn = document.getElementById("closeLightbox");

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

// ====================================
// SPARKLES
// ====================================

function createSparkle(){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=Math.random()*window.innerWidth+"px";

sparkle.style.top=Math.random()*window.innerHeight+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},4000);

}

setInterval(createSparkle,300);

// ====================================
// CANDLES
// ====================================

const cakeContainer=document.getElementById("cakeContainer");

for(let i=0;i<5;i++){

const candle=document.createElement("div");

candle.className="candle";

candle.style.left=(40+i*45)+"px";

const flame=document.createElement("div");

flame.className="flame";

candle.appendChild(flame);

cakeContainer.appendChild(candle);

}

// ====================================
// BLOW CANDLES
// ====================================

cakeContainer.addEventListener("click",()=>{

document.querySelectorAll(".flame").forEach(f=>{

f.style.display="none";

});

for(let i=0;i<6;i++){

setTimeout(createFirework,i*250);

}

alert("🎂 Wish Made!\nHappy Birthday ❤️");

});

// ====================================
// AUTO GALLERY
// ====================================

let current=0;

setInterval(()=>{

const gallery=document.querySelector(".gallery");

gallery.scrollTo({

left:current*320,

behavior:"smooth"

});

current++;

if(current>=images.length){

current=0;

}

},3000);
// =============================
// BALLOON GAME
// =============================

const gameArea = document.getElementById("gameArea");

const playBtn = document.getElementById("playGame");

const scoreBoard = document.getElementById("score");

let score = 0;

let gameRunning = false;

const colors = [

"#ff4d6d",

"#ffd43b",

"#51cf66",

"#4dabf7",

"#845ef7",

"#ff922b"

];

function createBalloon() {

    if (!gameRunning) return;

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.style.left = Math.random() * (gameArea.clientWidth - 60) + "px";

    balloon.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

    balloon.style.bottom = "-100px";

    balloon.style.animationDuration = (4 + Math.random() * 3) + "s";

    balloon.onclick = function () {

        score++;

        scoreBoard.innerHTML = "Score : " + score;

        balloon.remove();

        if (typeof createFirework === "function") {
            createFirework();
        }

        if (score >= 20) {

            clearInterval(balloonInterval);

            gameRunning = false;

            alert("🎉 Happy Birthday ❤️");

        }

    };

    gameArea.appendChild(balloon);

    balloon.addEventListener("animationend", () => {
        balloon.remove();
    });

}   // <-- Function ends here
let balloonInterval;

playBtn.addEventListener("click", () => {

    score = 0;

    scoreBoard.innerHTML = "Score : 0";

    gameRunning = true;

    gameArea.innerHTML = "";

    clearInterval(balloonInterval);

    balloonInterval = setInterval(createBalloon, 700);

});