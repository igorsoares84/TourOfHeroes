import { Component, Input, OnInit } from '@angular/core';
import { menuItem } from '../../models/MenuITem.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() title = '';

  /* MENUIENS É UM INPUT PARA OS BUTTONS E AS INFORMAÇÕES*/

  @Input() menuItens: menuItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
