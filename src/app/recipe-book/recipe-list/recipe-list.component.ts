import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from "app/recipe-book/recipe.model";
import { RecipeBookService } from "app/recipe-book/recipe-book.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipeListSubscription: Subscription;
  recipes: Recipe[];

  constructor(private recipeBookService: RecipeBookService) { }

  ngOnInit() {
    this.recipes = this.recipeBookService.getRecipes();
    this.recipeListSubscription = this.recipeBookService.recipeChanges.subscribe(
      (newRecipeList: Recipe[]) => {
        this.recipes = newRecipeList;
      }
    )
  }

  ngOnDestroy(): void {
    this.recipeListSubscription.unsubscribe();
  }
}