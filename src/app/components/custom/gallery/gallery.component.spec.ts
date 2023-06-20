import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Image } from 'src/app/interfaces/image.interface';
import { InfiniteScrollCustomEvent } from '@ionic/core';
import { GalleryComponent } from './gallery.component';
import { ViewerComponent } from '../../shared/card/viewer/viewer.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), CommonModule],
      providers: [ModalController]
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onIonInfiniteTrigger event', () => {
    spyOn(component.onIonInfiniteTrigger, 'emit');
    const event = new Event('test') as InfiniteScrollCustomEvent;
    component.onIonInfinite(event);
    expect(component.onIonInfiniteTrigger.emit).toHaveBeenCalledWith(true);
  });

  it('should open viewer', async () => {
    // may not work
    spyOn(component['modalController'], 'create').and.callThrough();
    const imageData: Image = { id: 1, photo: 'https://example.com/image.jpg', text: 'Random Text' };
    await component.openViewer(imageData);
    expect(component['modalController'].create).toHaveBeenCalledWith({
      component: ViewerComponent,
      componentProps: imageData,
      cssClass: 'viewer-fullscreen'
    });
  });
});
