import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { UnidadeFederativa } from 'src/app/core/types/type';
import { FormValidation } from '../form-validation';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit{
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);
  @Input() perfilComponent!: boolean
  @Output() acaoCLique: EventEmitter<any> = new EventEmitter<any>;

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: ["null", Validators.required],
      nascimento: ["null", [Validators.required]],
      cpf: ["5555555", [Validators.required]],
      cidade: ["null", Validators.required],
      email: ["null@gmail.com", [Validators.required, Validators.email]],
      senha: ["null", [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: ["555555", Validators.required],
      estado: this.estadoControl,
      confirmarEmail: ["null@gmail.com", [Validators.required, Validators.email, FormValidation.equalTo('email')]],
      confirmarSenha: ["null", [Validators.required, Validators.minLength(3), FormValidation.equalTo('senha')]],
      aceitarTermos: [null, [Validators.requiredTrue]]
    });
    this.formularioService.setCadastro(this.cadastroForm)
  }

  executarAcao(){
    this.acaoCLique.emit();
  }

}
