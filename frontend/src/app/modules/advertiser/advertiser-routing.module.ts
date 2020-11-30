import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterHouseComponent } from './register-house';
import { NavbarAdvertiserComponent } from './navbar-advertiser';
import { AdvertsComponent } from './adverts';

const routes: Routes = [
    {
        path: "",
        component: NavbarAdvertiserComponent,
        children: [
            {
                path: "register-house",
                component: RegisterHouseComponent
            },
            {
                path: "index",
                component: AdvertsComponent
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdvertiserRoutingModule { }