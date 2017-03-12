var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("ng2-icheck.directive", ['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HighlightDirective = (function () {
                function HighlightDirective(el) {
                    el.nativeElement.style.backgroundColor = 'yellow';
                }
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});
System.register("ng2-icheck.module", ['@angular/core', '@angular/common', "ng2-icheck.directive"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2, common_1, ng2_icheck_directive_1;
    var Ng2ICheckModule;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_icheck_directive_1_1) {
                ng2_icheck_directive_1 = ng2_icheck_directive_1_1;
                exports_2({
                    "HighlightDirective": ng2_icheck_directive_1_1["HighlightDirective"]
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
                            ng2_icheck_directive_1.HighlightDirective,
                        ],
                        providers: [],
                        exports: [
                            ng2_icheck_directive_1.HighlightDirective
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