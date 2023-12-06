import { Component } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent {
  usuario = {
    nome: '',
    email: '',
    senha: ''
  };

  mensagem: string = '';
  classeMensagem: string = '';

  submitForm() {
    if (this.usuario.nome && this.usuario.email && this.usuario.senha) {
      // Todos os campos estão preenchidos
      this.mensagem = `Olá, ${this.usuario.nome}! Cadastro realizado com sucesso.`;
      this.classeMensagem = 'verde';
    } else {
      // Campos não preenchidos
      this.mensagem = 'Olá, por favor, informe todos os campos corretamente.';
      this.classeMensagem = 'vermelho';
    }
  }
}