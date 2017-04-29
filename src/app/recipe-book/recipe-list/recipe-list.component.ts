import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "app/recipe-book/recipe.model";
import { RecipeBookService } from "app/recipe-book/recipe-book.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeBookService: RecipeBookService) { }

  ngOnInit() {
    this.recipes = this.recipeBookService.getRecipes();
  }
}