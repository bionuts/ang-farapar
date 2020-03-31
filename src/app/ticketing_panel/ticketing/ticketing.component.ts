import {Component, OnInit} from '@angular/core';
import {TicketingService} from '../ticketing.service';

@Component({
  selector: 'app-ticketing',
  templateUrl: './ticketing.component.html',
  styleUrls: ['./ticketing.component.css']
})
export class TicketingComponent implements OnInit {

  constructor(
    public ticketingService: TicketingService
  ) {
  }

  ngOnInit(): void {
  }

}
