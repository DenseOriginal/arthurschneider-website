import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { YoutubeChannelResult } from "../../../shared/intefaces/youtube.interface";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private apiKey = 'AIzaSyBsD5zcccA0MLGK19hTDR-fIPhiMmEg8x0';
  channel = 'UCKJHjnmBAM1wKRWUiHtSoUQ';

  constructor(private httpClient: HttpClient) { }

  getVideosForChannel(maxResults): Observable<YoutubeChannelResult> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + this.channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.httpClient.get(url).pipe(tap(console.log));
  }
}
