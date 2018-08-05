// ^_^_^_^_^_^_^_^_^ Creational and Executional Context ^_^_^_^_^_^_^_^_^ \\

// let name = 'noyon'

// function sayHi(name) {
//     console.log(name);
// }

// sayHi(name)


/*

// creational phase
name = undefind
sayHi = fn ref



// execution phase
name = 'noyon'
sayhi = find out where its declaration
stop execution and crete brand new context

// brand new context for function

//creational context
name = undefind

// execution context
name = 'noyon'
log

*/




// let a = 10
// console.log(a);

// function sqrs(a) {
    
//     let b = a * a

//     if (b > 100) {
//         console.log('i am bigger');
//     }else {
//         b = b * 2
//     }

//     return b + a
// }

// a = 5

// let c = sqrs(a)

// console.log(c);



/*
//creational context
a = undefind
scrs() = fn ref
c = undefind




// executional context
a = 10
log
a = 5 (overwrite by this section)
pause and create brand new context for function
start from value with brand new execution phase (55)
c = 55
log


// create brand new execution context

// creational phase
a(perameter) = undefind 
b = undefind


// executional phase
a = 5
b = 25
b = 25 * 2 -> 50
return 50 + 5 -> 55



*/







let a = 10;

for (let i = 0; i < a; i++) {

    let c = function () {
        return  i * i + a
    }

    let result = c()
    console.log(result);

}

/*

// creational phase
a = undefind
i = undefind
c = undefind
result = undefind


// executional phase
a = 10
start for loop
i = 0 // it will run till 10
c = ref

pause and create brand new context for function

//creational phase
no creational for this code direct go to executional phase

// executional phase
returned value (calculate all of this)
result = value
log
i = 1

*/

