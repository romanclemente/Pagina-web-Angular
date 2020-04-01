import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { Alimentacion } from '../utils/alimentacion';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styles: []
})
export class CarruselComponent implements OnInit {

  constructor(private servicio:DatosService) {
  }
  arrayAlimentacion:Alimentacion[];
  arraImgs:string[]=["/assets/resources/Carne-Cer.jpg","assets/resources/comida-s.jpg"]
  ngOnInit() {
    this.arrayAlimentacion=this.servicio.arrayAlimentaciones
  }

}
