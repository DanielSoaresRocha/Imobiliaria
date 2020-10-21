import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterHouseComponent } from './register-house';
import { NavbarAdvertiserComponent } from './navbar-advertiser';
import { AboutComponent } from './register-house/about/about.component';
import { PriceComponent } from './register-house/price/price.component';
import { PhotosComponent } from './register-house/photos/photos.component';
import { FinishComponent } from './register-house/finish/finish.component';

const routes: Routes = [
    {
        path: "",
        component: NavbarAdvertiserComponent,
        children: [
            {
                path: "register-house",
                component: RegisterHouseComponent,
                children: [
                    {
                        path: "about",
                        component: AboutComponent
                    },
                    {
                        path: "price",
                        component: PriceComponent
                    },
                    {
                        path: "photos",
                        component: PhotosComponent
                    },
                    {
                        path: "finish",
                        component: FinishComponent
                    }
                ]
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdvertiserRoutingModule { }