import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

const ICONS: Array<{
  iconName: string,
  url: string
}> = [
    {
      iconName: 'facebook-alt',
      url: '/assets/facebook-logo.svg'
    },
    {
      iconName: 'twitter',
      url: '/assets/twitter-logo.svg'
    },
    {
      iconName: 'youtube',
      url: '/assets/youtube-logo.svg'
    }
  ]

@NgModule({
  declarations: [],
  imports: [
    MatIconModule,
    HttpClientModule
  ]
})
export class CustomIconsModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    ICONS.forEach(icon => {
      this.matIconRegistry.addSvgIcon(
        icon.iconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.url)
      );
    });
  }
}
