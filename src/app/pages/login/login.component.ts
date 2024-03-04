import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginFomr!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.loginFomr = this.formBuilder.group({
      email: [null,[Validators.required, Validators.email]],
      senha: [null,[Validators.required]]
    })
  }

  login(){
    const email = this.loginFomr.value.email;
    const senha = this.loginFomr.value.senha;

    this.authService.autenticar(email,senha).subscribe({
      next: (value) => {
        console.log(value)
        this.router.navigateByUrl("/")
      },
      error: (err)=> {
        console.log("erro login",err)
      }
    })
  }
}
