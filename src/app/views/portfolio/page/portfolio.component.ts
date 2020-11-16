import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video, YoutubeChannelResult } from 'src/app/shared/intefaces/youtube.interface';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class portfolioComponent implements OnInit {

  channelVids$: Observable<YoutubeChannelResult>;
  vids$: Observable<Video[]>;

  constructor(private youtubeService: YoutubeService) {
    this.channelVids$ = youtubeService.getVideosForChannel(10);
    this.vids$ = this.channelVids$.pipe(map(results => results.items));
  }

  ngOnInit(): void {
  }

}
