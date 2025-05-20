function sayHello() {
  console.log("Hello");
}

function sayWorld() {
  console.log("World");
}

function callAfterNs(f, n) {
  setTimeout(f, n * 1000);
}

function f(f1, f2, n1, n2) {
  setTimeout(function () {
    f1();
    setTimeout(f2, n2*1000);
  }, n1*1000);
}

f(sayHello, sayWorld, 2, 3);
