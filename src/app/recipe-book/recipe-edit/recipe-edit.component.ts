import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { RecipeBookService } from "app/recipe-book/recipe-book.service";
import { Recipe } from "app/recipe-book/recipe.model";
import { CanComponentDeactivate } from "app/recipe-book/recipe-edit/can-deactivate-guard.service";
import { Observable } from "rxjs/Observable";
import { Ingredient } from "app/shared/ingredient.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, CanComponentDeactivate {
    recipeIngredients: Ingredient[];
    recipeDescription: string;
    recipeName: string;
    changesSaved: boolean = false;
  recipe: Recipe;
  editMode: boolean = false;

  constructor(private recipeBookService: RecipeBookService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeBookService.getRecipes()[params['recipeId']];
        this.editMode = params['recipeId'] != null;
      }
    );
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.editMode) {
      return true;
    }
    if (
      (this.recipeName !== this.recipe.name 
      || this.recipeDescription !== this.recipe.description
      || this.recipeIngredients !== this.recipe.ingredients) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}
