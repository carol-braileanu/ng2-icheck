import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: '[iCheck]',
    templateUrl: './ng2-icheck.html',
    styleUrls:  ['./ng2-icheck.css']
})

export class ICheckComponent {
    isChecked: false;
    constructor() {

    }
}
