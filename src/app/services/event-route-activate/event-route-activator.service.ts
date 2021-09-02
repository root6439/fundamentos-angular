import { EventService } from './../event-service/event-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate{

  constructor(
    private eventService: EventService,
    private router: Router
  ) { }

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    const eventExists = !!this.eventService.getEvent(route.params['id']);

    if (!eventExists)
      this.router.navigate(['/404'])

    return eventExists;
  }

}
