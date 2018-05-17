import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DstInfoTokensComponent } from './dst-info-tokens/dst-info-tokens.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DstInfoTokensComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
