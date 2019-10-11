class Blog {
    private _id:number;
    private _nazwa:string;
    private _autor:Autor;
    private _artykul:Artykul[];
     
    get nazwa(): string { return this._nazwa }
    set nazwa(wartosc:string) {this._nazwa = wartosc; }

    get autor(): Autor { return this._autor }
    set autor(wartosc:Autor) {this._autor = wartosc; }

    constructor(nazwa:string, autor:Autor){
        this._nazwa = nazwa;
        this._autor = autor;
    }

    dodajArtykul(artykul:Artykul):void {
    }

    pobierzTytulyArtykulow():string[]{
        // let tytuly:string[]=[];
        // this._artykul.forEach(tytuly.push(_artykul.tytul);
        // return tytuly;
        return  this._artykul.map(art=> art.tytul);
    }

    pobierzArtykul(tytul:string){
        return this._artykul;
    }
}