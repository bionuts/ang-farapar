import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tourspad',
  templateUrl: './tourspad.component.html',
  styleUrls: ['./tourspad.component.css']
})
export class TourspadComponent implements OnInit {

  @ViewChild('scrollHope') myHope: ElementRef;

  isDown = false;
  startX: number;
  scrollLeft: number;

  constructor() { }

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
    if (!this.isDown) { return; }
    e.preventDefault();
    const x = e.pageX - this.myHope.nativeElement.offsetLeft;
    const walk = x - this.startX;
    this.myHope.nativeElement.scrollLeft = this.scrollLeft - walk;
    // console.log('walk: ' + walk + ', native.scrollLeft: ' + this.myHope.nativeElement.scrollLeft);
  }

  RightClick() {
    alert('hi');
  }

  LeftClick() {

  }
}
