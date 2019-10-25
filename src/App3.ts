import { fromEvent, Observable } from 'rxjs';

export class App3 {
  input1: HTMLInputElement;
  input2: HTMLInputElement;
  p1: HTMLParagraphElement;
  input1Subscription: any;
  input2Subscription: any;
  errorSubscription: any;

  val1: number;
  val2: number;

  constructor(
    input1: HTMLInputElement,
    input2: HTMLInputElement,
    p1: HTMLParagraphElement
  ) {
    this.input1 = input1;
    this.input2 = input2;
    this.p1 = p1;
  }

  Init() {
    this.input1Subscription = fromEvent(this.input1, 'input').subscribe(res => {
      this.val1 = res['target']['value'];
      this.p1.innerText = this.val1.toString();
      this.p1.innerText = (this.val1 * this.val2).toString();
    });

    this.input2Subscription = fromEvent(this.input2, 'input').subscribe(res => {
      this.val2 = res['target']['value'];
      this.p1.innerText = (this.val1 * this.val2).toString();
    });

    //DOMSubtreeModified any modified of element
    // this.errorSubscription = fromEvent(this.p1, '').subscribe(res => {
    //   console.log(this.val1);
    //   console.log(this.val2);
    //   if(!isNaN(this.val1) && !isNaN(this.val2)) {
    //     this.p1.innerText = (this.val1 * this.val2).toString();
    //   }
    // })
  }

  Destroy() {
    this.errorSubscription.unsubscribe();
    this.input1Subscription.unsubscribe();
    this.input2Subscription.unsubscribe();
  }
}
