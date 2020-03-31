import {Component, OnInit} from '@angular/core';

/*HostListener*/

@Component({
  selector: 'app-flight-console',
  templateUrl: './flight-console.component.html',
  styleUrls: ['./flight-console.component.css']
})
export class FlightConsoleComponent implements OnInit {
  /*public cssTop: number;
  private prevScrollPos: number;
  private curScrollPos: number;
  private firstScrollPos: number;*/

  constructor() {
    /*this.prevScrollPos = window.pageYOffset;
    this.firstScrollPos = this.prevScrollPos;
    console.log('first', this.firstScrollPos);
    sticky-top" [style.top.px]="cssTop*/
  }

  ngOnInit(): void {
  }

  /*@HostListener('window:scroll', [])
  onWindowScroll() {
    this.curScrollPos = window.pageYOffset;
    if (this.curScrollPos >= this.prevScrollPos) {
      this.cssTop = 15;
    } else {
      this.cssTop = 75;
    }
    this.prevScrollPos = this.curScrollPos;
  }*/

}
