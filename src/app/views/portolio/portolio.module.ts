import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortolioRoutingModule } from './portolio-routing.module';
import { PortolioComponent } from './page/portolio.component';


@NgModule({
  declarations: [PortolioComponent],
  imports: [
    CommonModule,
    PortolioRoutingModule
  ]
})
export class PortolioModule { }
