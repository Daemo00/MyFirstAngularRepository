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
  viewThirdAssignment = true;

  odds = [];
  evens = [];

  onDetailsClicked(){
    this.btnDetailsClicked = !this.btnDetailsClicked;
    this.arrLogDetailClicks.push({number: this.arrLogDetailClicks.length + 1, date: new Date()});
  }

  onGameStarted(n: number){
    console.log(n%2);
    if(n%2 == 1){
      this.odds.push(n);
    }
    else{
      this.evens.push(n);
    }
  }
}
