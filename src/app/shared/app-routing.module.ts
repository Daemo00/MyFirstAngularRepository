import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from "app/recipe-book/recipe-book.component";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "app/recipe-book/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "app/recipe-book/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "app/recipe-book/recipe-edit/recipe-edit.component";
import { AuthGuard } from "app/auth/auth-guard.service";
import { CanDeactivateGuard } from "app/recipe-book/recipe-edit/can-deactivate-guard.service";
import { HomeComponent } from "app/home/home.component";
import { ServerService } from "app/data/server.service";
import { SignupComponent } from "app/auth/signup/signup.component";
import { SigninComponent } from "app/auth/signin/signin.component";
import { FirebaseResolver } from "app/core/firebase.resolver";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: 'shoppingList',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        component: ShoppingListComponent,
    },
    {
        path: 'homeworks', loadChildren: 'app/homeworks/homeworks.module#HomeworksModule'
    },
    { path: 'signup', component: SignupComponent, resolve: { firebaseApp: FirebaseResolver } },
    { path: 'signin', component: SigninComponent, resolve: { firebaseApp: FirebaseResolver } }

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
