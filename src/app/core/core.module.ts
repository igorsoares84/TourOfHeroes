import { SharedModule } from './../shared/shared.module';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { MaterialModule } from '../angular-material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { Page404Component } from './components/page404.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

/* COMPONENTS SÓ PODEM SER DECLARADOS EM APENAS UM MÓDULO, PARA USAR EM OUTRO MÓDULO DEVERÁ
EXPORTAR O MÓDULO DE ORIGEM E IMPORTAR NO MÓDULO DESTINO*/

const COMPONENTS = [
  ToolbarComponent,
  MensagemComponent,
  Page404Component,
  LoadingComponent,
  DialogComponent,
];
const MODULES = [
  CommonModule,
  MaterialModule,
  FlexLayoutModule,
  RouterModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  SharedModule,
  MatAutocompleteModule,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  /* COMPONENTS FOI EXPORTADO PARA UTILIZAÇÃO EM OUTROS MODULOS*/
  exports: [MODULES, COMPONENTS],

  // Adicionando o Interceptor nos services.
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
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
