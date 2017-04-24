import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeworks',
  templateUrl: './homeworks.component.html',
  styleUrls: ['./homeworks.component.css']
})
export class HomeworksComponent {

  btnDetailsClicked = false;
  arrLogDetailClicks = [];
  viewSecondAssignment = false;

  onSecondAssignmentClick(){
    this.viewSecondAssignment = !this.viewSecondAssignment;
  }

  onDetailsClicked(){
    this.btnDetailsClicked = !this.btnDetailsClicked;
    this.arrLogDetailClicks.push({number: this.arrLogDetailClicks.length + 1, date: new Date()});
  }
}
