import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.scss'],
})
export class AbstractComponent implements OnInit {
  public transactions: any;
  public setTransactions: any;
  public inputLength: number = 0;

  constructor(public service: DataService) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.service.abstract.subscribe((res) => {
      this.transactions = res;
      this.setTransactions = res;
    });
  }

  getSearch(value: string) {
    const filterTransactions = this.setTransactions.filter((res: any) => {
      return (
        res.title.toLowerCase().includes(value.toLocaleLowerCase()) ||
        res.type.toLowerCase().includes(value.toLocaleLowerCase()) ||
        res.category.toLowerCase().includes(value.toLocaleLowerCase()) ||
        String(res.amount).toLowerCase().includes(value.toLocaleLowerCase()) ||
        res.date.toLowerCase().includes(value.toLocaleLowerCase())
      );
    });
    value.length > 0
      ? (this.inputLength = value?.length)
      : (this.inputLength = 0);
    this.transactions = filterTransactions;
  }
}
