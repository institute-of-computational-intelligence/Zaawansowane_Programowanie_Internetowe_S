import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Autor } from '../autor';
import { Router, ActivatedRoute } from '@angular/router';
import { AutorService } from '../uslugi/autor.service';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  autor:Autor = null;

  constructor(private router:Router,
              private activatedRoute:ActivatedRoute, 
              private autorService:AutorService) { 
  }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      map(params=>params['id']),
      map(id=>parseInt(id)),
      filter(id=>!isNaN(id)),
      map(id=>this.autorService.znajdzWgId(id))
    )
    .subscribe(autor=>this.autor = autor);
  }

  zamknij() {
    this.router.navigateByUrl('/autorzy')
  }
}
