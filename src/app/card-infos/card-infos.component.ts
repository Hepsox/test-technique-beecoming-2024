import { Component, Input } from '@angular/core';
import { City } from '../types/city.types';

@Component({
  selector: 'app-card-infos',
  templateUrl: './card-infos.component.html',
  styleUrl: './card-infos.component.css',
})
export class CardInfosComponent {
  @Input()
  city!: City;
}
