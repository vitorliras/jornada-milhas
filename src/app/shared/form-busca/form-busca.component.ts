import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuscaServiceService } from 'src/app/core/services/form-busca-service.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss'],
})
export class FormBuscaComponent {

  @Output() realizarBusca = new EventEmitter()

  constructor(
    public dialog: MatDialog,
    public formBuscaService: FormBuscaServiceService
  ) {}

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%',
    });
  }

  buscar(){
    this.realizarBusca.emit(this.formBuscaService.formBusca.value)
  }



}
