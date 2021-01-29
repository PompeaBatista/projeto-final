import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  id: number;
  clientes: Cliente;

  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private clientesService: ClienteService) { }

  ngOnInit() {
    //cliente = {}

    this.id = this.route.snapshot.params['id'];

    this.clientesService.getCliente(this.id)
      .subscribe(data => {
        console.log(data)
        this.clientes = data;

      }, error => console.log(error));
  }

  updateClientes() {
    this.clientesService.updateCliente(this.id, this.clientes)
      .subscribe(data => {
        console.log(data);
        //this.clientes = new Cliente();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateClientes();
  }

  gotoList() {
    this.router.navigate(['/clientes']);
  }
}

