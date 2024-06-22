import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPopulation',
})
export class FormatPopulationPipe implements PipeTransform {
  transform(population: number): string {
    if (population >= 1000000) {
      return `${(population / 1000000).toFixed(1)} millions`;
    } else {
      return `${population} habitants`;
    }
  }
}
