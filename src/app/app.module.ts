import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ClientesListaComponent } from './lista-de-clientes/lista-de-clientes.component';
//import {MatToolbarModule} from '@angular/material/toolbar';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    NovoClienteComponent,
    CadastroClienteComponent,
    ClientesListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //MatToolbarModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
