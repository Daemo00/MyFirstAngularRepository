import { Recipe } from "app/recipe-book/recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Injectable()
export class RecipeBookService {

    private recipes: Recipe[] = [
        new Recipe(
            "Pizza",
            "Pizza is very good", "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
            [
                new Ingredient("Pasta for pizza", 1, "bucket"),
                new Ingredient("Tomatoes", 2, "hectogram")
            ]),
        new Recipe(
            "Tiramisù",
            "Tiramisù is also very good", 
            "https://c1.staticflickr.com/6/5258/5493353646_65309266b5_b.jpg",
            [
                new Ingredient("Mascarpone", 1, "l")
            ])
    ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}