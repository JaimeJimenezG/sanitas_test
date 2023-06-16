import { Directive } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'img[default]',
  host: {
    '(error)':'updateUrl()',
    '[src]':'src'
   }
})
export class ImageDirective {

  constructor() { }

}
