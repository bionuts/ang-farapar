import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-featured-modal',
  templateUrl: './featured-modal.component.html',
  styleUrls: ['./featured-modal.component.css']
})
export class FeaturedModalComponent implements OnInit {

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
    document.body.css
  }

  /*ngOnDestroy() {
    this.el.nativeElement.remove();
  }*/
}
