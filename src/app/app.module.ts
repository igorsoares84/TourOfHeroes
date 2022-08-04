//  CUSTOM_ELEMENTS_SCHEMA PARA USAR O MAT-ICON
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // @ANGULAR
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    // MODULE PARA CONSEGUIR FAZER INTEGRAÇÃO COM O BACKEND.
    HttpClientModule,

    // APP
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // IMPORT PARA USAR O MAT-ICON
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
