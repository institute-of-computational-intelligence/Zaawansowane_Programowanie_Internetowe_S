import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-link-details',
  templateUrl: './link-details.component.html',
  styleUrls: ['./link-details.component.css']
})
export class LinkDetailsComponent implements OnInit, OnChanges {
  @Input() link;

  constructor() { }

  ngOnInit() {
    console.log(this.link);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.link);
  }

}
