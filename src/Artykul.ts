class Artykul {
    private _id: number;
    private _tytul: string;
    private _tresc: string;
    private _dataUtworzenia: Date;
    private _komentarze: Komentarz[];

    public get tytul(): string {
        return this._tytul;
    }

    public set tytul(tytul: string) {
        this._tytul = tytul;
    }

    public get tresc(): string {
        return this._tresc
    }

    public set tresc(tresc: string) {
        this._tresc = tresc;
    }

    constructor(tytul: string, tresc: string) {
        if (!tytul) {
            throw new Error("Pole tytul jest obowiazkowe");
        }
        this._tytul = tytul;
        this._tresc = tresc;
        this._dataUtworzenia = new Date(Date.now());
    }

    public dodajKomentarz(komentarz: Komentarz): void {

        this._komentarze.push(komentarz);

    }
    public pobierzKomentarze(): Komentarz[] {
        return this._komentarze;
    }

}