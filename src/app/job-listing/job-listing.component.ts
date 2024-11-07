import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {

  jobs: any[] = [];  
  name: string = ''; 
  email: string = ''; 
  coverLetter: string = ''; 
  currentJob: any = null; 

  constructor(
    private jobService: JobService,         
    private applicationService: ApplicationService 
  ) {}

  ngOnInit(): void {
    this.fetchJobs();  
  }

  
  fetchJobs(): void {
    this.jobService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }

 
  applyForJob(job: any) {
    job.isApplying = !job.isApplying; 
    if (job.isApplying) {
      this.resetForm();  
      this.currentJob = job;  
    } else {
      this.currentJob = null;  // Clear current job when cancelled
    }
  }

  // Reset form fields when a new job is being applied for
  resetForm(): void {
    this.name = '';
    this.email = '';
    this.coverLetter = '';
  }

  // Handle form submission
  onSubmit(): void {
    if (this.name && this.email && this.coverLetter) {
      const applicationData = {
        jobId: this.currentJob.id,
        name: this.name,
        email: this.email,
        coverLetter: this.coverLetter
      };

      // Submit the application via the ApplicationService
      this.applicationService.submitApplication(applicationData).subscribe(response => {
        if (response.success) {
          alert('Application successfully submitted for Job: ' + this.currentJob.title);
          this.currentJob.isApplying = false;  // Hide the form after submission
          this.currentJob = null;
        } else {
          console.log('Failed to submit application');
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

  // View job details logic (placeholder, can be extended)
  viewDetails(jobId: number): void {
    console.log('Viewing details for job ID:', jobId);
  }
}
