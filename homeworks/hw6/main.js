// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
['hello world', 'lorem ipsum', 'javascript is cool'].map((item) => console.log(item.length));

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
const arr1 = ['hello world', 'lorem ipsum', 'javascript is cool'].map((item) => item.toUpperCase());
console.log(arr1);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const arr2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'].map((item) => item.toLowerCase());
console.log(arr2);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
str = str.trim();
console.log(str);

let str2 = ' dirty       string   ';
str2 = str2.split(' ').filter((item) => item.length).join(' ');
console.log(str2);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str3 = 'Ревуть воли як ясла повні';
const arr3 = str3.split(' ');
console.log(arr3);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const arr4 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const arr5 = arr4.map((num) => num.toString());
console.log(arr5);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
const sortNums = (nums, direction) => {
    switch (direction) {
        case 'ascending':
            return nums.sort((v1, v2) => v1 - v2)
        case 'descending':
            return nums.sort((v1, v2) => v2 - v1)
    }
}
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
const arr6 = coursesAndDurationArray.sort((v1, v2) => v2.monthDuration - v1.monthDuration);
console.log(arr6);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const arr7 = coursesAndDurationArray.filter((item) => item.monthDuration > 5);
console.log(arr7);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const arr8 = coursesAndDurationArray.map((item, index) => {
    return {id: index + 1, ...item}
});
console.log(arr8);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
const cards = [
    {cardSuit: 'spades', value: '6', color: 'black'},
    {cardSuit: 'spades', value: '7', color: 'black'},
    {cardSuit: 'spades', value: '8', color: 'black'},
    {cardSuit: 'spades', value: '9', color: 'black'},
    {cardSuit: 'spades', value: '10', color: 'black'},
    {cardSuit: 'spades', value: 'ace', color: 'black'},
    {cardSuit: 'spades', value: 'jack', color: 'black'},
    {cardSuit: 'spades', value: 'queen', color: 'black'},
    {cardSuit: 'spades', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'hearts', value: '6', color: 'red'},
    {cardSuit: 'hearts', value: '7', color: 'red'},
    {cardSuit: 'hearts', value: '8', color: 'red'},
    {cardSuit: 'hearts', value: '9', color: 'red'},
    {cardSuit: 'hearts', value: '10', color: 'red'},
    {cardSuit: 'hearts', value: 'ace', color: 'red'},
    {cardSuit: 'hearts', value: 'jack', color: 'red'},
    {cardSuit: 'hearts', value: 'queen', color: 'red'},
    {cardSuit: 'hearts', value: 'king', color: 'red'},
    {cardSuit: 'diamonds', value: '6', color: 'red'},
    {cardSuit: 'diamonds', value: '7', color: 'red'},
    {cardSuit: 'diamonds', value: '8', color: 'red'},
    {cardSuit: 'diamonds', value: '9', color: 'red'},
    {cardSuit: 'diamonds', value: '10', color: 'red'},
    {cardSuit: 'diamonds', value: 'ace', color: 'red'},
    {cardSuit: 'diamonds', value: 'jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'king', color: 'red'},
]
// - знайти піковий туз
const card1 = cards.find((card) => card.cardSuit === 'spade' && card.value === 'ace');
console.log(card1);

// - всі шістки
const arr9 = cards.filter((card) => card.value === '6');
console.log(arr9);

// - всі червоні карти
const arr10 = cards.filter((card) => card.color === 'red');
console.log(arr10);

// - всі буби
const arr11 = cards.filter((card) => card.cardSuit === 'diamond');
console.log(arr11);
// - всі трефи від 9 та більше
const arr12 = cards.filter((card) =>
    ['9', '10', 'ace', 'jack', 'queen', 'king'].includes(card.value)
    && card.cardSuit === 'clubs'
);
console.log(arr12);

// =========================
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// const arr13 = cards.reduce((acc, cu) => {
//     switch (cu.cardSuit) {
//         case 'spade':
//             acc.spades.push(cu);
//             break;
//         case 'diamond':
//             acc.diamonds.push(cu);
//             break;
//         case 'heart':
//             acc.hearts.push(cu);
//             break;
//         case 'clubs':
//             acc.clubs.push(cu);
//             break;
//     }
//     return acc;
// }, {spades: [], diamonds: [], hearts: [], clubs: []});
// console.log(arr13);

const arr14 = cards.reduce((acc, cu) => {
    acc[cu.cardSuit].push(cu);
    return acc;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(arr14);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
const arr15 = coursesArray.filter((item) => item.modules.includes('sass'));
console.log(arr15);

// --написати пошук всіх об'єктів, в який в modules є docker
const arr16 = coursesArray.filter((item) => item.modules.includes('docker')
);
console.log(arr16);
