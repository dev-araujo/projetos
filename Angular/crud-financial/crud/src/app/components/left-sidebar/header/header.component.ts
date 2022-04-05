import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public client: any;

  constructor(public service: DataService) {}

  ngOnInit(): void {
    this.getClientData();
  }

  getClientData() {
    this.service.user.subscribe((res) => (this.client = res));
  }
}
