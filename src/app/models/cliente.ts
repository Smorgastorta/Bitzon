export class Cliente {
  id: number;
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  indirizzo: string;
  constructor(nome?: string, cognome?: string, email?: string, indirizzo?: string, telefono?: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.indirizzo = indirizzo;
    this.telefono = telefono;
  }
}
