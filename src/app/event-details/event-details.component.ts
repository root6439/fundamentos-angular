import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  public event: any;

  constructor() { }

  ngOnInit(): void {
  }

}
