import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client'
import { HouseDetailsComponent } from './house-details/house-details.component';
import { NavbarComponent } from './navbar';

const routes: Routes = [
    {
        path: "",
        component: NavbarComponent,
        children: [
            {
                path: "client",
                component: ClientComponent
            },
            {
                path: "house-details/:id",
                component: HouseDetailsComponent
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdvertisementRoutingModule { }