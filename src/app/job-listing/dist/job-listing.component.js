"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JobListingComponent = void 0;
var core_1 = require("@angular/core");
var JobListingComponent = /** @class */ (function () {
    function JobListingComponent(jobService, applicationService) {
        this.jobService = jobService;
        this.applicationService = applicationService;
        this.jobs = [];
        this.name = '';
        this.email = '';
        this.coverLetter = '';
        this.currentJob = null;
    }
    JobListingComponent.prototype.ngOnInit = function () {
        this.fetchJobs();
    };
    JobListingComponent.prototype.fetchJobs = function () {
        var _this = this;
        this.jobService.getJobs().subscribe(function (jobs) {
            _this.jobs = jobs;
        });
    };
    JobListingComponent.prototype.applyForJob = function (job) {
        job.isApplying = !job.isApplying;
        if (job.isApplying) {
            this.resetForm();
            this.currentJob = job;
        }
        else {
            this.currentJob = null; // Clear current job when cancelled
        }
    };
    // Reset form fields when a new job is being applied for
    JobListingComponent.prototype.resetForm = function () {
        this.name = '';
        this.email = '';
        this.coverLetter = '';
    };
    // Handle form submission
    JobListingComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.name && this.email && this.coverLetter) {
            var applicationData = {
                jobId: this.currentJob.id,
                name: this.name,
                email: this.email,
                coverLetter: this.coverLetter
            };
            // Submit the application via the ApplicationService
            this.applicationService.submitApplication(applicationData).subscribe(function (response) {
                if (response.success) {
                    alert('Application successfully submitted for Job: ' + _this.currentJob.title);
                    _this.currentJob.isApplying = false; // Hide the form after submission
                    _this.currentJob = null;
                }
                else {
                    console.log('Failed to submit application');
                }
            });
        }
        else {
            console.log('Form is invalid');
        }
    };
    // View job details logic (placeholder, can be extended)
    JobListingComponent.prototype.viewDetails = function (jobId) {
        console.log('Viewing details for job ID:', jobId);
    };
    JobListingComponent = __decorate([
        core_1.Component({
            selector: 'app-job-listing',
            templateUrl: './job-listing.component.html',
            styleUrls: ['./job-listing.component.css']
        })
    ], JobListingComponent);
    return JobListingComponent;
}());
exports.JobListingComponent = JobListingComponent;
