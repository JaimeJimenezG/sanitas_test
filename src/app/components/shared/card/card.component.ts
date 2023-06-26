import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ImageService } from 'src/app/services/image_service/image.service';

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [IonicModule]
})
export class CardComponent {

  @Input() image!: string;

  constructor(private imageService: ImageService) { }

  /**
   * @param {any} event
   * @memberof CardComponent
   * @example onLoadError(event);
   * @returns void
   * @description Sets the default image when the image is not loaded
   */
  onLoadError(event: any): void {
    event.target.src = this.imageService.getDefaultImage().photo;
  }
}
