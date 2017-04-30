import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { RecipeBookService } from "app/recipe-book/recipe-book.service";
import { Recipe } from "app/recipe-book/recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
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

}
