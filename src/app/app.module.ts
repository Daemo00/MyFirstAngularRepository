import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { AppRoutingModule } from "app/shared/app-routing.module";
import { AuthGuard } from "app/auth/auth-guard.service";
import { AuthService } from "app/auth/auth.service";
import { CanDeactivateGuard } from "app/recipe-book/recipe-edit/can-deactivate-guard.service";
import { HomeComponent } from './home/home.component';
import { HomeworksModule } from "app/homeworks/homeworks.module";
import { RecipeBookService } from "app/recipe-book/recipe-book.service";
import { ServerService } from "app/data/server.service";
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FirebaseResolver } from "app/core/firebase.resolver";
import { RecipesModule } from "app/recipe-book/recipes.module";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HomeworksModule,
    SharedModule,
    RecipesModule
  ],
  providers: [ShoppingListService, RecipeBookService
    , AuthService, AuthGuard, CanDeactivateGuard, ServerService, FirebaseResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
