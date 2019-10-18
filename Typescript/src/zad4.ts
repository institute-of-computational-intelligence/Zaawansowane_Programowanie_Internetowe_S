export class zad4{
    private count:number;

    constructor(){
        this.count = 0;
        var b1 = document.getElementById("button1");
        b1.addEventListener('click',() => this.add());
        var b2 = document.getElementById("button2");
        b2.addEventListener('click',() => this.sub());
    }

    add():void{
        this.count ++;
        this.setValue();
    }

    sub():void{
        this.count --;
        this.setValue();
    }

    setValue(): void{
        var input = document.getElementById("num") as HTMLInputElement;
        input.value = this.count.toString();
    }
}