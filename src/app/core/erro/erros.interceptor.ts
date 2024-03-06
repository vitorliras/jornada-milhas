import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { MensagemService } from '../services/mensagem.service';

@Injectable()
export class ErrosInterceptor implements HttpInterceptor {

  constructor(private mensagemService: MensagemService) {}

  intercept(
    request: HttpRequest<HttpErrorResponse>,
    next: HttpHandler
  ): Observable<HttpEvent<HttpErrorResponse>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        let errorMensage = "Ocorreu um erro desconhecido"

        if (error.error instanceof ErrorEvent) {
          errorMensage = `Erro do Cliente: ${error.error.message}`
        }else if(error.status === 404){
          errorMensage = `Recursos não Encontrados`
        }
        else if(error.status === 500){
          errorMensage = `Erro interno do servidor`
        }
        else if(error.status === 401){
          errorMensage = `Você não tem autorização para acessar esse recurso`
        }

        this.mensagemService.openSnackBar(errorMensage)

        return throwError(()=> new Error("Ocorreu um erro: "+errorMensage))
      })
    )
  }
}
