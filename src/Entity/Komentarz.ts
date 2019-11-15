class Komentarz{
    private _tresc: string;
    private _data: Date; 
    private _odpowiedzi: Komentarz[];
    private _nick: string;

    get tresc(){ return this._tresc}
    set tresc(tresc: string){
        this._tresc = tresc;
    }

    get data(){ return this._data}
    set data(data: Date){
        this.data = data;
    }

    get nick(){return this._nick}
    set nick(nick: string){
         this._nick = nick;
    }

    constructor(tresc:string, nick:string) {
        this._tresc = tresc;
        this._nick = nick;
    }

    // function dodajOdpowiedz(odpowiedz:Komentarz) {
        
    // }

    // function pobierzOdpowiedzi():Komentarz() {
        
    // }

}