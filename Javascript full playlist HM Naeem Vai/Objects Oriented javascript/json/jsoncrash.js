var fs = require('fs')
var faker = require('faker');


// ^_^_^_^_^_^_^_^ stringify ^_^_^_^_^_^_^_^ \\

// var peoples = []

// for (let i = 0; i < 10; i++) {
    
//     var people = {}

//     people.name = faker.name.findName();
//     people.email = faker.internet.email();
//     people.address = {
//         city : faker.address.city(),
//         country : faker.address.country(),
//         lat : faker.address.latitude(),
//         long : faker.address.longitude(), 
//     }

//     peoples.push(people)
// }

// fs.writeFile('people.json', JSON.stringify(peoples), function (err, data) {
//     console.log('you recive some data from server');
// })






// ^_^_^_^_^_^_^_^ parse ^_^_^_^_^_^_^_^ \\

var data = fs.readFileSync('people.json').toString()
var res = JSON.parse(data)
console.log(res);
res.forEach(element => {
    console.log(element.name, element.email);
});