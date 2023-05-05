// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const var1 = [12, 'sdfsf', 123, '123', false, undefined, null, true];
console.log(var1);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const var2 = {
    title: 'book1', pageCount: 23, genre: 'someGenre1'
};
console.log(var2);
const var3 = {
    title: 'book2', pageCount: 243, genre: 'someGenre2'
};
console.log(var3);
const var4 = {
    title: 'book3', pageCount: 22343, genre: 'someGenre3'
};
console.log(var4);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
const var5 = {
    title: 'book4', pageCount: 23441, genre: 'someGenre4',
    authors: [
        {name: 'Dima', age: 234},
        {name: 'Anna', age: 13},
    ],
};
console.log(var5);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
const users = [
    {name: 'Maksym', username: 'feden', password: 'qwe123'},
    {name: 'Alina', username: 'alindosik', password: 'ert345'},
    {name: 'Anna', username: 'ann43', password: 'ghj393'},
    {name: 'Tamara', username: 'tomochka23', password: 'afs787'},
    {name: 'Dima', username: 'taper', password: 'rtt443'},
    {name: 'Rita', username: 'torpeda', password: 'vcx344'},
    {name: 'Denis', username: 'denchik', password: 'sdf555'},
    {name: 'Sergey', username: 'BigBoss', password: 'ccc322'},
    {name: 'Angela', username: 'wwe', password: 'cdd343'},
    {name: 'Irina', username: 'irka7', password: 'kkk222'},
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
const var7 = 0;
if (var7 !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
const time = 60;
if (time >= 0 && time < 15) {
    console.log('першу')
} else if (time >= 15 && time < 30) {
    console.log('другу')
} else if (time >= 30 && time < 45) {
    console.log('третю')
} else if (time >= 45 && time < 60) {
    console.log('четверту')
} else {
    console.error('не вірне число!!!')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
const day = 12;
if (day >= 1 && day <= 10) {
    console.log('першу')
} else if (day > 10 && day <= 20) {
    console.log('другу')
} else if (day > 20 && day <= 31) {
    console.log('третю')
} else {
    console.error('не вірне date!!!')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
const dayOfWeek = 1;
switch (dayOfWeek) {
    case 1:
        console.log('Понеділок')
        break;
    case 2:
        console.log('Вівторок')
        break;
    case 3:
        console.log('Середа')
        break;
    case 4:
        console.log('Четвер')
        break;
    case 5:
        console.log('Пт')
        break;
    case 6:
        console.log('Сб')
        break;
    case 7:
        console.log('Нд')
        break;
    default:
        console.error("ERROR");
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
const number1 = 2
const number2 = 232
if (number1 < number2) {
    console.log("друге більше", number2)
} else if (number1 > number2) {
    console.log("перше більше", number1)
} else {
    console.log("Рівні числа")
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x = -0;
if (x === '' || x === null || x === undefined || x === 0) {
    x = 'default';
}
console.log(x);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер')
}
