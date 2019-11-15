import { Component, OnInit } from '@angular/core';
import { Autor } from '../autor';

@Component({
  selector: 'app-lista-autorow',
  templateUrl: './lista-autorow.component.html',
  styleUrls: ['./lista-autorow.component.css']
})
export class ListaAutorowComponent implements OnInit {

    autorzy : Autor[];
    pokazListe : boolean;
    tytul : string;
    liczbaAutorow : number;
    _wszyscyAutorzy: any;


    zmien(str) {
      this.autorzy = this._wszyscyAutorzy
        .filter(e=>e.nazwisko.includes(str));
      this.liczbaAutorow = this.autorzy.length;
      }
      
  constructor() {
    this.autorzy = [];
    this.pokazListe = true;
    this.tytul = "Ukryj liste";
    
   }

  ngOnInit() {
    this.autorzy.push(
      Autor.stworz(1, "Henryk", "Sienkiewicz", "h.sienkiewicz@wp.pl"),
      Autor.stworz(2, "Wladyslaw", "Reymont", "w.reymont@autor.pl"),
      Autor.stworz(3, "Czeslaw", "Milosz", "cz.milosz@autor.pl"),
      Autor.stworz(4, "Wislawa", "Szymborska", "w.szymborska@autor.pl"),
      Autor.stworz(5, "Olga", "Tokarczuk", "o.tokarczuk@autor.pl")
    );
    
    this.liczbaAutorow = this.autorzy.length;
  }
  kliknieto(){
    this.pokazListe = !this.pokazListe;
    this.tytul = this.pokazListe ? "Ukryj Liste" : "Pokaz liste";
  }
}
