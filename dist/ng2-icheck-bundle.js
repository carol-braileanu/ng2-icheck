var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("ng2-icheck.component", ['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var image, ICheckComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            image = require('./ng2-icheck.png');
            ICheckComponent = (function () {
                function ICheckComponent() {
                    this.isChecked = false;
                    this.imageUrl = image;
                }
                ICheckComponent = __decorate([
                    core_1.Component({
                        selector: '[iCheck]',
                        styles: ["\n    :host {\n        font-family: \"Consolas\", \"Microsoft YaHei\", Arial, arial, sans-serif;\n        overflow: hidden;\n    }\n  ", "\n    :host > div {\n        width: 22px;\n        height: 22px;\n        display: inline-block;\n        vertical-align: middle;\n    }\n  ", "\n    :host .checked {\n        background-position: -48px 0;\n    }\n  ", "\n    :host .label {\n        display: inline-block;\n        vertical-align: middle;\n    }\n  "],
                        template: "\n    <div (click)=\"isChecked = !isChecked;\" class=\"ng2-icheck\">\n        <div [ngStyle]=\"{ 'background-image': 'url(' + imageUrl + ') no-repeat left'}\" [class.checked]=\"isChecked\"></div>\n        <!--<ng-content class=\"label\"></ng-content>-->\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ICheckComponent);
                return ICheckComponent;
            }());
            exports_1("ICheckComponent", ICheckComponent);
        }
    }
});
System.register("ng2-icheck.module", ['@angular/core', '@angular/common', "ng2-icheck.component"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2, common_1, ng2_icheck_component_1;
    var Ng2ICheckModule;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_icheck_component_1_1) {
                ng2_icheck_component_1 = ng2_icheck_component_1_1;
                exports_2({
                    "ICheckComponent": ng2_icheck_component_1_1["ICheckComponent"]
                });
            }],
        execute: function() {
            Ng2ICheckModule = (function () {
                function Ng2ICheckModule() {
                }
                Ng2ICheckModule = __decorate([
                    core_2.NgModule({
                        imports: [common_1.CommonModule],
                        declarations: [
                            ng2_icheck_component_1.ICheckComponent,
                        ],
                        providers: [],
                        exports: [
                            ng2_icheck_component_1.ICheckComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Ng2ICheckModule);
                return Ng2ICheckModule;
            }());
            exports_2("Ng2ICheckModule", Ng2ICheckModule);
        }
    }
});
