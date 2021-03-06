import { EventEmitter } from '@angular/core';
import { ISession } from './../event.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output } from '@angular/core';
import { restrictedWords } from 'src/app/shared/CustomValidators';


@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  @Output()
  saveNewSession = new EventEmitter();

  @Output()
  cancelFormEvent = new EventEmitter();

  name = new FormControl(null, Validators.required)
  presenter = new FormControl(null, Validators.required)
  duration = new FormControl(null, Validators.required)
  level = new FormControl(null, Validators.required)
  abstract = new FormControl('', [
    Validators.required,
    Validators.maxLength(400),
    restrictedWords(['foo', 'bar'])
  ])

  public formSessionNew: FormGroup = new FormGroup({
    name: this.name,
    presenter: this.presenter,
    duration: this.duration,
    level: this.level,
    abstract: this.abstract
  })


  constructor() { }

  ngOnInit(): void {
  }

  saveSession(values: any) {
    const session: ISession = {
      id: 999,
      name: values.name,
      presenter: values.presenter,
      duration: +values.duration,
      level: values.level,
      abstract: values.abstract,
      voters: []
    }
    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelFormEvent.emit();
  }

}
