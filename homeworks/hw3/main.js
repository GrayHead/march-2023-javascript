// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>SOME TEXT</div>`);
// }
//
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>SOME TEXT with ${i} index</div>`);
// }
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>SOME H1</h1>`);
//     i++
// }
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let y = 0;
// while (y < 20) {
//     document.write(`<h1>SOME H1 with ${y} index</h1>`);
//     y++
// }
//
// // - Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону
// // ШАБЛОН:
// //     <ul>
// //         <li>ITEM OF ARRAY</li>
// //         <!--
// //             і тд інші об'єкти масиву
// //              ...
// //              ...
// //              ...
// //         -->
// //     </ul>
// // замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// for (const item of listOfItems) {
//     document.write(`<li>${item}</li>`)
// }
// document.write(`</ul>`)
//
// // -----------------------------------------------
// //     Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону
// // Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// // ШАБЛОН
// // <div class="product-card">
// //     <h3 class="product-title">TITLE. Price - PRICE</h3>
// // <img src="IMAGE" alt="" class="product-image">
// // </div>
// // Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// for (const product of products) {
//     document.write(`
//        <div class="product-card">
//           <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
//           <img src=${product.image} alt="" class="product-image" width="150px">
//        </div>
//     `)
// }

// // --------------------
// //     є масив
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
// console.log(users)
// // за допомоги циклу вивести:
// // - користувачів зі статусом true
// for (const user of users) {
//     if (user.status) {
//         document.write(`<div>${user.name} - ${user.age} - ${user.status}</div>`);
//     }
// }
// document.write('<hr>')
// // - користувачів зі статусом false
// for (const user of users) {
//     if (!user.status) {
//         document.write(`<div>${user.name} - ${user.age} - ${user.status}</div>`);
//     }
// }
// document.write('<hr>')
// // - користувачів які старші за 30 років
// for (const user of users) {
//     if (user.age > 30) {
//         document.write(`<div>${user.name} - ${user.age} - ${user.status}</div>`);
//     }
// }


//
let books = [
    {
        title: 'Deception Point',
        pageCount: 560,
        genre: ['Mystical detective'],
        authors: ['Dan Brown', 'author 2'],
    },
    {
        title: 'The Churchill Factor',
        pageCount: 730,
        genre: ['Political figures'],
        authors: ['Boris Johnson']
    },
    {
        title: 'Три товариші',
        pageCount: 679,
        genre: ['Classical prose'],
        authors: ['Еріх Марія Ремарк']
    },
    {
        title: 'Atomic HabitsAtomic HabitsAtomic HabitsAtomic Habits',
        pageCount: 299,
        genre: ['Self development', 'Motivation'],
        authors: ['author 1', 'author 2'],
    },
    {
        title: 'The Fine Art Of Small Talk',
        pageCount: 74,
        genre: ['Social communications'],
        authors: ['author 1', 'author 2', 'author 3', 'author 4'],
    },
    {
        title: 'The Book Thief',
        pageCount: 412,
        genre: ['Modern prose'],
        authors: ['author 1', 'author 2'],
    }

]
// // - знайти книжку/ки з найдовшою назвою
// let result = books[0];
// for (const book of books) {
//     if (book.title.length > result.title.length) {
//         result = book;
//     }
// }
// console.log(result);
// - знайти книжку/ки з найдовшою назвою
// let result = books[0];
// for (let i = 0; i < books.length; i++) {
//     if (books[i].title.length > result.title.length) {
//         result = books[i];
//     }
// }
// console.log(result);

// - знайти книжку/ки які писав 1 автор
// let result = [];
// for (const book of books) {
//     if (book.authors.length === 1) {
//         result[result.length] = book;
//     }
// }
// console.log(result);

// - знайти книжку які писав 1 автор
let result;
for (const book of books) {
    if (book.authors.length === 1) {
        result = book;
        break;
    }
}
console.log(result);
