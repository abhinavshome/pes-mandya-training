export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};

export function printUserName(user) {
    console.log('User\'s name is :' + user.name);
}

export function printUserAge(user) {
    console.log('User\'s age is :' + user.age);
}