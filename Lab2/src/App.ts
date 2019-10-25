import { fromEvent } from 'rxjs';
import { tap, map, scan } from 'rxjs/operators';

export class App {
    clickCount: number;
    button: HTMLButtonElement;
    paragraph: HTMLParagraphElement
    constructor(button: HTMLButtonElement, paragraph: HTMLParagraphElement) {
        this.button = button;
        this.paragraph = paragraph;
        this.clickCount = 0;
        this.paragraph.innerText = "0"
    }

    public Init(): void {
        fromEvent(this.button, 'click')
            .pipe(
                /*tap(c => map(c => parseInt().toString()){
                    this.paragraph.innerText = this.clickCount.toString()
                })*/
            ).subscribe();
    }
}