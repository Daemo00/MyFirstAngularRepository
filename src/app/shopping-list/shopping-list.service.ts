import { Ingredient } from "app/shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
    new Ingredient("Sugar", 2, "hectogram"),
    new Ingredient("Flour", 3, "hectogram")
  ];

  addIngredient(ingredient: Ingredient){
    this.addIngredients([ingredient]);
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.getIngredients());
  }

  getIngredients(){
      return this.ingredients.slice();
  }
}