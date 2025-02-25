const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

// function alarm(person, delay) {
//   setTimeout(() => {
//     output.innerHTML = person + "起床！！";
//   }, delay);
// }

// button.addEventListener("click", (e) => {
//   alarm(name.value, delay.value);
// });

// return Promise object
// pending的delay秒 =>fulfilled
//若delay <0 => rejected
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject("delay不能小于0");
    } else {
      setTimeout(() => {
        resolve(person + "起床！！");
      }, delay);
    }
  });
}

// button.addEventListener("click", (e) => {
//   let promiseObject = alarm(name.value, delay.value);

//   promiseObject
//     .then((message) => {
//       output.innerHTML = message;
//     })
//     .catch((e) => {
//       output.innerHTML = e;
//     });
// });

//另一种写法
button.addEventListener("click", async () => {
  try {
    let result = await alarm(name.value, delay.value); //这里直接给出resolve/reject message
    output.innerHTML = result;
  } catch (e) {
    output.innerHTML = e;
  }
});
