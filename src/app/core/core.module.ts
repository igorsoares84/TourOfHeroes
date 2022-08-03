import { CommonModule } from '@angular/common';
import {
  ModuleWithComponentFactories,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { MaterialModule } from './angular-material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

/* COMPONENTS SÓ PODEM SER DECLARADOS EM APENAS UM MÓDULO, PARA USAR EM OUTRO MÓDULO DEVERÁ
EXPORTAR O MÓDULO DE ORIGEM E IMPORTAR NO MÓDULO DESTINO*/

const COMPONENTS = [ToolbarComponent, MensagemComponent];

const MODULES = [CommonModule, MaterialModule, FlexLayoutModule, RouterModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  /* COMPONENTS FOI EXPORTADO PARA UTILIZAÇÃO EM OUTROS MODULOS*/
  exports: [MaterialModule, COMPONENTS],
})
export class CoreModule {
  /* IMPEDINDO QUE O CORE MODULE SEJA IMPORTADO, SUGERINDO A IMPORTAÇÃO DO
  APP MODULE */
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'Não é possível importar o CoreModule para utilizações dos módulos contido no Core Module, importe o AppModule'
      );
    }
  }
}
