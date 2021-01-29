import { ClienteService } from '../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {

  clientes: Cliente;
  submitted = false;

  constructor(private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit() {
  }

  // newClientes(): void {
  //   this.submitted = false;
  //   this.clientes = new Cliente();
  // }

  add() {
    this.clienteService
    .createClientes(this.clientes).subscribe(data => {
      console.log(data)
      //this.clientes = new Clientes();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.add();
  }

  gotoList() {
    this.router.navigate(['/clientes']);
  }
}

