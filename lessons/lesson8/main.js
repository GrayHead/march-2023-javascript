// function User(name, age) {
//     this.name = name;
//     this.age = age;
//
// }
//
// // let u1 = new User('kokos', 123);
// // console.log(u1);
// // let u2 = new User('abrikos', 111);
// // console.log(u2);
//
// // let sipleUsers = [
// //     new User('asd', 123),
// //     new User('asd', 123),
// //     new User('asd', 123),
// //     new User('asd', 123),
// //     new User('asd', 123),
// //     new User('asd', 123),
// //     new User('asd', 123),
// //     new User('asd', 123)
// // ];
// //
// // console.log(sipleUsers)
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
//
// function Customer(name, age, id) {
//     this.name = name;
//     this.age = age;
//     this.id = id;
// }
//
// let customers = users.map(value => new Customer(value.name, value.age, 9999));
// console.log(customers);
//
// let array = new Array(10,1,2,3,4,5); // [10,1,2,3,4,5]
// // let date = new Date();


// function User(name, age, wifename, wifeage) {
//     this.name = name;
//     this.age = age;
//     this.wife = {
//         wifename, wifeage
//     };
//
//     this.greeting = function (msg) {
//         console.log(`${msg}, my name is ${this.name}`)
//     }
// }
//
// let user = new User('vasya', 31, 'anna', 29);
// user.greeting('hello');
//
// let friend = {
//     name: 'kokos',
//     skills: ['java', 'js']
// }
//
// // user.greeting.call(friend, 'hi', 'asdasd', 'qweqwe');
// // user.greeting.call(friend, ['olla', 'asdasd', 'qweqwe']);
// // user.greeting.apply(friend, ['aloha']);
// //
// // let greetingCopy = user.greeting.bind(friend);
// // greetingCopy('ooooo!!!');
// // greetingCopy('sdasd!!!');
// // greetingCopy('qweqwe!!!');
//
//
// User.prototype.foo = function () {
//     console.log('foo works');
// };
// User.prototype.bar = 'whisky';
//
// let user1 = new User('petya', 32, 'olya', 28);
// console.log(user1);
// user1.foo();
// console.log(user1.bar);
// console.log(user1);
// console.log({});


// let user = {
//     id: 123,
//     name: 'vasya'
// }
// let user2 = Object.create(user);
// // console.log(user)
// // console.log(user2);
// // console.log(user2.name);
//
// console.log(user2); // id name ?
// // console.log(user2.id);
// // user2.id = 123;
// console.log(user2.hasOwnProperty('id'));
// console.log(user2);
// console.log(user2.__proto__);


class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
}

class Customer extends User {
    constructor(name, age, id) {
        super(name, age);
        this.id
    }
}

let customer = new Customer('asdas', 12312, 9999);
console.log(customer.name);

// let Dog = class  {
//
// }


function Car(model, power) {
    this.model = model;
    this.power = power;
}

function SuperCar(model, power, volume) {
    Car.apply(this, arguments);
    this.volume = volume;
}















