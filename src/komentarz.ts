class Komentarz {
    private _tresc: string;
    private _data: Date;
    private _odpowiedzi: Komentarz[];
    private _nick: string;

    get tresc(): string { return this._tresc; }
    set tresc(wartosc: string) { this._tresc = wartosc; }

    get data(): Date { return this._data; }
    set data(wartosc: Date) { this._data = wartosc; }

    get nick(): string { return this._nick; }
    set nick(wartosc: string) { this._nick = wartosc; }


    constructor(tresc: string, nick: string) {
        if(tresc && tresc != '' && nick && nick != '') {
            this._tresc = tresc;
            this._nick = nick;
        } else {
            console.log("Niepoprawne dane komentarza");
        }
    }

    dodajOdpowiedz(odpowiedz: Komentarz): void {
        this._odpowiedzi.push(odpowiedz);
    }

    pobierzOdpowiedzi(): Komentarz[] {
        return this._odpowiedzi
    }
}