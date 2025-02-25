console.log("start"); //sync

process.nextTick(function () {
  console.log("nextTick1");
}); //nextTick Queue

setTimeout(function () {
  console.log("setTimeout");
}, 0); //timers --eventloop

//call the constructor是一个sync function
new Promise(function (resolve, reject) {
  console.log("promise");
  resolve("resolve");
}).then(function (result) {
  console.log("promise then"); //MicroTask Queue
});

//IIFE
(async function () {
  console.log("async");
})();

//Check
setImmediate(function () {
  console.log("setImmediate");
});

//NextTick Queue
process.nextTick(function () {
  console.log("nextTick2");
});

console.log("end");
