import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public options: string[] = ['bi bi-list', 'bi bi-x-circle'];
  public dynamicIcon: string = this.options[0];

  constructor() {}

  ngOnInit(): void {}

  changeIcon() {
    if (this.dynamicIcon === this.options[0]) {
        this.dynamicIcon = ''
    } else {
      this.dynamicIcon = this.options[0];
    }
  }
}
