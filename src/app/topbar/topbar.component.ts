import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  public cssTop: number;
  modalOpen = true;
  private prevScrollPos: number;
  private curScrollPos: number;

  constructor() {
    this.prevScrollPos = window.pageYOffset;
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.curScrollPos = window.pageYOffset;
    if (this.curScrollPos > 50 && this.curScrollPos > this.prevScrollPos) {
      this.cssTop = -65;
    } else {
      this.cssTop = 0;
    }
    this.prevScrollPos = this.curScrollPos;
  }

  show_modal_login() {
    this.modalOpen = !this.modalOpen;
  }

}
