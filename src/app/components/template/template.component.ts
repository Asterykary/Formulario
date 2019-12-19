import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  usuario: Object = {
    nombre: 'kadi',
    apellido: 'celis',
    correo: ''
  };
  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log('Formulario posteado');
  }

}
