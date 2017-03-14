import {Component} from '@angular/core';
const image = require('./ng2-icheck.png');

@Component({
    selector: '[iCheck]',
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
        <div [ngStyle]="{ 'background-image': 'url(' + imageUrl + ') no-repeat left'}" [class.checked]="isChecked"></div>
        <!--<ng-content class="label"></ng-content>-->
    </div>
  `
})

export class ICheckComponent {
    isChecked: boolean = false;
    imageUrl: string = image;
    constructor() {

    }
}
