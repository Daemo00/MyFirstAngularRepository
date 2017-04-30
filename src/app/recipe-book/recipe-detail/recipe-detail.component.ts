import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipe-book/recipe.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { RecipeBookService } from "app/recipe-book/recipe-book.service";
import { Router, ActivatedRoute, Data, Params } from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
    // id: number;
  recipe: Recipe;

  constructor(private recipeBookService: RecipeBookService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeBookService.getRecipes()[+params['recipeId']];
      }
    );
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
  }
}
