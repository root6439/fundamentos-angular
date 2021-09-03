import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  EventDetailsComponent,
  EventListComponent,
  EventThumbnailComponent,
  CreateEventComponent
} from './components/index.event'

import {
  EventListResolverService,
  EventRouteActivatorService,
  ToastrService,
  EventService
} from './services/index'

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav/nav.component'
import { Error404Component } from './errors/404.component';
import { ROUTES } from './routes'
import { AuthService } from './modules/user/auth.service';

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
    EventListResolverService,
    AuthService
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