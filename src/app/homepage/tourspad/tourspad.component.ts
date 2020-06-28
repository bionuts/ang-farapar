import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tourspad',
  templateUrl: './tourspad.component.html',
  styleUrls: ['./tourspad.component.css']
})
export class TourspadComponent implements OnInit {

  @ViewChild('scrollHope') myHope: ElementRef;

  itemWidth = 250.00;
  meanWidth = 0;
  cardCount = [0, 1, 2, 3, 4, 5, 6, 7];
  isDown = false;
  startX: number;
  scrollLeft: number;

  tstartX: number;
  twalk: number;

  constructor() {
  }

  ngOnInit(): void {
    // this.itemWidth = this.myHope.nativeElement.querySelector('.witem').offsetWidth;
  }

  mouseLeaveHandler() {
    this.isDown = false;
  }

  mouseDownHandler(e) {
    this.itemWidth = this.myHope.nativeElement.querySelector('.witem').offsetWidth;
    if (e.which === 1) {
      this.isDown = true;
      this.startX = e.pageX - this.myHope.nativeElement.offsetLeft;
      this.scrollLeft = this.myHope.nativeElement.scrollLeft;
    }
  }

  mouseUpHandler() {
    this.isDown = false;
  }

  mouseMoveHandler(e) {
    if (!this.isDown) {
      return;
    }
    e.preventDefault();
    const x = e.pageX - this.myHope.nativeElement.offsetLeft;
    const walk = x - this.startX;
    this.myHope.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  RightClick() {
    this.myHope.nativeElement.scrollTo({
      left: this.myHope.nativeElement.scrollLeft + this.myHope.nativeElement.querySelector('.witem').offsetWidth,
      behavior: 'smooth'
    });
  }

  LeftClick() {
    this.myHope.nativeElement.scrollTo({
      left: this.myHope.nativeElement.scrollLeft - this.myHope.nativeElement.querySelector('.witem').offsetWidth,
      behavior: 'smooth'
    });
  }

  touchStart(e) {
    // e.targetTouches.length
    this.itemWidth = this.myHope.nativeElement.querySelector('.witem').offsetWidth;
    this.tstartX = e.targetTouches[0].pageX;
    // alert(this.myHope.nativeElement.scrollWidth + ', ' + this.myHope.nativeElement.querySelector('.witem').offsetWidth);
    this.meanWidth = this.myHope.nativeElement.scrollWidth / (this.cardCount.length);
  }

  touchEnd(e) {
    const trigger = this.itemWidth / 3;
    if (this.twalk > 0) { // shift from left to right
      if (this.twalk > trigger) {
        this.myHope.nativeElement.scrollTo({
          left: this.myHope.nativeElement.scrollLeft - (this.meanWidth - this.twalk),
          behavior: 'smooth'
        });
      } else {
        this.myHope.nativeElement.scrollTo({
          left: this.myHope.nativeElement.scrollLeft + this.twalk,
          behavior: 'smooth'
        });
      }
    } else { // negetive value
      if (Math.abs(this.twalk) > trigger) {
        this.myHope.nativeElement.scrollTo({
          left: this.myHope.nativeElement.scrollLeft + (this.itemWidth - this.twalk),
          behavior: 'smooth'
        });
      } else {
        this.myHope.nativeElement.scrollTo({
          left: this.myHope.nativeElement.scrollLeft + this.twalk,
          behavior: 'smooth'
        });
      }
    }
  }

  touchMove(e) {
    this.twalk = e.targetTouches[0].pageX - this.tstartX;
    console.log('wid:' + this.itemWidth + ',wk:' + this.twalk + ',' + e.targetTouches[0].pageX + ',' + this.tstartX);
  }

}
