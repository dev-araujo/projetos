import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
//
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  dataLabels: ApexDataLabels | any;
  grid: ApexGrid | any;
  stroke: ApexStroke | any;
  title: ApexTitleSubtitle | any;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions>;

  public totalWithdrawal: string | any = '...';
  public totalDeposit: string | any = '...';

  ngOnInit(): void {
    this.getTotal();
  }

  getTotal() {
    this.service.abstract.subscribe((res) => {
      this.totalWithdrawal = res
        .filter((amount: any) => {
          return amount.category === 'saida';
        })
        .map((value: any) => {
          return value.amount;
        })
        .reduce((a: any, b: any) => {
          return a + b;
        }, 0);

      this.totalDeposit = res
        .filter((amount: any) => {
          return amount.category === 'entrada';
        })
        .map((value: any) => {
          return value.amount;
        })
        .reduce((a: any, b: any) => {
          return a + b;
        }, 0);
    });

    this.chartOptions = {
      series: [
        {
          name: 'Desktops',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        // text: 'Product Trends by Month',
        // align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    };
  }

  constructor(public service: DataService) {
    this.chartOptions = {};
  }
}
