import { Component, OnInit, OnChanges } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit, OnChanges {
  listaClienti: Cliente[];
  nuovoCliente: Cliente;
  clienteSelezionato: Cliente;

  constructor(private service: ClientiService) {
    this.service.getClienti().subscribe(data => this.listaClienti = data);

  }
  ngOnChanges() {
    this.service.getClienti();

  }
  ngOnInit() {
  }
  onElimina(cliente: Cliente) {
    this.service.deleteCliente(cliente).subscribe(
      data => this.listaClienti.splice(this.listaClienti.findIndex(p => p.id == cliente.id), 1));
  }
  onNuovo(cliente: Cliente) {
    this.service.postCliente(cliente).subscribe(data => this.listaClienti.push(cliente));
  }
  onInfo(cliente: Cliente) {
    this.clienteSelezionato = cliente;
  }

}
