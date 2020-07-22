import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal'
import { ShoppingListService } from './shopping-list.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients : Ingredient[];
  private subsdestroy : Subscription

  constructor(private slservice:ShoppingListService) { }

  ngOnInit(){
    this.ingredients = this.slservice.getIngredients();
    this.subsdestroy = this.slservice.ingredientChanged.subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy(){
    this.subsdestroy.unsubscribe();
  }

  onEditItem(index:number){
    this.slservice.startEditing.next(index)
  }
  // onIngredientData(ingredient : Ingredient){
  //   this.ingredients.push(ingredient);
  // }
}
