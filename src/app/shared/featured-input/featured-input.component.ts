import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-featured-input',
  templateUrl: './featured-input.component.html',
  styleUrls: ['./featured-input.component.css']
})
export class FeaturedInputComponent implements OnInit {
  @Input() title: string;
  @Input() placeHolder: string;
  showInputHint = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
