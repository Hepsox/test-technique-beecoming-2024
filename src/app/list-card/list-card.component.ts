import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CityService } from '../services/city.service';
import { Observable } from 'rxjs';
import { City } from '../types/city.types';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css',
})
export class ListCardComponent {
  formCity!: FormGroup;
  displayForm = false;
  constructor(private fb: FormBuilder, private service: CityService) {}

  listeCities$: Observable<City[]> = this.service.getAllCities();

  onValidate() {
    if (this.formCity.valid) {
      this.service.createCity(this.formCity.value).subscribe((city) => {
        this.listeCities$ = this.service.getAllCities();
      });
    }
    this.displayForm = false;
  }

  deleteCity(id: string) {
    this.service.deleteCity(id).subscribe(() => {
      this.listeCities$ = this.service.getAllCities();
    });
  }

  goToUpdate(city: City) {
    this.displayForm = true;
    this.formCity = this.fb.group({
      id: city.id,
      country: city.country,
      city: city.city,
      population: city.population,
      latitude: city.latitude,
      longitude: city.longitude,
    });

    this.service.updateCityById(city.id, this.formCity.value).subscribe(() => {
      this.listeCities$ = this.service.getAllCities();
    });
  }

  ngOnInit(): void {
    this.formCity = this.fb.group({
      id: [''],
      country: [''],
      city: [''],
      population: [''],
      latitude: [''],
      longitude: [''],
    });
  }
}
