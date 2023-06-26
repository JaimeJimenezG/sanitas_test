import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GalleryComponent } from 'src/app/components/custom/gallery/gallery.component';
import { Image } from 'src/app/interfaces/image.interface';
import { ImageService } from 'src/app/services/image_service/image.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [IonicModule, GalleryComponent],
  providers: [ImageService]
})
export class HomeComponent implements OnInit {

  imageIndex: number = 0;
  imageIndexIncrement: number = 100;

  images: Image[] = this.imageService.getRangeOfImages(this.imageIndex, (this.imageIndex+this.imageIndexIncrement))

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  /**
   * @memberof HomeComponent
   * @example addNewImages();
   * @returns void
   * @description Adds new images to the images array
   */
  addNewImages(): void {
    this.imageIndex += this.imageIndexIncrement;
    this.imageService.addImages(this.imageIndex, this.imageIndexIncrement);
    this.images.push(...this.imageService.getRangeOfImages(this.imageIndex, (this.imageIndex+this.imageIndexIncrement)));
  }
}
