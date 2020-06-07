import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps-login',
  templateUrl: './steps-login.component.html',
  styleUrls: ['./steps-login.component.css']
})
export class StepsLoginComponent implements OnInit {

  firstStep: boolean; // login first page ( mobile / email and confirmed sms or email )
  secondStep: boolean; // confirm page
  thirdStep: boolean; // login with mobile/email and password

  loginByEmail: boolean;
  loginByPhone: boolean;


  mobile: string = '09392474188';
  mainTitle = 'ورود / ثبت&zwnj;نام به فراپر';
  subTitle = 'لطفا برای ادامه، شماره موبایل خود را وارد کنید';
  switchLinkName = 'آدرس ایمیل';

  constructor() {
  }

  ngOnInit(): void {
    this.firstStep = true;
    this.secondStep = false;
    this.thirdStep = false;
    this.loginByPhone = true;
    this.loginByEmail = false;
  }

  NextStep() {
    if (this.firstStep === true) {
      if (this.loginByPhone === true) {
        this.firstStep = false;
        this.secondStep = true;

        this.mainTitle = 'تائید شماره موبایل';
        this.subTitle = 'کد ۵ رقمی پیامک شده به شماره زیر را وارد کنید';
      }
    }
  }

  LoginByEmail() {
    if (this.loginByPhone === true) {
      this.loginByPhone = false;
      this.mainTitle = 'ورود با ایمیل';
      this.subTitle = 'لطفاً برای ادامه، آدرس ایمیل خود را وارد کنید';
      this.switchLinkName = 'شماره موبایل';
      this.loginByEmail = true;
    } else if (this.loginByEmail === true) {
      this.loginByEmail = false;
      this.mainTitle = 'ورود / ثبت نام به فراپر';
      this.subTitle = 'لطفاً برای ادامه، شماره موبایل خود را وارد کنید';
      this.switchLinkName = 'آدرس ایمیل';
      this.loginByPhone = true;
    }
  }

  LoginByMobileAndPass() {
    if (this.secondStep === true && this.loginByPhone === true) {
      this.secondStep = false;
      this.thirdStep = true;
      this.mainTitle = 'ورود به فراپر';
      this.subTitle = 'لطفاً برای ادامه، رمز عبور خود را وارد کنید';
    }
  }

  LoginByEmailAndPass() {
    if (this.secondStep === true && this.loginByEmail === true) {
      this.secondStep = false;
      this.thirdStep = true;
      this.mainTitle = 'ورود به فراپر';
      this.subTitle = 'لطفاً برای ادامه، رمز عبور خود را وارد کنید';
    }
  }

}
