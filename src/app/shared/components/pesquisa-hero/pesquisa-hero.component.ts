import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/core/models/Hero.model';
import { HeroServiceService } from 'src/app/core/services/hero.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-pesquisa-hero',
  templateUrl: './pesquisa-hero.component.html',
  styleUrls: ['./pesquisa-hero.component.scss'],
})
export class PesquisaHeroComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  hero!: Hero;

  @Input() label = '';
  /* Output usado para mandar algo para o component que está solicitando. No caso
  o Dashboard está solicitando o hero do Pesquisa Hero.*/
  @Output() selected = new EventEmitter<Hero>();

  private pesquisaTermo = new Subject<string>();

  constructor(private heroService: HeroServiceService) {}

  /* SwitchMap faz o mapeamento do que foi digitado no input e
  busca no heroService.
  debounceTime é o método que espera uma quantidade tempo (informada
    no parametro) para fazer a requisição no servidor. Sendo assim,
    cada letra digitada ele esperará 600ms para enviar para o servidor.
    Diminuindo a quantidade de requisições enviadas, pois cada letra
    é uma requisição.

    distinctUntilChanged - Método que executa a requisição para o servidor somente se o valor
    for diferente do que já está digtado.
  */

  ngOnInit(): void {
    this.heroes$ = this.pesquisaTermo.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      switchMap((termo) => this.heroService.search(termo))
    );
  }

  /* O parametro termo recebe cada letra digitada no Input do template e o
  pesquisaTermo atualiza o resultado do input.*/

  pesquisa(termo: string): void {
    this.pesquisaTermo.next(termo);
  }

  onSelected(itemSelecionado: MatAutocompleteSelectedEvent): void {
    this.pesquisaTermo.next('');
    const hero: Hero = itemSelecionado.option.value;
    /* selected vai enviar o hero para o dashboard*/
    this.selected.emit(hero);
  }
}
