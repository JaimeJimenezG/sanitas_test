import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Image } from 'src/app/interfaces/image.interface';
import { ViewerComponent } from './viewer/viewer.component';
import { CommonModule } from '@angular/common';
import { InfiniteScrollCustomEvent, IonicModule } from '@ionic/angular';
import { ImageComponent } from './image/image.component';

@Component({
  standalone: true,
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  imports: [IonicModule, ViewerComponent, CommonModule, ImageComponent]
})
export class GalleryComponent implements OnInit {

  @Input() imageDataArray: Image[] = []
  @Output() onIonInfiniteTrigger = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * @param {InfiniteScrollCustomEvent} event
   * @memberof GalleryComponent
   * @example onIonInfinite(event: InfiniteScrollCustomEvent);
   * @returns void
   * @description Emits the onIonInfiniteTrigger event
   */
  onIonInfinite(event: Event): void {
    this.onIonInfiniteTrigger.emit(true);
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 500);  }

}
