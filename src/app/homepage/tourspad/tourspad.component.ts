import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-tourspad',
  templateUrl: './tourspad.component.html',
  styleUrls: ['./tourspad.component.css']
})
export class TourspadComponent implements OnInit, AfterViewInit {

  @ViewChild('scrollHope') myHope: ElementRef;

  itemWidth = 0;
  meanWidth = 0;
  cardCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  isDown = false;
  left_vec_color = 'white';
  right_vec_color = 'gray';
  hopeWidth = 0;
  boardWidth = 0;
  letTrans = false;

  startX: number;
  tstartX: number;

  walk = 0;
  walkbase = 0;
  twalk = 0;

  transX = 0;
  lastTransX = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.itemWidth = this.myHope.nativeElement.querySelector('.witem').offsetWidth;
    this.hopeWidth = this.myHope.nativeElement.offsetWidth;
    this.boardWidth = this.itemWidth * this.cardCount.length;
  }

  @HostListener('window:resize')
  onResize() {
    this.itemWidth = this.myHope.nativeElement.querySelector('.witem').offsetWidth;
    this.transX = 0;
    console.log(this.itemWidth);
  }

  mouseDownHandler(e) {
    this.itemWidth = this.myHope.nativeElement.querySelector('.witem').offsetWidth;
    if (e.which === 1) {
      this.isDown = true;
      this.startX = e.pageX;
      this.letTrans = false;
    }
  }

  mouseUpHandler() {
    this.letTrans = true;
    const trigger = this.itemWidth / 4.2;
    if (this.walkbase > 0) { // shift from left to right
      if (this.walkbase > trigger) {
        if (this.transX < (this.boardWidth - this.hopeWidth - 5)) {
          this.transX += (this.itemWidth - this.walkbase);
          this.left_vec_color = 'white';
          this.right_vec_color = 'white';
          if (this.transX > (this.boardWidth - this.hopeWidth - this.itemWidth)) this.left_vec_color = 'gray';
        } else {
          this.transX -= this.walkbase;
          this.left_vec_color = 'gray';
        }
      } else {
        this.transX -= this.walkbase;
      }
    } else { // negetive value --> shift from right to left
      if (Math.abs(this.walkbase) > trigger) {
        if (this.transX > 0) {
          this.transX -= (this.itemWidth + this.walkbase);
          this.left_vec_color = 'white';
          if (this.transX < this.itemWidth) this.right_vec_color = 'gray';
        } else {
          this.transX -= this.walkbase;
          this.right_vec_color = 'gray';
        }
      } else {
        this.transX -= this.walkbase;
      }
    }
    this.isDown = false;
    this.lastTransX = this.transX;
    this.walkbase = 0;
  }

  mouseLeaveHandler(e) {
    if (e.which === 1) {
      this.mouseUpHandler();
    }
  }

  mouseMoveHandler(e) {
    if (!this.isDown) {
      return;
    }
    e.preventDefault();
    this.letTrans = false;
    this.walkbase = (e.pageX - this.startX);
    this.walk = this.lastTransX + this.walkbase;
    // console.log(this.walk, this.walkbase);
    this.transX = this.walk;
  }

  RightClick() {
    this.itemWidth = this.myHope.nativeElement.querySelector('.witem').offsetWidth;
    if (this.transX > 0) {
      this.letTrans = true;
      this.transX -= this.itemWidth;
      this.lastTransX = this.transX;
      if (this.transX < (this.boardWidth - this.hopeWidth - 5)) this.left_vec_color = 'white';
      if (this.transX < this.itemWidth) this.right_vec_color = 'gray';
    }
  }

  LeftClick() {
    this.itemWidth = this.myHope.nativeElement.querySelector('.witem').offsetWidth;
    if (this.transX < (this.boardWidth - this.hopeWidth - 5)) {
      this.letTrans = true;
      this.transX += this.itemWidth;
      this.lastTransX = this.transX;
      if (this.transX > this.itemWidth - 1) this.right_vec_color = 'white';
      if (this.transX > (this.boardWidth - this.hopeWidth - 5)) this.left_vec_color = 'gray';
    }
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
