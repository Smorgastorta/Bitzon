import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientiComponent } from '../clienti.component';
import { OrdiniClienteComponent } from '../ordini-cliente/ordini-cliente.component';

const routes: Routes = [
  { path: '', component: ClientiComponent },
  { path: ':id/ordini', component: OrdiniClienteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientiRoutingModule { }

