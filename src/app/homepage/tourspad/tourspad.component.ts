import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tourspad',
  templateUrl: './tourspad.component.html',
  styleUrls: ['./tourspad.component.css']
})
export class TourspadComponent implements OnInit, AfterViewInit {

  @ViewChild('scrollHope') myHope: ElementRef;

  itemWidth = 0;
  meanWidth = 0;
  cardCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  isDown = false;

  startX: number;
  tstartX: number;

  walk: number;
  twalk: number;

  transX = 0;
  lastTransX = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.itemWidth = this.myHope.nativeElement.querySelector('.witem').offsetWidth;
  }

  mouseDownHandler(e) {
    this.itemWidth = this.myHope.nativeElement.querySelector('.witem').offsetWidth;
    if (e.which === 1) {
      this.isDown = true;
      this.startX = e.pageX;
    }
  }

  mouseUpHandler() {
    const trigger = this.itemWidth / 3;
    if (this.walk > 0) { // shift from left to right
      if (this.walk > trigger) {
        this.transX += (this.itemWidth - this.walk);
      } else {
        this.transX -= this.walk;
      }
    } else { // negetive value
      if (Math.abs(this.walk) > trigger) {

      } else {

      }
    }

    this.isDown = false;
    this.lastTransX = this.transX;
  }

  mouseLeaveHandler() {
    this.isDown = false;
    this.lastTransX = this.transX;
  }

  mouseMoveHandler(e) {
    if (!this.isDown) {
      return;
    }
    e.preventDefault();
    this.walk = this.lastTransX + (e.pageX - this.startX);
    this.transX = this.walk;
  }

  RightClick() {
    this.transX -= this.itemWidth;
  }

  LeftClick() {
    this.transX += this.itemWidth;
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
