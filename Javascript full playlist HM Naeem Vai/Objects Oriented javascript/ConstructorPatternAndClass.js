// <<<<<<<<<<<<<<<< ^^^^^^^^^^^^ ES5  ^^^^^^^^^^^^ >>>>>>>>>>>>>> \\
function contructor(name, id) {
    this.name = name;
    this.id = id;
}
let res = new contructor('noyon ahmed', 10902); // "new" is must
console.log(res);



// <<<<<<<<<<<<<<<< ^^^^^^^^^^^^ ES6  ^^^^^^^^^^^^ >>>>>>>>>>>>>> \\
class Person{
    // constructor keyword is must
    constructor(name, email){ 
        this.name = name;
        this.email = email;
    }

    // we can call fnction wihtout name of function

    print(){
        console.log(` Name : ${this.name}, Email : ${this.email} `);
    }
}

let result = new Person('noyon ahmed', 'anoyon002@gmail.com');// "new" is must
result.print();
console.log(result);


