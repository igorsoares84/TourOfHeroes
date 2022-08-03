import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Hero } from '../models/Hero.model';
import { MensagemService } from './mensagem.service';

@Injectable({
  providedIn: 'root',
})
export class HeroServiceService {
  private API = environment.API;

  constructor(
    private mensagemService: MensagemService,
    private httpClient: HttpClient
  ) {}

  // SERVICE -> FAZ A BUSCA DOS DADOS NO BACKEND, O COMPONENT APENAS EXIBE.

  /* Lista de heroi
     OBSERVABLE USADO PARA COMPARTILHAR OS DADOS DE FORMA ASSINCRONA,
     PARA RECEBER OS DADOS, DEVEMOS USAR O SUBCRIBE.
  */

     // GET /HEROES
  getHeroes(): Observable<Hero[]> {
    // CHAMADA PARA O SERVIDOR.
    // TAP = Usado para executar efeitos colaterais para notificações do Observable


    return this.httpClient.get<Hero[]>(this.API).pipe(
   //   tap((h) => this.log(`Quantidade de heróis encontrados: ${h.length}`))
    );
  }

  //GET /HEROES/ID

  getHero(id: number): Observable<Hero> {
    // CHAMADA PARA O SERVIDOR.
    return this.httpClient.get<Hero>(`${this.API}/${id}`).pipe(
      tap((h) => this.log(`Herói selecionado: ${h.nome}`))
    );
  }

  private log(mensagem: string): void {
    this.mensagemService.add(mensagem);
  }
}
