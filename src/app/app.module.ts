import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { AppComponent } from "app/app.component";
import { HeaderComponent } from "app/core/header/header.component";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { RecipeBookService } from "app/recipe-book/recipe-book.service";
import { AuthService } from "app/auth/auth.service";
import { AuthGuard } from "app/auth/auth-guard.service";
import { CanDeactivateGuard } from "app/recipe-book/recipe-edit/can-deactivate-guard.service";
import { ServerService } from "app/data/server.service";
import { FirebaseResolver } from "app/core/firebase.resolver";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "app/app-routing.module";
import { ErrorPageComponent } from "app/shared/error-page/error-page.component";
import { SharedModule } from "app/shared/shared.module";
import { AuthModule } from "app/auth/auth.module";
import { CoreModule } from "app/core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    AuthModule, // order is important!
    CoreModule,
    AppRoutingModule // order is important!
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
