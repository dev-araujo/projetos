import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.scss'],
})
export class CardDashboardComponent implements OnInit {
  @Input() icon: string | any;
  @Input() title: string | any;
  @Input() amount: number|any;

  constructor() {}

  ngOnInit(): void {}
}
