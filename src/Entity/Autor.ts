class Autor {
    private _id: number; 
    private _imie: string; 
    private _nazwisko: string; 
    private _email: string;

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    get imie(){return this._imie}
    set imie(imie: string){
        this._imie = imie;
    }

    get nazwisko(){return this._nazwisko}
    set nazwisko(nazwisko: string){
        this._nazwisko = nazwisko;
    }

   get email(){return this._email}
   set email(email: string){
       this._email = email;
   } 

   constructor(id:number, imie:string, nazwisko:string, email: string) {
    this._id = id;
    if(!imie) throw new Error("Imie jest wymagane");
    this._imie = imie;
    if(!nazwisko) throw new Error("Nazwisko jest wymagane");
    this._nazwisko = nazwisko;
    if(!email && !this.validateEmail(email)) throw new Error("Nazwisko jest wymagane");
    this._email = email;
    
    }
}