import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Video } from 'src/app/shared/intefaces/youtube.interface';
import { YtPlayerComponent } from '../yt-player.component';

@Component({
  selector: 'app-yt-preview',
  templateUrl: './yt-preview.component.html',
  styleUrls: ['./yt-preview.component.scss']
})
export class YtPreviewComponent implements OnInit {

  @Input() video: Video;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  triggerYTVideo() {
    console.log(`${this.video.id.videoId} was triggered`);
    
    let dialogRef = this.dialog.open(YtPlayerComponent, {
      data: this.video.id.videoId,
      hasBackdrop: true,
      height: 'fit-content',
      width: 'fit-content',
      panelClass: 'yt-player-dialog'
    });
  }
}
