export default class Komentarz {
  private _tresc: string;

  private _odpowiedzi: Komentarz;
  private _nick: string;
  private _data: Date;

  get tresc(): string {
    return this._tresc;
  }
  set tresc(value: string) {
    this._tresc = value;
  }
  get data(): Date {
    return this._data;
  }
  set data(value: Date) {
    this._data = value;
  }
  get nick(): string {
    return this._nick;
  }
  set nick(value: string) {
    this._nick = value;
  }

  constructor(tresc: string, nick: string) {}

  dodajOdpowiedz(odpowiedz: Komentarz): void {}

  pobierzOdpowiedzi(): Komentarz {
    return;
  }
}
