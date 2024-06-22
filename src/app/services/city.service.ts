import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City as City } from '../types/city.types';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private http: HttpClient) {}

  createCity(registerValues: City): Observable<City> {
    return this.http.post<City>('http://localhost:3000/city', registerValues);
  }

  getAllCities(): Observable<City[]> {
    return this.http.get<City[]>('http://localhost:3000/city');
  }

  getCityById(id: string): Observable<City> {
    return this.http.get<City>(`http://localhost:3000/city/${id}`);
  }

  deleteCity(id: string): Observable<City> {
    return this.http.delete<City>(`http://localhost:3000/city/${id}`);
  }

  updateCityById(id: string, city: City): Observable<City> {
    return this.http.put<City>(`http://localhost:3000/city/${id}`, city);
  }
}
