import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { WelcomeComponent } from './layout/welcome/welcome.component'

export const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }