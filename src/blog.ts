class Blog {
    private _id : number;
    private _nazwa : string;
    private _autor : Autor;
    private _artykuly : Artykul[]

    get nazwa() : string {return this._nazwa;}
    set nazwa(wartosc : string) {this._nazwa = wartosc; }

    get autor() : Autor {return this._autor;}
    set autor(wartosc : Autor) {this._autor = wartosc; }
    
    constructor(nazwa : string, autor : Autor){
        this._nazwa = nazwa;
        this._autor = autor;
    }

    dodajArtykul(artykul : Artykul) : void {
        this._artykuly.push(artykul);
    }

    pobierzTytulyArtykulow() : string[] {
        let tytuly : string[]
        this._artykuly.forEach(
            x => tytuly.push(x.tytul)
        )
        return tytuly;
    }

    pobierzArtykul(tytul : string) {
        return this._artykuly.filter(x => (x.tytul === tytul));
    }
}