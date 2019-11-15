import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DeleteLinkComponent } from '../delete-link/delete-link.component';
import { EditLinkComponent } from '../edit-link/edit-link.component';
import { InputService } from '../services/input.service';

@Component({
  selector: 'app-zad1',
  templateUrl: './zad1.component.html',
  styleUrls: ['./zad1.component.scss']
})
export class Zad1Component implements OnInit {

  imie = 'Imie';
  nazwisko = 'Nazwisko';

  inputValue = 0;

  isFontButtonClicked = false;
  isColorButtonClicked = false;

  links = [
    {id: 0, name: 'Google', path: 'www.google.com', clicked: false, description: "Im google"},
    {id: 1, name: 'Facebook', path: 'www.facebook.com', clicked: false, description: "Im facebook"},
    {id: 2, name: 'Devwhile', path: 'www.devwhile.pl', clicked: false, description: "Im devwhile"}
  ];

  images = [
    {path: './assets/img/cat1.jpg'},
    {path: './assets/img/cat2.jpg'},
    {path: './assets/img/cat3.jpg'}
  ];

  imageIndex = 1;

  isFirstImage = false;
  isLastImage = false;

  infoFromSecondComponent;

  siteName;
  siteAddress;
  constructor(private router: Router,
              public dialog: MatDialog,
              private inputService: InputService) {
  }

  ngOnInit() {
    this.infoFromSecondComponent = history.state.data;
  }

  showName() {
    this.imie = 'Mateusz';
    this.nazwisko = 'Scigala';
  }

  changeColor(index) {
    this.links.forEach(link => link.clicked = false);
    this.links[index].clicked = !this.links[index].clicked;
    this.router.navigate(['zad1/'+index], {state:{ data: this.links[index].description }})
  }

  changeCount(value) {
    this.inputValue += value;
    // this.inputService.inputValue['_value'] += value;
  }

  changeImage(index) {
    this.isFirstImage = false;
    this.isLastImage = false;
    this.imageIndex += index;
    if(this.imageIndex === 0) {
      this.isFirstImage = true;
    }
    if(this.imageIndex === 2) {
      this.isLastImage = true;
    }
  }

  showPopup(index) {
    const dialogRef = this.dialog.open(DeleteLinkComponent, {
      width: '400px',
      height: '400px',
      data: {
        index: index
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.links = this.links.filter(el => el.id != result);
    });
  }

  addSite() {
    if(this.siteName != '' && this.siteAddress != '') {
      let link = {id: this.links.length, name: this.siteName, path: this.siteAddress, clicked: false, description: 'Nothing'}
      this.links = this.links.concat(link);
    }
  }

  editLink(index) {
    const dialogRef = this.dialog.open(EditLinkComponent, {
      width: '400px',
      height: '400px',
      data: {
        id: index,
        link: this.links[index]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
       this.links[result.index] = result.data;
    });
  }
}
