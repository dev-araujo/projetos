import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.scss'],
})
export class AbstractComponent implements OnInit {
  public transactions: any;
  constructor(public service: DataService) {}

  ngOnInit(): void {
    this.getTransactions()
  }

  getTransactions() {
    this.service.abstract.subscribe((res) => (this.transactions = res));
  }
}
