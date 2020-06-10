import { Component, Input, OnInit } from '@angular/core';
import { SelectOptions } from '../models/select-options';

@Component({
  selector: 'app-featured-input',
  templateUrl: './featured-input.component.html',
  styleUrls: ['./featured-input.component.css']
})
export class FeaturedInputComponent implements OnInit {
  @Input() controlType: string; // mobile , emails , password, text
  @Input() options: SelectOptions[];
  @Input() title: string = '.';
  @Input() placeHolder = '';
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

    this.options = [
      { "text": 'سلام', "value": '0' },
      { "text": 'محمد رضا جهانخواه', "value": '1' },
      { "text": 'سلام بر حسین', "value": '2' },
      { "text": 'خداحافظ', "value": '3' },
    ];
  }
}
