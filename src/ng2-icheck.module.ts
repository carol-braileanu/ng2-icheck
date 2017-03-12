import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ICheckComponent} from './ng2-icheck.component';

export {ICheckComponent} from './ng2-icheck.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ICheckComponent,
  ],
  providers: [

  ],
  exports: [
    ICheckComponent
  ]
})
export class Ng2ICheckModule {}
