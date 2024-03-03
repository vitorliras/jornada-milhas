import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaServiceService {

  formBusca: FormGroup;

  constructor(public dialog: MatDialog) {
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null),
      tipo: new FormControl("Econômica"),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
    })

   }

   getDescricaoPassageiros (): string {
    let descricao = ''

    const adultos = this.formBusca.get('adultos')?.value;
    if (adultos && adultos > 0) {
      descricao += `${adultos} adulto${adultos > 1 ? 's' : ''}`;
    }

    const criancas = this.formBusca.get('criancas')?.value;
    if (criancas && criancas > 0) {
      descricao += `${descricao ? ', ' : ''}${criancas} criança${criancas > 1 ? 's' : ''}`;
    }

    const bebes = this.formBusca.get('bebes')?.value;
    if (bebes && bebes > 0) {
      descricao += `${descricao ? ', ' : ''}${bebes} bebê${bebes > 1 ? 's' : ''}`;
    }

    return descricao
  }

   obterControle(nome:string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
        width: '50%'
    })
  }

  alterarTipo(ev: MatChipSelectionChange, tipo:string){
    if(ev.selected){

      this.formBusca.patchValue({
        tipo,
      })
      console.log(tipo);

    }
  }


}
