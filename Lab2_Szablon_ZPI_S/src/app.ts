import { fromEvent, pipe } from 'rxjs';
import { tap, mapTo, scan, take } from 'rxjs/operators';

export class App {
    paragraph: HTMLParagraphElement;
    button1: HTMLButtonElement;
    button2: HTMLButtonElement;
    button3: HTMLButtonElement;
    input1: HTMLInputElement;
    input2: HTMLInputElement;
    input3: HTMLInputElement;
    input4: HTMLInputElement;
    input5: HTMLInputElement;
    input6: HTMLInputElement;
    paragraph2: HTMLParagraphElement;
    // clickCount: number

    constructor(button1: HTMLButtonElement, 
                button2: HTMLButtonElement, 
                button3: HTMLButtonElement, 
                input1: HTMLInputElement,
                input2: HTMLInputElement,
                paragraph: HTMLParagraphElement,
                paragraph2: HTMLParagraphElement,
                input3: HTMLInputElement,
                input4: HTMLInputElement,
                input5: HTMLInputElement,
                input6: HTMLInputElement,
                ) {

        this.button1 = button1;
        this.button2 = button2;
        this.button3 = button3;
        this.paragraph = paragraph;
        this.paragraph.innerText = "0";
        this.input1 = input1;
        this.input1.disabled = true;
        this.input2 = input2;
        this.input2.disabled = true;
        this.paragraph2 = paragraph2;
        this.input3 = input3;
        this.input4 = input4;
        this.input5 = input5;
        this.input6 = input6;
       }

    public Init() {

        fromEvent(this.button2, 'click')
            .pipe()
                .subscribe(() => {
                    this.input1.disabled = !this.input1.disabled;
            })


        fromEvent(this.button3, 'click')
            .pipe()
                .subscribe(() => {
                    this.input2.disabled = !this.input2.disabled;   
            }) 

        fromEvent(this.button1, 'click')
            .pipe(
            mapTo(1))
             .pipe(
                scan((acc, one) => acc + one, 0))
                    .pipe(
                        take(5))
                        .subscribe( x => {
                            this.paragraph.innerText = x.toString()

                            if(!this.input1.disabled){
                                this.input1.value = x.toString() 
                            }

                            if(!this.input2.disabled)
                            this.input2.value = x.toString() 
                            }

                        );
                    
                
        // combineLatest is deprecated
        fromEvent(this.input3, 'keyup')
                .pipe()
                    .subscribe( () => {
                        if(isNaN(+this.input4.value)){
                            this.paragraph2.innerText = this.input3.value.toString();
                        } else {
                            if (this.input3.value.length > +this.input4.value) {
                                this.paragraph2.innerText = this.input3.value.toString();
                            }
                        }
                })

    }
}