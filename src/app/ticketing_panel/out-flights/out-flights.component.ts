import {Component, OnInit} from '@angular/core';
import {TicketingService} from '../ticketing.service';

@Component({
  selector: 'app-out-flights',
  templateUrl: './out-flights.component.html',
  styleUrls: ['./out-flights.component.css']
})
export class OutFlightsComponent implements OnInit {

  constructor(
    public ticketingService: TicketingService
  ) {
    this.ticketingService.selectedTicketingMenuName = 'outflights';
  }

  ngOnInit(): void {
  }

}
