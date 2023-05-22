// let date = new Date();
// console.log(date)
//
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());
// console.log(new Date(16847759384911));
// console.log(new Date("March 12 1992 11:34:50"))
// console.log(new Date(1987,0,31,12,30,45,0))
//
// console.log(1000 * 60 * 60 * 24 * 365);


// console.log('start');
// try {
//     console.log(a);
// } catch (xxx) {
//     console.log(xxx);
// }
//
// console.log('end');


// function divider(a, b) {
//     if (b === 0) {
//         throw new Error('Arithmetic exception');
//     }else{
//         console.log(a / b);
//     }
// }
//
// try {
//     divider(10, 0)
// } catch (e) {
//     console.log('you cannot use 0 as divider!')
// }


// let user = {}
// console.log(user.wife);
// // console.log(user.wife.name);
// console.log(user?.wife?.name);


// let user = {
//     name: 'kokos',
//     age: 123,
//     // foobar() {
//     //
//     // },
//     wife: {}
// }

// let user2 = user;
// let s = JSON.stringify(user);
// console.log(s);
// let obj = JSON.parse(s);
// console.log(obj);
// console.log(obj === user);
// console.log(obj.wife === user.wife);//++++
//
// // let assign = Object.assign({}, user);
// // console.log(assign);
// // console.log(assign === user);
// // console.log(assign);
// //
// // console.log(assign.wife === user.wife)//----
//
//
// // let clone = structuredClone(user);
// // console.log(clone === user); // false
// // console.log(clone.wife === user.wife); // false


// let name = 'kokos';
// let age = 123;
//
// let user = {
//     name, // name:kokos
//     age,
//     foo() {
//     },
// }


// let user = {
//     name: 'kokos',
//     age: 123,
//     foobar() {
//     },
//     wife: {
//         name: 'anna',
//         surname: 'poopolinovich'
//     }
// }

// let name = user.name;
// let age = user.age;
// let foobar = user.foobar;
// let wife = user.wife;

// const {name, age, foobar, wife, wife: {surname, name: wifeName}} = user;
// console.log(name)
// console.log(age)
// console.log(wife)
// console.log(foobar);
// console.log(wife === user.wife);
//
//
// function asdqwe(obj) {
//     // let {name, age} = obj;
// }

// function poipoipoi({nameX, age}) {
//
// }
//
// poipoipoi({nameX: 'asd', age: 123, xxx: 'asdasd', yyy: 'asdqwe'});
// poipoipoi({nameX: 'asd', age: 123, qwteqywet: 'asdasd', pougoreyieruy: 'asdqwe'});
// poipoipoi({nameX: 'asd', age: 123, qwteqywet: 'asdasd', pougoreyieruy: 'asdqwe', oiudauysd: 'iufdasfd'});


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
// let [{name}, b, c, ,m] = users;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(m);
//
// let a = users[0]


// let user = {
//     name: 'asd',
//     skills: [{title: 'java', exp: 10}, {title: 'js', exp: 12}]
// }
//
// let {name, skills} = user;


let user = {
    name: 'vasya',
    age: 31,
    skills: ['js', 'java']
};

let copy = {
    ...user, // name:'vasya' , age:31, skills:[js,jsvs]
    skills: [...user.skills] // new [js java]
};
console.log(copy);
console.log(copy === user);
console.log(copy.skills === user.skills);


function foobarfunc(arr) {
    return {asd:[...arr]};

}



























