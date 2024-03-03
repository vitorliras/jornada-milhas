import { Component } from '@angular/core';
import { FormBuscaServiceService } from 'src/app/core/services/form-busca-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {


  constructor( public formBuscaService: FormBuscaServiceService){}

}
