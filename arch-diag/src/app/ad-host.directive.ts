import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[AdHost]'
})
export class AdHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
