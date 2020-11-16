import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { YoutubeChannelResult } from "../../../shared/intefaces/youtube.interface";
import * as rawData from "../../../data/youtube-data.json";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  // private apiKey = 'AIzaSyBsD5zcccA0MLGK19hTDR-fIPhiMmEg8x0';
  private apiKey = 'AIzaSyA_zR5frjH2SVlXEju8JoI0IXfrCe_PYuI';
  channel = 'UCKJHjnmBAM1wKRWUiHtSoUQ';

  constructor(private httpClient: HttpClient) { }

  getVideosForChannel(maxResults): Observable<YoutubeChannelResult> {
    // let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + this.channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    // return this.httpClient.get(url).pipe(tap(console.log));
    let data = JSON.parse(JSON.stringify(rawData)).default;
    return of(data);
    
  }
}