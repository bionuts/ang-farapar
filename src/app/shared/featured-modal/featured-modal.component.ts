import { Component, OnInit, ElementRef, OnDestroy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-featured-modal',
  templateUrl: './featured-modal.component.html',
  styleUrls: ['./featured-modal.component.css']
})
export class FeaturedModalComponent implements OnInit {

  @Output() closeSignal = new EventEmitter<Boolean>();

  constructor(
    private el: ElementRef) {
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  close() {
    this.closeSignal.emit(false);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }
}
