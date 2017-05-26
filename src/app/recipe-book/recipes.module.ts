import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from "app/recipe-book/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "app/recipe-book/recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "app/recipe-book/recipe-detail/recipe-detail.component";
import { RecipeBookComponent } from "app/recipe-book/recipe-book.component";
import { RecipeStartComponent } from "app/recipe-book/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "app/recipe-book/recipe-edit/recipe-edit.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipesRoutingModule } from "app/recipe-book/recipes-routing.module";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    SharedModule, 
    ReactiveFormsModule,
    RecipesRoutingModule
  ],
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeBookComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ]
})
export class RecipesModule { }
