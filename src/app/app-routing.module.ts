import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosAlunosComponent } from './components/dados-alunos/dados-alunos.component';

const routes: Routes = [
  { path: 'dados-alunos', component: DadosAlunosComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
