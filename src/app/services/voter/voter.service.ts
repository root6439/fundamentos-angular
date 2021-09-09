import { ISession } from '../../components/event.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor() { }

  deleteVoter(session: ISession, voterName: string): void {
    session.voters = session.voters.filter(voter => voter != voterName);
  }

  addVoter(session: ISession, voterName: string): void {
    session.voters.push(voterName);
  }

  usarHasVoted(session: ISession, voterName: string): boolean {
    return session.voters.some(voter => voter == voterName);
  }

}
