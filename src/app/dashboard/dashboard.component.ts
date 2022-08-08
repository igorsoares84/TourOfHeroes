import { HeroServiceService } from '../core/services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../core/models/Hero.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    /* SLICE MOSTRA OS ELEMENTOS DO ARRAY QUE FOI SOLICITADO NO PARAMETRO*/
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }

  // parametro hero é o valor que vem do $event
  onSelected(hero: Hero): void{
    this.router.navigate(['/heroes', hero.id]);
  }

}
