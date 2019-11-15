class Artykul{
    private _id: number; 
    private _tytul: string; 
    private _tresc: string; 
    private _dataUtworzenia: Date;
    private _komentarze: Komentarz[];

    get tytul(){ return this._tytul}
    set tytul(tytul:string)
    {
        this._tytul = tytul;
    }

    get tresc(){ return this._tresc}
    set tresc(tytul:string)
    {
        this._tresc = this.tresc;
    }

    constructor(tytul:string, tresc:string) {
        this._tytul = tytul;
        this._tresc = tresc;
    }

    // dodajKomentarz(komentarz:Komentarz) {
        
    // }

    // pobierzKomentarze(komentarze:Komentarz[]) {
        
    // }



}