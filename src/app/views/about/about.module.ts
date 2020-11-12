import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './page/about.component';
import { SharedComponentsModule } from "../../shared/components/shared-components.module";


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedComponentsModule
  ]
})
export class AboutModule { }
