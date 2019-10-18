let arr = [1, 2, 3, 4, 5];

console.log(arr.reduce((a, b) => a + b));

let zad1 = arr
  .filter(a => {
    return a % 2 === 0;
  })
  .reduce((a, b) => a + b);

console.log(zad1);

let zad2 = arr
  .filter(a => {
    return a > 3;
  })
  .reduce((a, b) => a + b);

console.log(zad2);

function basedFilter(num: number, num1: number) {
  return num > num1;
}

let zad3 = arr
  .filter(a => {
    return basedFilter(a, 3);
  })
  .reduce((a, b) => a + b);

console.log(zad3);

//jakiś bullshit
// function curry2<T1, T2, T3>(fn: (arg1: T1, arg2: T2) => T3) {
//   return (a1: T1) => (a2: T2) => fn(a1, a2);
// }

let strArr = ["str1", "2", "str3", "4", "str5"];

let zad6 = strArr
  .filter(a => {
    return parseInt(a, 10);
  })
  .map(element => Number(element))
  .reduce((a, b) => a + b);

console.log(zad6);
