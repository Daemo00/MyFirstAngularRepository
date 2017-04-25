import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "app/recipe-book/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Pizza', 'Pizza is very good', 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'),
    new Recipe('Pizza', 'Pizza is veryvery good', 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe: Recipe){
    this.selectedRecipe.emit(recipe);
  }
}
