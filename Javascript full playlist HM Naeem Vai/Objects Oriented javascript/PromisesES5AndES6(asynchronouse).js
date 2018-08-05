

// <<<<<<<<<<<< ^^^^^^^^^^^^^^ asunchronous in es5 ^^^^^^^^^^^^^^ >>>>>>>>>>>>>\\
// console.log('First Line');

// setTimeout(() => {
//     console.log('Second Line');
// }, 5000);

// console.log('Third Line');

// setTimeout(() => {
//     console.log('Fourth Line');
// }, 2000);

// console.log('Fifth Line');






// <<<<<<<<<<<< ^^^^^^^^^^^^^^ asunchronous in es6 ^^^^^^^^^^^^^^ >>>>>>>>>>>>>\\


            // normal promise


// let myFirstPromise = new Promise((resolve, reject) => {
//     let name = 'Noyon Ahmed'

//     resolve(name)
    
// })

// myFirstPromise.then((name) => {
//     console.log('My name is ' + name);
// })







        // promise with datch api

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((body) => {
    
    const myUsers = body.map((data) => {

        let li = document.createElement('li');
        let text = ` Name ${data.name} `;
        let textNode = document.createTextNode(text);
        li.appendChild(textNode);

        return li

    })

    myUsers.forEach(li => {
        document.getElementById('myUSer').appendChild(li)
    });



})
.catch((err) => console.log(err))






