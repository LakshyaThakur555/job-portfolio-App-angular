import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobListingComponent } from './job-listing/job-listing.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'jobs', component: JobListingComponent }, // Add route for job listing
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure the router
  exports: [RouterModule]
})
export class AppRoutingModule { }
