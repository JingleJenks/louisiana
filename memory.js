window.addEventListener("load", loadgame);
let One = document.querySelector(".one");
let Two = document.querySelector(".two");
let Three = document.querySelector(".three");
let Four = document.querySelector(".four");
let Five = document.querySelector(".five");
let Six = document.querySelector(".six");
let Seven = document.querySelector(".seven");
let Eight = document.querySelector(".eight");
let Nine = document.querySelector(".nine");
let Front = document.querySelector(".front_face")


function loadgame() {
    console.log("loadgame");
    Front.addEventListener("click", flipcard);

}

function flipcard() {
    Front.classList.toggle(". card_flip");

}