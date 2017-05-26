import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { RecipeBookComponent } from "app/recipe-book/recipe-book.component";
import { RecipeStartComponent } from "app/recipe-book/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "app/recipe-book/recipe-edit/recipe-edit.component";
import { AuthGuard } from "app/auth/auth-guard.service";
import { RecipeDetailComponent } from "app/recipe-book/recipe-detail/recipe-detail.component";
import { CanDeactivateGuard } from "app/recipe-book/recipe-edit/can-deactivate-guard.service";

const recipesRoutes: Routes = [
  {
        path: 'recipes', component: RecipeBookComponent, canActivateChild: [AuthGuard],
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
            { path: ':recipeId', component: RecipeDetailComponent },
            {
                path: ':recipeId/edit', component: RecipeEditComponent,
                canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard]
            }
        ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
