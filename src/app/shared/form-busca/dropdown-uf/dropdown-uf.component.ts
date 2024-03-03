import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, of, startWith, tap } from 'rxjs';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa-service.service';
import { UnidadeFederativa } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() iconePrefixo: string = '';
  @Input() control!: FormControl;

  unidadesFederativas: UnidadeFederativa[] = [];

  filteredOptions$?: Observable<UnidadeFederativa[]>;


  constructor(
    private unidadeFederativaService: UnidadeFederativaService) {

  }

  ngOnInit(): void {
    // debugger;

    this.unidadeFederativaService.listar()
      .subscribe(dados => {
        this.unidadesFederativas = dados
        console.log(this.unidadesFederativas)
      })
    // this.filteredOptions$ = this.control.valueChanges.pipe(
    //   startWith(''),
    //   map(value =>  this.filtrarUfs(value))
    // )
    // debugger;
  }

  filtrarUfs(value: any): void {
    debugger;
    const valorFiltrado = value.target.value?.toLowerCase();
    const result = this.unidadesFederativas.filter(
      estado => estado.nome.toLowerCase().includes(valorFiltrado)
    );
    this.filteredOptions$ = of(result);
  }
}
