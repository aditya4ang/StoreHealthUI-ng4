import { Component, OnInit, Input, Inject } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'ms-assisted-checkout',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  providers: [DashboardService]
})
export class AssistedCheckoutComponent implements OnInit {
  isLoading: boolean = false;
  widgetTitle: string = 'Assisted Checkout';
  progress: number = 60;
  data: any;
  constructor(private _dashboardService: DashboardService) { }

  ngOnInit() {
    this._dashboardService.getAssistedCheckouts().subscribe((data) => {
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
