import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {flatMap, map} from 'rxjs/operators';
import {interval, Observable} from 'rxjs';

@Component({
  selector: 'app-shoutcast',
  templateUrl: './shoutcast.component.html',
  styleUrls: ['./shoutcast.component.sass']
})
export class ShoutcastComponent implements OnInit {
  private streamURL = 'http://156.35.95.91:8000/';
  shoutcastURL = `${this.streamURL};`;
  private shoutcastURLInfo = `${this.streamURL}stats?json=1`;
  private itunesSearchUrl = 'https://itunes.apple.com/search?term=';
  private resolutionRegex = /100x100/;
  nameOfSong: string;
  coverUrl: string;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    // this.nameOfSong =  interval(1000).pipe(flatMap(() => {
    //   return this.httpClient.get<string>(this.shoutcastURLInfo);
    // }));
    // const apiURL = `${this.streamURL}stats?sid=1&json=1`;
    // this.requestJsonp(apiURL);
    this.getStreamInfo(this.shoutcastURLInfo, 'callback');
  }

  requestJsonp(url = `${this.streamURL}stats?json=1`, callback = 'callback') {
    // options.params is an HttpParams object
    this.httpClient.jsonp<{ songtitle: string }>(`${url}`, callback).subscribe(res => this.nameOfSong = res.songtitle);
  }

  getCover(title) {
    return this.httpClient.get(this.itunesSearchUrl + title).subscribe((response: any) => {
      const item = response.results[0];
      if (!item || !item.artworkUrl100) {
        return null;
      }
      this.coverUrl = item.artworkUrl100
    });
  }

  getStreamInfo(url = `${this.streamURL}stats?json=1`, callback = 'callback') {
    this.httpClient.jsonp<{ songtitle: string }>(`${url}`, callback).subscribe(res => {
      this.nameOfSong = res.songtitle;
      return this.getCover(res.songtitle);
    });
  }

}
