import { fromEvent, Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

export class App {
  button1: HTMLButtonElement;
  button2: HTMLButtonElement;
  button: HTMLButtonElement;
  paragraph: HTMLParagraphElement;
  input1: HTMLInputElement;
  input2: HTMLInputElement;
  observableB1: any;
  observableB2: any;
  observableB: any;
  constructor(
    button1: HTMLButtonElement,
    button2: HTMLButtonElement,
    button: HTMLButtonElement,
    paragraph: HTMLParagraphElement,
    input1: HTMLInputElement,
    input2: HTMLInputElement) {
    this.button = button;
    this.button1 = button1;
    this.button2 = button2;
    this.paragraph = paragraph;
    this.paragraph.innerText = "0";
    this.input1 = input1;
    this.input2 = input2;
  }

  public Init(): void {

    this.observableB1 = fromEvent(this.button1, "click")
      .subscribe(() => {
        this.observableB = fromEvent(this.button, 'click')
          .pipe(
            take(5)
          ).subscribe(() => {
            let clickCount = parseInt(this.paragraph.innerText)
            clickCount++;
            this.paragraph.innerText = clickCount.toString()
          });
      });
    this.observableB2 = fromEvent(this.button2, "click")
      .subscribe(() => {
        if(this.observableB._subscriptions) {
          this.input1.value = this.paragraph.innerText;
          this.input2.value = this.paragraph.innerText;
          this.observableB.unsubscribe();
        } else {
          this.input1.value = '';
          this.input2.value = '';
        }
      });
  }
  public Destroy() {
    this.observableB.unsubscribe();
    this.observableB1.unsubscribe();
    this.observableB2.unsubscribe();
  }
}
