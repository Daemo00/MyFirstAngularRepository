import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/auth/auth.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(signuForm: NgForm){
    const email = signuForm.value.email;
    const password = signuForm.value.password;
    this.authService.signinUser(email, password);   
  }

}
