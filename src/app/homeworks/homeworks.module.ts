import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourthAssignmentComponent } from "app/homeworks/fourth-assignment/fourth-assignment.component";
import { FifthAssignmentComponent } from "app/homeworks/fifth-assignment/fifth-assignment.component";
import { OddComponent } from "app/homeworks/third-assignment/odd/odd.component";
import { EvenComponent } from "app/homeworks/third-assignment/even/even.component";
import { GameControlComponent } from "app/homeworks/third-assignment/game-control/game-control.component";
import { HomeworksComponent } from "app/homeworks/homeworks.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HomeworksRoutingModule } from "app/homeworks/homeworks-routing.module";
import { SixthAssignmentComponent } from './sixth-assignment/sixth-assignment.component';
import { FilterPipe } from "app/homeworks/sixth-assignment/filter.pipe";
import { ShortenPipe } from "app/homeworks/sixth-assignment/shorten.pipe";
import { ReversePipe } from './sixth-assignment/reverse.pipe';
import { SortPipe } from './sixth-assignment/sort.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HomeworksRoutingModule
  ],
  declarations: [
    HomeworksComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    FifthAssignmentComponent,
    FourthAssignmentComponent,
    SixthAssignmentComponent,
    FilterPipe,
    ShortenPipe,
    ReversePipe,
    SortPipe]
})
export class HomeworksModule { }
