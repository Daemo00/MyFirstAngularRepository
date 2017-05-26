import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
import { AuthService } from "app/auth/auth.service";
import { ServerService } from "app/data/server.service";
import { Recipe } from "app/recipe-book/recipe.model";
import { RecipeBookService } from "app/recipe-book/recipe-book.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appName = this.serverService.getAppNameObservable(); // this is 'unpacked' (subscribed) by the async pipe in HTML
  constructor(private authService: AuthService, private serverService: ServerService, private recipeService: RecipeBookService) { }

  ngOnInit(): void {
  }

  onSaveData() {
    this.serverService.storeStuffObservable().subscribe(
      (value) => { console.log(value) },
      (error) => { console.log(error) },
      () => { console.log("complete") }
    );
  }

  onFetchData() {
    this.serverService.getStuff();
  }

  onLogout() {
    this.authService.signOut();
  }
}