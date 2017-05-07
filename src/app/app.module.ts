import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeworksComponent } from './homeworks/homeworks.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { GameControlComponent } from './homeworks/third-assignment/game-control/game-control.component';
import { OddComponent } from './homeworks/third-assignment/odd/odd.component';
import { EvenComponent } from './homeworks/third-assignment/even/even.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { AppRoutingModule } from "app/shared/app-routing.module";
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { AuthGuard } from "app/shared/auth-guard.service";
import { AuthService } from "app/shared/auth.service";
import { CanDeactivateGuard } from "app/recipe-book/recipe-edit/can-deactivate-guard.service";
import { HomeComponent } from './home/home.component';
import { FifthAssignmentComponent } from './homeworks/fifth-assignment/fifth-assignment.component';
import { FourthAssignmentComponent } from './homeworks/fourth-assignment/fourth-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeworksComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeBookComponent,
    ShoppingEditComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    HomeComponent,
    FifthAssignmentComponent,
    FourthAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, AuthService, AuthGuard, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
