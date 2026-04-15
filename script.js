const words = ["Web Developer","Freelancer","Problem Solver"];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

const currentWord = words[wordIndex];

if(!deleting){

typing.textContent = currentWord.substring(0,charIndex+1);
charIndex++;

if(charIndex === currentWord.length){

deleting = true;

setTimeout(typeEffect,1200);

return;

}

}else{

typing.textContent = currentWord.substring(0,charIndex-1);

charIndex--;

if(charIndex === 0){

deleting = false;

wordIndex = (wordIndex+1) % words.length;

}

}

setTimeout(typeEffect,deleting ? 40 : 80);

}

typeEffect();