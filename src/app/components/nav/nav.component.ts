import { EventService } from './../../services/event-service/event-service.service';
import { IEvent, ISession } from './../event.model';
import { IUser } from './../../modules/user/user.model';
import { AuthService } from './../../modules/user/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavBarComponent implements OnInit {
  foundSessions: ISession[];
  searchTerm = '';
  events: IEvent[];

  constructor(
    private authService: AuthService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((resp) => {
      this.events = resp;
    });
  }

  public getUsername(): IUser {
    return this.authService.currentUser;
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  search(): void {
    this.eventService.searchSessions(this.searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
}
