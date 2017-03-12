"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ng2_icheck_directive_1 = require('./ng2-icheck.directive');
var ng2_icheck_directive_2 = require('./ng2-icheck.directive');
exports.HighlightDirective = ng2_icheck_directive_2.HighlightDirective;
var Ng2ICheckModule = (function () {
    function Ng2ICheckModule() {
    }
    Ng2ICheckModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        ng2_icheck_directive_1.HighlightDirective,
                    ],
                    providers: [],
                    exports: [
                        ng2_icheck_directive_1.HighlightDirective
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2ICheckModule.ctorParameters = function () { return []; };
    return Ng2ICheckModule;
}());
exports.Ng2ICheckModule = Ng2ICheckModule;
