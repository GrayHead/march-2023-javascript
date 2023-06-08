// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

fetch('http://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => {
        const block = document.getElementsByClassName('wrap')[0];
        for (const user of users) {
            const user_block = document.createElement('div');
            user_block.innerText = `#${user.id} ${user.name}`;
            block.appendChild(user_block);

            const button = document.createElement('button');
            button.innerText = 'more info';
            user_block.appendChild(button);

            button.onclick = () => {
                location.href = `../user-info/index.html?userId=${user.id}`;
            }
        }
})
