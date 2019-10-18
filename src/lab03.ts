class FabrykaUslugPobierania {
  public Stworz(nazwa: string) : IUslugaPobieraniaAutorow {
    switch(nazwa) {
      case 'tabelaHTML': return new PobieranieAutorowTabelaHTML(); break;
      case 'listaHTML': return new PobieranieAutorowListaHTML(); break;
      case 'json': return new PobieranieAutorowJSON(); break;
    }
    throw new Error("Zly typ pliku");
  }
}

interface IUslugaPobieraniaAutorow {
  pobierz(nazwaPliku, dane: Autor[]);
}

class PobieranieAutorowTabelaHTML implements IUslugaPobieraniaAutorow{
  pobierz(nazwaPliku, dane: Autor[]) {

  }
}

class PobieranieAutorowListaHTML implements IUslugaPobieraniaAutorow {
  pobierz(nazwaPliku, dane: Autor[]) {

  }
}

class PobieranieAutorowJSON implements IUslugaPobieraniaAutorow {
  pobierz(nazwaPliku, dane: Autor[]) {

  }
}

