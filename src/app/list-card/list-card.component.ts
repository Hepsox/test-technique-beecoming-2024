import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityService } from '../services/city.service';
import { Observable } from 'rxjs';
import { City } from '../types/city.types';
import { latitudeAndLongitudeValidator } from '../validators/localisation.validator';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css',
})
export class ListCardComponent {
  formCity!: FormGroup;
  displayForm = false;
  isEditing = false;
  listeCities$: Observable<City[]> = this.service.getAllCities();

  constructor(private fb: FormBuilder, private service: CityService) {}

  onValidate() {
    this.formCity.value.lat = Number(this.formCity.value.lat);
    this.formCity.value.lng = Number(this.formCity.value.lng);

    if (this.isEditing) {
      this.service
        .updateCityById(this.formCity.value.id, this.formCity.value)
        .subscribe(() => {
          this.listeCities$ = this.service.getAllCities();
        });
    } else {
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
    this.isEditing = true;

    this.formCity.patchValue({
      id: city.id,
      country: city.country,
      city: city.city,
      population: city.population,
      lat: city.lat,
      lng: city.lng,
    });
  }

  onAddButtonClick() {
    this.formCity.reset();
    this.isEditing = false;
    this.displayForm = true;
  }

  ngOnInit(): void {
    this.formCity = this.fb.group({
      id: [''],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      population: ['', [Validators.required]],
      lat: ['', [Validators.required, latitudeAndLongitudeValidator()]],
      lng: ['', [Validators.required, latitudeAndLongitudeValidator()]],
    });
  }
}
