
import { ClientesComponent } from '../clientes/clientes.component';
import { Observable } from "rxjs";
import { ClienteService } from "../cliente.service";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-lista-de-clientes",
  templateUrl: "./lista-de-clientes.component.html",
  styleUrls: ["./lista-de-clientes.component.css"]
})
export class ClientesListaComponent implements OnInit {
  clientes: Observable<ClientesComponent[]>;

  constructor(private clientesService: ClienteService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.clientes = this.clientesService.getClientesLista();
  }

  deleteClientes(id: number) {
    this.clientesService.deleteCliente(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  clientesLista(id: number){
    this.router.navigate(['all', id]);
  }
}
