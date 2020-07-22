import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe : Recipe;
  id : number;
  
  constructor(private recipeService: RecipeService,
              private router : Router,
              private route : ActivatedRoute) {}

  ngOnInit(): void {
    console.log('IN the comp')
    this.route.params
              .subscribe(
                (params:Params) => { 
                    this.id = +params['id'];
                    this.recipe = this.recipeService.getRecipeByIndex(this.id);
                }
              )
  }

  onAddToShoppingList(){
    this.recipeService.addINgredientToShoppingList(this.recipe.ingredient)
  }

  editRecipe(){
    this.router.navigate(['edit'], {relativeTo : this.route});
    //this.router.navigate(['../',this.id,'edit'], {relativeTo : this.route})
  }
}
