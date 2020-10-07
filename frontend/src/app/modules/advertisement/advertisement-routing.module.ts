import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client'
import { NavbarComponent } from './navbar';

const routes: Routes = [
    {
        path: "",
        component: NavbarComponent,
        children: [
            {
                path: "client",
                component: ClientComponent
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdvertisementRoutingModule { }