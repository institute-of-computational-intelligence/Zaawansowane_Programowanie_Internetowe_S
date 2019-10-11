class Blog{
    private _id : number;
    private _nazwa : string;
    private _autor : Autor;
    private _artykuly : Artykul[]

    constructor(nazwa:string, autor:Autor){
        this._autor = autor;
        this._nazwa = nazwa;
    }

    get nazwa():string{return this._nazwa}
    set nazwa(wartosc:string){this.nazwa = wartosc}

    get Autor():Autor{return this.Autor}
    set Autor(wartosc:Autor){this.Autor = wartosc}

    dodajArtykul(artykul:Artykul):void{}
    pobierzTytulArtykulowi():string[]{return}
    pobierzArtykul(tytul:string){return}
}