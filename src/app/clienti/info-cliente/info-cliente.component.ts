import { Component, OnInit } from '@angular/core';
import { ClientiService } from 'src/app/services/clienti.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info-cliente',
  templateUrl: './info-cliente.component.html',
  styleUrls: ['./info-cliente.component.css']
})
export class InfoClienteComponent implements OnInit {
  cliente = new Cliente();
  form: FormGroup;
  salvato = false;
  ngOnInit(): void {
  }
  constructor(private service: ClientiService, formBuilder: FormBuilder, route: ActivatedRoute, private router: Router) {
    this.form = new FormGroup({
      nome: new FormControl(),
      cognome: new FormControl(),
      email: new FormControl(),
      indirizzo: new FormControl(),
      telefono: new FormControl(),
    });
    if (route.snapshot.paramMap.get('id')) {
      this.service.getCliente(Number(route.snapshot.paramMap.get('id'))).subscribe(data => {
        this.cliente = data;
        this.form = formBuilder.group({
          nome: this.cliente.nome,
          cognome: this.cliente.cognome,
          email: this.cliente.email,
          indirizzo: this.cliente.indirizzo,
          telefono: this.cliente.telefono,
        });
      });
    } else {
      this.cliente = new Cliente();
      this.cliente.id = undefined;
    }
  }
  onSalva() {
    Object.assign(this.cliente, this.form.value);
    if (this.cliente.id === undefined) {
      this.service.postCliente(this.cliente).subscribe(data => console.log(data));

    }else{
      this.service.putCliente(this.cliente).subscribe(data => console.log(data));
    }
    this.salvato = true;
    this.router.navigate(['/clienti']);
  }
  onChiudi() {
    this.router.navigate(['/clienti']);
  }



}
