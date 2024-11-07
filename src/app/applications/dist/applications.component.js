"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApplicationsComponent = void 0;
var core_1 = require("@angular/core");
var ApplicationsComponent = /** @class */ (function () {
    function ApplicationsComponent() {
        // Sample applications data
        this.applications = [
            {
                id: 1,
                jobTitle: 'Frontend Developer',
                companyName: 'Tech Corp',
                appliedDate: new Date('2024-09-15'),
                status: 'Under Review',
                companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9UCBtO1xeRnNJ6hhcIE0dXGEszNg_vDwQQ&s'
            },
            {
                id: 2,
                jobTitle: 'Backend Developer',
                companyName: 'Innovate Solutions',
                appliedDate: new Date('2024-09-20'),
                status: 'Interview Scheduled',
                companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzPFGyg8JCSEJwPbZmGPbAjkvmaK6DMrxPg&s'
            },
            {
                id: 3,
                jobTitle: 'Full Stack Engineer',
                companyName: 'Creative Minds',
                appliedDate: new Date('2024-10-05'),
                status: 'Rejected',
                companyLogo: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/corporate-company-logo-design-template-2402e0689677112e3b2b6e0f399d7dc3_screen.jpg?ts=1561532453'
            }
        ];
    }
    ApplicationsComponent.prototype.ngOnInit = function () { };
    ApplicationsComponent.prototype.getStatusClass = function (status) {
        switch (status) {
            case 'Under Review':
                return 'status-under-review';
            case 'Interview Scheduled':
                return 'status-interview';
            case 'Rejected':
                return 'status-rejected';
            default:
                return '';
        }
    };
    ApplicationsComponent.prototype.viewDetails = function (id) {
        // Handle viewing application details
        console.log("Viewing details for application ID: " + id);
    };
    ApplicationsComponent.prototype.withdrawApplication = function (id) {
        // Handle application withdrawal logic
        this.applications = this.applications.filter(function (application) { return application.id !== id; });
        console.log("Application with ID: " + id + " withdrawn.");
    };
    ApplicationsComponent = __decorate([
        core_1.Component({
            selector: 'app-applications',
            templateUrl: './applications.component.html',
            styleUrls: ['./applications.component.css']
        })
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());
exports.ApplicationsComponent = ApplicationsComponent;
