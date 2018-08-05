

//  classses and inherit with es6 modules

// import StudentInformation from '../inheritancewithprototypePartTwoEs5AndES6.js';

// let st1 = new StudentInformation('Noyon Ahmed', 'anoyon002@gmail.com', '123423');

// st1.welcome();


// console.log('First line');

// setTimeout(() => {
//     console.log('second line');
// }, 5000);

// console.log('third line');


// setTimeout(() => {
//     console.log('fourth line');
// }, 3000);


// console.log('fifth  line');

// const anything = new Promise(resolve => {
//     let data = "noyon Ahmed"

//     resolve(data)
// })

// anything.then(data => {
//     console.log('My Name is :' + data);
// })



// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((body) => {
//     // body.map((data) => console.log(data.email));
//     console.log(body);

//     // const myUsers = body.map((data) => {

//     //     let li = document.createElement('li');
//     //     let text = ` Name ${data.name} `;
//     //     let textNode = document.createTextNode(text);
//     //     li.appendChild(textNode);

//     //     return li

//     // })

//     // myUsers.forEach(li => {
//     //     document.getElementById('myUSer').appendChild(li)
//     // });



// })
// .catch((err) => console.log(err))



fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((body) => {

        const list = body.map((data) => {
            let li = document.createElement('li')
            let text = `Name : ${data.name} Email : ${data.email}, Phone Number : ${data.phone} `
            let textNode = document.createTextNode(text);

            li.appendChild(textNode);

            return li
        })

        list.forEach(li => {
            document.getElementById('myUser').appendChild(li)
        });

    })
    .catch((err) => console.log(err))
