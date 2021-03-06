import { EventService } from 'src/app/services/event-service/event-service.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<any> {

  constructor(
    private eventService: EventService
  ) { }

  resolve()  {
    return this.eventService.getEvents();
  }

}
