import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { UserRoutingModule } from './user/user-routing.module';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module')
            .then((m) => m.HomeModule)
    },
    {
        path: 'user-detail',
        loadChildren: () => import('./user/user.module')
            .then((m) => m.UserModule)
    },
    {
        path: 'user-list',
        loadChildren: () => import('./user/user.module')
            .then((m) => m.UserModule)
    },
    { path: 'login', component: LoginComponent },
    { path: '***', component: NotFoundComponent },
    { path: 'sobre', component: SobreComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        UserRoutingModule
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }