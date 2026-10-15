import { Component } from '@angular/core';
import { EmpleadosComponent } from './components/empleados/empleados';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmpleadosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'frontend';
}