import { Component } from '@angular/core';


export interface Item {
  name: string;               
  type: string;               
  checked: boolean;           
}

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})

export class ListItemsComponent {
  novoItem: string = '';
  novoTipo: string = '';
  adicionarTarefa() {
    if (this.novoItem.trim() !== '' && this.novoTipo.trim() !== '') {
      this.itens.push({ name: this.novoItem, type: this.novoTipo, checked: false });

      this.novoItem = '';
      this.novoTipo = '';
    }
  }
  removerItem(item: Item) {
    const index = this.itens.indexOf(item);
    if (index !== -1) {
      this.itens.splice(index, 1);
    }
  }

  itens: Item[] = [
    {name: 'arrumar a cama', type: 'tarefas', checked: false },
    {name: 'lavar a roupa', type: 'tarefas', checked: false },
    {name: 'fazer o amoço', type: 'tarefas', checked: false},
    {name: 'jogar bola', type: 'lazer', checked: false}
  ] 
  marcarItem(item: Item) {
    item.checked = !item.checked;
  }
}
