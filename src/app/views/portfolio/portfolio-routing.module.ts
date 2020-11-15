import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { portfolioComponent } from './page/portfolio.component';

const routes: Routes = [{ path: '', component: portfolioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class portfolioRoutingModule { }
