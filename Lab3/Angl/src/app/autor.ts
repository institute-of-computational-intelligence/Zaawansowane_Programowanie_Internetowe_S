export class Autor
{
  
    private _id:number;
    private _imie:string;
    private _nazwisko:string;
    private _email:string;


    public get id() {return this._id;}
    public get imie() {return this._imie;}
    public get nazwisko() {return this._nazwisko;}
    public get email() {return this._email;}

    public constructor(id:number, imie:string, nazwisko:string, email:string)
    {
        this._id = id;
        this._imie = imie;
        this._nazwisko = nazwisko;
        this._email = email;
    }

    static stworz(id:number, imie:string, nazwisko:string, email:string): Autor {
        
        return new Autor(id, imie, nazwisko, email);

        throw new Error("Method not implemented.");
      }
}