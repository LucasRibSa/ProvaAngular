import { Component } from '@angular/core';
//Definindo interface do Item

export interface Item {
  name: string;               //Nome do item
  type: string;               //Tipo do item
  checked: boolean;           // Boolean para marcar se a atividade foi concluída ou não
}

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})

export class ListItemsComponent {
// Iniciando os Inputs vazios
  novoItem: string = '';
  novoTipo: string = '';
//Função para adicionar uma nota tarefa
  adicionarTarefa() {
    if (this.novoItem.trim() !== '' && this.novoTipo.trim() !== '') {
      // Método para adicionar novo item na lista
      this.itens.push({ name: this.novoItem, type: this.novoTipo, checked: false });

      // Limpar os inputs após adicionar o novo item
      this.novoItem = '';
      this.novoTipo = '';
    }
  }
  //função para remover o item
  removerItem(item: Item) {
    const index = this.itens.indexOf(item);
    if (index !== -1) {
      this.itens.splice(index, 1);
    }
  }

  //Adicionando um array de objeto
  itens: Item[] = [
    {name: 'arrumar a cama', type: 'tarefas', checked: false },
    {name: 'lavar a roupa', type: 'tarefas', checked: false },
    {name: 'fazer o amoço', type: 'tarefas', checked: false},
    {name: 'jogar bola', type: 'lazer', checked: false}
  ] 
  //função para marcar o item
  marcarItem(item: Item) {
    item.checked = !item.checked;
  }
}
