import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from "../menu-item";

@Component({
  selector: 'app-vertical-list',
  templateUrl: './vertical-list.component.html',
  styleUrls: ['./vertical-list.component.css']
})
export class VerticalListComponent implements OnInit {
  @Input() title: string;
  @Input() items: MenuItem[];
  @Input() borderColor: string;
  @Input() space: number = 0; // vertical space between items in px

  constructor() { }

  ngOnInit(): void {
  }

}
