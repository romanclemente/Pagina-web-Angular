import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Entrenamiento } from '../utils/entrnamiento';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-elemento-perso',
  templateUrl: './elemento-perso.component.html',
  styleUrls: ['./elemento-perso.component.css']
})
export class ElementoPersoComponent implements OnInit, OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.entrenamientos.forEach(element => {
      if (element.getTitulo().includes(this.titulo)) {
        this.item = element;
      }
    });
  }
  titulo: string;
  entrenamientos: Entrenamiento[];
  entrenamientosperso: Entrenamiento;
  item: Entrenamiento;
  contador: number = 50;
  porcentaje: string = "";
  constructor(private route: ActivatedRoute, private service: DatosService) { }


  ngOnInit() {
    this.route.params.subscribe(param => {
    this.titulo = param.parametro;
    })
    this.entrenamientos = this.service.getEntrenamientos();
    this.Deporte();
  }

  Deporte(): Entrenamiento {
    this.entrenamientos.forEach(element => {
      if (element.getTitulo() == this.titulo) {
        this.item = element;
      }
    });
    return this.item
  }

  Contador(): string {
    this.contador++;
    return this.porcentaje = +this.contador + "%";
  }

}
