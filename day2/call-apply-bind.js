function printName(city) {
  console.log("Person's name is:" + this.name + " and city is " + city);
}

const person = { name: "Sam" };
printName.call(person, 'Bengaluru');
printName('Mumbai');

printName.apply(person, ['Delhi']);

const f = printName.bind(person);

f('Hyderabad');
