class Artykul {
    private _id: number;
    private _tytul: string;
    private _tresc: string;
    private _dataUtworzenia: Date;
    private _komentarze: Komentarz[];

    get tytul(): string { return this._tytul; }
    set tytul(wartosc: string) { this._tytul = wartosc; }
    get tresc(): string { return this._tresc; }
    set tresc(wartosc: string) { this._tresc = wartosc; }

    constructor(tytul: string, tresc: string) {
        if(tytul && tytul != '' && this._dataUtworzenia) {
            this._tytul = tytul;
            this._tresc = tresc;
        } else {
            console.log('Niepoprawne dane artykulu');
        }
    }

    dodajKomentarz(komentarz: Komentarz): void {
        this._komentarze.push(komentarz);
    }

    pobierzKomentarze(): Komentarz[] {
        return this._komentarze;
    }

}