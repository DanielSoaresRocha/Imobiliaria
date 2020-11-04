import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterHouseComponent } from './register-house';
import { NavbarAdvertiserComponent } from './navbar-advertiser';

const routes: Routes = [
    {
        path: "",
        component: NavbarAdvertiserComponent,
        children: [
            {
                path: "register-house",
                component: RegisterHouseComponent
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdvertiserRoutingModule { }