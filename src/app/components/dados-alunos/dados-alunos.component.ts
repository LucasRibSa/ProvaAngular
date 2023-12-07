import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../aluno.service';


@Component({
  selector: 'app-dados-alunos',
  templateUrl: './dados-alunos.component.html',
  styleUrls: ['./dados-alunos.component.css']
})
export class DadosAlunosComponent implements OnInit {
  alunos: any;

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.alunoService.getAlunos().subscribe(data => {
      this.alunos = data;
    });
  }

  calcularMediaGlobal(rendimentoEscolar: any): number {
    const notas = Object.values(rendimentoEscolar);
    const somaNotas = notas.reduce((acc: number, nota: unknown) => acc + Number(nota), 0);
    return somaNotas / notas.length;
  }
}