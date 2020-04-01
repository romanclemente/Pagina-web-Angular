import { Component, OnInit } from '@angular/core';
import { Entrenamiento } from '../utils/entrnamiento';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  parametro: string="todo";
  entrenamientos: Entrenamiento[];
  constructor(private ruta: ActivatedRoute, private service: DatosService) {
  }
  ngOnInit() {
    this.entrenamientos = this.service.getEntrenamientos();
  }

}
