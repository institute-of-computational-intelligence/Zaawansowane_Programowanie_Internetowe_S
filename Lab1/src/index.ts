import {Pole} from "./class/Pole";
import {Autor} from "./class/Autor";
let P:Pole = new Pole();


let bravo:Autor = new Autor('Jhony','Bravo','jhony.bravo@gmail.com');

let bravoShow:HTMLDivElement = document.createElement('div');
document.querySelector('body').appendChild(bravoShow);
bravoShow.innerText = bravo.imie + " "+bravo.nazwisko+" "+bravo.email;


async function fetchData() {
    let list : Autor[];
    try {
fetch('./data/authors.json')
      .then(response => response.json())
      .then(data => {
        list = data.map(item => <Autor>{
          imie : item.imie,
          nazwisko : item.nazwisko,
          email : item.email
        });
        console.log(list)  });
    } catch (err) {
        console.log(err);
      }
    
    }

    fetchData();