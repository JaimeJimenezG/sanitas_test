import { TestBed } from '@angular/core/testing';
import { ImageService } from './image.service';
import { MockDataService } from '../mock_data_service/mock_data.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageService, MockDataService]
    });
    service = TestBed.inject(ImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of images', () => {
    const images = service.getImages();
    expect(images).toBeDefined();
    expect(Array.isArray(images)).toBe(true);
    expect(images.length).toBeGreaterThan(0);
  });

  it('should return an image with the given id', () => {
    const image = service.getImage(1);
    expect(image).toBeDefined();
    expect(image?.id).toBe(1);
  });

  it('should add new images to the images array', () => {
    const initialLength = service.getImages().length;
    service.addImages(initialLength, 3);
    const newLength = service.getImages().length;
    expect(newLength).toBe(initialLength + 3);
  });

  it('should return a range of images', () => {
    const range = service.getRangeOfImages(0, 3);
    expect(range).toBeDefined();
    expect(Array.isArray(range)).toBe(true);
    expect(range.length).toBe(3);
    expect(range[0].id).toBe(1);
    expect(range[1].id).toBe(2);
    expect(range[2].id).toBe(3);
  });

  it('should return the default image', () => {
    const defaultImage = service.getDefaultImage();
    expect(defaultImage).toBeDefined();
    expect(defaultImage.id).toBe(0);
    expect(defaultImage.photo).toContain('https://picsum.photos/id/1/500/200');
    expect(defaultImage.text).toBe('Error trying to load the image');
  });
});
