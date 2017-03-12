"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ng2_icheck_component_1 = require('./ng2-icheck.component');
var ng2_icheck_component_2 = require('./ng2-icheck.component');
exports.ICheckComponent = ng2_icheck_component_2.ICheckComponent;
var Ng2ICheckModule = (function () {
    function Ng2ICheckModule() {
    }
    Ng2ICheckModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        ng2_icheck_component_1.ICheckComponent,
                    ],
                    providers: [],
                    exports: [
                        ng2_icheck_component_1.ICheckComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2ICheckModule.ctorParameters = function () { return []; };
    return Ng2ICheckModule;
}());
exports.Ng2ICheckModule = Ng2ICheckModule;
