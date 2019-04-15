import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOne'
})
export class FilterOnePipe implements PipeTransform {

  transform(value: any, filter1?: any): any {
    if(filter1=="")
    {
      // return value;
    }
    if(filter1=="25")
    {
       return value.innerHTML='25';
    }
    if(filter1=="50")
    {
     return value.filter(item=>{
       return item=='50';
     });
    }
    if(filter1=="100")
    {
     return value.filter(item=>{
       return item=='100';
     });
    }
    if(filter1=="200")
    {
     return value.filter(item=>{
       return item=='200';
     });
    }
  }

}
