import { Component } from '@angular/core';
import { menuItem } from './core/models/MenuITem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour Of Heroes';

  /* SETANDO QUANTIDADE DE BUTTONS E AS INFORMAÇÕES */

  MenuItens: menuItem[] = [
    {
      icone: 'dashboard',
      routerLink: '/dashboard',
      tooltipText: 'Dashboard',
    },
    {
      icone: 'sports_martial_arts',
      routerLink: '/heroes',
      tooltipText: 'Lista de Heróis',
    },
  ];
}
