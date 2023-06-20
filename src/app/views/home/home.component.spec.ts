import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home.component';
import { ImageService } from 'src/app/services/image_service/image.service';
import { Image } from 'src/app/interfaces/image.interface';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let imageService: ImageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      providers: [ImageService]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    imageService = TestBed.inject(ImageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add new images', () => {
    const initialLength = component.images.length;
    component.addNewImages();
    expect(component.images.length).toBeGreaterThan(initialLength);
  });

  it('should get range of images', () => {
    const rangeStart = 0;
    const rangeEnd = 10;
    const images: Image[] = component['imageService'].getRangeOfImages(rangeStart, rangeEnd);
    expect(images.length).toEqual(rangeEnd - rangeStart);
  });
});

