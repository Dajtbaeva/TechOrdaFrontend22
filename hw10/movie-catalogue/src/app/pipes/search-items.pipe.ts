import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from 'src/app/models/movie';

@Pipe({
  name: 'searchItems',
})
export class SearchItemsPipe implements PipeTransform {
  transform(items: IMovie[], search: string): IMovie[] {
    return items.filter((i) =>
      i.name.toLowerCase().includes(search.toString().toLowerCase())
    );
  }
}
