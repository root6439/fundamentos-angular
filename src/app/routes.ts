import { EventResolverService } from './services/event-resolver/event-resolver.service';
import { CreateSessionComponent } from './components/create-session/create-session.component';
import { EventListResolverService } from './services/event-list-resolver/event-list-resolver.service';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';

export const ROUTES: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventListComponent,
    resolve: { events: EventListResolverService },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    resolve: { event: EventResolverService },
  },
  { path: '404', component: Error404Component },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((module) => module.UserModule),
  },
];
