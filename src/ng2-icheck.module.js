"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const ng2_icheck_directive_1 = require("./ng2-icheck.directive");
var ng2_icheck_directive_2 = require("./ng2-icheck.directive");
exports.HighlightDirective = ng2_icheck_directive_2.HighlightDirective;
let Ng2ICheckModule = class Ng2ICheckModule {
};
Ng2ICheckModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [
            ng2_icheck_directive_1.HighlightDirective,
        ],
        providers: [],
        exports: [
            ng2_icheck_directive_1.HighlightDirective
        ]
    })
], Ng2ICheckModule);
exports.Ng2ICheckModule = Ng2ICheckModule;
//# sourceMappingURL=ng2-icheck.module.js.map