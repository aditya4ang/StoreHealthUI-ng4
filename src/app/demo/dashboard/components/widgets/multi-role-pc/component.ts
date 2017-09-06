import { Component, OnInit, Input, Inject } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'ms-multi-role-pc',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  providers: [DashboardService]
})
export class MultiRolePcComponent implements OnInit {
  isLoading: boolean = false;
  widgetTitle: string = 'MultiRole pc';
  progress: number = 60;
  data: any;
  constructor(private _dashboardService: DashboardService) { }

  ngOnInit() {
    this._dashboardService.getMultiRolePcs().subscribe((data) => {
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
