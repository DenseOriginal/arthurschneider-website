import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/intefaces/youtube.interface';

@Component({
  selector: 'app-yt-preview',
  templateUrl: './yt-preview.component.html',
  styleUrls: ['./yt-preview.component.scss']
})
export class YtPreviewComponent implements OnInit {

  @Input() video: Video;

  constructor() { }

  ngOnInit(): void {
  }

}
