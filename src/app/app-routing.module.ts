import { HeroDetalhesComponent } from './hero-detalhes/hero-detalhes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* CONST DAS ROTAS USADAS PELA APLICAÇÃO
HEROES/:ID = UMA VARIÁVEL QUE RECEBERÁ O VALOR DE IDENTIFICAÇÃO DO HERO.
*/

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/:id', component: HeroDetalhesComponent },
];

/* DECLARAÇÃO EXPORT PRECISA SER COLOCADA PARA
O ROUTING CONSEGUIR EXPORTAR O PATH COM O COMPONENT
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
