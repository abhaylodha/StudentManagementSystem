import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {
  @Output() onAddStudent = new EventEmitter<{ roll_no: number, name: string }>();

  newRollNo : number;
  newName = "";

  addStudent() {
    this.onAddStudent.emit({
      roll_no: this.newRollNo,
      name: this.newName
    })

  }

  constructor() { }

  ngOnInit() {
  }

}
