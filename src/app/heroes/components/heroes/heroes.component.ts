import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/Hero.model';
import { HeroServiceService } from '../../../core/services/hero-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  constructor(private service: HeroServiceService) {}

  ngOnInit(): void {
    // ATRIBUINDO O SERVICE A LISTA DE HEROES
    this.getHeroes();
  }

  heroes: Hero[] = [];

  // COLUNAS DA TABLE USADA NO TEMPLATE
  colunas: string[] = ['id', 'nome'];

  getHeroes(): void {
    /* SUBSCRIBE INFOMA QUANDO HÁ MUDANÇA NO OBSERVABLE
     ERROR INFORMA QUANDO HÁ UM ERRO AO TENTAR COLETAR OS DADOS
     DO OBSERVABLE */

    this.service.getHeroes().subscribe(
      (heroes) => {
        this.heroes = heroes;
      },
      (error) => {
        alert('Servidor indisponível, tente mais tarde.');
      }
    );
  }
}
