import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
    {
        path: "",
        component: SingUpComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SingUpRoutingModule { }