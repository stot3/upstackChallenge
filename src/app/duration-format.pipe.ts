import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DurationFormat'
})
export class DurationFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(typeof value === 'number')
    {
        const hours = Math.trunc(value / 3600 );
        value -= hours * 3600
        const minutes = Math.trunc(value / 60);
        value -= minutes * 60
        const seconds = Math.trunc(value);
        return `${hours}:${minutes}:${seconds}`
    }
    else{
        return `00:00:00`
    }
  }

}
