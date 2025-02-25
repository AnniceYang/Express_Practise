// let fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// const { response } = require("express");

// console.log(fetchPromise);

// // fetchPromise.then((response) => {
// //   console.log(fetchPromise);
// //   console.log(response);
// // });

// // fetchPromise.then((response) => {
// //   //  response.json(); // response=>JSON
// //   //.json() method is also async
// //   //return Promise object

// //   response.json().then((data) => {
// //     console.log(data);
// //   });
// // });

// fetchPromise
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// const fetchPromise1 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );
// const fetchPromise2 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
// );
// const fetchPromise3 = fetch(
//   "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
// );

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((responses) => {
//     responses.forEach((response) => {
//       console.log(response.url, response.status);
//     });
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// async function myFunc() {
//   return 100;
// }

// let result = myFunc();
// console.log(result);
// result.then((data) => console.log(data));

async function fetchProduct() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );

    // console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

fetchProduct();
