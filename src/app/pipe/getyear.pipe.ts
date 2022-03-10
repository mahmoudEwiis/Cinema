import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getyear'
})
export class GetyearPipe implements PipeTransform {

  transform(release_date: string): string {
    return release_date.substring(0,4);
  }

}
