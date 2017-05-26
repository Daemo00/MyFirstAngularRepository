import { Component, OnInit } from '@angular/core';
import { RecipeBookService } from "app/recipe-book/recipe-book.service";
import { ServerService } from "app/data/server.service";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent implements OnInit {

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.serverService.getStuff();
  }
}