export default class Autor {
  private _id: number;
  private _imie: string;
  private _nazwisko: string;
  private _email: string;

  get imie_1(): string {
    return this._imie;
  }
  set imie_1(value: string) {
    this._imie = value;
  }
  get nazwisko(): string {
    return this._nazwisko;
  }
  set nazwisko(value: string) {
    this._nazwisko = value;
  }
  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }

  constructor(imie: string, nazwisko: string) {
    if (!imie || !nazwisko) {
      throw new Error('Imię lub nazwisko jest puste');
    }
    this._imie = imie;
    this._nazwisko = nazwisko;
  }

  validateEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
