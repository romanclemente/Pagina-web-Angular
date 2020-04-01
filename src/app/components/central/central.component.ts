import { Component, OnInit, OnChanges } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { Comidas } from '../utils/comidas';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { Entrenamiento } from '../utils/entrnamiento';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit{
   
  parametro: string;
  array2: Comidas[];
  entrenamientos: Entrenamiento[];
  constructor(private ruta: ActivatedRoute, private service: DatosService) {
  }

  ngOnInit() {
    this.ruta.params.subscribe(param => {this.parametro = param.parametro})
    this.array2 = this.service.getArray2();
    //this.parametro = this.ruta.snapshot.paramMap.get("parametro");
    this.entrenamientos=this.service.entrenamientos;
    console.log(this.parametro)
  }

}
