import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LoginScreenComponent } from './login-screen/login-screen.component';

const routes: Routes = [
    {
        path: "",
        component: LoginScreenComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }