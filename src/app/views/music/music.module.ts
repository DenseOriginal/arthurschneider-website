import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './page/music.component';


@NgModule({
  declarations: [MusicComponent],
  imports: [
    CommonModule,
    MusicRoutingModule
  ]
})
export class MusicModule { }
