class Artykul {
    private _id:number;
    private _tytul:string;
    private _tresc:string;
    private _dataUtworzenia:Date;
    private _komentarze:Komentarz[];

    constructor(tytul:string,tresc:string) {
        if(tytul !== ""){
        this._tytul = tytul;
        this._tresc = tresc;
        this._komentarze = [];
        this._dataUtworzenia = new Date();
        }
    }
    
    public get tytul() : string {
        return this._tytul;
    }
    
    public set tytul(v : string) {
        this._tytul = v;
    }

    public get tresc() : string {
        return this._tresc;
    }
    
    public set tresc(v : string) {
        this._tresc = v;
    }

    dodajKomentarz(komentarz:Komentarz):void{
        this._komentarze.push(komentarz);
    }   

    pobierzKomentarze():Komentarz[]{
     return this._komentarze;
    } 
    

}