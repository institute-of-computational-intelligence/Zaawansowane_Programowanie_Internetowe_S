class Blog {
    private _id:number;
    private _nazwa:string;
    private _autor:Autor;
    private _artykuly:Artykul[];

    constructor(nazwa:string, autor:Autor) {
        if(!nazwa || 0 === nazwa.length) {
            return
        }
        this._nazwa = nazwa
        this._autor = autor
    }

    dodajArtykul(artykul:Artykul):void {
        this._artykuly.push(artykul);
    }
 
    pobierzTytulyArtykulow():string[] {
        let tablicaTytulow:string[]
        for (let artykul of this._artykuly) {
            tablicaTytulow.push(artykul.tresc)
        }
        return tablicaTytulow;
    }

    pobierzArtykul(tytul:string):string {
        for (let artykul of this._artykuly) {
            if(tytul === artykul.tytul) {
                return artykul.tresc;
            }
        }
    }

    get nazwa():string {return this._nazwa;}
    get autor():Autor {return this._autor;}

}

class Autor {
    private _id:number;
    private _imie:string;
    private _nazwisko:string;
    private _email:string;

    constructor(imie:string, nazwisko:string) {
        if(!imie || 0 === imie.length || !nazwisko || 0 === nazwisko.length)
        {
            console.log("imie or nazwisko cannot be empty");
            return
        }
        this._imie = imie
        this._nazwisko = nazwisko
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    get imie():string {return this._imie;}
    get nazwisko():string {return this._nazwisko;}
    get email():string {return this._email;}
}

class Artykul {
    private _id:number;
    private _tytul:string;
    private _tresc:string;
    private _dataUtworzenia:Date;
    private _komentarze:Komentarz[]

    constructor(tytul:string, tresc:string) {
        this._tytul = tytul
        this._tresc = tresc
    }

    dodajKomentarz(komentarz:Komentarz):void {
        this._komentarze.push(komentarz);
    }

    pobierzKomentarze():Komentarz[]{
        return this._komentarze;
    }

    get tytul():string {return this._tytul;}
    get tresc():string {return this._tresc;}
}

class Komentarz {
    private _tresc:string;
    private _data:Date;
    private _odpowiedzi:Komentarz[];
    private _nick:string;

    constructor(tresc:string, nick:string) {
        this._tresc = tresc
        this._nick = nick
    }

    dodajOdpowiedz(odpowiedz:Komentarz):void {
        this._odpowiedzi.push(odpowiedz);
    }

    pobierzOdpowiedzi():Komentarz[] {
        return this._odpowiedzi;
    }

    get tresc():string {return this._tresc;}
    get data():Date {return this._data;}
    get nick():string {return this._nick;}
}

function hello() {
    console.log("Witaj w swiecie typescript");
}
hello();