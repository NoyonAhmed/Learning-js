//<<<<<<<<<< ^^^^^^^^^ ES5 (this keyword) ^^^^^^^^^ >>>>>>>>>> \\

function Outer() {
    function inner() {
        console.log(this);
    }
    new inner()
}

Outer();


let obj = {
    name : 'Noyon Ahmed',

    print : function () {
        console.log(` Name : ${this.name} `);
    }

}

obj.print()





//<<<<<<<<<< ^^^^^^^^^ ES6 (all problem solve with array function (=>)) ^^^^^^^^^ >>>>>>>>>> \\

let obj2 = {
    name : 'Noyon Ahmed',

    print : function () {
        setTimeout(() => {
            console.log(this.name);
        }, 2000);
    }
}

obj2.print();
