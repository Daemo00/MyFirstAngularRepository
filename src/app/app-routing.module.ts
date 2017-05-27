import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { HomeComponent } from "app/core/home/home.component";
import { NgModule } from "@angular/core";
import { ErrorPageComponent } from "app/shared/error-page/error-page.component";
import { AuthGuard } from "app/auth/auth-guard.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'recipes', loadChildren: 'app/recipe-book/recipes.module#RecipesModule', canLoad: [AuthGuard] }, // Lazy loading with check
    { path: 'shopping-list', loadChildren: 'app/shopping-list/shopping-list.module#ShoppingListModule' }, // Lazy loading
    { path: 'homeworks', loadChildren: 'app/homeworks/homeworks.module#HomeworksModule' }, // Lazy loading
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}