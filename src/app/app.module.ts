import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
