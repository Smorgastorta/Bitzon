import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientiComponent } from './clienti.component';
import { ClientiService } from '../services/clienti.service';
import { OrdiniClienteComponent } from './ordini-cliente/ordini-cliente.component';
import { ClientiRoutingModule } from './clienti-routing/clienti-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientiComponent,
    OrdiniClienteComponent
  ],
  imports: [
    CommonModule,
    ClientiRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    ClientiService
  ]
})
export class ClientiModule { }
