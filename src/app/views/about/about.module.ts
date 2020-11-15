import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './page/about.component';
import { SharedComponentsModule } from "../../shared/components/shared-components.module";
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [AboutComponent, CustomerComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedComponentsModule
  ]
})
export class AboutModule { }
