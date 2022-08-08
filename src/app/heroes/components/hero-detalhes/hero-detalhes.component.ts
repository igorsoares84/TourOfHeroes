import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../../core/models/Hero.model';
import { HeroServiceService } from '../../../core/services/hero.service';

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
  editHero = false;

  /* CONFIGURANDO OS FORMULARIOS COM FORM BUILDER*/

  form = this.fb.group({
    // ID começará com vazio e estará desabilitado.
    id: { value: 0, disabled: true },
    // Para o form se tornar válido, o nome precisará ser preenchido.
    name: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private heroService: HeroServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  // O ROUTE ESPERA UM PARAMETRO ID SENDO STRING. NUMBER() FAZ A CONVERSÃO PARA NÚMERO.

  getHero(): void {
    const paramId = this.route.snapshot.paramMap.get('id');

    if (paramId !== 'new') {
      this.editHero = true;

      const id = Number(paramId);
      this.heroService.getHero(id).subscribe((hero) => {
        this.hero = hero;
        this.form.controls.id.setValue(hero.id);
        this.form.controls.name.setValue(hero.name);
      });
    }
  }

  voltar(): void {
    this.router.navigate(['/heroes']);
  }

  atualizar(): void {
    const { valid, value } = this.form;

    if (valid) {
      const hero: Hero = {
        id: this.hero.id,
        name: value.name || '',
      };

      this.heroService
        .updateHero(hero)
        .subscribe(() => this.router.navigate(['/heroes']));
    }
    this.snackMensagem('Herói atualizado com sucesso!');
  }

  criar(): void {
    const { valid, value } = this.form;

    if (valid) {
      const hero: Hero = {
        name: value.name || '',
      } as Hero;

      this.heroService
        .createHero(hero)
        .subscribe(() => this.router.navigate(['/heroes']));
    }
    this.snackMensagem('Herói adicionado com sucesso!');
  }

  private snackMensagem(mensagem: string): void {
    this.snackBar.open(mensagem, '', {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
}
