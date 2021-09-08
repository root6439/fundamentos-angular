import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {
  EventDetailsComponent,
  EventListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  CreateSessionComponent
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
import { SessionListComponent } from './components/session-list/session-list.component';
import { CollapsibleWellComponent } from './shared/collapsible-well/collapsible-well.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
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