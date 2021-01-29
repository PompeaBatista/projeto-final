import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) { }

  getCliente(id: number): Observable<any> {
    return this.http.get(`${this.url}/find/${id}`);
  }

  createClientes(Cliente: Object): Observable<Object> {
    return this.http.post(`${this.url}/add`, this.createClientes);
  }

  updateCliente(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.url}/update/${id}`, value);
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete(`${this.url}/delete/${id}`, { responseType: 'text' });
  }

  getClientesLista(): Observable<any> {
    return this.http.get(`${this.url}/all`);
  }
}