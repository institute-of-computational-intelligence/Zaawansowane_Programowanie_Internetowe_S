import { Component } from '@angular/core';
import { Autor } from '../autor';
import { AutorService } from '../uslugi/autor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dodaj-autora',
  templateUrl: './dodaj-autora.component.html',
  styleUrls: ['./dodaj-autora.component.css']
})
export class DodajAutoraComponent {

  autor:{
    imie:string,
    nazwisko:string,
    email:string
  };
  
  constructor(private router:Router, private autorService:AutorService) { 
    this.autor = {
      imie: "",
      nazwisko: "",
      email: "" 
    };
  }

  zamknij() {
    this.router.navigateByUrl('autorzy');
  }

  zatwierdz() {
    this.autorService.dodajAutora(
      Autor.stworz(1, this.autor.imie, this.autor.nazwisko, this.autor.email)
    );
    this.zamknij();
  }
}
