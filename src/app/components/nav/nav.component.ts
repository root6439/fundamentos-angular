import { IUser } from './../../modules/user/user.model';
import { AuthService } from './../../modules/user/auth.service';
import { Component } from "@angular/core";

@Component({
  selector:'app-nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavBarComponent {

  constructor(
    private authService: AuthService
  ) {}

  public getUsername(): IUser {
    return this.authService.currentUser;
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

}