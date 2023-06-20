import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Image } from 'src/app/interfaces/image.interface';
import { CommonModule } from '@angular/common';
import { InfiniteScrollCustomEvent, IonicModule, ModalController } from '@ionic/angular';
import { CardComponent } from '../../shared/card/card.component';
import { ViewerComponent } from '../../shared/card/viewer/viewer.component';

@Component({
  standalone: true,
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  imports: [IonicModule, CommonModule, CardComponent]
})

export class GalleryComponent {

  @Input() imageDataArray: Image[] = []
  @Output() onIonInfiniteTrigger = new EventEmitter<boolean>();

  constructor(private modalController: ModalController) { }

  /**
   * @param {InfiniteScrollCustomEvent} event
   * @memberof GalleryComponent
   * @example onIonInfinite(event: InfiniteScrollCustomEvent);
   * @returns void
   * @description Emits the onIonInfiniteTrigger event
   */
  onIonInfinite(event: Event): void {
    this.onIonInfiniteTrigger.emit(true); // Emits the event to the parent component in order to load more images.
    // Set a time out to simulate the loading time.
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target?.complete();
    }, 500);
  }

  /**
   * @param {Image} imageData
   * @memberof GalleryComponent
   * @example openViewer(imageData: Image);
   * @returns void
   * @description Opens the image viewer
   */
  async openViewer(imageData: Image): Promise<void>{
    const viewer = await this.modalController.create({
      component: ViewerComponent,
      componentProps: imageData,
      cssClass: 'viewer-fullscreen'
    });
    return await viewer.present();
  }
}
