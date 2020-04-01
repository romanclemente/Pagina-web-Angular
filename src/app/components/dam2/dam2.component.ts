import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../../services/datos.service';
import { Comidas } from '../utils/comidas';

@Component({
  selector: 'app-dam2',
  templateUrl: './dam2.component.html',
  styleUrls: ['./dam2.component.css']
})
export class DAM2Component implements OnInit {
  parametro: string;
  array2: Comidas[];
  name:string="Vegetariana";
  constructor(private ruta: ActivatedRoute, private service: DatosService) {
  }

  ngOnInit() {
    this.array2 = this.service.getArray2();
  }

}
