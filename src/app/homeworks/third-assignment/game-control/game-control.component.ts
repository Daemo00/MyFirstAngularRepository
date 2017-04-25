import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  number = 0;
  @Output() gameRunning: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.number = 0;
    this.interval = setInterval(
      () => { this.gameRunning.emit(++this.number); },
      1000);
  }

  onGameStop() {
    clearInterval(this.interval);
  }
}