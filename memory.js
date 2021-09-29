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
    One.addEventListener("click", flipcardOne);
    Two.addEventListener("click", flipcardTwo);
    Three.addEventListener("click", flipcardThree);
    Four.addEventListener("click", flipcardFour);
    Five.addEventListener("click", flipcardFive);
    Six.addEventListener("click", flipcardSix);
    Seven.addEventListener("click", flipcardSeven);
    Eight.addEventListener("click", flipcardEight);
    Nine.addEventListener("click", flipcardNine);

}

function flipcardOne() {
    console.log("card1 clicked");
    // One.classList.add(".invisible");
    One.classList.add(".card_flip");
}

function flipcardTwo() {
    console.log("card2 clicked");
    // One.classList.add(".invisible");
    One.classList.add(".card_flip");

}

function flipcardThree() {
    console.log("card3 clicked");
    // One.classList.add(".invisible");
    One.classList.add(".card_flip");

}

function flipcardFour() {
    console.log("card4 clicked");
    // One.classList.add(".invisible");
    One.classList.add(".card_flip");

}

function flipcardFive() {
    console.log("card5 clicked");
    // One.classList.add(".invisible");
    One.classList.add(".card_flip");
}

function flipcardSix() {
    console.log("card6 clicked");
    // One.classList.add(".invisible");
    One.classList.add(".card_flip");
}

function flipcardSeven() {
    console.log("card7 clicked");
    // One.classList.add(".invisible");
    One.classList.add(".card_flip");
}

function flipcardEight() {
    console.log("card8 clicked");
    // One.classList.add(".invisible");
    One.classList.add(".card_flip");
}

function flipcardNine() {
    console.log("card9 clicked");
    // One.classList.add(".invisible");
    One.classList.add(".card_flip");
}