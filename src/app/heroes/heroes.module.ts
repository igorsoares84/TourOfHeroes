import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { MaterialModule } from '../angular-material/material.module';
import { HeroDetalhesComponent } from './components/hero-detalhes/hero-detalhes.component';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';




@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetalhesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HeroesRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MatProgressBarModule

  ]
})
export class HeroesModule { }
