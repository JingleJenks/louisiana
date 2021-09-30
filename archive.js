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
        // showArt(data);
        console.log(data);
    })