import { fromEvent, Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

export class App {
    //  clickCount: number;
    button1: HTMLButtonElement;
    button2: HTMLButtonElement;
    button: HTMLButtonElement;
    paragraph: HTMLParagraphElement;
    input1: HTMLInputElement;
    input2: HTMLInputElement;
    observableB1: any;
    observableB2: any;
    observableB: any;
    observableI1: any;
    constructor(button1: HTMLButtonElement, button2: HTMLButtonElement, button: HTMLButtonElement, paragraph: HTMLParagraphElement,input1:HTMLInputElement,input2:HTMLInputElement) {
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
                        clickCount++
                        this.paragraph.innerText = clickCount.toString()

                        if(this.observableI1 != null){
                            this.input1.value = clickCount.toString();
                            this.input2.value = clickCount.toString();
                        }
                    });
            });

        this.observableB2 = fromEvent(this.button2, "click")
            .subscribe(() => {
                let clickCount = parseInt(this.paragraph.innerText);
                this.observableB.unsubscribe();
            });

                this.observableI1 = fromEvent(this.button2,'click').subscribe( ()=> {
                    let clickCount = parseInt(this.paragraph.innerText);
                    this.input1.value = clickCount.toString();
                    this.input2.value = clickCount.toString();
                    this.input1.disabled = true;
                    this.input2.disabled = true;
                   // this.observableI1.unsubscribe();
                });
               
           

    }
    public Destroy() {
        this.observableB.unsubscribe();
        this.observableB1.unsubscribe();
        this.observableB2.unsubscribe();
    }
}