window.addEventListener("load", loadgame);
let score = 0;
let One = document.querySelector(".flip-card1");
let Two = document.querySelector(".flip-card2");
let Three = document.querySelector(".flip-card3");
let Four = document.querySelector(".flip-card4");
// let Five = document.querySelector(".flip-card5");
let Six = document.querySelector(".flip-card6");
let Seven = document.querySelector(".flip-card7");
let Eight = document.querySelector(".flip-card8");
let Nine = document.querySelector(".flip-card9");
let Front = document.querySelector(".flip-card-front");
let Inner = document.querySelector(".flip-card-inner");
let Body = document.querySelector("body");

function loadgame() {
    console.log("loadgame");
    One.addEventListener("click", flipcardOne);
    Two.addEventListener("click", flipcardTwo);
    Three.addEventListener("click", flipcardThree);
    Four.addEventListener("click", flipcardFour);
    // Five.addEventListener("click", flipcardFive);
    Six.addEventListener("click", flipcardSix);
    Seven.addEventListener("click", flipcardSeven);
    Eight.addEventListener("click", flipcardEight);
    Nine.addEventListener("click", flipcardNine);

}


function flipcardOne() {
    One.classList.add("flip_js");
    score += 1;
    console.log(score);
    console.log("card 1/1a, +1");
    if (score == 2) {
        paintingbox();
    } else {

        checkForMisMatch();

    }
}


// else {

//     const active = document.querySelectorAll(".flip_js");

//     if(active.length==2){

//     active.forEach(elem=>elem.classList.remove("flip_js"))

//     }

//     }

function flipcardTwo() {
    Two.classList.add("flip_js");

    score += 3;
    console.log(score);

    console.log("card 2/2a, +3");
    if (score == 6) {
        photobox();
    } else {

        checkForMisMatch();

    }

}

function flipcardThree() {
    Three.classList.add("flip_js");

    score += 7;
    console.log(score);

    console.log("card 3/3a, +7");
    if (score == 14) {
        abstractbox();
    } else {

        checkForMisMatch();

    }

}

function flipcardFour() {
    Four.classList.add("flip_js");

    score += 9;
    console.log(score);

    console.log("card 4/4a, +9");
    if (score == 18) {
        popbox();
    } else {

        checkForMisMatch();

    }

}

// // function flipcardFive() {
// Five.classList.add("flip_js");

// score += 0;
// console.log(score);
// console.log("card5 clicked");

// }

function flipcardSix() {
    Six.classList.add("flip_js");

    score += 7;
    console.log(score);

    console.log("card 6/3a, +7");
    if (score == 14) {
        abstractbox();
    } else {

        checkForMisMatch();

    }
}

function flipcardSeven() {
    Seven.classList.add("flip_js");

    score += 3;
    console.log(score);

    console.log("card 7/3b, +7");
    if (score == 6) {
        photobox();
    } else {

        checkForMisMatch();

    }

}

function flipcardEight() {
    Eight.classList.add("flip_js");
    score += 1;
    console.log(score);

    console.log("card8/1b, +1");
    if (score == 2) {
        paintingbox();
    } else {

        checkForMisMatch();

    }

}

function flipcardNine() {
    Nine.classList.add("flip_js");

    score += 9;
    console.log(score);
    console.log("card 9/4b, +9");
    if (score == 18) {
        popbox();
    } else {

        checkForMisMatch();

    }
}

function game_end() {
    if (popbox_shown && paintingbox_shown && abstractbox_shown && photobox_shown) {
        console.log("game over!");
        console.log(score);
        document.querySelector(".box_pop").classList.add("invisible");
        document.querySelector(".box_abstract").classList.add("invisible");
        document.querySelector(".box_photo").classList.add("invisible");
        document.querySelector(".box_painting").classList.add("invisible");

        const cards = document.querySelectorAll(".memory_grid > *")
        cards.forEach((elem, index) => {

            setTimeout(() => {

                elem.classList.add("flip_js")

            }, index * 500 + 500)

        })
        setTimeout(() => {
            console.log("game over box");
            document.querySelector(".box_end").classList.remove("invisible");

        }, 5000)
    }


}

let popbox_shown = false;
let paintingbox_shown = false;
let abstractbox_shown = false;
let photobox_shown = false;



function popbox() {
    console.log("popbox info");
    document.querySelector(".box_pop").classList.remove("invisible");
    setTimeout(flipback4, 3000)
    // document.querySelector(".box_pop").addEventListener("click", flipback4);
    popbox_shown = true;
    game_end();
}

function paintingbox() {
    console.log("paintingbox info");
    document.querySelector(".box_painting").classList.remove("invisible");
    setTimeout(flipback1, 3000)
    // document.querySelector(".box_painting").addEventListener("click", flipback1);
    paintingbox_shown = true;
    game_end();
}

function abstractbox() {
    console.log("abstractbox info");
    document.querySelector(".box_abstract").classList.remove("invisible");
    setTimeout(flipback3, 3000)
    // document.querySelector(".box_abstract").addEventListener("click", flipback3);
    abstractbox_shown = true;
    game_end();
}

function photobox() {
    console.log("photobox info");
    document.querySelector(".box_photo").classList.remove("invisible");
    setTimeout(flipback2, 3000)
    // document.querySelector(".box_photo").addEventListener("click", flipback2);
    photobox_shown = true;
    game_end();
}

function flipback1() {
    console.log("flipback1");
    One.classList.remove("flip_js");
    Eight.classList.remove("flip_js");
    document.querySelector(".box_painting").classList.add("invisible");
    score = 0;
    // loadgame();
}

function flipback2() {
    console.log("flipback2");
    Two.classList.remove("flip_js");
    Seven.classList.remove("flip_js");
    document.querySelector(".box_photo").classList.add("invisible");
    score = 0;
    // loadgame();
}

function flipback3() {
    console.log("flipback3");
    Three.classList.remove("flip_js");
    Six.classList.remove("flip_js");
    document.querySelector(".box_abstract").classList.add("invisible");
    score = 0;
    // loadgame();
}

function flipback4() {
    console.log("flipback4");
    Four.classList.remove("flip_js");
    Nine.classList.remove("flip_js");
    document.querySelector(".box_pop").classList.add("invisible");
    score = 0;
    // loadgame();
}


function checkForMisMatch() {

    const active = document.querySelectorAll(".flip_js");

    if (active.length == 2) {

        score = 0;

        setTimeout(() => {

            active.forEach((elem) => elem.classList.remove("flip_js"));

        }, 3000);

    }

}