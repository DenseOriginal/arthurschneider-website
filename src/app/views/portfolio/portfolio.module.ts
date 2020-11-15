import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { portfolioRoutingModule } from './portfolio-routing.module';
import { portfolioComponent } from './page/portfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { YtPreviewComponent } from './yt-preview/yt-preview.component';


@NgModule({
  declarations: [portfolioComponent, YtPreviewComponent],
  imports: [
    CommonModule,
    portfolioRoutingModule,
    HttpClientModule,
    SharedComponentsModule
  ]
})
export class portfolioModule { }
