import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-input',
  templateUrl: './featured-input.component.html',
  styleUrls: ['./featured-input.component.css']
})
export class FeaturedInputComponent implements OnInit {
  @Input() controlType: string; // mobile , emails , password, text
  @Input() title: string;
  @Input() placeHolder: string;
  @Input() dir = 'rtl';
  @Input() align = 'right';
  showInputHint = false;

  constructor() {
  }

  ngOnInit(): void {
    if (this.controlType === 'email') {
      this.title = 'آدرس ایمیل';
    } else if (this.controlType === 'password') {
      this.title = 'رمز عبور';
    } else if (this.controlType === 'mobile') {
      this.title = 'شماره موبایل';
    }
  }

}
