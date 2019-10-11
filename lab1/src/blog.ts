class Blog{
    private _id:number;
    private _nazwa:string;
    private _autor:Autor;
    private _artykuly :Artykul[];

    get nazwa():string {return this._nazwa}
    set nazwa(wartosc:string){this._nazwa=wartosc;}

    get autor():Autor {return this._autor}
    set autor(wartosc:Autor) {this._autor=wartosc;}

    constructor(nazwa:string, autor:Autor){
        if(!nazwa || !autor){
            throw new Error("Uzupelnij pole nazwa i/lub autor");
        }
        this._nazwa = nazwa;
        this._autor = autor;
    }

    dodajArtykul(artykul:Artykul):void{}
    pobierzTytulArtykulow():string[]{
        return  this._artykuly.map(art=> art.tytul);

        // let tytyluArtykulow: string[]= [];
        // for(let artykul of this._artykuly){
        //     tytyluArtykulow.push(artykul.tytul);
        // }
        // return tytyluArtykulow;
    }
    pobierzArtykul(tytul:string){
        return this._artykuly;
    }
}