import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
  selector: 'ms-progress-chart',
  templateUrl: './progress-chart.component.html',
   styleUrls: ['./progress-chart.component.scss']
})
export class ProgressChartComponent implements OnInit {
  @Input('progress') progress: any;
  isLoading: boolean = false;
  max: number = 100;
  stroke: number = 30;
  radius: number = 50;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = true;
  clockwise: boolean = true;
  color: string = '#F96302';
  background: string = '#eaeaea';
  duration: number = 800;
  animation: string = 'easeOutCubic';
  animationDelay: number = 0;
  animations: string[] = [];
  gradient: boolean = false;
  realCurrent: number = 0;
  constructor() { }

  ngOnInit() {  
  }

  reload() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
  getOverlayStyle() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': isSemi ? 'auto' : '45%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform      
    };
  }

}
