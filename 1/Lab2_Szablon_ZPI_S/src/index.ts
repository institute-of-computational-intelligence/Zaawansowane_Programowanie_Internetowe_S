import { App } from './app';

var tab1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var tab2: string[] = ['1', 'posterunek', '2', '3', '4', '5'];

let sum = (acc: number, item: number): number => acc + item;
let checkEven = (item: number): boolean => (item % 2 !== 1) ? true : false;  
let checkHigher = (item: number, arg: number): boolean => (item > arg) ? true : false; 

// ----
let zad1a: number = tab1.reduce((acc, item) => sum(acc, item));
let zad1b: number = tab1.reduce(sum, 0);
let zad1c: number = tab1.reduce((prevValue, currentValue, index, array): number => prevValue + currentValue);
let zad1d: number = tab1.reduce((a: number, b: number): number => a + b);
// -----
let zad2a: number = tab1.filter((item) => checkEven(item)).reduce((acc, item) => sum(acc, item));
let zad2b: number = tab1.filter((value, index, array): boolean => value %2 !== 1).reduce((a: number, b: number): number => a + b);
let zad2c: number = tab1.filter((value): boolean => value %2 !== 1).reduce((a: number, b: number): number => a + b);
// -----
const selectedNumber = 5;
let zad3a: number = tab1.filter((item) => (item > 3) ? true : false).reduce((acc, item) => sum(acc, item));
let zad3b: number = tab1.filter((value): boolean => value > selectedNumber).reduce((a: number, b: number): number => a + b);
// -----
let wiekszaOd = (value: number, selectedValue: number): boolean => value > selectedValue;
let zad4a: number = tab1.filter((item) => checkHigher(item, 3)).reduce((acc, item) => sum(acc, item))
let zad4b: number = tab1.filter((item: number): boolean => wiekszaOd(item, selectedNumber)).reduce((a: number, b: number): number => a + b)

function greatherFunc2(a1, x) {
    return x > a1 && x % 2 == 0;
}

function curry2<T1, T2, T3>(fn: (arg1: T1, arg2: T2) => T3) {
    return (a1: T1) => (a2: T2) => fn(a1, a2);
}

let zad5 = tab1.filter(curry2(greatherFunc2)(2)).reduce((a: number, x: number) => a + x);

// parseInt (string, radix) - radix specifies system encoding of string, as default 10
let zad6a = tab2.map((value, index, array) => {
    return parseInt(value)
})

// won't work every time
let zad6b = tab2.map((value, index, array) => {
    return +value;
})

// overpowered TypeScript way
let zad6c = tab2.map((value, index, array) => {
    return Number(value);
})

console.log(zad1a); 
console.log(zad1b); 
console.log(zad2a);
console.log(zad3a);
console.log(zad4a);
console.log(zad6a);
console.log(zad6b);
console.log(zad6c);

let p = document.createElement('p');
let button1 = document.createElement('button');
let button2 = document.createElement('button');
let button3 = document.createElement('button');
let input1 = document.createElement('input');
let input2 = document.createElement('input');
let p2 = document.createElement('p');
let input3 = document.createElement('input');
let input4 = document.createElement('input');
let input5 = document.createElement('input');
let input6 = document.createElement('input');

button1.innerText = 'Click me ';
button2.innerText = 'Show1';
button3.innerText = 'Show2';
input5.type = 'text'
input6.type = 'text'

document.body.append(p);
document.body.append(input1);
document.body.append(input2);
document.body.append(document.createElement('br'));
document.body.append(document.createElement('hr'));
document.body.append(button1);
document.body.append(button2);
document.body.append(button3);
document.body.append(document.createElement('br'));
document.body.append(document.createElement('hr'));
document.body.append(p2);
document.body.append(input3);
document.body.append(input4);
document.body.append(document.createElement('hr'));
document.body.append(input5);
document.body.append(input6);

let app: App = new App(button1, button2, button3, input1, input2, p, p2, input3, input4, input5, input6);
app.Init();

