import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/welcome",
        pathMatch: "full"
    },
    {
        path: "welcome",
        loadChildren: () => import("./modules/welcome/welcome.module").then(m => m.WelcomeModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }