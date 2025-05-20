function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Sam', 23);
const person2 = new Person('David', 27);

console.log(person1, person2);
