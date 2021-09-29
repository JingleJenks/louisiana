window.addEventListener("load", loadgame);
let score = 0;
let One = document.querySelector(".flip-card1");
let Two = document.querySelector(".flip-card2");
let Three = document.querySelector(".flip-card3");
let Four = document.querySelector(".flip-card4");
let Five = document.querySelector(".flip-card5");
let Six = document.querySelector(".flip-card6");
let Seven = document.querySelector(".flip-card7");
let Eight = document.querySelector(".flip-card8");
let Nine = document.querySelector(".flip-card9");
let Front = document.querySelector(".flip-card-front");
let Inner = document.querySelector(".flip-card-inner");


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
    One.classList.add("flip_js");
    score += 1;
    console.log(score);
    console.log("card 1a, +1");
    if (score == 2) {
        paintingbox();
    }
}

function flipcardTwo() {
    console.log("card2 clicked");
    Two.classList.add("flip_js");

    score += 3;
    console.log(score);

    console.log("card 2a, +3");
    if (score == 6) {
        photobox();
    }

}

function flipcardThree() {
    console.log("card3 clicked");
    Three.classList.add("flip_js");

    score += 7;
    console.log(score);

    console.log("card 3a, +7");
    if (score == 14) {
        abstractbox();
    }

}

function flipcardFour() {
    console.log("card4 clicked");
    Four.classList.add("flip_js");

    score += 9;
    console.log(score);

    console.log("card 4a, +9");
    if (score == 18) {
        popbox();
    }

}

function flipcardFive() {
    console.log("card5 clicked");
    Five.classList.add("flip_js");

    score += 0;
    console.log(score);
}

function flipcardSix() {
    console.log("card6 clicked");
    Six.classList.add("flip_js");

    score += 7;
    console.log(score);

    console.log("card 3a, +7");
    if (score == 14) {
        abstractbox();
    }
}

function flipcardSeven() {
    console.log("card7 clicked");
    Seven.classList.add("flip_js");

    score += 3;
    console.log(score);

    console.log("card 3b, +7");
    if (score == 6) {
        photobox();
    }

}

function flipcardEight() {
    console.log("card8 clicked");
    Eight.classList.add("flip_js");

    score += 1;
    console.log(score);

    console.log("card 1b, +3");
    if (score == 2) {
        paintingbox();
    }

}

function flipcardNine() {
    console.log("card9 clicked");
    Nine.classList.add("flip_js");

    score += 9;
    console.log(score);
    console.log("card 4b, +9");
    if (score == 18) {
        popbox();
    }

}



// function nextpair() {
//     console.log("you win!");
//     score = 0;
//     if (score == 36) {
//         game_end();
//     }
//     console.log(score);

// }

function game_end() {
    console.log("game over!");
    console.log(score);

}

function popbox() {
    console.log("popbox info");
    document.querySelector(".box_pop").classList.remove("invisible");
}

function paintingbox() {
    console.log("paintingbox info");
    document.querySelector(".box_painting").classList.remove("invisible");
    One.classList.add("flip_js");
}

function abstractbox() {
    console.log("abstractbox info");
    document.querySelector(".box_abstract").classList.remove("invisible");
}

function photobox() {
    console.log("photobox info");
    document.querySelector(".box_photo").classList.remove("invisible");

}