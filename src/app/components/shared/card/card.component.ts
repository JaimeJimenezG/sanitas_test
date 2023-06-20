import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [IonicModule]
})
export class CardComponent {

  @Input() image!: string;

  constructor() { }
}
