import { Component, OnInit } from '@angular/core';
import { MensagemService } from '../core/services/mensagem.service';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss'],
})
export class MensagemComponent {
  constructor(public mensagemService: MensagemService) {}
}
