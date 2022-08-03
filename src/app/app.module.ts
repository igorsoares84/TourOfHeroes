//  CUSTOM_ELEMENTS_SCHEMA PARA USAR O MAT-ICON
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetalhesComponent } from './hero-detalhes/hero-detalhes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from './core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetalhesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // IMPORT PARA USAR O MAT-ICON
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
