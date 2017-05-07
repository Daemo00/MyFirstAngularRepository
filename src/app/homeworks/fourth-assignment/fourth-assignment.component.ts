import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-fourth-assignment',
  templateUrl: './fourth-assignment.component.html',
  styleUrls: ['./fourth-assignment.component.css']
})
export class FourthAssignmentComponent implements OnInit {
  subscriptionType = "advanced";

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(f: NgForm){
    console.log(f.value);
    f.reset({subscription: 'advanced'});
  }
}