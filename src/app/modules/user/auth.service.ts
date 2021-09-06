import { IUser } from './user.model';
import { Injectable } from "@angular/core"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  ) {}

  public currentUser: IUser;

  login(username: string, password: string): void {
    this.currentUser = {
      id: 1,
      userName: username,
      firstName: 'Nicolas',
      lastName: 'Soares'
    }
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string): void {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    console.log(this.currentUser);
    
  }

}