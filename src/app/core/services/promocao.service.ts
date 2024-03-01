import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Promocao } from '../types/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

private API: string = environment.apiUrl

  constructor(
    private httpClient: HttpClient
  ) { }

listar(): Observable<Promocao[]>{
 return this.httpClient.get<Promocao[]>(`${this.API}/promocoes`)
}

}
