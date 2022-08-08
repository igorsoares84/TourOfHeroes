import { MaterialModule } from './../angular-material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaHeroComponent } from './components/pesquisa-hero/pesquisa-hero.component';

const COMPONENTS = [PesquisaHeroComponent];

const MODULES = [MaterialModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [COMPONENTS],
  // SCHEMAS importado para utilizar o AutoComplete
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
