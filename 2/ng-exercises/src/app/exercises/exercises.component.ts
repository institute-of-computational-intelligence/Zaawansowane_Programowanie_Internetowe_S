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
  links = [
    { name: 'onet.pl', selected: false },
    { name: 'wp.pl', selected: false },
    { name: 'filmweb.pl', selected: false },
    { name: 'interia.pl', selected: false },
    { name: 'kwejk.pl', selected: false }
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
            selected: false
          };
          return obj;
        });
    const selectedLink = event.target.innerHTML;
    const selectedItemId = this.links.findIndex(value => value.name === selectedLink);
    this.links[selectedItemId].selected = true;
  }
}
