import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../../services/datos.service';
import { Comidas } from '../utils/comidas';

@Component({
  selector: 'app-dam1',
  templateUrl: './dam1.component.html',
  styleUrls: ['./dam1.component.css']
})
export class DAM1Component implements OnInit {
  parametro: string;
  array2: Comidas[];
  name:string="Basal";
  constructor(private ruta: ActivatedRoute, private service: DatosService) {
  }

  ngOnInit() {
    this.array2 = this.service.getArray2();
  }

}
