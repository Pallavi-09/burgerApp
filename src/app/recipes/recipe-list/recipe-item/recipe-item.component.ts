import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.modal';
// import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe : Recipe;
  @Input() index : number
  // @Output() recipeSelected = new EventEmitter<void> ();
  
  constructor() { }

  ngOnInit(): void {
  }

  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
  getStars = function(rating) {
    var val = parseFloat(rating);
    var size = val/5*100;
    return size + '%';
  }
}
