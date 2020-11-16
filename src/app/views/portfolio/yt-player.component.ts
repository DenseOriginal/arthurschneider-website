import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-yt-player',
  template: `
    <iframe 
      width="560" 
      height="315" 
      [src]="ytLink" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  `,
  styles: [
    `.yt-player-dialog .mat-dialog-container {
      padding: 0px;
    }`,
    `.yt-player-dialog app-yt-player {
      display: flex;
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class YtPlayerComponent implements OnInit {

  ytLink: SafeUrl;
  constructor(
    @Inject(MAT_DIALOG_DATA) public videoId: string,
    private domSanitizer: DomSanitizer
  ) {
    this.ytLink = domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoId);
  }

  ngOnInit(): void {
  }

}
