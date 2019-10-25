class Komentarz{
    private _tresc: string;
    private _data:Date;
    private _odpowiedzi: Komentarz[];
    private _nick: string;

    get tresc(): string {return this._tresc;}
    get data():Date {return this._data;}
    public nick(): string {return this._nick}

    constructor(tresc:string, nick:string){
        this._tresc = tresc;
        this._nick = nick;
    }

  /*  dodajOdpowiedz(odpowiedz:Komentarz): void {
        let odp = 
    }
*/
    pobierzOdpowiedz(): Komentarz[] {
        this._odpowiedzi.map(x=> x._odpowiedzi);
        return this._odpowiedzi;
    }
}