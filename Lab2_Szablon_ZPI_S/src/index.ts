var tab1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let acc = 0;
let acc2 = 0;
// function sum (tab: number[]) {
//     let value = 0;
//     for(let i = 0; i < tab1.length; i++) {
//         value += tab[i];
//     }
//     return value;
// }
let sum = (acc, item) => acc + item;
let checkEven = (item) => (item % 2 !== 1) ? true : false; 
let checkHigher = (item, arg) => (item > arg) ? true : false; 

let val = tab1.map(item => acc =  sum(acc, item));
let val2 = tab1.map(item => acc2 = (checkEven(item)) ? sum(acc, item) : sum(acc, 0));


let zad1 = tab1.reduce((acc, item) => sum(acc, item));
let zad2 = tab1.filter((item) => checkEven(item)).reduce((acc, item) => sum(acc, item))
let zad3 = tab1.filter((item) => (item > 3) ? true : false).reduce((acc, item) => sum(acc, item))
let zad4 = tab1.filter((item) => checkHigher(item, 3)).reduce((acc, item) => sum(acc, item))
let zad5 = tab1.filter((item) => checkHigher(item, 3)).reduce((acc, item) => sum(acc, item))

function curry2<T1, T2, T3> (fn:(arg1:T1, arg2:T2) => T3) { 
    return (a1:T1) => (a2:T2) => fn(a1,a2);
}

curry2(checkHigher)

console.log(zad1); 
console.log(zad2);
console.log(zad3);
console.log(zad4);



function sumEven (tab: number[]) {
    let value = 0;
    for(let i = 0; i < tab1.length; i++) {
        if(tab[i] % 2 != 1) {
            value += tab[i];
        }
    }
    return value;
}

function sumHigherThanPassedArgument (tab: number[], arg: number) {
    let value = 0;
    for(let i = 0; i < tab1.length; i++) {
        if(tab[i] > arg) {
            value += tab[i];
        }
    }
    return value;
}