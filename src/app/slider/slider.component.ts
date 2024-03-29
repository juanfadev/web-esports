import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {

  slider: string[];
  imgSrc: string;
  private index = 0;

  constructor() {
  }

  ngOnInit() {
    this.slider = ['assets/big/img1.jpg', 'assets/big/img2.jpg', 'assets/big/img3.jpg'];
    this.imgSrc = this.slider[0];
    setInterval(() => this.nextImg(), 10000);
  }

  left(event: Event): void {
    if (this.index !== 0) {
      this.index--;
    } else {
      this.index = this.slider.length - 1;
    }
    this.imgSrc = this.slider[this.index];
  }

  right(event: Event): void {
    if (this.index < this.slider.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
    this.imgSrc = this.slider[this.index];
  }

  nextImg(): void {
    if (this.index < this.slider.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
    this.imgSrc = this.slider[this.index];
  }

}
