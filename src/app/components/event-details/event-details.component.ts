import { IEvent, ISession } from './../event.model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventService } from 'src/app/services/event-service/event-service.service';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  public event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;
    });
  }

  addSession(): void {
    this.addMode = true;
  }

  saveNewSession(session: ISession): void {
    const nextId = Math.max.apply(
      null,
      this.event?.sessions.map((s) => s.id)
    );
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelForm(): void {
    this.addMode = false;
  }
}
