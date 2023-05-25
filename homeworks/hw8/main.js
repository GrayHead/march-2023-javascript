// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [
    new User(3, 'Andriy', 'Shevchenko', 'andriy@gmail.com', '+3809745631'),
    new User(5, 'Dima', 'Berchnko', 'dima@gmail.com', '+380925555555'),
    new User(2, 'Tamara', 'Renko', 'tamara@gmail.com', '+380974544231'),
    new User(6, 'Olga', 'Tihenko', 'olga@gmail.com', '+3809255345345'),
    new User(9, 'Dima', 'Trunov', 'dima0@gmail.com', '+380925577776'),
    new User(4, 'Anna', 'Dyachenko', 'anna@gmail.com', '+38092111111'),
    new User(8, 'Diana', 'Okipna', 'diana@gmail.com', '+380925577777'),
    new User(7, 'Alina', 'Tihenko', 'alina@gmail.com', '+3809258787787'),
    new User(1, 'Maksym', 'Fedenko', 'feden@gmail.com', '+380974544231'),
];
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter((user) => !(user.id % 2)));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((user1, user2) => user1.id - user2.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clients = [
    new Client(1, 'Maksym', 'Fedenko', 'feden@gmail.com', '+380974544231', ['apple', 'sandwich', 'malone']),
    new Client(2, 'Tamara', 'Renko', 'tamara@gmail.com', '+380974544231', ['bear', 'sandwich']),
    new Client(3, 'Andriy', 'Shevchenko', 'andriy@gmail.com', '+3809745631', ['apple', 'sandwich']),
    new Client(4, 'Anna', 'Dyachenko', 'anna@gmail.com', '+38092111111', ['apple', 'bear', 'sandwich', 'malone']),
    new Client(5, 'Dima', 'Berchnko', 'dima@gmail.com', '+380925555555', ['bear', 'malone']),
    new Client(6, 'Olga', 'Tihenko', 'olga@gmail.com', '+3809255345345', ['apple', 'bear', 'malone']),
    new Client(7, 'Alina', 'Tihenko', 'alina@gmail.com', '+3809258787787', ['apple', 'bear', 'sandwich']),
    new Client(8, 'Diana', 'Okipna', 'diana@gmail.com', '+380925577777', ['bear', 'sandwich', 'malone']),
];
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((client1, client2) => client1.order.length - client2.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drivers = [];
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function () {
//         console.log(`------- INFO -------`);
//         console.log(`model: ${this.model}`);
//         console.log(`producer: ${this.producer}`);
//         console.log(`year: ${this.year}`);
//         console.log(`maxSpeed: ${this.maxSpeed}`)
//         console.log(`volume: ${this.volume}`);
//         console.log(`drivers: ${JSON.stringify(this.drivers)}`);
//         console.log(`------- INFO -------`);
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         newSpeed = this.maxSpeed + newSpeed;
//         this.maxSpeed = newSpeed < 0 ? 0 : newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (name, age) {
//         this.drivers.push(new Driver(name, age));
//     }
// }
// function Driver(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const car = new Car('x6', 'BMW', '2008', 120, 5.2);
// car.drive()
// car.info()
// car.increaseMaxSpeed(300)
// car.info()
// car.changeYear(2023)
// car.info()
// car.addDriver('Dima', 65 );
// car.addDriver('Maksym', 6);
// car.info();


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info = function () {
        console.log(`------- INFO -------`);
        console.log(`model: ${this.model}`);
        console.log(`producer: ${this.producer}`);
        console.log(`year: ${this.year}`);
        console.log(`maxSpeed: ${this.maxSpeed}`)
        console.log(`volume: ${this.volume}`);
        console.log(`drivers: ${JSON.stringify(this.driver)}`);
        console.log(`------- INFO -------`);
    }

    increaseMaxSpeed(newSpeed) {
        newSpeed = this.maxSpeed + newSpeed;
        this.maxSpeed = newSpeed < 0 ? 0 : newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver = {name: 'Andrik', age: 77}) {
        this.driver = driver;
    }
}

const car = new Car('x6', 'BMW', '2008', 120, 5.2);
car.drive()
car.info()
car.increaseMaxSpeed(300)
car.info()
car.changeYear(2023)
car.info()
car.addDriver({name: 'Dima', age: 65});
car.addDriver({name: 'Maksym', age: 6});
car.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Popelushka extends Human {
    constructor(name, age, foot) {
        super(name, age);
        this.foot = foot;
    }
}

class Prince extends Human {
    constructor(name, age, boot) {
        super(name, age);
        this.boot = boot;
    }
    findPrincess1(arr) {
        // arr = arr.sort((a, b) => a.age - b.age);
        for (const princess of arr) {
            if (princess.foot === this.boot) {
                return princess;
            }
        }
    }
    findPrincess2(arr) {
        return arr
            .sort((a, b) => a.age - b.age)
            .find((princess) => princess.foot === this.boot);
    }
}

const popelArr = [
    new Popelushka('Sabrina', 57, 46),
    new Popelushka('Alina', 22, 36),
    new Popelushka('Tamara', 17, 45),
    new Popelushka('Anna', 17, 37),
    new Popelushka('Inna', 30, 38),
    new Popelushka('Rita', 30, 39),
    new Popelushka('Olga', 17, 39),
    new Popelushka('Irina', 18, 34),
    new Popelushka('Oksana', 25, 35),
    new Popelushka('Tanya', 29, 40),
];
const prince = new Prince('Sergey', 17, 39);
console.log(prince.findPrincess1(popelArr));
console.log(prince.findPrincess2(popelArr));

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
