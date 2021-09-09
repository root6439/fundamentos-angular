import { IEvent } from './../event.model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event-service/event-service.service';

@Component({
  templateUrl: "./event-list.component.html",
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  public events1: Array<IEvent>;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.events1 = this.route.snapshot.data['events'];
  }

}
