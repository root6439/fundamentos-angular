import { ISession } from './../event.model';
import { SessionListComponent } from './session-list.component';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mockAuthService: any, mockVoterService: any;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngOnChanges', () => {
    it('should filter the sessions correctly', () => {
      component.sessions = <Array<ISession>>[
        {
          name: 'session 1',
          level: 'intermediate',
        },
        {
          name: 'session 2',
          level: 'beginner',
        },
        {
          name: 'session 3',
          level: 'intermediate',
        },
      ];

      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions[2].name).toBe('session 3');
    });
  });
});
