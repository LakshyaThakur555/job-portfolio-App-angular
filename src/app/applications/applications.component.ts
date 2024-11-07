import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  // Sample applications data
  applications = [
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

  constructor() { }

  ngOnInit(): void { }

  getStatusClass(status: string) {
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
  }

  viewDetails(id: number) {
    // Handle viewing application details
    console.log(`Viewing details for application ID: ${id}`);
  }

  withdrawApplication(id: number) {
    // Handle application withdrawal logic
    this.applications = this.applications.filter(application => application.id !== id);
    console.log(`Application with ID: ${id} withdrawn.`);
  }
}
