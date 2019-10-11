class Autor {
    private _id : number;
    private _imie : string;
    private _nazwisko : string;
    private _email : string;
    
    constructor(imie:string, nazwisko:string){
        this._imie = imie;
        this._nazwisko = nazwisko;
    }

    get imie():string {return this._imie}
    set imie(wartosc:string){this._imie = wartosc}

    get nazwisko():string {return this._nazwisko}
    set nazwisko(wartosc:string){this._nazwisko = wartosc}

    get email():string {return this._email}
    set email(wartosc:string){this._email = wartosc}
}