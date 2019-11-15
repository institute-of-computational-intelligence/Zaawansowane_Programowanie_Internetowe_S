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
  @Output() decided = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {

  }

  onYesClicked() {
    this.decided.emit(true);
    this.continueLearning.emit(true);
  }

  onNoClicked() {
    this.decided.emit(true);
    this.continueLearning.emit(false);
  }

  disable() {
    this.decided.emit(false);
    this. disableVisibility.emit(!this.visible);
  }

}
