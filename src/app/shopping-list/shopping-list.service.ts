import { Ingredient } from "app/shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
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

  getIngredient(index: number): Ingredient{
    return this.getIngredients()[index];
  }

  getIngredients(){
      return this.ingredients.slice();
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.getIngredients());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.getIngredients());    
  }
}