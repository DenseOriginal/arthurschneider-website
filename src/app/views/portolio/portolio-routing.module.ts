import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortolioComponent } from './page/portolio.component';

const routes: Routes = [{ path: '', component: PortolioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortolioRoutingModule { }
