import { fromEvent, Observable } from 'rxjs';


export class App2 {
  input1: HTMLInputElement;
  input2: HTMLInputElement;
  paragraph1: HTMLParagraphElement;
  minLengthToShow: number;
  observableInput: any;
  observableInput2: any;

  constructor(input: HTMLInputElement,
              input2: HTMLInputElement,
              paragraph: HTMLParagraphElement) {
    this.input1 = input;
    this.input2 = input2;
    this.paragraph1 = paragraph;
  }

  public Init() {
    this.observableInput = fromEvent(this.input1, 'input').subscribe(res => {
      //zadanie13
      // if (res['target']['value'].length > 5)
      //zadanie14
      if(res['target']['value'].length > (isNaN(this.minLengthToShow) ? 0 : this.minLengthToShow))
        this.paragraph1.innerText = res['target']['value'];
      else
        this.paragraph1.innerText = '';
    });

    this.observableInput2 = fromEvent(this.input2, 'input').subscribe(res => {
      this.minLengthToShow = res['target']['value'];
    })
  }

  public Destroy() {
    this.observableInput.unsubscribe();
    this.observableInput2.unsubscribe();
  }
}
