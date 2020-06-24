import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tourspad',
  templateUrl: './tourspad.component.html',
  styleUrls: ['./tourspad.component.css']
})
export class TourspadComponent implements OnInit {

  isDown = false;
  startX: number;
  scrollLeft: number;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
  }

  mouseLeaveHandler(e) {
    this.isDown = false;
    // slider.classList.remove("active");
    // this.el.nativeElement.classList.remove("active");
  }

  mouseDownHandler(e) {
    if (e.which === 1) {
      this.isDown = true;
      // slider.classList.add("active");
      // this.startX = e.pageX - slider.offsetLeft;
      this.startX = e.pageX - this.el.nativeElement.offsetLeft;
      this.scrollLeft = this.el.nativeElement.scrollLeft;
      alert(this.startX);
    }
  }

  mouseUpHandler(e) {
    this.isDown = false;
    // slider.classList.remove("active");
  }

  mouseMoveHandler(e) {
    if (!this.isDown) { return; }
    e.preventDefault();
    const x = e.pageX - this.el.nativeElement.offsetLeft;
    const walk = x - this.startX;
    this.el.nativeElement.scrollLeft = this.scrollLeft - walk;
  }
}
