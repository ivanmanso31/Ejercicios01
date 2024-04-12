import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cambios } from '../-modelo/cambios';

@Component({
  selector: 'app-divisas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './divisas.component.html',
  styleUrl: './divisas.component.css'
})
export class DivisasComponent {
  cantidad: number = 0;
  monedaO: string = 'Euros';
  monedaD: string = 'Dólares';
  cambio : Cambios = {
    'Euros': { 'Dólares': 1.07, 'Libras': 0.85 },
    'Dólares': { 'Euros': 0.94, 'Libras': 0.80 },
    'Libras': { 'Euros': 1.17, 'Dólares': 1.25 }
  };
  resultado: number = 0;
  convertir() {
    this.resultado = this.cantidad * this.cambio[this.monedaO][this.monedaD];
  }
}
