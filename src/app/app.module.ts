import { EventListResolverService } from './services/event-list-resolver/event-list-resolver.service';
import { EventRouteActivatorService } from './services/event-route-activate/event-route-activator.service';
import { ROUTES } from './routes';
import { ToastrService } from './services/toastr-service/toastr.service';
import { EventService } from './services/event-service/event-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { NavBarComponent } from './components/nav/nav.component';
import { EventThumbnailComponent } from './components/event-list/event-thumbnail.component';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { Error404Component } from './errors/404.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventListResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent): boolean {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel? ')
  }
  return true;
}