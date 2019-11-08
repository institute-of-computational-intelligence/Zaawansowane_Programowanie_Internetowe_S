import { Component, OnInit } from "@angular/core";
import { Autor } from "../autor";

@Component({
  selector: "app-lista-autorow",
  templateUrl: "./lista-autorow.component.html",
  styleUrls: ["./lista-autorow.component.css"]
})
export class ListaAutorowComponent implements OnInit {
  autorzy: Autor[];
  constructor() {
    this.autorzy = [];
  }

  ngOnInit() {}
}
