import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "app/shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingListRoutingModule } from "app/shopping-list/shopping-list-routing.module";
import { SharedModule } from "app/shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    SharedModule,
    ShoppingListRoutingModule,
    FormsModule
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent]
})
export class ShoppingListModule { }
