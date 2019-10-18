import {Autor} from "./Autor"
class Blog {
    private _id: number;
    private _nazwa: string;
    private _autor: Autor;
    private _artykuly: Artykul[];
    constructor(nazwa: string, autor: Autor) {
        if(nazwa !== "" && autor != undefined){
        this._nazwa = nazwa;
        this._autor = autor;
        this._artykuly = [];
        }else{
            throw new Error("Sorry memory, ale nazwa i autor są wymagane.");
        }
    }

   
        
        public get nazwa() : string {
            return this._nazwa;
        }
        
        public set nazwa(v : string) {
            this._nazwa = v;
        }
        public get autor() : Autor {
            return this._autor;
        }
        
        public set autor(v : Autor) {
            this._autor = v;
        }
        
    dodajArtykul(artykul: Artykul): void {
        this._artykuly.push(artykul);
    }
    pobierzTytulyArtykulow(): string[] {
        var listaT:string[] = [];

        this._artykuly.forEach(e => {
            listaT.push(e.tytul);
            
        });

        return listaT;
    }
    pobierzArtykul(tytul: string):Artykul {
        // this._artykuly.forEach(e => {
        //     if(e.tytul == tytul) return e;
        // });
        // // return null;
   
        return this._artykuly.filter(e => e.tytul == tytul).pop(); 
         
    }
}