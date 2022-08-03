import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Hero } from '../models/Hero.model';
import { MensagemService } from './mensagem.service';
import { HEROES } from './mock-hero';

@Injectable({
  providedIn: 'root',
})
export class HeroServiceService {
  constructor(private mensagemService: MensagemService) {}

  // SERVICE -> TRATAMENTO DE DADOS, O COMPONENT APENAS EXIBE.

  // Lista de heroi
  // OBSERVABLE USADO PARA COMPARTILHAR OS DADOS DE FORMA ASSINCRONA,
  // PARA RECEBER OS DADOS, DEVEMOS USAR O SUBCRIBE
  getHeroes(): Observable<Hero[]> {
    // of = CRIA O OBSERVABLE
    const heroes = of(HEROES);

    //return throwError(new Error('Servidor indisponível, tente novamente mais tarde.'))
    return heroes;
  }

  /* MÉTODO getHero busca somente um hero. Função FIND busca na lista de HEROES
o parametro informado no método.
A ! no fim da função significa que pode retornar um valor não encontrado. Devemos passar uma
mensagem para o usuário.*/

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((hero) => hero.id === id)!;
    this.mensagemService.add(`Herói selecionado: ${hero.nome}`);
    return of(hero);
  }
}
