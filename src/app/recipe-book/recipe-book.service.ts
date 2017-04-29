import { Recipe } from "app/recipe-book/recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeBookService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
    new Recipe('Pizza', 'Pizza is very good', 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'),
    new Recipe('Pizza', 'Pizza is veryvery good', 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg')
  ];

  getRecipes(){
      return this.recipes.slice();
  }
}