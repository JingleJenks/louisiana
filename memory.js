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
    One.addEventListener("click", flipcard);
    Two.addEventListener("click", flipcard);
    Three.addEventListener("click", flipcard);
    Four.addEventListener("click", flipcard);
    Five.addEventListener("click", flipcard);
    Six.addEventListener("click", flipcard);
    Seven.addEventListener("click", flipcard);
    Eight.addEventListener("click", flipcard);
    Nine.addEventListener("click", flipcard);

}

function flipcardOne() {
    console.log("card1 clicked");
    One.classList.remove(".front_face");
}