import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-steps-login',
  templateUrl: './steps-login.component.html',
  styleUrls: ['./steps-login.component.css']
})
export class StepsLoginComponent implements OnInit {

  @Output() displayBack = new EventEmitter<boolean>();

  firstStep: boolean; // login first page ( mobile / email and confirmed sms or email )
  secondStep: boolean; // confirm page
  thirdStep: boolean; // login with mobile/email and password
  fourthStep: boolean; //forget password page

  loginByEmail: boolean;
  loginByPhone: boolean;


  mobile = '09392474188';
  email = 'mreza.jahankhah@gmail.com';
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

  BackStep() {
    if (this.secondStep && this.loginByPhone) { // back from page: SMS Confirmation
      this.firstStep = true;
      this.secondStep = false;
      this.HideSMSConfirmation();
      this.ShowLoginByMobile();
      this.displayBack.emit(false);
    } else if (this.firstStep && this.loginByEmail) { // back from page: Email login page
      this.loginByEmail = false;
      this.mainTitle = 'ورود / ثبت نام به فراپر';
      this.subTitle = 'لطفاً برای ادامه، شماره موبایل خود را وارد کنید';
      this.switchLinkName = 'آدرس ایمیل';
      this.loginByPhone = true;
      this.displayBack.emit(false);
    } else if (this.loginByEmail && this.secondStep) {
      this.secondStep = false;
      this.firstStep = true;
      this.mainTitle = 'ورود با ایمیل';
      this.subTitle = 'لطفاً برای ادامه، آدرس ایمیل خود را وارد کنید';
      this.loginByEmail = true;
      this.displayBack.emit(true);
    } else if (this.loginByEmail && this.thirdStep) {
      this.thirdStep = false;
      this.secondStep = true;
      this.mainTitle = 'ورود با ایمیل';
      this.subTitle = 'لطفاً برای ادامه، آدرس ایمیل خود را وارد کنید';
      this.loginByEmail = true;
      this.displayBack.emit(true);
    } else if (this.loginByEmail && this.fourthStep) {
      this.thirdStep = true;
      this.fourthStep = false;
      this.mainTitle = 'ورود با ایمیل';
      this.subTitle = 'لطفاً برای ادامه، آدرس ایمیل خود را وارد کنید';
      this.loginByEmail = true;
      this.displayBack.emit(true);
    } else if (this.thirdStep && (this.loginByPhone || this.loginByPhone)) { // Login By Email/Mobile and Pass
      if (this.loginByPhone) {
        this.firstStep = false;
        this.secondStep = true;
        this.thirdStep = false;
        this.mainTitle = 'تائید شماره موبایل';
        this.subTitle = 'کد ۵ رقمی پیامک شده به شماره زیر را وارد کنید';
      } else // login by Email
      {

      }
    }
  }

  NextStep() {
    if (this.firstStep === true) {
      if (this.loginByPhone === true) {
        this.firstStep = false;
        this.secondStep = true;
        this.displayBack.emit(true);

        this.mainTitle = 'تائید شماره موبایل';
        this.subTitle = 'کد ۵ رقمی پیامک شده به شماره زیر را وارد کنید';
      } else if (this.loginByEmail === true) {
        this.firstStep = false;
        this.secondStep = true;
        this.displayBack.emit(true);
        this.mainTitle = 'ورود به فراپر';
        this.subTitle = 'لطفاً برای ادامه، رمز عبور خود را وارد کنید';
      }
    }
  }

  SwitchLoginByMobileOrEmail() {
    if (this.loginByPhone === true) {
      this.loginByPhone = false;
      this.mainTitle = 'ورود با ایمیل';
      this.subTitle = 'لطفاً برای ادامه، آدرس ایمیل خود را وارد کنید';
      this.switchLinkName = 'شماره موبایل';
      this.loginByEmail = true;
      this.displayBack.emit(true);
    } else if (this.loginByEmail === true) {
      this.loginByEmail = false;
      this.mainTitle = 'ورود / ثبت نام به فراپر';
      this.subTitle = 'لطفاً برای ادامه، شماره موبایل خود را وارد کنید';
      this.switchLinkName = 'آدرس ایمیل';
      this.loginByPhone = true;
      this.displayBack.emit(false);
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

  LoginByEmailAndOncePass() {
    if (this.secondStep && this.loginByEmail === true) {
      this.secondStep = false;
      this.thirdStep = true;
      this.mainTitle = 'تایید ایمیل';
      this.subTitle = 'کد ۵ رقمی ارسال شده به ایمیل زیر را وارد کنید';
    }
  }

  LoginByEmailAndPass() {
    this.mainTitle = 'ورود به فراپر';
    this.subTitle = 'لطفاً برای ادامه، رمز عبور خود را وارد کنید';

    if (this.secondStep && this.loginByEmail) {
      this.secondStep = false;
      this.thirdStep = true;
    } else if (this.thirdStep && this.loginByEmail) {
      this.secondStep = true;
      this.thirdStep = false;
    }
  }

  ForgotPassword() {
    this.mainTitle = 'بازیابی رمز عبور';
    if (this.loginByPhone) {
      this.subTitle = 'برای بازیابی رمز عبور، ایمیل خود را بررسی نمائید';
    } else {
      this.subTitle = 'برای بازیابی رمز عبور، ایمیل خود را بررسی نمائید';
    }

    this.firstStep = this.secondStep = this.thirdStep = false;
    this.fourthStep = true;
  }

  // Show
  private ShowLoginByMobile() {
    this.loginByEmail = false;
    this.mainTitle = 'ورود / ثبت نام به فراپر';
    this.subTitle = 'لطفاً برای ادامه، شماره موبایل خود را وارد کنید';
    this.switchLinkName = 'آدرس ایمیل';
    this.loginByPhone = true;
  }

  private ShowLoginByEmail() { }

  private ShowSMSConfirmation() { }

  private ShowMobileAndPassword() { }

  private ShowEmailAndPassword() { }

  // Hide 
  private HideLoginByMobile() { }

  private HideLoginByEmail() { }

  private HideSMSConfirmation() { }

  private HideMobileAndPassword() { }

  private HideEmailAndPassword() { }

}
