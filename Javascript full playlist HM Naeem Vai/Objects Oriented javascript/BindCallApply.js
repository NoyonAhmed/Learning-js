// bind, call and apply

function person() {
    console.log('Hello ' + this.name);
}

let obj = {
    name : 'Noyon Ahmed',
    age : 21
}

let obj2 = {
    name : 'Nabila chy',
    age : 20
}

    
    // bind method


let binded = person.bind(obj);
let bindedTwo = person.bind(obj2)
binded()
bindedTwo()



    // call method


person.call(obj);
person.call(obj2);



    // call and apply

function print(a, b) {
    return (a + b) * this.c;
}

let obj3 = {
    c : 3
}


let res = print.call(obj3, 2, 4); // call
let res2 = print.apply(obj3, [2, 4]); // apply
let res3 = print.bind(obj3) // bind

res
res2
console.log(res3(2,4));
