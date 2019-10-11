
class Blog {
    private _id:number;
    private _nazwa: string;
    private _autor: Autor;
    private _artykul: Artykul[];

    get nazwa(): string { return this._nazwa; }
    set nazwa(wartosc:string ) { this._nazwa = wartosc; }

    get autor(): Autor { return this._autor; }
    set autor(wartosc:Autor ) { this._autor = wartosc; }

    constructor( nazwa:string, autor:Autor) {
        if(nazwa !== ''|| !autor) {
            this._nazwa = nazwa;
            this._autor = autor;
        }
        else {
            throw new Error("zła nazwa lub autor");
        }
    }

    dodajArtykul(artykul: Artykul): void {
        this._artykul.push(artykul);
    }

    pobierzTytulyArtykulow(): Array<string> {
        let tytuly = [];
        this._artykul.forEach( el => tytuly.push(el.tytul))
        return tytuly;
    }

    pobierzArtykul(tytul:string): Artykul {
        return this._artykul.find(el => el.tytul === tytul )
    }
}