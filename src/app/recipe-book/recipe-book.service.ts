import { Recipe } from "app/recipe-book/recipe.model";
import { Injectable, OnInit } from "@angular/core";
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { Subject } from "rxjs";
import { ServerService } from "app/data/server.service";
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class RecipeBookService {
    recipeChanges: Subject<Recipe[]> = new Subject();

    private recipes: Recipe[];

    constructor(private shoppingListService: ShoppingListService){}
    
    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipeChanges.next(this.getRecipes());        
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanges.next(this.getRecipes());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanges.next(this.getRecipes());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanges.next(this.getRecipes());        
    }
}