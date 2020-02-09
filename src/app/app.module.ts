import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { StudentRecordsUpdateComponent } from './student-records-update/student-records-update.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentDisplayComponent,
    StudentRecordsUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
