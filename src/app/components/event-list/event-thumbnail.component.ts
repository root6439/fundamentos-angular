
import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail" [routerLink]="['/events', event.id]">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngStyle]="getStartTimeStyle()" 
        [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'"> (Early Start) </span>
        <span *ngSwitchCase="'10:00 am'"> (Late Start) </span>
        <span *ngSwitchDefault> (Normal Start) </span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div *ngIf="event?.location; else onlineUrl">
        <span>
          Location: {{event?.location?.address}}
        </span>
        <span class="pad-left">
          {{event?.location?.city}}, {{event?.location?.country}}
        </span>
      </div>
      <ng-template #onlineUrl>
        <div>
          Online URL: {{ event?.onlineUrl}}
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .green { color: #003300 !important; }
    .bold { font-weight: bold; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; word-wrap: break-word; }
    .thumbnail { min-height: 210px }
  `]
})
export class EventThumbnailComponent {

  @Input()
  public event: any;

  // To [ngClass]

  //Sending a string
  // public getStartTimeClass(): string {
  //   if (this.event && this.event.time == '8:00 am')
  //     return 'green bold'
  //   return '';
  // }

  // Sending a object
  // public getStartTimeClass(): any {
  //   const isEarlyTime: boolean = this.event && this.event.time == '8:00 am'
  //   return { green: isEarlyTime, bold: isEarlyTime }
  // }

  //Sending a array
  // public getStartTimeClass(): Array<string> {
  //   if (this.event && this.event.time == '8:00 am') {
  //     return ['green', 'bold'];
  //   }
  //   return [];
  // }

  // To [ngStyle]
  // Only works this way
  public getStartTimeStyle(): any {
    if (this.event && this.event.time == '8:00 am')
      return { 'color': '#003300', 'font-weight': 'bold' };
    return {};
  }

}