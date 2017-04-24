import { Component, OnInit } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Sugar", 2, "hectogram"),
    new Ingredient("Flour", 3, "hectogram")
  ];
  constructor() { }

  ngOnInit() {
  }

}
