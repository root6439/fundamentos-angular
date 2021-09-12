import { EventService } from 'src/app/services/event-service/event-service.service';
import {
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventResolverService implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(+route.params['id']);
  }
}
