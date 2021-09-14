import { DurationPipe } from './../../shared/duration.pipe';
import { VoterService } from './../../services/voter/voter.service';
import { AuthService } from './../../modules/user/auth.service';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionListComponent } from './session-list.component';

describe('SessonListComponent', () => {
  let mockAuthService: any,
    mockVoterService: any,
    fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement;

  beforeEach(() => {
    mockAuthService = {
      isAuthenticated: () => true,
      currentUser: { name: 'Joe' },
    };
    mockVoterService = { userHasVoted: () => true };
    TestBed.configureTestingModule({
      declarations: [SessionListComponent, DurationPipe],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService },
      ],
    });
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {
    it('should have the correct title', () => {
      component.sessions = [
        {
          name: 'session 1',
          id: 3,
          presenter: 'Joe',
          duration: 1,
          level: 'beginner',
          abstract: 'abs',
          voters: ['john', 'bob'],
        },
      ];
    });
    component.filterBy = 'all';
    component.sortBy = 'name';
    component.eventId = 4;
    component.ngOnChanges();

    fixture.detectChanges();

    expect(element.querySelector('[well-title]').textContent).toContain(
      'Session 1'
    );
  });
});

// for isolated tests
// import { ISession } from './../event.model';
// import { SessionListComponent } from './session-list.component';

// describe('SessionListComponent', () => {
//   let component: SessionListComponent;
//   let mockAuthService: any, mockVoterService: any;

//   beforeEach(() => {
//     component = new SessionListComponent(mockAuthService, mockVoterService);
//   });

//   describe('ngOnChanges', () => {
//     it('should filter the sessions correctly', () => {
//       component.sessions = <Array<ISession>>[
//         {
//           name: 'session 1',
//           level: 'intermediate',
//         },
//         {
//           name: 'session 2',
//           level: 'beginner',
//         },
//         {
//           name: 'session 3',
//           level: 'intermediate',
//         },
//       ];

//       component.filterBy = 'all';
//       component.sortBy = 'name';
//       component.eventId = 3;

//       component.ngOnChanges();

//       expect(component.visibleSessions[2].name).toBe('session 3');
//     });
//   });
// });
