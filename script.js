const elements = document.querySelectorAll(".hidden");


function reveal(){

elements.forEach(element=>{

let position = element.getBoundingClientRect().top;

let screen = window.innerHeight;


if(position < screen - 100){

element.classList.add("show");

}

});

}


window.addEventListener("scroll",reveal);


reveal();