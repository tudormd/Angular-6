import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth-guard-service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth', pathMatch: 'full'
      },
      {
        path: 'auth',
        canActivate: [AuthGuard],
        loadChildren: './auth/auth.module#AuthModule',
      },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule'
    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutes { }
