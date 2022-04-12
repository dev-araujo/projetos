import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public totalWithdrawal: string | any = '...';
  public totalDeposit: string | any = '...';

  constructor(public service: DataService) {}

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
  }
}
