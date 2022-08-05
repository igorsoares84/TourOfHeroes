import { MensagemService } from './../services/mensagem.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  /* Interceptor para tratar dos erros da aplicação toda.*/

  constructor(private mensagemService: MensagemService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
      let errorMsg = '';

      /* SE O ERRO FOR DO TIPO EVENT = RETORNA A MENSAGEM DE ERRO.
      SE O ERRO FOR DE OUTRO TIPO, RETORNA O CODE E A MENSAGEM */

        if(err.error instanceof(ErrorEvent)){
          errorMsg = `Erro: ${err.error.message}`
        }else{
          errorMsg = `Erro: ${err.status}, Mensagem: ${err.message}`
        }

        this.mensagemService.add(errorMsg);
        return throwError(() => new Error(errorMsg));
      })
    );
  }
}
