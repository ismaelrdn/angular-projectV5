import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCarI, CarRequestBody } from '../models/car.interface';

const API_URL = 'https://642801cb161067a83b04fba6.mockapi.io/api/v1';

@Injectable({
  providedIn: 'root'
})
export class ApiCarService {

  constructor(
   
    private http: HttpClient 

  ) { }

  public getApiCars(): Observable<ApiCarI[]> {
    return this.http.get<ApiCarI[]>(`${API_URL}/vehicles`);
  }

public getApiCarById(id: string): Observable<ApiCarI> {
  return this.http.get<ApiCarI>(`${API_URL}/vehicles/${id}`)
}


public createApiCar(body: CarRequestBody): Observable<ApiCarI> {
  return this.http.post<ApiCarI>(`${API_URL}/vehicles`, body);
}

public editApiCar(body: CarRequestBody, id: string): Observable<ApiCarI> {
  return this.http.put<ApiCarI>(
    `${API_URL}/vehicles/${id}`,
    body
  )
}

public deleteApiCar(id: string): Observable<ApiCarI> {
  return this.http.delete<ApiCarI>(`${API_URL}/vehicles/${id}`)
}

}
