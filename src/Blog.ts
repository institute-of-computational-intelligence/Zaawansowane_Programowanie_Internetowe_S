class Blog {
    private _id: number;
    private _nazwa: string;
    private _autor: Autor;
    private _artykuly: Artykul[];


    public get nazwa(): string {
        return this._nazwa;
    }

    public set nazwa(nazwa:string){
        this._nazwa = nazwa;
    }

    public get autor():Autor{
        return this._autor;
    }

    public set autor(autor: Autor) {
        this._autor = autor;
    }


    constructor(nazwa: string, autor: Autor) {
        if(!nazwa){
            throw new Error("pole nazwa jest obowiazkowe")
        }
        this._nazwa = nazwa;
        if (!autor) {
            throw new Error("Pole autor musi być podane");
            
        }
        this._autor = autor;
    }

    public dodajArtykul(artykul: Artykul): void {
        this._artykuly.push(artykul)
    }

    public pobierzTytulyArtykulow(): string[] {
        if(this._artykuly.length > 0)
        {
            var tytuly = new Array<string>();
            this._artykuly.forEach(element => {
                tytuly.push(element.tytul);
            });
            return tytuly;
        }
        return null;
    }
    

    public pobierzArtykul(tytul: string) {
        return this._artykuly[tytul];
    }
}