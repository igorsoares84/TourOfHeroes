import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page404',
  template: `
    <mat-card>
      <mat-card-title>Erro 404: Página não encontrada.</mat-card-title>
      <mat-card-content>
        <p>Não podemos encontrar essa página, nem mesmo com visão raio-X</p>
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-button matTooltip="Voltar" mat-mini-fab (click)="voltar()">
          <mat-icon>arrow_back</mat-icon>
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      :host {
        text-align: center;
      }
    `,
  ],
})
export class Page404Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  voltar(): void {
    // RETORNA PARA O DASHBOARD
    this.router.navigate(['']);
  }
}
