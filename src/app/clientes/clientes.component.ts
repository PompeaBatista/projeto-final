import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router, ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  //id: Number;
  clientes: Cliente[];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientesLista();
  }
  getClientesLista(): void {
    this.clienteService.getClientesLista()
      .subscribe(clientes => this.clientes = clientes);
  }
  add(nome:string): void {
    nome = nome.trim();
    if(!nome) {
      return;
    }
    this.clienteService.createClientes({ nome } as unknown as Cliente)
    .subscribe(cliente => {
      this.clientes.push();
    });
  }
}

