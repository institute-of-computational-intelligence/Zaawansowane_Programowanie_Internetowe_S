import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-wyszukaj',
  templateUrl: './wyszukaj.component.html',
  styleUrls: ['./wyszukaj.component.css']
})
export class WyszukajComponent implements OnInit {

  @Input() liczbaWynikow : number;
  @Output() wyszukaj : EventEmitter<string>;
  constructor() { 
    this.wyszukaj = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  zmiana(ev) {
    let str = (<HTMLInputElement>ev.target).value;
    this.wyszukaj.emit(str);
  }

}
