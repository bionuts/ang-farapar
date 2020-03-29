import {Component, OnInit} from '@angular/core';
import {TicketingService} from '../ticketing.service';

@Component({
  selector: 'app-hotel-reservations',
  templateUrl: './hotel-reservations.component.html',
  styleUrls: ['./hotel-reservations.component.css']
})
export class HotelReservationsComponent implements OnInit {

  constructor(
    public ticketingService: TicketingService
  ) {
    this.ticketingService.selectedTicketingMenuName = 'hotels';
  }

  ngOnInit(): void {
  }

}
