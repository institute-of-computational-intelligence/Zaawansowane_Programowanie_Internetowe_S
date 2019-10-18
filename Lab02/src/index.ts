let array = [1,2,3,4,5,6,7,10,10,10]
//zad 1
console.log('Zadanie 1');
console.log(array.reduce((x, y) => x + y));

//zad 2
console.log('Zadanie 2');
console.log(array.reduce((x, y) => {
    if(y%2 == 0)
        return x+y;
    else return x;
}));

//zad 3
console.log('Zadanie 3');
console.log(array.reduce((x,y,z) => {  
    return y>10 ? x+y : (z==1 ? 0 : x)
}));


//zad 4
console.log('Zadanie 4');
console.log(array.reduce((x,y,z) => {  
    return y>10 ? x+y : (z==1 ? 0 : x)
}));


let arr = ['123', '1e10000', 'sfsa', '10px'];
//zad 6
console.log('Zadanie 6');
console.log(arr.reduce((x,y) => {
    console.log(x);
    return x
}));

