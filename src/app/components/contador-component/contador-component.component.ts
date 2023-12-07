import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-component',
  templateUrl: './contador-component.component.html',
  styleUrls: ['./contador-component.component.css']
})
export class ContadorComponentComponent {
  contador: number = 0;

  aumentar() {
    this.contador++;
  }

  diminuir() {
    if (this.contador > 0) {
      this.contador--;
    }
  }
}


