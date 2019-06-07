import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {
  listaClienti: Cliente[];

  constructor(service: ClientiService) {
    service.getClienti().subscribe(data => this.listaClienti = data);
  }

  ngOnInit() {
  }

}
