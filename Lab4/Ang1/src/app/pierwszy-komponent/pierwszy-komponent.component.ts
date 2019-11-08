import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pierwszy-komponent",
  templateUrl: "./pierwszy-komponent.component.html",
  styleUrls: ["./pierwszy-komponent.component.css"]
})
export class PierwszyKomponentComponent implements OnInit {
  displaySwitch = false;
  myFirstName = "Lukasz";
  myLastName = "Miniak";
  color = false;
  fontSize = false;
  number = 0;
  links = [
    { name: "das.pl", selected: false },
    { name: "asdasd.pl", selected: false },
    { name: "uioyfoius.pl", selected: false },
    { name: "bcnvhjc.pl", selected: false },
    { name: "mmmma.pl", selected: false }
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
    event.target.style = "background-color: white";
  }

  oneElementClicked(event) {
    this.links = this.links.map(value => {
      const obj = {
        name: value.name,
        selected: false
      };
      return obj;
    });
    const selectedLink = event.target.innerHTML;
    const selectedItemId = this.links.findIndex(
      value => value.name === selectedLink
    );
    this.links[selectedItemId].selected = true;
  }
}
