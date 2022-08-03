import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  private mensagem: string[] = [];

  // Método ADD adiciona uma nova mensagem.
  add(mensagem: string): void{
    // PUSH ACRESCENTA A INFORMAÇÃO AO ARRAY.
    this.mensagem.push(mensagem);
  }
// Método LIMPA apaga as mensagens adicionadas pelo ADD
  limpa(): void{
    this.mensagem = [];
  }

  getMensagem(): string[]{
    return this.mensagem;
  }
}
