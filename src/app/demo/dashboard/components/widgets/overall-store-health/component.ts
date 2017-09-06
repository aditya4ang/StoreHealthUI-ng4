import { Component, OnInit, Input, Inject } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
@Component({
  selector: 'ms-overall-store-health',
  templateUrl: './component.html',
   styleUrls: ['./component.scss'],
   providers: [DashboardService]
})
export class OverallStoreHealthComponent implements OnInit {
  isLoading: boolean = false;
  widgetTitle: string = 'Overall Store Health';
  progress:number = 60;
  data:any;
  constructor(private _dashboardService:DashboardService) { }

  ngOnInit() {
    this._dashboardService.getOveralStorreHealth().subscribe((data) => {
      this.data = data;
  });
  }

  reload() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }  

}
