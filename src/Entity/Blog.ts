class Blog {
    private _id: number;
    private _nazwa: string;
    private _autor: Autor;
    private _artykuly: Artykul[];

    get nazwa(){ return this._nazwa}
    set nazwa(nazwa: string){
        this._nazwa = nazwa;
    }

    get autor(){ return this._autor}
    set autor(autor: Autor){
        this._autor = autor;
    }

    constructor(id: number, nazwa:string, autor: Autor){
        this._nazwa = nazwa;
        this._autor = autor;
    }

    // dodajArtykul(artykul:Artykul) {
        
    // }

    // pobierzTytulyArtykulow(tytulyArtykulow:string[]) {
        
    // }

    // pobierzArtykuly(tytul:string) {
        
    // }
}