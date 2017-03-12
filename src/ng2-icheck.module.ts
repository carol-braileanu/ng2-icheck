import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightDirective} from './ng2-icheck.directive';

export {HighlightDirective} from './ng2-icheck.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HighlightDirective,
  ],
  providers: [

  ],
  exports: [
    HighlightDirective
  ]
})
export class Ng2ICheckModule {}
