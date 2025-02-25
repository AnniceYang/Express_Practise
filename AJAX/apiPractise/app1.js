// let output = document.querySelector("#output");

// async function hello() {
//   try {
//     let result = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
//     let data = await result.json();

//     output.innerText += data.joke + "\n";
//   } catch (e) {
//     console.log(e);
//   }
// }

// hello();

// let button = document.querySelector("#new-joke");
// button.addEventListener("click", () => {
//   hello();
// });

let myKey = "ecf77cf5be5c8a264d06fd092828db6f";
let city = "Taipei";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;

async function weather() {
  try {
    let result = await fetch(url);
    let data = await result.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

weather();
