import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
export class App {
    constructor(button, paragraph) {
        this.button = button;
        this.paragraph = paragraph;
        this.clickCount = 0;
        this.paragraph.innerText = this.clickCount.toString();
    }
    Init() {
        fromEvent(this.button, 'click')
            .pipe(tap(c => {
            this.clickCount++;
            this.paragraph.innerText = this.clickCount.toString();
        })).subscribe();
    }
}
