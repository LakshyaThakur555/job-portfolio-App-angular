import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  
  getJobs(): Observable<any[]> {
    const jobs = [
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
    return of(jobs); // Simulating an Observable from an API response
  }
}
