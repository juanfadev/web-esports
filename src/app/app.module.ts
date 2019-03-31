import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoutcastComponent } from './shoutcast/shoutcast.component';
import {HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { GalleryComponent } from './gallery/gallery.component';
import { SliderComponent } from './slider/slider.component';
import { VideoComponent } from './video/video.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShoutcastComponent,
    GalleryComponent,
    SliderComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
