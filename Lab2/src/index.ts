let tablica = [1,2,3,4,5,6,7,10,10,10]
//zad 1
console.log(
    tablica.reduce(function(acc, val) { return acc + val; }, 0)
  )
//zad 2
console.log(
    tablica.reduce(function(acc, val) { return (val % 2 == 0 ? acc + val : acc);  }, 0)
  )
//zad 3
let liczba = 7
console.log(
    tablica.reduce(function(acc, val) { return (val > liczba ? acc + val : acc);  }, 0)
  )
