import { ISession } from './../event.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  @Input()
  public sessions: ISession[] | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
