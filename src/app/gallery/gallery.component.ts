import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  imgSrc: string;
  active: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  loadImage(event: Event): void {
    this.imgSrc = (event.target as HTMLImageElement).src;
    this.active = true;
    // do something with the id...
  }

  close(event: Event): void {
    this.imgSrc = '';
    this.active = false;
  }

}
