import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from "app/recipe-book/recipe.model";
import { RecipeBookService } from "app/recipe-book/recipe-book.service";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipeListSubscription: Subscription;
  recipes: Recipe[];

  constructor(private recipeBookService: RecipeBookService, private route: ActivatedRoute) { }

  ngOnInit() {
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