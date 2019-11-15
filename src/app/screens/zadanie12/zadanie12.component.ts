import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zadanie12',
  templateUrl: './zadanie12.component.html',
  styleUrls: ['./zadanie12.component.scss']
})
export class Zadanie12Component implements OnInit {

  info = "Ciesz sie idziemy dalej";

  constructor(private _location: Location,
              private router: Router) { }

  ngOnInit() {
  }

  back() {
    this._location.back();
  }

  yes() {
    this.router.navigate(['zad1'], {state: {data: this.info}});
  }

  no() {
    this.info = "Przykro mi, ze sie meczysz";
    this.router.navigate(['zad1'], {state: {data: this.info}})
  }
}
