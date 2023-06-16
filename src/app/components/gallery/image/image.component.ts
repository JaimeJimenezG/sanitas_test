import { Component, Directive, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/interfaces/image.interface';
import { ImageDirective } from '../directives/image.directive';
import { ImageService } from 'src/app/services/image_service/image.service';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  imports: [ImageDirective, IonicModule]
})

export class ImageComponent implements OnInit {

  @Input() image = {} as Image;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }


  /**
   * @memberof ImageComponent
   * @example updateUrl();
   * @returns void
   * @description Updates the image url
   */
  updateUrl(): void {
    this.image = this.imageService.getDefaultImage();
  }

  /**
   * @param {Image} image
   * @memberof ImageComponent
   * @example openImageViewer(image: Image);
   * @returns void
   * @description Opens the image viewer
   * @todo Implement this method
   */
  openImageViewer(image: Image): void {
    console.log(image);
  }

}
