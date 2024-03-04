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
  @Input() txtBotao: string = "Cadastrar"
  @Input() titulo: string = "Crie sua conta"
  @Output() acaoCLique: EventEmitter<any> = new EventEmitter<any>;
  @Output() sair: EventEmitter<any> = new EventEmitter<any>;

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, [Validators.required]],
      cpf: ["", [Validators.required]],
      cidade: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required, Validators.minLength(3)]],
      genero: [''],
      telefone: ["", Validators.required],
      estado: this.estadoControl,
      confirmarEmail: ["", [Validators.required, Validators.email, FormValidation.equalTo('email')]],
      confirmarSenha: ["", [Validators.required, Validators.minLength(3), FormValidation.equalTo('senha')]],
      aceitarTermos: [null, [Validators.requiredTrue]]
    });

    if(this.perfilComponent){
      this.cadastroForm.get('aceitarTermos')?.setValidators(null)
    }else{
      this.cadastroForm.get('aceitarTermos')?.setValidators([Validators.requiredTrue])
    }
    this.cadastroForm.get('aceitarTermos')?.updateValueAndValidity();

    this.formularioService.setCadastro(this.cadastroForm)
  }

  executarAcao(){
    this.acaoCLique.emit();
  }

  deslogar(){
    this.sair.emit()
  }

}
