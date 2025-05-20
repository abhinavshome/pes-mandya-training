function* numbers() {
    yield 1;
    yield 2;
}

const it = numbers();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());