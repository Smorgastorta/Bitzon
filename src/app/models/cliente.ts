export class Cliente {
  id: number;
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  indirizzo: string;
  constructor(nome = '', cognome = '', email = '', indirizzo = '', telefono = '') {
    this.id = -1;
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.indirizzo = indirizzo;
    this.telefono = telefono;
  }
}
