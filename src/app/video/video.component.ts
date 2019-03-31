import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Input} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass']
})
export class VideoComponent implements OnInit {

  @Input() videoUrl: string;

  video: SafeResourceUrl;
  origin: string;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    // this.videoUrl = 'https://www.youtube.com/watch?v=nLJXEX86318'
    this.parseVideo(this.videoUrl);
  }

  parseVideo(url) {
    if (this.isTwitch(url)) {
      this.video = this.sanitizer.bypassSecurityTrustResourceUrl(`//player.twitch.tv/?channel=${this.isTwitch(url)[1]}`);
      this.origin = 'Twitch';
    } else if (this.isVimeo(url)) {
      this.video = this.sanitizer.bypassSecurityTrustResourceUrl(`//player.vimeo.com/video/${this.isVimeo(url)[2]}`);
      this.origin = 'Vimeo';
    } else if (this.isDM(url)) {
      this.video = this.sanitizer.bypassSecurityTrustResourceUrl(`//www.dailymotion.com/embed/video/${this.isDM(url)[3]}`);
      this.origin = 'DM';
    } else if (this.isYoutube(url)) {
      this.video = this.sanitizer.bypassSecurityTrustResourceUrl(`//www.youtube.com/embed/${this.isYoutube(url)[2]}?wmode=transparent`);
      this.origin = 'Youtube';
    }
  }

  isYoutube = (url) => url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/i);
  isVimeo = url => url.match(/http(s)?:\/\/(?:www\.)?vimeo\.com\/(?:.*#|.*\/videos\/)?([0-9]+)/i);
  isDM = url => url.match(/(http(s)?:\/\/)www\.dailymotion\.com\/video\/([A-Za-z0-9]+)/i);
  isTwitch = url => url.match(/(?:https:\/\/)?\.twitch\.tv\/(\S+)/i);

}
