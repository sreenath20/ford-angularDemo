import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UpperPipe implements PipeTransform {

  transform(value: String,param? :string): String {
    if(param === 'up')
    return value.toLocaleUpperCase();
    else
    if(param==='lo')
    return value.toLocaleLowerCase();

    return value;
  }

}
