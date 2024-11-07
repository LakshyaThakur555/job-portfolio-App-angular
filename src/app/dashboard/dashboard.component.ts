import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  ngAfterViewInit() {
   
    const revenueCtx = document.getElementById('revenueChart') as HTMLCanvasElement;
    new Chart(revenueCtx, {
      type: 'bar',
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
          label: 'Revenue',
          data: [100, 200, 150, 300, 350, 200, 100],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      }
    });

    
    const orderCtx = document.getElementById('orderStatsChart') as HTMLCanvasElement;
    new Chart(orderCtx, {
      type: 'line',
      data: {
        labels: ['2am', '4am', '6am', '8am', '10am', '12pm', '2pm'],
        datasets: [{
          label: 'Orders',
          data: [100, 120, 90, 200, 150, 300, 400],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      }
    });
  }
}
