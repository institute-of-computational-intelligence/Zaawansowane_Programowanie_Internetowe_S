import { Component, OnInit } from '@angular/core';
import { Autor } from "../autor"

@Component({
  selector: 'app-lista-autorow',
  templateUrl: './lista-autorow.component.html',
  styleUrls: ['./lista-autorow.component.css']
})
export class ListaAutorowComponent implements OnInit {

  autorzy : Autor[];
  pokazListe : boolean
  tytul : string;
  liczbaAutorow: number
  constructor() {
    this.autorzy = [];
    this.pokazListe = true;
    this.tytul = "Ukryj liste";
   }

  ngOnInit() {
    this.autorzy.push(
      Autor.stworz(1, "Henryk", "Sienkiewicz", "h.sienkiewicz@autor.pl"),
      Autor.stworz(2, "Adam", "Mickiewicz", "a.mickiewicz@autor.pl"),
      Autor.stworz(3, "Juliusz", "Słowacki", "j.slowacki@autor.pl")
    )

    this.liczbaAutorow = this.autorzy.length;
  }

  kliknieto() {
    this.pokazListe = !this.pokazListe;
    this.tytul = this.pokazListe ? "Ukryj liste" : "Pokaz liste"
  }

}
