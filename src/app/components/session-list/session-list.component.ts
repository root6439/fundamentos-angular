import { ISession } from './../event.model';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {

  @Input()
  public sessions: ISession[];

  @Input()
  filterBy: string;

  visibleSessions: ISession[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filter: string) {
    if (filter == 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(s => s.level.toLowerCase() == filter)
    }
  }

}
