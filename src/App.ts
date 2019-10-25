import {fromEvent, Subscription} from 'rxjs';
import {take, tap, scan, map} from 'rxjs/operators';

export class App{
    subscribed: boolean;
    clickCount:number;
    button: HTMLButtonElement;
    button2:HTMLButtonElement;
    button3:HTMLButtonElement;
    paragraph: HTMLParagraphElement;
    sub: Subscription;
    constructor(button: HTMLButtonElement, button2:HTMLButtonElement, button3:HTMLButtonElement, paragraph: HTMLParagraphElement ){
        this.button=button;
        this.button2=button2;
        this.button3=button3;
        this.paragraph=paragraph;
        this.clickCount=0;
        this.paragraph.innerText = this.clickCount.toString();
    }

    anuluj(){
        this.sub.unsubscribe;
    }

    public Init(): void{
        fromEvent(this.button, 'click')
        .pipe(
//         take(5), //zadanie 9
            tap(c=> {
                this.clickCount++;
                this.paragraph.innerHTML = this.clickCount.toString()
            }) //zadanie 7 

        ).subscribe();

        fromEvent(this.button2, 'click')// odblokowanie subskrypcji
            
        fromEvent(this.button3, 'click') // blokowanie subskrypcji

    
    }



}