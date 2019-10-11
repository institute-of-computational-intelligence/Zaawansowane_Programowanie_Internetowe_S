class Komentarz{
    private _tresc:string;
    private _data:Date;
    private _odpowiedzi:Komentarz[]
    private _nick:string;

    constructor(tresc:string, nick:string){
        this._tresc = tresc;
        this._nick = nick;
    }

    get tresc():string {return this._tresc}
    set tresc(wartosc:string) {this._tresc = wartosc}

    get data():Date {return this._data}
    set data(wartosc:Date) {this._data = wartosc}

    get nick():string {return this._nick}
    set nick(wartosc:string) {this._nick = wartosc}

    dodajOdpowiedz(odpowiedz:Komentarz):void{}
    pobierzOdpowiedzi():Komentarz[]{
        return ;
    }
}