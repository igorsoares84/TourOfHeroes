import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetalhesComponent } from './components/hero-detalhes/hero-detalhes.component';
import { HeroesComponent } from './components/heroes/heroes.component';

/* CONST DAS ROTAS USADAS PELA APLICAÇÃO
HEROES/:ID = UMA VARIÁVEL QUE RECEBERÁ O VALOR DE IDENTIFICAÇÃO DO HERO.
*/

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/:id', component: HeroDetalhesComponent },
];

/* DECLARAÇÃO EXPORT PRECISA SER COLOCADA PARA
O ROUTING CONSEGUIR EXPORTAR O PATH COM O COMPONENT

forROOT - Só pode ser utilizado no app-routing.module
para outros routing precisa ser o forCHILD
*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
