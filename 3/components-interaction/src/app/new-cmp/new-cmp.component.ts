import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  @Input() visible;
  @Output() disableVisibility = new EventEmitter<boolean>();
  @Output() continueLearning = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {

  }

  onYesClicked() {
    this.continueLearning.emit(true);
  }

  onNoClicked() {
    this.continueLearning.emit(false);
  }

  disable() {
    this. disableVisibility.emit(!this.visible);
  }

}
