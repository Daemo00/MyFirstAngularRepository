import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-homeworks',
  templateUrl: './homeworks.component.html',
  styleUrls: ['./homeworks.component.css']
})
export class HomeworksComponent {
  viewSecondAssignment;
  viewThirdAssignment;
  viewFourthAssignment;
  viewFifthAssignment;
  viewSixthAssignment;

  btnDetailsClicked = false;
  arrLogDetailClicks = [];

  odds = [];
  evens = [];

  onDetailsClicked() {
    this.btnDetailsClicked = !this.btnDetailsClicked;
    this.arrLogDetailClicks.push({ number: this.arrLogDetailClicks.length + 1, date: new Date() });
  }

  onGameStarted(n: number) {
    console.log(n % 2);
    if (n % 2 == 1) {
      this.odds.push(n);
    }
    else {
      this.evens.push(n);
    }
  }
} 