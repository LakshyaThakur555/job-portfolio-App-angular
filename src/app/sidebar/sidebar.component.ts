import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'] // Fixed "styleUrls" typo
})
export class SidebarComponent {
  // You can add properties like the user's name or other relevant data here
  userName = 'LAKSHYA THAKUR';
}
