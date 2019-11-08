import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pierwszy-komponent',
  templateUrl: './pierwszy-komponent.component.html',
  styleUrls: ['./pierwszy-komponent.component.css']
})
export class PierwszyKomponentComponent implements OnInit {

  klasaH1 : any;
  tytul : string = "Pierwsza wartosc przekazana z komponentu";
  obiekt = {
    imie: "Ala",
    nazwisko: "Ma kota"
  };

  constructor() { }

  ngOnInit() { }

  metoda() {return "Wartosc zwrocona z metody";}

  kliknieto() {
    this.tytul = "Po kliknieciu";
    this.klasaH1 = {"wybrany":true, "klikniety":false};
  }

}
