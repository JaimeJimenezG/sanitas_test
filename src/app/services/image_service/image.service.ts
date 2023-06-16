import { Injectable } from '@angular/core';
import { MockDataService } from '../mock_data_service/mock_data.service';
import { Image } from 'src/app/interfaces/image.interface';

@Injectable({
  providedIn: 'root' // TODO: Change to the correct module
})
export class ImageService {

  private images = this.mockDataService.createMockImages(100); // 4000 is the number of images to be generated

  constructor(private mockDataService: MockDataService ) { }


  /**
   * @returns Image[]
   * @memberof ImageService
   * @description Returns the images array
   */
  getImages(): Image[] {
    return this.images;
  }

  /**
   * @param {number} id
   * @returns Image
   * @memberof ImageService
   * @description Returns the image with the given id
   */
  getImage(id: number): Image {
    return this.images[id];
  }

  /**
   * @param {number} numberOfImages
   * @memberof ImageService
   * @description Adds the given number of images to the images array
   * @example addImages(100);
   * @returns void
   */
  addImages(startindex: number, numberOfImages: number): void {
    const newImages = this.mockDataService.createMockImages(numberOfImages, startindex);
    this.images.push(...newImages);
  }

  /**
   * @param {number} start
   * @param {number} end
   * @returns Image[]
   * @memberof ImageService
   * @description Returns a range of images
   * @example getRangeofImages(0, 10);
   */
  getRangeOfImages(start: number, end: number): Image[] {
    console.log(start, end)
    return this.images.slice(start, end);
  }

  /**
   * @returns Image
   * @memberof ImageService
   * @description Returns the default image
   * @example getDefaultImage();
   * @returns Image
   */
  getDefaultImage(): Image {
    return this.mockDataService.createDefaultImage();
  }
}
