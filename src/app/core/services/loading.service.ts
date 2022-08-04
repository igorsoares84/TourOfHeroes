import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  /* O Subject é um tipo especial de Observable,
  eles são especiais pois além de ser um Observable é um Observer,
  podem atuar como um EventEmitter.*/

  private loadingSubject = new BehaviorSubject<boolean>(false);

  // COLOCAR O $ NO FIM DE UMA VARIAVEL É UMA CONVENÇÃO PARA VIRIAVEIS DO TIPO OBSERVABLE
  // TORNANDO O LOADING$ UM OBSERVABLE, POIS O LOADING SUBJECT PODERÁ SOFRER ALTERAÇÕES
  loading$ : Observable<boolean> = this.loadingSubject.asObservable();


  hide(): void{
    this.loadingSubject.next(false);
  }

  show(): void{
    this.loadingSubject.next(true);
  }

}
