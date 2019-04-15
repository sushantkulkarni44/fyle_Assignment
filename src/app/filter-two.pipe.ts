import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTwo'
})
export class FilterTwoPipe implements PipeTransform {

  transform(value: any, filter2?: any): any {
    if(filter2.checked == true)
    {
        return value/2;
    }
    else
    {
      return value;
    }
  }

}
