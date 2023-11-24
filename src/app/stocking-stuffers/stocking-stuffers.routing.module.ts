import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockingStuffersComponent } from './stocking-stuffers.component';
import { StockingStufferItemComponent } from '../stocking-stuffer-item/stocking-stuffer-item.component';


const stockingStuffersRoutes: Routes = [
    // This sets the URL path to the component 
    {
        path: 'stockingstuffers',
        component: StockingStuffersComponent,
    },
    {
        path: 'stockingstuffers/:id',
        component: StockingStufferItemComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(stockingStuffersRoutes)],
    exports: [RouterModule]
})
export class StockingStuffersRoutingModule {}