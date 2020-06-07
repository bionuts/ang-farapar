import { Component, OnInit, ElementRef, OnDestroy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-featured-modal',
  templateUrl: './featured-modal.component.html',
  styleUrls: ['./featured-modal.component.css']
})
export class FeaturedModalComponent implements OnInit, OnDestroy {

  @Output() closeSignal = new EventEmitter<boolean>();
  // @ViewChild(ChildCmp) child:ChildCmp;

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
    return true;
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }
}
