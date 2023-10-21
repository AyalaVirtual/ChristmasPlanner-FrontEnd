import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DecorationsComponent } from './decorations/decorations.component';
import { GiftsComponent } from './gifts/gifts.component';
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
    component: GiftsComponent
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
