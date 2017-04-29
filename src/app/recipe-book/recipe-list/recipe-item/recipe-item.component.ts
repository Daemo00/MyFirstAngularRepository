import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from "app/recipe-book/recipe.model";
import { RecipeBookService } from "app/recipe-book/recipe-book.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeBookService: RecipeBookService){ }

  onRecipeSelected(){
    this.recipeBookService.recipeSelected.emit(this.recipe);
  }
}