import { Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription:Subscription;
  editMode:Boolean = false;
  editedItemIndex;
  editedItem : Ingredient;
  @ViewChild('f') slForm : NgForm;
  // @ViewChild('nameInput') nameInputRef : ElementRef;
  // @ViewChild('amountInput') amountInputRef : ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppinglistservice:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppinglistservice.startEditing.subscribe(
      (index:number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppinglistservice.getIndrigentIndex(index);
        this.slForm.setValue({
          name : this.editedItem.name,
          amount : this.editedItem.amount
        })
      })  
  }

  onAddItem(form : NgForm){
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shoppinglistservice.updateIngredient(this.editedItemIndex,newIngredient);
    }
    else{
      this.shoppinglistservice.addIngrediens(newIngredient);
    }
    this.editMode=false;
    form.reset();
    // this.ingredientAdded.emit(newIngredient);
  }

  DeleteItem(){
    console.log('DELETE ITEM');

    this.shoppinglistservice.deleteItems(this.editedItemIndex);
    this.clearItem();
  }

  clearItem(){
    console.log('CLEAR ITEM');
    this.editMode=false;
    this.slForm.reset();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
