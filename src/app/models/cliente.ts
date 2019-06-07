export class Cliente {
  static id = 0;
  id: number;
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  indirizzo: string;
  constructor(nome?: string, cognome?: string, email?: string, indirizzo?: string, telefono?: string) {
    this.id = Cliente.id++;
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.indirizzo = indirizzo;
    this.telefono = telefono;
  }
}
