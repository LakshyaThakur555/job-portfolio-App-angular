"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApplicationService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ApplicationService = /** @class */ (function () {
    function ApplicationService() {
    }
    // Simulate application submission
    ApplicationService.prototype.submitApplication = function (applicationData) {
        console.log('Submitting application...', applicationData);
        // Here, you'd typically send the application to your backend API.
        // For this example, we simulate a successful submission with `of`.
        return rxjs_1.of({ success: true });
    };
    ApplicationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApplicationService);
    return ApplicationService;
}());
exports.ApplicationService = ApplicationService;
