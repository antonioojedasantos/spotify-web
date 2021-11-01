import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from '@modules/home/pages/home-pages/home-pages.component';

const routes: Routes = [
  {
    path: 'auth',//TODO: localhost
    loadChildren :  () => import('./modules/auth/auth.module').then(m => m.AuthModule)  //TODO: carga perezosa 
  },
  {
    path: '',//TODO: localhost
    component: HomePagesComponent,
    loadChildren :  () => import('./modules/home/home.module').then(m => m.HomeModule)  //TODO: carga perezosa 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
