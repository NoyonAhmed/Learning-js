
// <<<<<<<<<<<< ^_^_^_^_^_^_^  prototype(shared same data with another var, fun, obj) ^_^_^_^_^_^_^ >>>>>>>>>>>> \\



// function obj(name, age) {
//     this.name = name;
//     this.age = age;
// }

// obj.prototype.hello = function () {
//     console.log(` hello ${this.name} `);
// }

// obj.prototype.email = 'anoyon002@gmail.com'


// obj.prototype.newprototype = function () {
//     console.log(this.name, this.email);
// }

// let personOne = new obj('Noyon Ahmed', 22);
// let personTwo = new obj('ahmed', 21);

// console.log(personOne);
// console.log(personTwo);
// console.log(personOne.email);
// console.log(personTwo.email);
// console.log(personOne.hello());
// console.log(personTwo.hello());
// console.log(personOne.newprototype());
// console.log(personTwo.newprototype());







// <<<<<<<<<<<< ^_^_^_^_^_^_^ Shortcut ^_^_^_^_^_^_^ >>>>>>>>>>>> \\



function person(name, id) {
    this.name = name;
    this.id = id;
}

person.prototype = {
    email : 'anoyon002@gmail.com',
    print : function () {
        console.log(` Name : ${this.name}, Email : ${this.email} `);
    }
}


let personOne = new person('Noyon Ahmed', 2030);
let personTwo =  new person('Nabila Chy', 4903);


console.log(personOne);
console.log(personTwo);
console.log(personOne.email);
console.log(personTwo.email);
console.log(personOne.print());
console.log(personTwo.print());












