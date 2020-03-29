import {Component, OnInit} from '@angular/core';
import {TicketingService} from '../ticketing.service';

@Component({
  selector: 'app-train-trips',
  templateUrl: './train-trips.component.html',
  styleUrls: ['./train-trips.component.css']
})
export class TrainTripsComponent implements OnInit {

  constructor(
    public ticketingService: TicketingService
  ) {
    this.ticketingService.selectedTicketingMenuName = 'trains';
  }

  ngOnInit(): void {
  }

}
