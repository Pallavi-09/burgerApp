import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Recipe } from '../recipes/recipe.modal'
import { RecipeService } from '../recipes/recipe.service';

@Injectable()

export class DataStorageService{

    constructor(private http:HttpClient, 
                private recipeService:RecipeService){}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://ng-course-recipe-book-b1778.firebaseio.com/recipes.json', recipes)
        .subscribe(
            res => { console.log('response of store', res);}
        );
    }

    fetchRecipes(){
        this.http.get<Recipe[]>('https://ng-course-recipe-book-b1778.firebaseio.com/recipes.json')
        .subscribe(
            recipe => { 
                this.recipeService.setRecipe(recipe);
                console.log('response of store', recipe);
        });   
    }
}