import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { portfolioRoutingModule } from './portfolio-routing.module';
import { portfolioComponent } from './page/portfolio.component';


@NgModule({
  declarations: [portfolioComponent],
  imports: [
    CommonModule,
    portfolioRoutingModule
  ]
})
export class portfolioModule { }
