import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-upvote',
  template: `
    <div class="voting-widget-container pointable" (click)="onClick()">
      <div class="voting-button">
        <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
      </div>
      <div class="badge badge-inerse voting-count">
        <div> {{count}} </div>
      </div>
    </div>
  `,
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {

  iconColor: string;

  @Input() set voted(val: any) {
    this.iconColor = val ? 'red' : 'white';
  }

  @Input()
  count: number;

  @Output()
  vote = new EventEmitter();

  onClick(): void {
    this.vote.emit({})
  }

}
