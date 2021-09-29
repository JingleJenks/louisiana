const urlParams = new URLSearchParams(window.location.search);
// const img = urlParams.get ()
const url = "https://verdi-b148.restdb.io/rest/verdi/";

console.log(url);

const key = {
    headers: {
        "x-apikey": "9e04167745415ced787fc395095e6739124df",
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