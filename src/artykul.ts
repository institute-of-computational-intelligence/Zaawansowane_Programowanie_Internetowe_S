class Artykul {
    private _id:number;
    private _tytul:string;
    private _tresc:string;
    private _dataUtworzenia: Date;
    private _komentarze:Komentarz[];
     
    get tytul(): string { return this._tytul }
    set tytul(wartosc:string) {this._tytul = wartosc; }

    get tresc(): string { return this._tresc }
    set tresc(wartosc:string) {this._tresc = wartosc; }

    constructor(tytul:string, tresc:string){
        this._tytul = tytul;
        this._tresc = tresc;
    }

    dodajKomentarz(komentarz:Komentarz):void {
    }

    pobierzKomentarze():Komentarz[]{
        return this._komentarze;
    }
}