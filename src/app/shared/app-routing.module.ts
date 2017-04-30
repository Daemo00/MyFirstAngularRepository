import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from "app/recipe-book/recipe-book.component";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "app/recipe-book/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "app/recipe-book/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "app/recipe-book/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipeBookComponent,
        children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':recipeId', component: RecipeDetailComponent },
            { path: ':recipeId/edit', component: RecipeEditComponent }
        ]
    }
    , {
        path: 'shoppingList',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        component: ShoppingListComponent,
    }
    // ,{
    //     path: 'shoppingList',
    //     // canActivate: [AuthGuard],
    //     // canActivateChild: [AuthGuard],
    //     component: ShoppingListComponent,
    //     children: [
    //         { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
    //         { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    //     ]
    // }
    // ,
    // { path: 'not-found', component: PageNotFoundComponent },
    // { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
    // { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
