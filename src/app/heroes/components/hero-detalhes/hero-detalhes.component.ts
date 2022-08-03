
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../../core/models/Hero.model';
import { HeroServiceService } from '../../../core/services/hero-service.service';

@Component({
  selector: 'app-hero-detalhes',
  templateUrl: './hero-detalhes.component.html',
  styleUrls: ['./hero-detalhes.component.scss'],
})
export class HeroDetalhesComponent implements OnInit {
  /* @INPUT = DECORATOR PARA RECEBER UM VALOR DE FORA DO TEMPLATE. USADO NO HEROES-COMPONENT.HTML
  ? = significa que a variavel é do tipo HERO ou UNDEFINED -Usada para armazenar o heroi clicado
  ! = SIGNIFICA QUE A VARIAVEL NÃO FOI INICIADA MAS QUE IRÁ RECEBER UM VALOR NO DECORRER DA APLICAÇÃO*/

  hero!: Hero;

  constructor(
    private heroService: HeroServiceService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  // O ROUTE ESPERA UM PARAMETRO ID SENDO STRING. NUMBER() FAZ A CONVERSÃO PARA NÚMERO.

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero =>
      this.hero = hero);
  }

  voltar(): void{
    this.router.navigate(['/heroes']);
  }
}
