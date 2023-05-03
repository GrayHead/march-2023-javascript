//               0     1  2    3   4        5
// let arr = [123, 234, 345, 5, true, 'asjhfhfsd'];
// console.log(arr.length);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// arr[6] = 100500;
// console.log(arr);
// arr[6] = 'ajsgdjadj';
// console.log(arr);

// let matrix = [
//     123, //0
//     234, // 1
//     345, // 2
//     //3
// //   0   1    2
//     [11, 22, 33]
// ]

// let innerArray = matrix[3];
// console.log(innerArray[1]);
// console.log(matrix[3][1]);
// console.log(typeof []);
// console.log(Array.isArray([]));
// console.log(typeof {});

// let user1 = {
//     name: 'vasya',
//     age: 31,
//     status: true,
//     skills: ['java', 'js', 'mysql'],
//     brother: {
//         name: 'oleg',
//         age: 18,
//         status: false
//     }
// }
// console.log(user1);
// console.log(user1.name);
// console.log(user1["name"]);
// console.log(user1.skills);
// console.log(user1.skills[2]);
// console.log(user1.brother)
// console.log(user1.brother['status']);
//
// user1.surname = 'pupkin';
// console.log(user1);

// let users = [
//     {name: 'vasya', age: 12, status: false},
//     {name: 'oleg', age: 14, status: true},
//     {name: 'anna', age: 10, status: true}
// ];
// console.log(users);
// console.log(users[2]['age']);
// console.log(users[2].status);
// //ctrl alt v
//
// delete users[0].age;
// console.log(users);

// let pv1 = 100500;
// let pv2 = pv1;
// pv2 = 100600;
// console.log(pv1, pv2);
//
// let obj1 = {key1: 100500}
// let obj2 = obj1;
//
//
// console.log(obj1);
// console.log(obj2);
//
//
// obj2.key1 = 1;
//
// console.log(obj1);
// console.log(obj2);


// let age = +prompt('скільки тобі років?');
// console.log(age);
// if (age > 18) {
//     document.write('<div>orange hub</div>');
// }else {
//     document.write('<div>cartoon hub</div>');
//
// }


// let answer = prompt('тобі більше 18?');
// if (answer === 'yes' || answer === 'так') {
//     document.write('<div>orange hub</div>');
// } else {
//     document.write('<div>cartoon hub</div>');
// }

let color = 'green';

// if (color === 'green') {
//     console.log('go');
// } else if (color === 'yellow') {
//     console.log('wait');
// } else if (color === 'red') {
//     console.log('stop');
// } else {
//     console.log('?????');
// }

// let b = confirm('дорога чиста?');
switch (color) {
    case "green":
        // if (b) {
        console.log('go');
        // }

        break;
    case "yellow":
        console.log('wait');
        break;
    case 'red':
        console.log('stop');
        break;
    default:
        console.log('??????');
}

let ans = 'так';
console.log(ans === 'yes' && ans === 'Yes' && ans === 'так');
