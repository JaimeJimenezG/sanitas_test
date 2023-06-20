import { TestBed } from '@angular/core/testing';
import { MockDataService } from './mock_data.service';

describe('MockDataService', () => {
  let service: MockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockDataService]
    });
    service = TestBed.inject(MockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a mock image', () => {
    const mockImage = service.createMockImage(1);
    expect(mockImage).toBeDefined();
    expect(mockImage.id).toBe(1);
    expect(mockImage.photo).toContain('https://picsum.photos/id/1/500/200');
    expect(mockImage.text).toBeDefined();
  });

  it('should create a default image', () => {
    const defaultImage = service.createDefaultImage();
    expect(defaultImage).toBeDefined();
    expect(defaultImage.id).toBe(0);
    expect(defaultImage.photo).toContain('https://picsum.photos/id/1/500/200');
    expect(defaultImage.text).toBe('Error trying to load the image');
  });

  it('should create an array of mock images', () => {
    const mockImages = service.createMockImages(3, 1);
    expect(mockImages).toBeDefined();
    expect(Array.isArray(mockImages)).toBe(true);
    expect(mockImages.length).toBe(3);
    expect(mockImages[0].id).toBe(1);
    expect(mockImages[1].id).toBe(2);
    expect(mockImages[2].id).toBe(3);
  });
});
