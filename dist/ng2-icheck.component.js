"use strict";
var core_1 = require('@angular/core');
var image = require('/dist/ng2-icheck.png');
var ICheckComponent = (function () {
    function ICheckComponent() {
        this.isChecked = false;
        this.imageUrl = image;
    }
    ICheckComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[iCheck]',
                    styles: ["\n    :host {\n        font-family: \"Consolas\", \"Microsoft YaHei\", Arial, arial, sans-serif;\n        overflow: hidden;\n    }\n  ", "\n    :host > div {\n        width: 22px;\n        height: 22px;\n        display: inline-block;\n        vertical-align: middle;\n    }\n  ", "\n    :host .checked {\n        background-position: -48px 0;\n    }\n  ", "\n    :host .label {\n        display: inline-block;\n        vertical-align: middle;\n    }\n  "],
                    template: "\n    <div (click)=\"isChecked = !isChecked;\" class=\"ng2-icheck\">\n        <div [ngStyle]=\"{ 'background-image': 'url(' + imageUrl + ') no-repeat left'}\" [class.checked]=\"isChecked\"></div>\n        <!--<ng-content class=\"label\"></ng-content>-->\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    ICheckComponent.ctorParameters = function () { return []; };
    return ICheckComponent;
}());
exports.ICheckComponent = ICheckComponent;
