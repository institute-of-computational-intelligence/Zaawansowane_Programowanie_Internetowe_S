import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  displaySwitch = false;
  myFirstName = 'Piotr';
  myLastName = 'Lubaszewski';
  color = false;
  fontSize = false;
  number = 0;
  choosenElement;
  links = [
    { name: 'onet.pl', details: 'Szczegółowe informacje ONET', selected: false },
    { name: 'wp.pl', details: 'Szczegółowe informacje WP', selected: false },
    { name: 'filmweb.pl', details: 'Szczegółowe informacje FILMWEB', selected: false },
    { name: 'interia.pl', details: 'Szczegółowe informacje INTERIA', selected: false },
    { name: 'kwejk.pl', details: 'Szczegółowe informacje KWEJK', selected: false }
  ];

  constructor() {}

  ngOnInit() {}

  showMyName() {
    this.displaySwitch = !this.displaySwitch;
  }

  colorParagraph() {
    this.color = !this.color;
  }

  changeFontSize() {
    this.fontSize = !this.fontSize;
  }

  onAddOneClicked() {
    this.number++;
  }

  onSubOneClicked() {
    this.number--;
  }

  onAddTwoClicked() {
    this.number = this.number + 2;
  }

  onSubTwoClicked() {
    this.number = this.number - 2;
  }

  changeBg(event) {
    event.target.style = 'background-color: white';
  }

  oneElementClicked(event) {
    this.links = this.links.map(
        (value) => {
          const obj = {
            name: value.name,
            details: value.details,
            selected: false
          };
          return obj;
        });
    const selectedLink = event.target.innerHTML;
    const selectedItemId = this.links.findIndex(value => value.name === selectedLink);
    this.choosenElement = this.links[selectedItemId];
    this.links[selectedItemId].selected = true;
  }
}
