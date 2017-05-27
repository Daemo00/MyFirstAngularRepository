import { NgModule } from '@angular/core';
import { SigninComponent } from "app/auth/signin/signin.component";
import { SignupComponent } from "app/auth/signup/signup.component";
import { SharedModule } from "app/shared/shared.module";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "app/auth/auth-routing.module";

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [
    SignupComponent,
    SigninComponent
  ]
})
export class AuthModule { }
