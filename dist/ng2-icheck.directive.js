"use strict";
var core_1 = require('@angular/core');
var ICheckDirective = (function () {
    function ICheckDirective(el) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
    ICheckDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[iCheck]'
                },] },
    ];
    /** @nocollapse */
    ICheckDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return ICheckDirective;
}());
exports.ICheckDirective = ICheckDirective;
