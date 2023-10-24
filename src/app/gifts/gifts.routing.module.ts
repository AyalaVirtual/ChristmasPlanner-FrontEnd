import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftsComponent } from './gifts.component';
import { GiftItemComponent } from '../gift-item/gift-item.component';


const giftsRoutes: Routes = [
    {
        // This sets the URL path to the component 
        path: 'gifts',
        component: GiftsComponent,
        children: [
            {
                path: ':id',
                component: GiftItemComponent
            },
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(giftsRoutes)],
    exports: [RouterModule]
})
export class GiftsRoutingModule {}