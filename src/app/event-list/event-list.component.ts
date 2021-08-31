import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />

      <app-event-thumbnail [event]="event1">
      </app-event-thumbnail>
    </div>
  `,
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  public event1: any = {
    id: 1,
    name: 'Angular Connect',
    date: '09/08/2021',
    time: '10:00 am',
    price: 900.00,
    imageUrl: 'assets/images/angularconnect-shield.png',
    location: {
      address: '1050 DT',
      city: 'London',
      country: 'England'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
