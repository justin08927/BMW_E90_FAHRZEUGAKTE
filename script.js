// ===============================
// BMW E90 Premium Script
// ===============================


// Smooth Navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});




// Navbar beim Scrollen

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

nav.style.background="rgba(5,8,15,.95)";

nav.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

nav.style.background="rgba(8,10,15,.75)";

nav.style.boxShadow="none";

}

});




// Karten Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});



document.querySelectorAll(".card,.dashboard-box,.feature-card,.timeline-item,.gallery-item,.document-card").forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition=".8s";

observer.observe(item);

});




// Zahlen hochzählen

const numbers=document.querySelectorAll(".hero-card h2");

numbers.forEach(number=>{

let value=number.innerText;

let end=parseInt(value.replace(/\D/g,""));

if(isNaN(end)) return;

let start=0;

let timer=setInterval(()=>{

start++;

number.innerText=start;

if(start>=end){

clearInterval(timer);

number.innerText=value;

}

},15);

});




// Galerie Hover Glow

document.querySelectorAll(".gallery-item").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.boxShadow="0 0 35px rgba(30,136,255,.45)";

});

img.addEventListener("mouseleave",()=>{

img.style.boxShadow="none";

});

});




// Nach oben Button erzeugen

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";

topBtn.style.right="25px";
topBtn.style.bottom="25px";

topBtn.style.width="55px";

topBtn.style.height="55px";

topBtn.style.border="none";

topBtn.style.borderRadius="50%";

topBtn.style.background="#1e88ff";

topBtn.style.color="white";

topBtn.style.fontSize="22px";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

topBtn.style.zIndex="999";



window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});



topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};




// Console

console.log("BMW E90 Premium Website geladen.");
const gallery=document.querySelectorAll(".gallery-item img");

const lightbox=document.getElementById("lightbox");

const lightImg=document.getElementById("lightbox-img");

const close=document.getElementById("close");

gallery.forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightImg.src=img.src;

};

});

close.onclick=()=>{

lightbox.style.display="none";

};

lightbox.onclick=()=>{

lightbox.style.display="none";

};
