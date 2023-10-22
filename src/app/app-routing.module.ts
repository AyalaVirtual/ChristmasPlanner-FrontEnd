import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { GiftPageComponent } from './gift-page/gift-page.component';
import { DecorationPageComponent } from './decoration-page/decoration-page.component';
import { StockingStufferPageComponent } from './stocking-stuffer-page/stocking-stuffer-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'decorations',
    component: DecorationPageComponent
  },
  {
    path: 'gifts',
    component: GiftPageComponent
  },
  {
    path: 'stocking-stuffers',
    component: StockingStufferPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
