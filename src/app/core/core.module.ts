import { NgModule } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
  declarations: [],
  imports: [
    OverlayModule
  ],
  providers: [
    LoadingService
  ]
})
export class CoreModule {
  constructor(private loadingService: LoadingService) {}
}
