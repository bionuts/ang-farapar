import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pw',
  templateUrl: './pw.component.html',
  styleUrls: ['./pw.component.css']
})
export class PwComponent implements OnInit {
  password: string;

  constructor() {
    this.password='';
   }

  ngOnInit(): void {
  }

  onButtonClicked() {
    this.password = 'hello';
  }

  lfun(){
    this.password='ticked'
  }

}
