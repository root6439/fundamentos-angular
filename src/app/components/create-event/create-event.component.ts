import { EventService } from 'src/app/services/event-service/event-service.service';
import { IEvent } from './../event.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  public newEvent: IEvent;

  public newEventForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
    time: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
    location: new FormGroup({
      address: new FormControl(null),
      city: new FormControl(null),
      country: new FormControl(null),
    }),
    onlineUrl: new FormControl(null),
    imageUrl: new FormControl(null, Validators.required),
  });

  public isDirty: boolean = true;

  constructor(private route: Router, private eventService: EventService) {}

  ngOnInit(): void {}

  saveEvent(values: any) {
    this.eventService.saveEvent(values).subscribe(() => {
      this.isDirty = false;
      this.route.navigate(['events']);
    });
  }

  public cancel(): void {
    this.route.navigate(['events']);
  }
}
