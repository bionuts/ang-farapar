import { Component, OnInit, ElementRef, OnDestroy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-featured-modal',
  templateUrl: './featured-modal.component.html',
  styleUrls: ['./featured-modal.component.css']
})
export class FeaturedModalComponent implements OnInit, OnDestroy {

  @Output() closeSignal = new EventEmitter<boolean>();

  constructor(
    private el: ElementRef) {
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  close() {
    this.closeSignal.emit(false);
  }

  back() {
    
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }
}
