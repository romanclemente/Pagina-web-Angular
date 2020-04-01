import { Component, OnInit, OnChanges } from '@angular/core';
import { Comidas } from '../utils/comidas';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-comidaperso',
  templateUrl: './comidaperso.component.html',
  styleUrls: ['./comidaperso.component.css']
})
export class ComidapersoComponent implements OnInit, OnChanges {

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    
    console.log(this.titulo);

  }
  titulo: string;
  entrenamientos: Comidas[];
  item: Comidas;
  contador: number = 50;
  porcentaje: string = "";
  constructor(private route: ActivatedRoute, private service: DatosService) { }

  ngOnInit() {
    this.route.params.subscribe(param => { this.titulo = param.parametro;
      })
    this.entrenamientos = this.service.getArray2();
    this.Deporte();
  }

  Deporte(): Comidas {
    this.entrenamientos.forEach(element => {
      if (element.getTitulo() == this.titulo) {
        this.item = element;
      }
    });
    return this.item
  }


}
