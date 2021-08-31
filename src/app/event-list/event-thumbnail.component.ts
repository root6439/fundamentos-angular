import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div>Time: {{event.time}}</div>
      <div>Price: \${{event.price}}</div>
      <div>
        <span>
          Location: {{event.location.address}}
          <span>{{event.location.city}}, {{event.location.country}}</span>
        </span>
      </div>
    </div>
  `
})
export class EventThumbnailComponent {

  @Input()
  public event: any;


}