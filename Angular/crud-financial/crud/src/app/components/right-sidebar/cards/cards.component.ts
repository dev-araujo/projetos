import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() character: string | any;
  @Input() title: string | any;
  @Input() category: string | any;
  @Input() amount: number | any;
 

  constructor() {}

  ngOnInit(): void {}
}
