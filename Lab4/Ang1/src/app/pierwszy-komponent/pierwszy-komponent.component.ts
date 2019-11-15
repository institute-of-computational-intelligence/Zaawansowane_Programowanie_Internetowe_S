import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pierwszy-komponent',
  templateUrl: './pierwszy-komponent.component.html',
  styleUrls: ['./pierwszy-komponent.component.css']
})
export class PierwszyKomponentComponent implements OnInit {

  klasaH1 : any;

  tytul: string = "Pierwsza wartosc przekazana z komponentu";

  obiekt = {
    imie: "Ala",
    nazwisko: "Nowak"
  };

  constructor() { }

  ngOnInit() { }

  metoda() {
    return "Wart zwrocona z metody";
  }

  kliknieto(){
    this.tytul = "Po kliknieciu";
    this.klasaH1 = {"wybrany" : true, "klikniety":false};
   
  }
  style = {"font-size.px":12, "color":"red"};
}
