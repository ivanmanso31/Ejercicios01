import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjerciciosDatosComponent } from './ejercicios-datos/ejercicios-datos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DivisasComponent } from './divisas/divisas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EjerciciosDatosComponent, CalculadoraComponent, DivisasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicios01';
}
