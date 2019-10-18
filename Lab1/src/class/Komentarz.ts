class Komentarz {
    private _tresc: string;
    private _data: Date;
    private _odpowiedzi: Komentarz[];
    private _nick: string;

    
    public get tresc() : string {
        return this._tresc;
    }
    
    public set tresc(v : string) {
        this._tresc = v;
    }
    
    public get data() : Date {
        return this._data;
    }
    
    public set data(v : Date) {
        this._data = v;
    }

    public get nick() : string {
        return this._nick;
    }
    
    public set nick(v : string) {
        this._nick = v;
    }
    

    constructor(tresc:string,nick:string) {
    this._tresc = tresc;
    this._nick = nick;
    this._odpowiedzi = [];
        
    }

    dodajOdpowiedzi(odpowiedz:Komentarz):void{
        this._odpowiedzi.push(odpowiedz);
    }
    pobierzOdpowiedzi():Komentarz[]{
        return this._odpowiedzi;
    }

}