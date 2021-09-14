import { IEvent, ISession } from './../../components/event.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  public events: Array<IEvent> = [];

  public getEvents(): Observable<IEvent[]> {
    return this.http
      .get<IEvent[]>('/api/events')
      .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
  }

  public getEvent(idEvent: number): Observable<IEvent> {
    return this.http
      .get<IEvent>('/api/events/' + idEvent)
      .pipe(catchError(this.handleError<IEvent>(`getEvent: ${idEvent}`)));
  }

  public searchSessions(name: string) {
    return this.http
      .get<ISession[]>('/api/sessions/search?search=' + name)
      .pipe(catchError(this.handleError<ISession[]>(`searchSessions`)));
  }

  public saveEvent(event: IEvent): Observable<IEvent> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http
      .post<IEvent>('/api/events', event, options)
      .pipe(catchError(this.handleError<IEvent>('saveEvent')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
