import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DecorationsComponent } from './decorations/decorations.component';
import { GiftsComponent } from './gifts/gifts.component';
import { StockingStuffersComponent } from './stocking-stuffers/stocking-stuffers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GiftSearchComponent } from './gift-search/gift-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GiftPageComponent } from './gift-page/gift-page.component';
import { GiftFormComponent } from './gift-form/gift-form.component';
import { DecorationPageComponent } from './decoration-page/decoration-page.component';
import { StockingStufferPageComponent } from './stocking-stuffer-page/stocking-stuffer-page.component';
import { DecorationFormComponent } from './decoration-form/decoration-form.component';
import { StockingStufferFormComponent } from './stocking-stuffer-form/stocking-stuffer-form.component';
import { StockingStufferSearchComponent } from './stocking-stuffer-search/stocking-stuffer-search.component';
import { DecorationSearchComponent } from './decoration-search/decoration-search.component';
import { GiftItemComponent } from './gift-item/gift-item.component';
import { StockingStufferItemComponent } from './stocking-stuffer-item/stocking-stuffer-item.component';
import { DecorationItemComponent } from './decoration-item/decoration-item.component';
import { DecorationsRoutingModule } from './decorations/decorations.routing.module';
import { GiftsRoutingModule } from './gifts/gifts.routing.module';
import { StockingStuffersRoutingModule } from './stocking-stuffers/stocking-stuffers.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DecorationsComponent,
    GiftsComponent,
    StockingStuffersComponent,
    NavbarComponent,
    GiftSearchComponent,
    GiftPageComponent,
    GiftFormComponent,
    DecorationPageComponent,
    StockingStufferPageComponent,
    DecorationFormComponent,
    StockingStufferFormComponent,
    StockingStufferSearchComponent,
    DecorationSearchComponent,
    GiftItemComponent,
    StockingStufferItemComponent,
    DecorationItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DecorationsRoutingModule,
    GiftsRoutingModule,
    StockingStuffersRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
