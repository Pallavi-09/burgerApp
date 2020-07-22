import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';

import { RecipesComponent } from '../recipes/recipes.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';
import { HomeComponent } from '../home/home.component';


const appRoutes : Routes = [
    { path : '', redirectTo : '/home', pathMatch : 'full' },
    { path : 'home', component : HomeComponent },
    { path : 'recipes', component : RecipesComponent, children : [
        { path : '', component: RecipeListComponent},
        { path : 'new', component: RecipeEditComponent},
        { path : ':id', component: RecipeDetailComponent},
        { path : ':id/edit', component: RecipeEditComponent}
    ]},
    { path : 'shopping-list', component : ShoppingListComponent },
    { path : 'about', component : AboutMeComponent }   
]
 
@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{
    
}