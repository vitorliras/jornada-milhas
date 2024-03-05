import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resultado } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {

  private apiUrl: string = environment.apiUrl

  constructor(
    private HttpClient: HttpClient
  ) { }


    getPassagens(search: any): Observable<Resultado>{
      const params = search;
      return this.HttpClient.get<Resultado>(this.apiUrl + '/passagem/search', {params})
    }

}
