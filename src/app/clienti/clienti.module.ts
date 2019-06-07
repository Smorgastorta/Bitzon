import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientiComponent } from './clienti.component';
import { ClientiService } from '../services/clienti.service';
import { OrdiniClienteComponent } from './ordini-cliente/ordini-cliente.component';

@NgModule({
  declarations: [
    ClientiComponent,
    OrdiniClienteComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    ClientiService
  ]
})
export class ClientiModule { }
