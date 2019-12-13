import { Injectable,EventEmitter } from '@angular/core';
import { Autor } from '../autor';


@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private autorzy: Autor[] = [
    Autor.stworz(1, "Henryk", "Sienkiewicz", "henryk.sienkiewicz@autor.pl"),
    Autor.stworz(2, "Władysław", "Reymont", "wladyslaw.reymont@autor.pl"),
    Autor.stworz(3, "Czesław", "Miłosz", "czeslaw.milosz@autor.pl"),
    Autor.stworz(4, "Wisława", "Szymborska", "wislawa.szymborska@autor.pl"),
    Autor.stworz(5, "Olga", "Tokarczuk", "olga.tokarczuk@autor.pl") 
  ];

  dodanoAutora : EventEmitter<any>;

  constructor() { 
    this.dodanoAutora = new EventEmitter();
  }

  zwrocWszystkich() : Autor[] {
    return this.autorzy;
  }

  wybierzJesliNazwiskoZawiera(str:string) {
    return this.autorzy.filter(e=>e.nazwisko.includes(str.trim()))
  }

  dodajAutora(autor:Autor):void {
    this.autorzy.push(autor);
    autor.id = this.autorzy.length;
    this.dodanoAutora.emit();
  }

  znajdzWgId(id:number):Autor {
    return this.autorzy.find(autor=>autor.id == id);
  }
}
