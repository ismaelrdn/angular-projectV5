import { Pipe, PipeTransform } from '@angular/core';
import { CarI } from 'src/app/core/services/car/models/car.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: CarI[], filterKey: string): CarI[] {

if (!value || !filterKey || filterKey.length < 2 ) {return value; }

    return value?.filter(car => {
      return car.vehicle.toLowerCase().includes(filterKey.toLowerCase());
    });
  }

}
