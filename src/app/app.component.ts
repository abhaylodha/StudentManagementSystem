import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students = [{ roll_no: 9, name: 'Ditya Abhaykumar Lodha' },
  { roll_no: 32, name: 'Ayush Abhaykumar Lodha' }];

  newStudentAdded(newData: { roll_no: number, name: string }) {
    this.students.push({ roll_no: newData.roll_no, name: newData.name });
  }

  deleteStudent(data: { roll_no: number }) {

    console.info("Removing " + data.roll_no);

    this.students = this.students.filter(i => i.roll_no != data.roll_no);

  }
}
