import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Recipe } from "app/recipe-book/recipe.model";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { RecipeBookService } from "app/recipe-book/recipe-book.service";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class ServerService {

  address: string = 'https://myfirstapp-3e880.firebaseio.com';

  constructor(private http: Http, private recipeService: RecipeBookService, private authService: AuthService) { }

  storeStuffObservable(): Observable<Response> {
    let recipesAddr = this.address + '/recipes.json';
    if (this.authService.isAuthenticated())
      recipesAddr += '?auth=' + this.authService.getToken();
    return this.http.put(recipesAddr, this.recipeService.getRecipes());
  }

  getStuff() {
    let recipesAddr = this.address + '/recipes.json';
    if (this.authService.isAuthenticated())
      recipesAddr += '?auth=' + this.authService.getToken();
    return this.http.get(recipesAddr)
      .map<Response, Recipe[]>(
      (value: Response) => {
        const data: Recipe[] = value.json();
        for (let recipe of data)
          if (!recipe['ingredients'])
            recipe['ingredients'] = [];
        return data;
      }
      )
      .catch(
      (error: Response) => {
        console.log("Caught an error:");
        console.log(error);
        return Observable.throw("Something went horribly wrong");
      }
      )
      .subscribe(
      (value: Recipe[]) => {
        this.recipeService.setRecipes(value);
      }
      )
  }

  getAppNameObservable() {
      let appNameAddr = this.address + '/appName.json';
      return this.http.get(appNameAddr)
        .map<Response, String>(
        (value: Response) => {
          return value.json();
        }
        );
  }
}
