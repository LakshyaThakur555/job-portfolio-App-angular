"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar/navbar.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var job_listing_component_1 = require("./job-listing/job-listing.component");
var applications_component_1 = require("./applications/applications.component");
var profile_component_1 = require("./profile/profile.component");
var settings_component_1 = require("./settings/settings.component");
// Angular Material Modules
var toolbar_1 = require("@angular/material/toolbar");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var sidenav_1 = require("@angular/material/sidenav");
var list_1 = require("@angular/material/list");
var grid_list_1 = require("@angular/material/grid-list");
// Define routes for navigation
var routes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'jobs', component: job_listing_component_1.JobListingComponent },
    { path: 'applications', component: applications_component_1.ApplicationsComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'settings', component: settings_component_1.SettingsComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' } // Fallback route for undefined paths
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                sidebar_component_1.SidebarComponent,
                dashboard_component_1.DashboardComponent,
                job_listing_component_1.JobListingComponent,
                applications_component_1.ApplicationsComponent,
                profile_component_1.ProfileComponent,
                settings_component_1.SettingsComponent // Declared SettingsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(routes),
                // Angular Material Modules
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                input_1.MatInputModule,
                form_field_1.MatFormFieldModule,
                button_1.MatButtonModule,
                card_1.MatCardModule,
                sidenav_1.MatSidenavModule,
                list_1.MatListModule,
                grid_list_1.MatGridListModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
