import { Component, OnInit, Input } from '@angular/core';
import { Comidas } from '../utils/comidas';

@Component({
  selector: 'app-tecnologiahijo',
  templateUrl: './tecnologiahijo.component.html',
  styleUrls: ['./tecnologiahijo.component.css']
})
export class TecnologiahijoComponent implements OnInit {
  @Input() miArray: Comidas[];
  @Input() name: string;

  constructor() { }
  ngOnInit() {
  }
  comidas: Comidas[];
  Comiditas(): Comidas[] {
    this.comidas=[];
    this.miArray.forEach(element => {
      if (element.getTipo() == this.name) {
        this.comidas.push(element);
      }
    });
    return this.comidas;
  }

}
