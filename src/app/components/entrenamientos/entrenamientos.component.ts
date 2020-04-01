import { Component, OnInit, Input } from '@angular/core';
import { Entrenamiento } from '../utils/entrnamiento';
import { element } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.component.html',
  styles: []
})
export class EntrenamientosComponent implements OnInit {
  @Input() entrenamientos: Entrenamiento[];
  @Input() parametro: string;
  contador: number;
  constructor(private navegacion: Router) { }
  ngOnInit() {

  }
  entrenamientosB: Entrenamiento[];
  navegar(parametro: Entrenamiento) {
    this.navegacion.navigate(["elemento", parametro])
  }
  
  EntrenamientoB(): Entrenamiento[] {
    this.entrenamientosB = [];
    this.entrenamientos.forEach(element => {
      if (element.getTitulo().toLowerCase().includes(this.parametro.toLowerCase()) || this.parametro == 'todo') {
        this.entrenamientosB.push(element);
      }
    });
    return this.entrenamientosB;
  }


  Resultados(): number {
    this.contador = 0;
    this.entrenamientos.forEach(element => {
      if (element.getTitulo().toLowerCase().includes(this.parametro.toLowerCase()) || this.parametro == 'todo') {
        this.contador++;
      }
    });
    return this.contador;
  }
}
