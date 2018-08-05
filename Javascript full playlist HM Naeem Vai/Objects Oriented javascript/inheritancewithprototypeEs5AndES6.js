// <<<<<<<<<<< ^^^^^^^^^^ Inheritance with prototype ^^^^^^^^^^ >>>>>>>>>>> \\ 

// function student() {
//     this.name = 'Noyon Ahmed';
// }

// function subjects() {
//     student.call(this)
//     this.subject = 'Javascript'
// }

// let res = new subjects();

// let print = res.name;
// console.log(print);



function myFunction(name) {
    this.name = name
}

// myFunction.prototype.printFunction = function () {
//     console.log('hello ' + this.name);
// }

// myFunction.prototype.skill = 'javascript'

function anotherFunction(name, id) {
    myFunction.call(this, name);
    this.id = id
}


anotherFunction.prototype = Object.create(myFunction.prototype);

// Object.setPrototypeOf(myFunction.prototype, anotherFunction.prototype)


let nabila = new anotherFunction('nabila chy', 20933);


console.log(nabila);




// <<<<<<<<<<< ^^^^^^^^^^ Classes and inheritence (ES6) module system ^^^^^^^^^^ >>>>>>>>>>> \\

// class information {
    
//     constructor (Personname, Personemail) {
//         this.Personname = Personname
//         this.Personemail = Personemail
//     }

//     printer() {
//         console.log(` PersonName : ${this.Personemail}, PersonEmail : ${this.Personemail} `);
//     }

// }

// export default information



//         // without es6 module system

class Teacher{

    constructor (name, email){
        this.name = name
        this.email = email
    }

    // print(){
    //     console.log(` Name : ${this.name}, Email : ${this.email} `);
    // }

}


class Student extends Teacher {

    constructor (name, email, id) {
        super(name, email);
        this.id = id;
    }

    // print2(){
    //     super.print();
    //     console.log(`Id : ${this.id} `);
    // }

}

let res = new Student('Noyon Ahmed', 'anoyon523@gmail.com', 3949238);
console.log(res);

