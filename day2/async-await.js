// const p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('some data');
//     }, 3000)
// });

// function printText(text) {
//     console.log('The text was: ' + text);
// }

// p.then(function(data) {
//     printText(data);
// });
function sayHello() {
    console.log("Hello");
  }
  
  function sayWorld() {
    console.log("World");
  }
  
  function waitForNs(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), n * 1000);
    });
  }
  
  async function f() {
    await waitForNs(3);
    sayHello();
    await waitForNs(2);
    sayWorld();
  }
  
  f();