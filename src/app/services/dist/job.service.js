"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JobService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var JobService = /** @class */ (function () {
    function JobService() {
    }
    JobService.prototype.getJobs = function () {
        var jobs = [
            {
                id: 1,
                title: 'Software Engineer',
                company: 'Tech Corp',
                description: 'We are looking for a Software Engineer with 3+ years of experience in Angular and TypeScript.',
                location: 'MUMBAI',
                postedDate: new Date('2024-10-10'),
                isApplying: false
            },
            {
                id: 2,
                title: 'Frontend Developer',
                company: 'Creative Solutions',
                description: 'Join our dynamic team as a Frontend Developer with proficiency in HTML, CSS, and Angular.',
                location: 'DELHI',
                postedDate: new Date('2024-10-15'),
                isApplying: false
            },
            {
                id: 3,
                title: 'Backend Developer',
                company: 'InnovateX',
                description: 'We need a Backend Developer with experience in Node.js, Express, and MongoDB.',
                location: 'CHANDIGARH',
                postedDate: new Date('2024-10-18'),
                isApplying: false
            }
        ];
        return rxjs_1.of(jobs); // Simulating an Observable from an API response
    };
    JobService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], JobService);
    return JobService;
}());
exports.JobService = JobService;
