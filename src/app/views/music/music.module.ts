import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './page/music.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';


@NgModule({
  declarations: [MusicComponent],
  imports: [
    CommonModule,
    MusicRoutingModule,
    SharedComponentsModule
  ]
})
export class MusicModule { }
