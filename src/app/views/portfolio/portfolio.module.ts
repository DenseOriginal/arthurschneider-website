import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { portfolioRoutingModule } from './portfolio-routing.module';
import { portfolioComponent } from './page/portfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { YtPreviewComponent } from './yt-preview/yt-preview.component';
import { MatDialogModule } from "@angular/material/dialog";
import { YtPlayerComponent } from './yt-player.component';


@NgModule({
  declarations: [portfolioComponent, YtPreviewComponent, YtPlayerComponent],
  imports: [
    CommonModule,
    portfolioRoutingModule,
    HttpClientModule,
    SharedComponentsModule,
    MatDialogModule
  ]
})
export class portfolioModule { }
