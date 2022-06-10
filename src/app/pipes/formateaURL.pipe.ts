import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatLinks'
})
export class FormatLinksPipe implements PipeTransform {

  transform(value: String): String {
      return value.replace(' ', '-').toLowerCase();
  }

}