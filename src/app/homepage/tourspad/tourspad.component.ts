import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-tourspad',
  templateUrl: './tourspad.component.html',
  styleUrls: ['./tourspad.component.css']
})
export class TourspadComponent implements OnInit {

  @ViewChild('scrollHope') myHope: ElementRef;

  cardCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  isDown = false;
  startX: number;
  scrollLeft: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  mouseLeaveHandler(e) {
    this.isDown = false;
  }

  mouseDownHandler(e) {
    if (e.which === 1) {
      this.isDown = true;
      this.startX = e.pageX - this.myHope.nativeElement.offsetLeft;
      this.scrollLeft = this.myHope.nativeElement.scrollLeft;
    }
  }

  mouseUpHandler(e) {
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
}
