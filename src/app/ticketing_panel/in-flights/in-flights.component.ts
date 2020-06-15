import { Component, OnInit } from '@angular/core';
import { TicketingService } from '../ticketing.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-in-flights',
  templateUrl: './in-flights.component.html',
  styleUrls: ['./in-flights.component.css']
})
export class InFlightsComponent implements OnInit {

  constructor(
    public ticketingService: TicketingService,
    private router: Router
  ) {
    this.ticketingService.selectedTicketingMenuName = 'inflights';
  }

  ngOnInit(): void {
  }

  goflight() {
    this.router.navigateByUrl('/flights');
  }

}
