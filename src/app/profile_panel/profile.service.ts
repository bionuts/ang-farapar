import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  selectedMenu: string;

  constructor() {
  }

  changeSelectedValue(val: string): void {
    this.selectedMenu = val;
  }

  getSelectedValue(): string {
    return this.selectedMenu;
  }

}
