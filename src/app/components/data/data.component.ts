import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;

  usuario:Object = {
    nombrecompleto: {
      nombre: 'kari',
      apellido: 'celis'
    },
    correo: 'kari@gmail.com',

  };

  constructor() {
    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl('', [Validators.required,
                                          this.noCelis])
      }),
         'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
        ]),
         'pasatiempos': new FormArray([
           new FormControl('Correr', Validators.required)
         ]),
         'password1': new FormControl('', Validators.required),
         'password2': new FormControl()
    });

    // this.forma.setValue(this.usuario);

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind( this.forma )
    ]);
  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('Dormir', Validators.required)
    )
  }

  noCelis(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Celis') {
      return {
        noCelis: true
      };
    }

    return null;
  }

  noIgual(control: FormControl): {[s: string]: boolean} {
    const forma: any = this;

    if (control.value !== forma.controls['password1'].value) {
      return {
        noiguales: true
      };
    }

    return null;
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);

    /*this.forma.reset({
      nombrecompleto: {
        nombre: '',
        apellido: ''
      },
        correo: ''
    });*/
  }


}
