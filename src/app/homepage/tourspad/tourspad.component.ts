import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-tourspad',
  templateUrl: './tourspad.component.html',
  styleUrls: ['./tourspad.component.css']
})
export class TourspadComponent implements OnInit {

  @ViewChild('scrollHope') myHope: ElementRef;

  itemWidth = 250;
  cardCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  isDown = false;
  startX: number;
  scrollLeft: number;

  tstartX: number;
  twalk: number;

  constructor() {
  }

  ngOnInit(): void {
    this.itemWidth = this.myHope.nativeElement.querySelector('.witem').offsetWidth;
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
  }

  touchEnd(e) {
    const trigger = this.itemWidth / 2;
    if (this.twalk > trigger) {
      alert(this.twalk + ':' + trigger);
    } else {
      this.myHope.nativeElement.scrollTo({
        left: this.myHope.nativeElement.scrollLeft + this.twalk,
        behavior: 'smooth'
      });
    }
  }

  touchMove(e) {
    const x = e.targetTouches[0].pageX;
    this.twalk = x - this.tstartX;
    console.log('dif: ' + (x - this.tstartX));
  }

}
