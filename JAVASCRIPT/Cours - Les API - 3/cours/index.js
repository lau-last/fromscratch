//----------
// XMLHttpRequest
//----------

// function reqListener() {
//   console.log(this.responseText);
// }

// let req = new XMLHttpRequest();
// req.onload = reqListener;
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
// req.open("get", "https://api.blablagues.net/?rub=blagues", true);
// req.send();
// "monlien", "object d'option"

//----------
// FETCH
//----------

// fetch("monlien", "object d'option")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

fetch("data.txt").then((res) => res.text());
//   .then((data) => console.log(data));
fetch("data.json").then((res) => res.json());
// .then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

// fetch("data.json", init).then((res) => console.log(res));

// CRUD => Create (POST), read (GET), update (PUT), Delete (DELETE);
const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "Gérard",
    message: "Hi !!",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", init2).then(() =>
    console.log("data envoyée")
  );
});

//----------
// ASYNCHRONE
//----------

setTimeout(() => {
  // console.log("test");
}, 2000);

// Promise
// fetch("monlien").then((res) => res);

// async/await
async function fetchData() {
  await fetch("monlien");
  // attend que le await soit exécuté avant de faire la suite
}
const fetchData2 = async () => {
  await fetch("monlien");
  // attend que le await soit exécuté avant de faire la suite
};

//----------
// LE JSON
//----------

// Méthode .json() => méthode qui s'auto-résout en royant le Body de la requête.

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    // stringify => convertit en JSON
    let settings = JSON.stringify(data);
    // console.log(settings);
    // Parse => transforme json en object js
    // console.log(JSON.parse(settings));
  });

//----------
// WEB API
//----------

// CLIENT STORAGE
//------------------------

// LOCAL STORAGE
localStorage.data = "je stock la data";
localStorage.removeItem("data");

const obj = {
  name: "Denis",
  age: 22,
};
// Il faut passer des chaines de caractères
localStorage.user = JSON.stringify(obj);
// console.log(JSON.parse(localStorage.user));

//----------
// SESSION STORAGE
//----------

sessionStorage.dataSetting = "55px";
sessionStorage.clear();

//----------
// COOKIES
//----------

document.cookie = "username=Laurent";

// Bonne pratique
document.cookie = "pseudo=LL;path=/;max-age=450000;secure;samesite";
