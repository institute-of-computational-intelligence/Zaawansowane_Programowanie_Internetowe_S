import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {

  info;
  constructor() { }

  ngOnInit() {
    this.info = history.state.data;
  }

}
