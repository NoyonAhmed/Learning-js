// <<<<<<<<<< ^^^^^^^^^ ES5 ^^^^^^^^^ >>>>>>>>>> \\

let name = 'Noyon Ahmed';
let email = 'anoyon002@gmail.com'

let obj = {
    name : name,
    email : email,
    print : function () {
        console.log('Name : ' + this.name, 'Email  : ' + this.email);
    }
}

// console.log(obj);
obj




// <<<<<<<<<< ^^^^^^^^^ ES6 ^^^^^^^^^ >>>>>>>>>> \\

let personName = 'Noyon Ahmed';
let personEmail = 'anoyon002@gmail.com'

let obj2 = {
    personName,
    personEmail,

    printAnother(){
        console.log(` Person Name : ${this.name}, Person Email : ${this.email}  `);
    }
}

// console.log(obj2);
obj2