import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  selectedProfileMenuName: string;

  constructor() {
    this.selectedProfileMenuName = 'account_style';
  }
}
