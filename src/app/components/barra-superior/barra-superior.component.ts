import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  constructor(private navegacion:Router) { }

  ngOnInit() {
  }
  navegarComida(parametro:string){
    
    if (parametro.length===0){
      this.navegacion.navigate(["tecnologia",'todo'])

    } else {
      this.navegacion.navigate(["tecnologia",parametro])
    }
  }

  navegarprincipal(){
    this.navegacion.navigate(["home"])
  }

}
