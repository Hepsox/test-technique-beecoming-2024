import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { City as City } from '../types/city.types';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private http: HttpClient) {}
  private _BASE_URL = 'http://localhost:3000/city';

  createCity(registerValues: City): Observable<City> {
    const dataToSend: any = { ...registerValues };
    if (!dataToSend.id) {
      delete dataToSend.id;
    }
    return this.http.post<City>(this._BASE_URL, dataToSend);
  }

  getAllCities(): Observable<City[]> {
    return this.http.get<City[]>(this._BASE_URL);
  }

  deleteCity(id: string): Observable<City> {
    return this.http.delete<City>(`${this._BASE_URL}/${id}`);
  }

  updateCityById(id: string, city: City): Observable<City> {
    return this.http.put<City>(`${this._BASE_URL}/${id}`, city);
  }
}
