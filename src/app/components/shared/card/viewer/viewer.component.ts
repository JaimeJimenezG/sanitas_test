import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from '../card.component';
import { ModalController } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
  imports: [IonicModule, CardComponent]
})
export class ViewerComponent {

  @Input() id!: number;
  @Input() photo!: string;
  @Input() text!: string;

  constructor(private modalCtrl: ModalController) { }

  close(): Promise<boolean> {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
