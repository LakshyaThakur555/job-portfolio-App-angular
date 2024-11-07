import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  // Simulate application submission
  submitApplication(applicationData: any): Observable<any> {
    console.log('Submitting application...', applicationData);
    // Here, you'd typically send the application to your backend API.
    // For this example, we simulate a successful submission with `of`.
    return of({ success: true });
  }
}
