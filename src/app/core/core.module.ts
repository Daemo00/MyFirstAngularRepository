import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from "app/shared/error-page/error-page.component";
import { HeaderComponent } from "app/core/header/header.component";
import { HomeComponent } from "app/core/home/home.component";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { AuthGuard } from "app/auth/auth-guard.service";
import { CanDeactivateGuard } from "app/recipe-book/recipe-edit/can-deactivate-guard.service";
import { AuthService } from "app/auth/auth.service";
import { ServerService } from "app/data/server.service";
import { RecipeBookService } from "app/recipe-book/recipe-book.service";
import { FirebaseResolver } from "app/core/firebase.resolver";
import { AppRoutingModule } from "app/app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    ErrorPageComponent
  ],
    providers: [ShoppingListService, RecipeBookService
    , AuthService, AuthGuard, CanDeactivateGuard, ServerService, FirebaseResolver],
    exports: [AppRoutingModule, HeaderComponent]
})
export class CoreModule { }
