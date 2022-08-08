import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token');
    if (!token) {
      token = this.criaToken();
      localStorage.setItem('token', token);
      console.log(token);
    }

/* Clonando a request e colocando o token antes de passar para o next.*/
    request = request.clone({
      setHeaders: {
        Authorization: token,
      },
    });

    return next.handle(request);
  }

  private criaToken(): string {
    // Gerando token com Random.
    return Math.random().toString(36).substring(2, 12);
  }
}
