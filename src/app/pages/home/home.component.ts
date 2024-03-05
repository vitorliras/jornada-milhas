import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepoimentoService } from 'src/app/core/services/depoimento-service.service';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao, Depoimento } from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  promocoes!: Promocao[];
  depoimentos!: Depoimento[];
  constructor(
    private promocaoService: PromocaoService,
    private depoimentoService: DepoimentoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.promocaoService
      .listar()
      .subscribe((resultado) => (this.promocoes = resultado));
    this.depoimentoService
      .listar()
      .subscribe((retorno) => (this.depoimentos = retorno));
  }

  navegarParaBusca(ev: any){
    this.router.navigate(['busca'])
  }
}
