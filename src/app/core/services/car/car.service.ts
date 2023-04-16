import { Injectable } from '@angular/core';
import { ApiCarService } from './api/api-car.service';
import { ApiCarI, CarI, CarRequestBody } from './models/car.interface';
import { Observable, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private apiCarsService: ApiCarService) {}

  public getCars(): Observable<CarI[]> {
    return this.apiCarsService.getApiCars().pipe(
      filter((cars: CarI[]) => {
        return cars.length > 0;
      })
    );
  }

  public getCarById(id: string): Observable<CarI> {
    return this.apiCarsService.getApiCarById(id);
  }

  public createCar(body: CarRequestBody): Observable<CarI> {
    return this.apiCarsService.createApiCar(body);
  }

  public editCar(body: CarRequestBody, id: string): Observable<CarI> {
    return this.apiCarsService.editApiCar(body, id);
  }

  public deleteCar(id: string): Observable<CarI> {
    return this.apiCarsService.deleteApiCar(id);
  }
}
