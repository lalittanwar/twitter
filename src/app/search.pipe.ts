import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any, token:string): any {
    
    if(!items) return [];
    if(!token) return items;


    token=token.toLowerCase();

    return items.filter( it => {
      return it.title.includes(token);
    });
   } 

}
