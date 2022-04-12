import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';

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
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartsComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions>;

  constructor(public service: DataService) {
    this.chartOptions = {};
  }
  ngOnInit(): void {
    this.loadChart();
  }

  loadChart() {
    this.service.abstract.subscribe((res) => {
      this.chartOptions = {
        series: [
          {
            name: 'Entradas',
            data: res
              .filter((amount: any) => {
                return amount.category === 'entrada';
              })
              .map((value: any) => {
                return value.amount;
              }),
            color: '#4b744d',
          },
          {
            name: 'Saídas',
            data: res
              .filter((amount: any) => {
                return amount.category === 'saida';
              })
              .map((value: any) => {
                return value.amount;
              }),
            color: 'rgb(243, 106, 91)',
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

        grid: {
          row: {
            opacity: 0,
          },
        },
        xaxis: {
          categories: [
            'Jan',
            'Fev',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dez',
          ],
        },
      };
    });
  }
}
