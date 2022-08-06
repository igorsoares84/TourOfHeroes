import { DialogComponent } from './../../../core/components/dialog/dialog.component';
import { DialogData } from './../../../core/models/dialog-data.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Hero } from '../../../core/models/Hero.model';
import { HeroServiceService } from '../../../core/services/hero-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  constructor(private service: HeroServiceService, private dialog: MatDialog) {}

  ngOnInit(): void {
    // ATRIBUINDO O SERVICE A LISTA DE HEROES
    this.getHeroes();
  }

  heroes: Hero[] = [];

  // COLUNAS DA TABLE USADA NO TEMPLATE
  colunas: string[] = ['id', 'nome', 'acao'];

  getHeroes(): void {
    /* SUBSCRIBE INFOMA QUANDO HÁ MUDANÇA NO OBSERVABLE
     ERROR INFORMA QUANDO HÁ UM ERRO AO TENTAR COLETAR OS DADOS
     DO OBSERVABLE */

    this.service.getHeroes().subscribe(
      (heroes) => {
        this.heroes = heroes;
      },
      (error) => {
        alert('Servidor indisponível, tente mais tarde.');
      }
    );
  }

  /* FILTER PERCORRE A LISTA DE HEROES ATÉ ACHAR O HERO SELECIONADO PARA DELETAR.*/

  deleteHero(hero: Hero): void {
    // Setando os valores do DialogData que será usado.
    const dialogData: DialogData = {
      cancelar: '',
      confirmar: '',
      conteudo: `Deseja fazer a exclusão do herói ${hero.nome}?`,
    };

    // Referencia ao dialog que será aberto.
    const dialogDataRef = this.dialog.open(DialogComponent, {
      data: dialogData,
      width: '300px',
    });

    /* RESULT É UMA VARIAVEL QUE VAI RECEBER O RESULTADO DO TEMPLATE DIALOG, TRUE OU FALSE*/

    dialogDataRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.deleteHero(hero).subscribe(() => {
          this.heroes = this.heroes.filter((h) => h !== hero);
          // Método tradicional
          // this.getHeroes();
        });
      }
    });
  }
}
