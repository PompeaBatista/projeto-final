import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ClientesListaComponent } from './lista-de-clientes/lista-de-clientes.component';



const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: ClientesListaComponent },
  { path: 'add', component: NovoClienteComponent},
  { path: 'update/:id', component: CadastroClienteComponent  },
  { path: 'detalhes/:id', component: ClientesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
