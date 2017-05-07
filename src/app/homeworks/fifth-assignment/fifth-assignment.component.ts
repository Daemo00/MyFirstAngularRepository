import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl, AsyncValidator } from "@angular/forms";
import { Observable } from "rxjs/Observable";

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
  forbiddenProjectNames: string[] = ["Test"];
  asyncForbiddenProjectNames: string[] = ["AsyncTest"];

  constructor() { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      "projectName": new FormControl("default project name", [Validators.required, this.forbiddenProjectName.bind(this)], this.asyncForbiddenProjectName.bind(this)),
      "email": new FormControl("default email", [Validators.required, Validators.email]),
      "projectStatus": new FormControl(this.selectedStatusId)
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  forbiddenProjectName(control: AbstractControl): ValidationErrors {
    if (this.forbiddenProjectNames.indexOf(control.value) > -1) {
      return { 'forbiddenProjectName': true };
    }
    return null;
  }

  asyncForbiddenProjectName(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise<ValidationErrors>((resolve) => {
      setTimeout(() => {
        if (this.asyncForbiddenProjectNames.indexOf(control.value) > -1) {
          resolve({ 'asyncForbiddenProjectName': true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}