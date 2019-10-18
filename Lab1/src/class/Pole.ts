export class Pole{
   
    private value:number;
    private _pole:HTMLInputElement;
    private _minus:HTMLButtonElement;
    private _plus:HTMLButtonElement;
    constructor(){
        this.value = 0;
        this.generateClass();
    }
    public generateClass():void{
     this.generateInput();
     this.generateButtons();
     this.refresh();
       
    }

    public generateInput(){
        this._pole = document.createElement('input');
        document.querySelector('body').appendChild(this._pole);

    }
    public generateButtons(){
        this._plus = document.createElement('button');
        this._plus.innerText = "+";
        document.querySelector('body').appendChild(this._plus);

        this._minus = document.createElement('button');
        this._minus.innerText = "-";
        document.querySelector('body').appendChild(this._minus);
        
        this._plus.addEventListener("click",(e:Event)=>this.addValue())
        this._minus.addEventListener("click",(e:Event)=>this.subtractValue())
    }

    public addValue(){
        this.value += 1;
        this.refresh();
    }
    public subtractValue(){
        this.value -= 1;
        this.refresh();
    }

    public refresh(){
    this._pole.value = this.value.toString();
    }
    

}