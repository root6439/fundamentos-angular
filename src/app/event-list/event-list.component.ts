import { ToastrService } from './../services/toastr-service/toastr.service';
import { EventService } from './../services/event-service/event-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div class="col-sm-5" *ngFor="let event1 of events1">
          <app-event-thumbnail [event]="event1" 
            (click)="handleThumbnailClick(event1.name)">
            </app-event-thumbnail>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  public events1: Array<any>;

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this. events1 = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: string): void {
    this.toastrService.success(eventName);
  }

}
