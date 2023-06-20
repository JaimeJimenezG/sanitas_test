import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from '../card.component';
import { ModalController } from '@ionic/angular';
import { ViewerComponent } from './viewer.component';

describe('ViewerComponent', () => {
  let component: ViewerComponent;
  let fixture: ComponentFixture<ViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      providers: [ModalController]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close modal', async () => {
    // May not work
    spyOn(component['modalCtrl'], 'dismiss');
    await component.close();
    expect(component['modalCtrl'].dismiss).toHaveBeenCalledWith(null, 'cancel');
  });
});
