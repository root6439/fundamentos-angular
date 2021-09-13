import { VoterService } from '../../services/voter/voter.service';
import { AuthService } from './../../modules/user/auth.service';
import { ISession } from './../event.model';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css'],
})
export class SessionListComponent implements OnChanges {
  @Input()
  public sessions: ISession[];

  @Input()
  filterBy: string;

  @Input()
  sortBy: string;

  @Input()
  eventId: any;

  visibleSessions: ISession[] = [];

  constructor(
    public authService: AuthService,
    private voterService: VoterService
  ) {}

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy == 'name'
        ? this.visibleSessions.sort(sortByVotesDesc)
        : this.visibleSessions.sort(sortByNameAsc);
    }
  }

  toggleVote(session: ISession): void {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(
        this.eventId,
        session,
        this.authService.currentUser.userName
      );
    } else {
      this.voterService.addVoter(
        this.eventId,
        session,
        this.authService.currentUser.userName
      );
    }
    if (this.sortBy == 'votes') this.visibleSessions.sort(sortByVotesDesc);
  }

  userHasVoted(session: ISession): boolean {
    return this.voterService.usarHasVoted(
      session,
      this.authService.currentUser.userName
    );
  }

  filterSessions(filter: string): void {
    if (filter == 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(
        (s) => s.level.toLowerCase() == filter
      );
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name == s2.name) return 0;
  else return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  if (s1.voters && s2.voters) return s2.voters.length - s1.voters.length;
  else return 0;
}
