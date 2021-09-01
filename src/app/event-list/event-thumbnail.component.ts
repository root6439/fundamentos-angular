import { AppComponent } from './../app.component';
import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngSwitch]="event?.time">Time: {{event?.time}}
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
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; word-wrap: break-word;}
    .thumbnail { min-height: 210px }
  `]
})
export class EventThumbnailComponent {

  @Input()
  public event: any;


}