import {Component} from '@angular/core';

@Component({
    selector: 'iCheck',
    styles: [`
    :host {
        font-family: "Consolas", "Microsoft YaHei", Arial, arial, sans-serif;
        overflow: hidden;
    }
  `,`
    :host > div {
        width: 22px;
        height: 22px;
        display: inline-block;
        vertical-align: middle;
        background: url('ng2-icheck.png') no-repeat left;
    }
  `,`
    :host .checked {
        background-position: -48px 0;
    }
  `,`
    :host .label {
        display: inline-block;
        vertical-align: middle;
    }
  `],
    template: `
    <div (click)="isChecked = !isChecked;" class="ng2-icheck">
        <div [class.checked]="isChecked"></div>
        <!--<ng-content class="label"></ng-content>-->
    </div>
  `
})

export class ICheckComponent {
    isChecked: boolean = false;
    constructor() {

    }
}
