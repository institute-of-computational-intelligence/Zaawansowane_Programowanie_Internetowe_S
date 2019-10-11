import Autor from './Autor';
import Artykul from './Artykul';

export default class Blog {
  private _id: string;
  private _nazwa: string;
  private _autor: Autor;

  private _artykuly: Artykul;

  get nazwa(): string {
    return this.nazwa;
  }
  set nazwa(wartosc: string) {
    this._nazwa = wartosc;
  }

  get autor(): Autor {
    return this._autor;
  }
  set autor(value: Autor) {
    this._autor = value;
  }

  constructor(nazwa: string, autor: Autor) {
    if (!nazwa) {
      throw new Error('Pole nazwa nie może być puste');
    }
    if (!autor) {
      throw new Error('Autor musi być podany');
    }

    this._nazwa = nazwa;
    this._autor = autor;
  }

  dodajArtykul(artykul: Artykul): void {
    return;
  }

  pobierzTytulyArtykulow(): string {
    return;
  }

  pobierzArtykul(tytul: string) {
    return;
  }
}
