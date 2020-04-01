import { Component, OnInit } from '@angular/core';
import { Comidas } from '../utils/comidas';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-vegano',
  templateUrl: './vegano.component.html',
  styles: []
})
export class VeganoComponent implements OnInit {
  parametro: string;
  array2: Comidas[];
  name:string="Vegana";
  constructor(private ruta: ActivatedRoute, private service: DatosService) {
  }
  ngOnInit() {
    this.array2 = this.service.getArray2();
  }
}
