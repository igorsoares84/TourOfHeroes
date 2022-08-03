import { HeroDetalhesComponent } from './heroes/components/hero-detalhes/hero-detalhes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/components/heroes/heroes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './core/components/page404.component';

/* CONST DAS ROTAS USADAS PELA APLICAÇÃO
HEROES/:ID = UMA VARIÁVEL QUE RECEBERÁ O VALOR DE IDENTIFICAÇÃO DO HERO.
*/

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  /* IMPLEMENTANDO CARREGAMENTO DOS MODULOS POR UTILIZAÇÃO - LAZY LOADING */
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) =>
    m.DashboardModule),
  },
  {
    path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then((m) =>
    m.HeroesModule),
  },
  /* PÁGINA 404 */
  {
    path: '**', component: Page404Component
  }
];

/* DECLARAÇÃO EXPORT PRECISA SER COLOCADA PARA
O ROUTING CONSEGUIR EXPORTAR O PATH COM O COMPONENT
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
