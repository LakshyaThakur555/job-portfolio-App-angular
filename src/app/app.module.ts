import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';   
import { MatListModule } from '@angular/material/list';        
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';

// Define routes for navigation
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'jobs', component: JobListingComponent },
  { path: 'applications', component: ApplicationsComponent }, // Added path for Applications
  { path: 'profile', component: ProfileComponent },           // Added path for Profile
  { path: 'settings', component: SettingsComponent },         // Added path for Settings
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // Default route
  { path: '**', redirectTo: '/dashboard' }                   // Fallback route for undefined paths
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    JobListingComponent,
    ApplicationsComponent, // Declared ApplicationsComponent
    ProfileComponent,      // Declared ProfileComponent
    SettingsComponent, HomeComponent      // Declared SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,    // Enables form validation features
    RouterModule.forRoot(routes), // Sets up the routes

    // Angular Material Modules
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
