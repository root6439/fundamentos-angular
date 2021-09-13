import { OPTIONS } from './../../shared/config-defaults';
import { IUser } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, first } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public currentUser: IUser;

  login(username: string, password: string) {
    let loginInfo = {
      username: username,
      password: password,
    };

    return this.http
      .post('/api/login', loginInfo, OPTIONS)
      .pipe(
        tap((data: any) => {
          this.currentUser = <IUser>data['user'];
        })
      )
      .pipe(
        catchError((err) => {
          return of(false);
        })
      );
  }

  logout() {
    this.currentUser = undefined;
    return this.http.post('/api/logout', {}, OPTIONS);
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http
      .get('/api/currentIdentity')
      .pipe(
        tap((data) => {
          if (data instanceof Object) {
            this.currentUser = <IUser>data;
          }
        })
      )
      .subscribe();
  }

  updateCurrentUser(firstName: string, lastName: string): Observable<any> {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    return this.http.put(
      `/api/users/${this.currentUser.id}`,
      this.currentUser,
      OPTIONS
    );
  }
}
