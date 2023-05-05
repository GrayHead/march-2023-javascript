// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

const var1 = 'hello'
console.log(var1);
const var2 = "owu"
console.log(var2);
const var3 = 'com'
console.log(var3);
const var4 = 'ua'
console.log(var4);
const var5 = 1
console.log(var5);
const var6 = 10
console.log(var6);
const var7 = -999
console.log(var7);
const var8 = 123
console.log(var8);
const var9 = 3.14
console.log(var9);
const var10 = 2.7
console.log(var10);
const var11 = 16
console.log(var11);
const var12 = true
console.log(var12);
const var13 = false
console.log(var13);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
const firstName = 'Maksym';
const middleName = 'Volodimirivich';
const lastName = 'Fednko';

const string1 = firstName + ' - ' + middleName + ' - ' + lastName;
console.log(string1);
const string2 = `${firstName} - ${middleName} - ${lastName}`;
console.log(string2);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

const first = prompt('Put your firstName');
const last = prompt('Put your lastName');
const age = Number(prompt('Put your age'));

console.log(`First: ${first} - Last: ${last} - Age: ${age}`)
