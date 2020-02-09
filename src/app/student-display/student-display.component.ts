import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-display',
  templateUrl: './student-display.component.html',
  styleUrls: ['./student-display.component.css']
})
export class StudentDisplayComponent implements OnInit {
  @Input('studentRecord') student: { roll_no: number, name: string }
  @Output('onDeleteClick') studentDelete = new EventEmitter<{ roll_no: number }>();

  constructor() { }

  ngOnInit() {
  }

  delete(rNo: number) {
    console.info("Deleting Roll No : " + rNo);
    this.studentDelete.emit({ roll_no: rNo });
  }

}
