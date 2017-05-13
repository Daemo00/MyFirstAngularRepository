import { Ingredient } from "app/shared/ingredient.model";
import { FormGroup, Validators, FormControl, FormArray } from "@angular/forms";

export class Recipe {
    constructor(
        public name: string = "",
        public description: string = "",
        public imagePath: string = "",
        public ingredients: Ingredient[] = []) {
    }

    static getFormGroup(recipe: Recipe): FormGroup {
        if (!recipe) recipe = new Recipe();
        var ingredientsFormArray: FormArray = new FormArray([]);
        for (let ingredient of recipe.ingredients)
            ingredientsFormArray.push(Ingredient.getFormGroup(ingredient));

        return new FormGroup({
            'name': new FormControl(recipe.name, Validators.required),
            'imagePath': new FormControl(recipe.imagePath, Validators.required),
            'description': new FormControl(recipe.description, Validators.required),
            'ingredients': ingredientsFormArray
        });
    }

    static fromFormGroup(recipeForm: FormGroup): Recipe {
        return new Recipe(
            recipeForm.value['name'],
            recipeForm.value['description'],
            recipeForm.value['imagePath'],
            recipeForm.value['ingredients']
        );
    }

    equals(recipe: Recipe) {
        if (!recipe) return false;
        return this.name === recipe.name &&
            this.description === recipe.description &&
            this.imagePath === recipe.imagePath &&
            Ingredient.ingredientsEqual(this.ingredients, recipe.ingredients)
    }
}