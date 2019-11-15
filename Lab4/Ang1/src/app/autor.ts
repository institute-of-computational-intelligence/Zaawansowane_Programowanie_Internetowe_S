export class Autor {
    private id:number;
    private imie:string;
    private nazwisko:string;
    private email:string;

   
    constructor(id:number, imie:string, nazwisko:string, email:string)
    {
        this.id = id;
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.email = email;
    }
    
    static stworz(id:number,imie:string,nazwisko:string,email:string):Autor{
        return new Autor(id,imie,nazwisko,email);
    }
}