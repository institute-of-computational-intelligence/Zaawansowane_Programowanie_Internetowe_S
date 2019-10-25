import { Observable, Observer, fromEvent } from 'rxjs';
import { App } from './App';
import { App2 } from './App2';
import { App3 } from './App3';

let tab = [1, 2, 3, 4];

// ZAD 1
let sum = (acc, value) => acc + value;

let zad1Result = tab.reduce(sum, 0);
console.log(zad1Result);

// ZAD 2
let sumEven = (acc, value) => value % 2 === 0 ? acc + value : acc;
let zad2Result = tab.reduce(sumEven, 0);
console.log(zad2Result);

// ZAD 3
let sumGreatherEven = (acc, value, threshold) => value % 2 === 0 && value > threshold ? acc + value : acc;
let zad3Result = tab.reduce((acc, value) => sumGreatherEven(acc, value, 3), 0);
console.log(zad3Result)

// ZAD 4

let greatherFunc = (value: number, threshold: number) => value > threshold ? true : false;
let sumGreatherEven4 = (acc, value, threshold) => value % 2 === 0 && greatherFunc(value, threshold) ? acc + value : acc
let zad4Result = tab.reduce((acc, value) => sumGreatherEven4(acc, value, 3), 0)
console.log(zad4Result);

// zad 5
function greatherFunc2(l, x) {
  return x > l && x % 2 == 0;
}

function curry2<T1, T2, T3>(fn: (arg1: T1, arg2: T2) => T3) {
  return (a1: T1) => (a2: T2) => fn(a1, a2);
}

let zad5 = tab.filter(curry2(greatherFunc2)(2)).reduce((a, x) => a + x);
console.log(zad5);

// zad6
let arrayOfStrings = ["13", "posterunek", "odc", "5"];
let zad6 = arrayOfStrings.map(e => parseInt(e)).filter(e => !isNaN(e)).reduce((a, x) => a + x);
console.log(zad6);

//rx.js

// zad7 i 8 i 9,10
let p = document.createElement("p");
let button = document.createElement("button");
button.innerText = "clicker";
let button1 = document.createElement("button");
let button2 = document.createElement("button");
button1.innerText = "1";
button2.innerText = "2";
document.body.append(p);
document.body.append(button1);
document.body.append(button2);
document.body.append(button);

// let app: App = new App(button1, button2, button, p);
// app.Init();

//zad 11
let input1 = document.createElement('input');
let input2 = document.createElement('input');
document.body.append(input1);
document.body.append(input2);


let app: App = new App(button1, button2, button, p, input1, input2);
app.Init();


//zad12

let input = document.createElement('input');
let inputapp2 = document.createElement('input');
let paragraph = document.createElement('p');

document.body.append(document.createElement('br'));
document.body.append(input);
document.body.append(paragraph);
document.body.append(document.createElement('br'));
document.body.append(inputapp2);

let app2: App2 = new App2(input, inputapp2, paragraph);
app2.Init();

let inputApp3_1 = document.createElement('input');
let inputApp3_2 = document.createElement('input');
let pApp3_1 = document.createElement('p');

document.body.append(document.createElement('br'));
document.body.append(inputApp3_1);
document.body.append(inputApp3_2);
document.body.append(pApp3_1);

let app3: App3 = new App3(inputApp3_1, inputApp3_2, pApp3_1);
app3.Init();

window.addEventListener('beforeunload', () => app.Destroy());
window.addEventListener('beforeunload', () => app2.Destroy());
window.addEventListener('beforeunload', () => app3.Destroy());
