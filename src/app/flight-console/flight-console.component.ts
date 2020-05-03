import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-console',
  templateUrl: './flight-console.component.html',
  styleUrls: ['./flight-console.component.css']
})
export class FlightConsoleComponent implements OnInit {
  @ViewChild('maincontent', { read: ElementRef, static: false }) elementView: ElementRef;
  heightOfItemContent: number;
  rotateHandleMode: boolean;


  constructor() {
    this.heightOfItemContent = 0;
    this.rotateHandleMode = true;
  }

  ngOnInit(): void {
  }

  toggle_collapse() {
    if (this.heightOfItemContent === 0) {
      this.heightOfItemContent = this.elementView.nativeElement.offsetHeight;
      this.rotateHandleMode = false;
    } else {
      this.heightOfItemContent = 0;
      this.rotateHandleMode = true;
    }
  }

}
