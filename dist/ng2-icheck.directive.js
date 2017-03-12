"use strict";
var core_1 = require('@angular/core');
var HighlightDirective = (function () {
    function HighlightDirective(el) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
    HighlightDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[myHighlight]'
                },] },
    ];
    /** @nocollapse */
    HighlightDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return HighlightDirective;
}());
exports.HighlightDirective = HighlightDirective;
