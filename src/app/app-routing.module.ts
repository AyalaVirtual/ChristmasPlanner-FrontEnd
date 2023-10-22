import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DecorationsComponent } from './decorations/decorations.component';
import { GiftPageComponent } from './gift-page/gift-page.component';
import { StockingStuffersComponent } from './stocking-stuffers/stocking-stuffers.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'decorations',
    component: DecorationsComponent
  },
  {
    path: 'gifts',
    component: GiftPageComponent
  },
  {
    path: 'stocking-stuffers',
    component: StockingStuffersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
