import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  constructor(private http: HttpClient)  {
   }
  getClienti(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:3000/Clienti');

  }
}
