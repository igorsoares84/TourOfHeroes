import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

/* CONST DAS ROTAS USADAS PELA APLICAÇÃO
HEROES/:ID = UMA VARIÁVEL QUE RECEBERÁ O VALOR DE IDENTIFICAÇÃO DO HERO.
*/

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
];

/* DECLARAÇÃO EXPORT PRECISA SER COLOCADA PARA
O ROUTING CONSEGUIR EXPORTAR O PATH COM O COMPONENT
*/
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
