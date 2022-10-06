import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  isJump = false
  constructor() { }

  ngOnInit(): void {
  }

  go(){
   this.isJump =true

   setTimeout(() => {
    this.isJump=false
   }, 500);
  }

}
