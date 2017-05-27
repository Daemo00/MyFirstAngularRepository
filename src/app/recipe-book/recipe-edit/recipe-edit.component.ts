import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RecipeBookService } from "app/recipe-book/recipe-book.service";
import { Recipe } from "app/recipe-book/recipe.model";
import { CanComponentDeactivate } from "app/recipe-book/recipe-edit/can-deactivate-guard.service";
import { Observable } from "rxjs/Observable";
import { Ingredient } from "app/shared/ingredient.model";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, CanComponentDeactivate {
  ingredientsFormArray: FormArray;
  id: number;
  recipeIngredients: Ingredient[];
  recipeDescription: string;
  recipeName: string;
  changesSaved: boolean = false;
  recipe: Recipe;
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(private recipeBookService: RecipeBookService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['recipeId'];
        this.editMode = this.id != null;
        this.recipe = this.editMode ? this.recipeBookService.getRecipes()[this.id] : null;
        this.initForm();
      }
    );
    this.ingredientsFormArray = <FormArray> this.recipeForm.get('ingredients');
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.editMode) return true;
    if (
     this.recipeForm.touched &&
      !Recipe.fromFormGroup(this.recipeForm).equals(this.recipe) &&
     !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

  private initForm() {
    this.recipeForm = Recipe.getFormGroup(this.recipe);
  }

  onSubmit() {
    console.log(this.recipeForm.value);
    this.changesSaved = true;
    if (this.editMode)
      this.recipeBookService.updateRecipe(this.id, Recipe.fromFormGroup(this.recipeForm)); //this.recipeForm.value
    else
      this.recipeBookService.addRecipe(Recipe.fromFormGroup(this.recipeForm)); //this.recipeForm.value
    this.router.navigate([".."], { relativeTo: this.route });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(Ingredient.getFormGroup(new Ingredient()));
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate([".."], { relativeTo: this.route });
  }
}