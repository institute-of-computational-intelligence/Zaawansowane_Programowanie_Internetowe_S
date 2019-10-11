class Autor {

    private _id: number;
    private _imie: string;
    private _nazwisko: string;
    private _email: string;

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    constructor(imie: string, nazwisko: string, email: string) {
        if (!imie) {
            throw new Error("imie jest wymagane")
        }
        this._imie = imie;
        if (!nazwisko) {
            throw new Error("nazwisko jest wymagane")
        }
        this._nazwisko = nazwisko;
        if (!email) {
            throw new Error("email jest wymangay")
        }
        else if(!this.validateEmail(email)){
            throw new Error("email jest niezgodny ze schematem")
        }
        this._email = email;
    }


    /**
     * Getter imie
     * @return {string}
     */
    public get imie(): string {
        return this._imie;
    }

    /**
     * Setter imie
     * @param {string} value
     */
    public set imie(value: string) {
        this._imie = value;
    }


    /**
     * Getter nazwisko
     * @return {string}
     */
    public get nazwisko(): string {
        return this._nazwisko;
    }

    /**
     * Setter nazwisko
     * @param {string} value
     */
    public set nazwisko(value: string) {
        this._nazwisko = value;
    }


    /**
     * Getter email
     * @return {string}
     */
    public get email(): string {
        return this._email;
    }

    /**
     * Setter email
     * @param {string} value
     */
    public set email(value: string) {
        this._email = value;
    }


}