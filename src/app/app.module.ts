import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ //TODO:  pueden ser declaraciones, mudulos, componentes 
    AppComponent, 
  ],
  imports: [ //TODO: solo s eimportan otros modulos 
    BrowserModule,
    AppRoutingModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
