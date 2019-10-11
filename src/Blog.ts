class Blog {
    private _id:number;
    private _nazwa:string;
    private _autor: Autor;
    private _artykuly: Artykul[];

    get nazwa(): string {return this._nazwa;}
    public autor():Autor {return this._autor;}

     constructor(nazwa:string, autor: Autor) {
         this._nazwa = nazwa;
         this._autor = autor;
     }

     dodajArtykul(artykul: Artykul): void {}

     pobierzTytulyArtykulow(): string[] {
        var art =  this._artykuly.map(a => a.tytul);
        return art ;
     }

     pobierzArtykuly(tytul:string) {}
}