import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'components-interaction';

  btnClicked = false;
  continueLearning: boolean;
  isDecisionMade = false;

  ngOnInit() { }

  onBtnClicked() {
    this.btnClicked = true;
  }

  onVisibilitDisabled() {
    this.btnClicked = false;
  }

  onContinueLearningListened(event) {
    this.continueLearning = event;
  }

  onDecision(e) {
    this.isDecisionMade = e;
  }

}
