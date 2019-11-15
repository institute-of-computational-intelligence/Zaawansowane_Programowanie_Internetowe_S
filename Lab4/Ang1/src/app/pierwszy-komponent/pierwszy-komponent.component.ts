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
  picurl: String;
  picindex = 0;
  links = [
    { name: "das.pl", selected: false },
    { name: "asdasd.pl", selected: false },
    { name: "uioyfoius.pl", selected: false },
    { name: "bcnvhjc.pl", selected: false },
    { name: "mmmma.pl", selected: false }
  ];

  pictures = [
    // {
    //   picurl:
    //     "https://images.unsplash.com/photo-1573750329232-7d8ffea02dc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    //   id: 0
    // },
    (this.picurl =
      "https://images.unsplash.com/photo-1573750329232-7d8ffea02dc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"),
    (this.picurl =
      "https://images.unsplash.com/photo-1573747502252-7daf35dc2e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=629&q=80"),
    (this.picurl =
      "https://images.unsplash.com/photo-1573750329232-7d8ffea02dc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"),
    (this.picurl =
      "https://images.unsplash.com/photo-1573759251026-3ac162e6ebcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")
  ];

  constructor() {}

  ngOnInit() {}

  nextpic() {
    this.picindex++;
    // if(this.picindex === this.pictures.length){

    // }
  }

  backpic() {
    this.picindex--;
  }

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
