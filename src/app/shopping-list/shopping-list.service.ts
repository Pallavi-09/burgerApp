import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientChanged = new Subject<Ingredient[]>();
    startEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Stawberry', 200),
        new Ingredient('Vanilla', 100),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngrediens(newingredient:Ingredient){
        this.ingredients.push(newingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredient: Ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    getIndrigentIndex(index:number){
        return this.ingredients[index];
    }

    updateIngredient(index: number, newIngredient:Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteItems(index:number){
        this.ingredients.splice(index,1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}