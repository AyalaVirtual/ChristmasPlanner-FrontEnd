import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DecorationsComponent } from './decorations/decorations.component';
import { GiftsComponent } from './gifts/gifts.component';
import { StockingStuffersComponent } from './stocking-stuffers/stocking-stuffers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DecorationsComponent,
    GiftsComponent,
    StockingStuffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
