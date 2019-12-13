import { Component, OnInit } from '@angular/core';
import { Autor } from '../autor';
import { AutorService } from '../uslugi/autor.service';

@Component({
  selector: 'app-lista-autorow-component',
  templateUrl: './lista-autorow-component.component.html',
  styleUrls: ['./lista-autorow-component.component.css']
})
export class ListaAutorowComponent implements OnInit {

  autorzy : Autor[];
  liczbaAutorow : number;
  wyszukaj:string;

  constructor(private autorzyService:AutorService) { 
    this.autorzy = [];
    this.wyszukaj = "";
  }

  ngOnInit() {
    this.autorzy = this.autorzyService.zwrocWszystkich();
    this.liczbaAutorow = this.autorzy.length;
    this.autorzyService.dodanoAutora.subscribe(this.dodanoAutora);
  }

  zmien(str) {
    this.autorzy = this.autorzyService.wybierzJesliNazwiskoZawiera(str);
    this.liczbaAutorow = this.autorzy.length;
    this.wyszukaj = str.trim();
  }

  dodanoAutora = (autor:Autor) => {
      if(this.wyszukaj != "")
        this.autorzy = this.autorzyService.wybierzJesliNazwiskoZawiera(this.wyszukaj);
      else
        this.autorzy = this.autorzyService.zwrocWszystkich();
      this.liczbaAutorow = this.autorzy.length;
  }
}
