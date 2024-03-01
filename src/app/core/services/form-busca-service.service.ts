import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaServiceService {

  formBusca: FormGroup;

  constructor() {
    this.formBusca = new FormGroup(
      {
        somenteIda: new FormControl(false)
      }
    );
   }
}
