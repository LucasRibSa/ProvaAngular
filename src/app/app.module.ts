import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { DadosAlunosComponent } from './components/dados-alunos/dados-alunos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { ContadorComponentComponent } from './components/contador-component/contador-component.component';



@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    DadosAlunosComponent
    FormCadastroComponent,
    ContadorComponentComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
