import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('uomInput') uomInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    this.shoppingListService.addIngredient(new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value,
      this.uomInputRef.nativeElement.value,      
    ))
  }

  onDeleteItem(){
    
  }

  onClear(){

  }
}
