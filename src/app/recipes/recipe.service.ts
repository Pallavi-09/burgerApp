
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';
import { Ingredient } from '../shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService:ShoppingListService){

    }

    private recipes: Recipe[] = [
        new Recipe(
            'Crispy Veg Supreme', 
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.', 
            'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
            [
                new Ingredient('Onion', 1),
                new Ingredient('Veggies', 10),
            ],
            3,
            499
        ),
        new Recipe(
            'Veg Surprise',
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            'https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            [
                new Ingredient('Tomato', 20),
                new Ingredient('Onion', 10),
            ],
            4,
            599
        ),
        new Recipe(
            'Veg Chilli Cheese', 
            'There are many variations of passages of Lorem Ipsum available.', 
            'https://images.unsplash.com/photo-1551987840-f62d9c74ae78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=588&q=80',
            [
                new Ingredient('Tomato', 10),
                new Ingredient('Onion', 12),
                new Ingredient('Veggies', 13),
                new Ingredient('Genger', 16),
            ],
            3,
            150
        ),
        new Recipe(
            'Veggie Strips',
            'There are many variations of passages of Lorem Ipsum available.', 
            'https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            [
                new Ingredient('Tomato', 10),
                new Ingredient('Onion', 41),
            ],
            3,
            299
        ),
        new Recipe(
            'Veg Surprise',
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            'https://images.unsplash.com/photo-1550984754-8d1b067b0239?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=729&q=80',
            [
                new Ingredient('Tomato', 20),
                new Ingredient('Onion', 10),
            ],
            4,
            699
        ),
        new Recipe(
            'Veg Surprise',
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            'https://images.unsplash.com/photo-1477617722074-45613a51bf6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            [
                new Ingredient('Tomato', 20),
                new Ingredient('Onion', 10),
            ],
            2,
            399
        )
    ];

    getRecipes(){
        return this.recipes.slice();
    }

    addINgredientToShoppingList(ingredient:Ingredient[]){
        this.slService.addIngredients(ingredient);
    }

    getRecipeByIndex( index:number){
        return this.recipes[index];
    }

    setRecipe(recipes:Recipe[]){
        this.recipes = recipes;
    }
    
}