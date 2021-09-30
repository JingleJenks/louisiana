const urlParams = new URLSearchParams(window.location.search);
// const img = urlParams.get ()
const url = "https://verdi-b148.restdb.io/rest/verdi";

console.log(url);

const key = {
    headers: {
        "x-apikey": "61556b32dfa7346e2f9691a1",
    },
};

fetch(url, key)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        handleArchive(data);
    })

// function handleData(data) {
//         console.log(data);
//         data.forEach(showData);
//     }



function handleArchive(data) {
    console.log(data);
    data.forEach(showArt);
}


function showArt(obj) {
    console.log(obj);
    console.log("yo");
    const template1 = document.querySelector(".flip-card1").content;
    const clone = template1.cloneNode(true);
    clone.querySelector(".img").textContent = obj.image;
    // clone.querySelector("img").src = obj.image;
    const mainEl = document.querySelector("main");
    // const mainEl = document.querySelector("body");
    mainEl.appendChild(clone);
}





// function showArt(obj) {
//     console.log(obj);
//     console.log("yo");
//     const template = document.querySelector(".speciestemp").content;
//     const clone = template.cloneNode(true);
//     clone.querySelector(".speciesh1").textContent = obj.species;
//     // clone.querySelector("img").src = obj.image;
//     const mainEl = document.querySelector("main");
//     // const mainEl = document.querySelector("body");
//     mainEl.appendChild(clone);
// }






// function showimg2(obj) {
//     console.log(obj);
//     One.("img").src = obj.image;
// }

// function showimg3(obj) {
//     console.log(obj);
//     One.("img").src = obj.image;
// }

// function showimg4(obj) {
//     console.log(obj);
//     One.("img").src = obj.image;
// }

// function showimg6(obj) {
//     console.log(obj);
//     One.("img").src = obj.image;
// }

// function showimg7(obj) {
//     console.log(obj);
//     One.("img").src = obj.image;
// }

// function showimg8(obj) {
//     console.log(obj);
//     One.("img").src = obj.image;
// }

// function showimg9(obj) {
//     console.log(obj);
//     One.("img").src = obj.image;
// }