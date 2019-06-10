import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  constructor(private http: HttpClient) {
  }
  getClienti(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:3000/Clienti');
  }
  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`http://localhost:3000/Clienti/${id}`);
  }
  putCliente(cliente: Cliente): Observable<Cliente> {
    console.log(cliente);
    return this.http.put<Cliente>(`http://localhost:3000/Clienti/${cliente.id}`, cliente);
  }
  postCliente(cliente: Cliente): Observable<Cliente> {
    console.log(cliente);
    return this.http.post<Cliente>(`http://localhost:3000/Clienti`, cliente);
  }
  deleteCliente(cliente: Cliente): Observable<Cliente> {
    console.log(cliente);
    let result = this.http.delete<Cliente>(`http://localhost:3000/Clienti/${cliente.id}`);
    console.log(result);
    return result;
  }
}
