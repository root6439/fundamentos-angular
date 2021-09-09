import { EventService } from './../../services/event-service/event-service.service';
import { IEvent, ISession } from './../event.model';
import { IUser } from './../../modules/user/user.model';
import { AuthService } from './../../modules/user/auth.service';
import { Component } from "@angular/core";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavBarComponent {

  foundSessions: ISession[];
  searchTerm: string = '';

  constructor(
    private authService: AuthService,
    private eventService: EventService
  ) { }

  public getUsername(): IUser {
    return this.authService.currentUser;
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  search(): void {
    this.eventService.searchSessions((this.searchTerm))
      .subscribe(events => {
        this.foundSessions = events;
        console.log(this.foundSessions);
    })
    
  }

}