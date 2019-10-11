class Blog {
    private _id: number;
    private _nazwa: string;
    private _autor: Autor;
    private _article: Artykul[];

    get nazwa(): string { return this._nazwa; }
    set nazwa(wartosc: string) { this._nazwa = wartosc; }
    get autor(): Autor { return this._autor; }
    set autor(wartosc: Autor) { this._autor = wartosc; }

    constructor(nazwa: string, autor: Autor) {
        if(nazwa && nazwa != '' && autor && autor.imie != '' && autor.nazwisko != '' ) {
            this._nazwa = nazwa;
            this._autor = autor;
        } else {
            console.log('Niepoprawne dane bloga');
        }
    }

    dodajArtykul(artykul: Artykul): void {
        this._article.push(artykul);
    }

    pobierzTytulyArtykulow(): string[] {
        let artykuly = [];
        for(let artykul of this._article) {
            artykuly.push(artykul.tytul);
        }
        return artykuly;
    }

    pobierzArtykul(tytul: string) {
        for(let artykul of this._article) {
            if(artykul.tytul === tytul) {
                return artykul;
            }
        }
    }

}