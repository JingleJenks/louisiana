window.addEventListener("load", loadgame);
let score = 0;
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
    score += 1;
    console.log("card 1a, +1");
    if (score == 2) {
        // console.log("YOU WON");
        successgame();
    }
}

function flipcardTwo() {
    console.log("card2 clicked");
    // One.classList.add(".invisible");
    One.classList.add(".card_flip");
    score += 1;
    console.log("card 1b, +1");
    if (score == 2) {
        // console.log("YOU WON");
        successgame();
    }

}

function flipcardThree() {
    console.log("card3 clicked");
    // One.classList.add(".invisible");
    One.classList.add(".card_flip");
    score += 3;
    console.log("card 2a, +3");
    if (score > 6) {
        console.log("YOU WON");
        successgame();
    }
}

function flipcardFour() {
    console.log("card4 clicked");
    // One.classList.add(".invisible");
    One.classList.add(".card_flip");
    score += 3;
    console.log("card 2b, +3");
    if (score > 6) {
        console.log("YOU WON");
        successgame();
    }
}

function flipcardFive() {
    console.log("card5 clicked");
    // One.classList.add(".invisible");
    One.classList.add(".card_flip");
    score += 5;
    console.log("card 3a, +5");
    if (score > 10) {
        console.log("YOU WON");
        successgame();
    }
}

function flipcardSix() {
    console.log("card6 clicked");
    // One.classList.add(".invisible");
    One.classList.add(".card_flip");
    score += 0;

}

function flipcardSeven() {
    console.log("card7 clicked");
    // One.classList.add(".invisible");
    One.classList.add(".card_flip");
    score += 5;
    console.log("card 3b, +5");
    if (score > 10) {
        console.log("YOU WON");
        successgame();
    }
}

function flipcardEight() {
    console.log("card8 clicked");
    // One.classList.add(".invisible");
    One.classList.add(".card_flip");
    score += 9;
    console.log("card 4a, +9");
    if (score > 18) {
        console.log("YOU WON");
        successgame();
    }
}

function flipcardNine() {
    console.log("card9 clicked");
    // One.classList.add(".invisible");
    One.classList.add(".card_flip");
    score += 9;
    console.log("card 4b, +9");
    if (score > 18) {
        console.log("YOU WON");
        successgame();
    }
}

function successgame() {
    console.log("you win!");
}