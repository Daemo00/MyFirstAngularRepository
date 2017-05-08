import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl, AsyncValidator } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { customValidators } from "app/homeworks/fifth-assignment/custom-validators";

@Component({
  selector: 'app-fifth-assignment',
  templateUrl: './fifth-assignment.component.html',
  styleUrls: ['./fifth-assignment.component.css']
})
export class FifthAssignmentComponent implements OnInit {
  projectForm: FormGroup;
  statuses: { id: string, description: string }[] = [
    { id: "stable", description: "Stable" },
    { id: "critical", description: "Critical" },
    { id: "finished", description: "Finished" }
  ];
  selectedStatusId: string = this.statuses[0].id;
  
  constructor() { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      "projectName": new FormControl("default project name", [Validators.required, customValidators.forbiddenProjectName.bind(this)], customValidators.asyncForbiddenProjectName.bind(this)),
      "email": new FormControl("default email", [Validators.required, Validators.email]),
      "projectStatus": new FormControl(this.selectedStatusId)
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}