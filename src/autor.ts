 class Autor {
    private _id:number;
    private _imie: string;
    private _nazwisko: string;
    private _email: string;

    get imie(): string { return this._imie; }
    set imie(wartosc:string ) { this._imie = wartosc; }

    get nazwisko(): string { return this._nazwisko; }
    set nazwisko(wartosc:string ) { this._nazwisko = wartosc; }

    get email(): string { return this._email; }
    set email(wartosc:string ) { this._email = wartosc; }

    constructor( imie:string, nazwisko:string, email:string) {
        if(!imie || !nazwisko || !email) {
            throw new Error("Zle imie i/lub nazwisko");
        }
        else {
            if(this.validateEmail(email)){
                this._imie = imie;
                this._nazwisko = nazwisko;
                this._email = email;      
            }           
        }        
    }

    validateEmail(email:string) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

