import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DecorationsComponent } from './decorations/decorations.component';
import { GiftsComponent } from './gifts/gifts.component';
import { StockingStuffersComponent } from './stocking-stuffers/stocking-stuffers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GiftPageComponent } from './gift-page/gift-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DecorationsComponent,
    GiftsComponent,
    StockingStuffersComponent,
    NavbarComponent,
    SearchComponent,
    GiftPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
