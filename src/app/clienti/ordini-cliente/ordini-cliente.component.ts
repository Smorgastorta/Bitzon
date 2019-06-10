import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ActivatedRoute } from '@angular/router';
import { ClientiService } from 'src/app/services/clienti.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ordini-cliente',
  templateUrl: './ordini-cliente.component.html',
  styleUrls: ['./ordini-cliente.component.css']
})
export class OrdiniClienteComponent implements OnInit {

  cliente: Cliente;
  flag = false;
  constructor(private route: ActivatedRoute, private service: ClientiService, formBuilder: FormBuilder) {
    this.service.getCliente(Number(this.route.snapshot.paramMap.get('id'))).subscribe(data => this.cliente = data);
  }

  ngOnInit() {
  }
  onSalva(cliente: Cliente) {
    const id = this.cliente.id;
    this.cliente = cliente;
    this.cliente.id = id;
    this.service.putCliente(this.cliente).subscribe();
    this.flag = true;
  }

}
