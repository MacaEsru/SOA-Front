import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroCampeonComponent } from './registro-campeon/registro-campeon.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'registrocampeon', component: RegistroCampeonComponent,  pathMatch: 'full'},
  { path: 'home', 
  loadChildren: () => 
  import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login', 
  loadChildren: () => 
  import('./auth/login/login.module').then(m => m.LoginModule) }, 
  { path: 'register', 
  loadChildren: () => 
  import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'principal', loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
