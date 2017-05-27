import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from "app/recipe-book/recipe.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { RecipeBookService } from "app/recipe-book/recipe-book.service";
import { Router, ActivatedRoute, Data, Params } from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipe: Recipe;

  constructor(private recipeBookService: RecipeBookService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log("params subscription");
        this.id = +params['recipeId'];
        this.recipe = this.recipeBookService.getRecipes()[this.id];
      }
    );
    this.recipeBookService.recipeChanges.subscribe(
      ()=>{
        console.log("recipeChanges subscription");
        this.recipe = this.recipeBookService.getRecipes()[this.id];
      });
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.server = this.serversService.getServer(+params['id']);
    //     }
    //   );
  }

  onToShoppingList() {
    this.recipeBookService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.router.navigate(["shopping-list"])
  }

  onDeleteRecipe(){
    this.recipeBookService.deleteRecipe(this.id);
  }
}