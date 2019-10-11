import Komentarz from './Komentarz';

export default class Artykul {
  private _id: number;
  private _tytul: string;
  private _dataUtworzenia: Date;
  private _komentarze: Komentarz;
  private _tresc: string;

  get tytul(): string {
    return this._tytul;
  }
  set tytul(value: string) {
    this._tytul = value;
  }
  get tresc(): string {
    return this._tresc;
  }
  set tresc(value: string) {
    this._tresc = value;
  }

  constructor(tytul: string, tresc: string) {
    if (!tytul) {
      throw new Error('Tytuł nie może być pusty');
    }
    // const date = Date(Date.now());
  }

  dodajKomentarz(komentarz: Komentarz): void {}

  pobierzKomentarze(): Komentarz {
    return;
  }
}
