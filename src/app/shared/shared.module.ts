import { NgModule } from '@angular/core';
import { DropdownDirective } from "app/shared/dropdown.directive";
import { CommonModule } from "@angular/common";
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective]
})
export class SharedModule { }
