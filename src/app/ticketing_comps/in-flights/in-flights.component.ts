import {Component, OnInit} from '@angular/core';
import {TicketingService} from '../ticketing.service';

@Component({
  selector: 'app-in-flights',
  templateUrl: './in-flights.component.html',
  styleUrls: ['./in-flights.component.css']
})
export class InFlightsComponent implements OnInit {

  constructor(
    public ticketingService: TicketingService
  ) {
    this.ticketingService.selectedTicketingMenuName = 'inflights';
  }

  ngOnInit(): void {
  }

}
