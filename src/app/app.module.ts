import { EventResolverService } from './services/event-resolver/event-resolver.service';
import { VoterService } from './services/voter/voter.service';
import { DurationPipe } from './shared/duration.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  EventDetailsComponent,
  EventListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  CreateSessionComponent,
} from './components/index.event';

import {
  EventListResolverService,
  TOASTR_TOKEN,
  JQ_TOKEN,
  EventService,
  Toastr,
} from './services/index';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav/nav.component';
import { Error404Component } from './errors/404.component';
import { ROUTES } from './routes';
import { AuthService } from './modules/user/auth.service';
import { SessionListComponent } from './components/session-list/session-list.component';
import { CollapsibleWellComponent } from './shared/collapsible-well/collapsible-well.component';
import { SimpleModalComponent } from './shared/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './shared/simple-modal/modal.directive';
import { UpvoteComponent } from './components/session-list/upvote.component';
import { LocationValidator } from './components/create-event/location-validator.directive';

declare let toastr: Toastr;
declare let jQuery: any;

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
    CollapsibleWellComponent,
    UpvoteComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    LocationValidator,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    },
    EventListResolverService,
    AuthService,
    VoterService,
    EventResolverService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent): boolean {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to cancel? '
    );
  }
  return true;
}
