import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayout } from './layout/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
