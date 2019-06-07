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

  cliente: Cliente = new Cliente('', '', '', '', '0');
  form: FormGroup;
  flag = false;
  constructor(private route: ActivatedRoute, private service: ClientiService, formBuilder: FormBuilder) {
    if (this.cliente.id > 0 || this.cliente.id != NaN) {

      this.service.getCliente(Number(this.route.snapshot.paramMap.get('id'))).subscribe(data => {
        this.cliente = data;
        this.form.setValue({
          nome: this.cliente.nome,
          cognome: this.cliente.cognome,
          indirizzo: this.cliente.indirizzo,
          email: this.cliente.email,
          telefono: this.cliente.telefono
        });
      });
    }

  }

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl(this.cliente.nome, Validators.required)
      , cognome: new FormControl(this.cliente.cognome, Validators.required)
      , email: new FormControl(this.cliente.email, Validators.required)
      , indirizzo: new FormControl(this.cliente.indirizzo, Validators.required)
      , telefono: new FormControl(this.cliente.telefono, Validators.required)
    });
  }
  onSalva() {
    const id = this.cliente.id;
    this.cliente = this.form.value as Cliente;
    this.cliente.id = id;
    this.service.putCliente(this.cliente).subscribe();
    this.flag = true;
  }

}
