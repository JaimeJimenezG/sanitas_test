import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Image } from 'src/app/interfaces/image.interface';

@Injectable({
  providedIn: 'platform'
})
export class MockDataService {

  constructor() { }

  /**
   * @returns Image
   * @memberof Mock_data_Service
   * @example createMockImage()
   * @description Creates a mock image
   */
  createMockImage(id: number): Image {
    return {
      id,
      photo: `https://picsum.photos/id/${id}/500/200`,
      text: faker.lorem.sentence()
    };
  }

  /**
   * @returns Image
   * @memberof Mock_data_Service
   *  @example createDefaultImage()
   * @description Creates a default image
   */
  createDefaultImage(): Image {
    // pick a random number between 1 and 10 to get a random image
    const randomId = Math.trunc(Math.floor(Math.random() * (10 - 1 + 1) + 1));
    return {
      id: 0,
      photo: `https://picsum.photos/id/${randomId}/500/200`,
      text: 'Error trying to load the image'
    };
  }

  /**
   * @param {number} numberOfImages
   * @param {number} [indexStartbounce]
   * @returns Image[]
   * @memberof Mock_data_Service
   * @example createMockImages(100)
   * @description Creates a mock images
   */
  createMockImages(numberOfImages: number, indexStartbounce?: number): Image[] {
    const imageDataArray: Image[] = [];
    let indexStart = indexStartbounce || 1;
    let indexEnd = indexStart + numberOfImages || 0;
    for (let index = indexStart; index < indexEnd; index++) {
      imageDataArray.push(this.createMockImage(index));
    }
    return imageDataArray;
  }
}
