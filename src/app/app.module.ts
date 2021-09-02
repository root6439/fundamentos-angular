import { ToastrService } from './services/toastr-service/toastr.service';
import { EventService } from './services/event-service/event-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-list/event-thumbnail.component';
import { NavBarComponent } from './nav/nav.component';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ EventService, ToastrService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
