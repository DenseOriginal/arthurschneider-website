import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayout } from './layout/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
      { path: 'about', loadChildren: () => import('./views/about/about.module').then(m => m.AboutModule) },
      { path: 'portfolio', loadChildren: () => import('./views/portfolio/portfolio.module').then(m => m.portfolioModule) },
      { path: 'music', loadChildren: () => import('./views/music/music.module').then(m => m.MusicModule) },
      { path: 'contact', loadChildren: () => import('./views/contact/contact.module').then(m => m.ContactModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
