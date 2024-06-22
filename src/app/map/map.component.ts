import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
import { Observable } from 'rxjs';
import { City } from '../types/city.types';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  title = 'my-angular-app';
  center: google.maps.LatLngLiteral = { lat: 50.8503, lng: 4.3517 };
  zoom = 5;
  markerPosition: google.maps.LatLngLiteral = this.center;
  selectedCity: City | null = null;
  myPosition: null | google.maps.LatLngLiteral = null;

  listCities$: Observable<City[]> = this.service.getAllCities();

  constructor(private service: CityService) {}

  showCityInfo(city: City) {
    this.selectedCity = city;
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.myPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.markerPosition = this.center;
          this.zoom = 12;
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error(
        "La géolocalisation n'est pas supportée par ce navigateur."
      );
    }
  }
}
