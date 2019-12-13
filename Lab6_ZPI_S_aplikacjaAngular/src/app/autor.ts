export class Autor
{
    private _id:number;
    private _imie:string;
    private _nazwisko:string;
    private _email:string;

    public get id() {return this._id;}
    public set id(id:number) {this._id = id;}
    public get imie() {return this._imie;}
    public get nazwisko() {return this._nazwisko;}
    public get email() {return this._email;}

    private constructor(id:number, imie:string, nazwisko:string, email:string)
    {
        this._id = id;

        this._imie = imie;
        this._nazwisko = nazwisko;
        this._email = email;
    }

    public static stworz(id:number, imie:string, nazwisko:string, email:string)
    {
        if(imie == undefined || imie == null || imie.trim().length===0)
            throw new Error("Imie nie może być puste");
        if(nazwisko == undefined || nazwisko == null || nazwisko.trim().length===0)
            throw new Error("Nazwisko nie może być puste");
        const regEx : RegExp = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
        if(!regEx.test(email))
            throw new Error("Musisz podać poprawny adres email");

        return new Autor(id, imie, nazwisko, email);
    }
}