export class Autor {
    private _id: number;
    private _imie: string;
    private _nazwisko: string;
    private _email: string;
    
    
    public get imie() : string {
        return this._imie
    }
    
    public set imie(v : string) {
        this._imie = v;
    }

    public get nazwisko() : string {
        return this._nazwisko
    }
    
    public set nazwisko(v : string) {
        this._nazwisko = v;
    }

    public get email() : string {
        return this._email
    }
    
    public set email(v : string) {
        this._email = v;
    }
    
    
    constructor(imie:string,nazwisko:string,email:string) {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(re.test(email)){
            this._imie = imie;
            this._nazwisko = nazwisko;   
            this._email = email;
            
        }
        else {
            throw new Error("Email jest wymagany.");
        }
    }
}