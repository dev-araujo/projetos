import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public isMenuSelected: any = [
    { selected: 'unselected' },
    { selected: 'unselected' },
    { selected: 'unselected' },
  ];

  constructor() {}

  ngOnInit(): void {}

  selectedActive(id: any) {
    if (id === 1) {
      this.isMenuSelected[0].selected = 'selected';
      this.isMenuSelected[1].selected = 'unselected';
      this.isMenuSelected[2].selected = 'unselected';
    }
    if (id === 2) {
      this.isMenuSelected[1].selected = 'selected';
      this.isMenuSelected[0].selected = 'unselected';
      this.isMenuSelected[2].selected = 'unselected';
    }
    if (id === 3) {
      this.isMenuSelected[2].selected = 'selected';
      this.isMenuSelected[0].selected = 'unselected';
      this.isMenuSelected[1].selected = 'unselected';
    }
  }
}
