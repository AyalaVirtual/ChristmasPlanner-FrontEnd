import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecorationsComponent } from './decorations.component';
import { DecorationItemComponent } from '../decoration-item/decoration-item.component';


const decorationsRoutes: Routes = [
    // {
    //     // This sets the URL path to the component 
    //     path: 'decorations',
    //     component: DecorationsComponent,
    //     children: [
    //         {
    //             path: ':id',
    //             component: DecorationItemComponent
    //         },
    //     ]
    // }
    {
        path: 'decorations',
        component: DecorationsComponent,
    },
    {
        path: 'decorations/:id',
        component: DecorationItemComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(decorationsRoutes)],
    exports: [RouterModule]
})
export class DecorationsRoutingModule {}