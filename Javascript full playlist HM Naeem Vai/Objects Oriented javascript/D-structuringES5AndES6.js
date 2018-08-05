// <<<<<<<<<<<< ^^^^^^^^^^ ES5(destructing(array) //find out variable) ^^^^^^^^^^ >>>>>>>>>>>> \\
let arr = [1,2,3]
console.log(arr[0]);



// <<<<<<<<<<<< ^^^^^^^^^^ ES6(destructing(array) //find out variable) ^^^^^^^^^^ >>>>>>>>>>>> \\
let arr2 = [2,4,5];
let [a,b,c] = arr2
console.log(a);





// <<<<<<<<<<<< ^^^^^^^^^^ ES5(destructing(Object) //find out variable) ^^^^^^^^^^ >>>>>>>>>>>> \\

                // normal obj


let obj = {
    name : 'Noyon Ahmed',
    email : 'anoyon523@gmail.com'
}    

console.log('Name : ' + obj.name + ' Email :' + obj.email);








// <<<<<<<<<<<< ^^^^^^^^^^ ES6(destructing(Object) //find out variable) ^^^^^^^^^^ >>>>>>>>>>>> \\

let obj2 = {
    personName : 'horse',
    personEmail : 'ahorse546@gmail.com'
}

let {personName, personEmail} = obj2;

console.log(` PersonName : ${personName}, PersonEmail ${personEmail} `);


function printName({personName, personEmail}) {
    console.log(` Person Name : ${personName}, Person Email : ${personEmail} `);
}
printName({personName, personEmail})
