import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface HTMLEvent<T> extends Event {
  target: EventTarget & T;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('video') videoElm: ElementRef<HTMLVideoElement>;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    // this.videoElm.nativeElement.muted = true;
    // this.videoElm.nativeElement.play();
  }

  playVideo(video: HTMLEvent<HTMLVideoElement>): void {
    video.target.muted = true;
    video.target.play();
  }
}
