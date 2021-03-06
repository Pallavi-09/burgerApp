import { Component, OnInit} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStore: DataStorageService) { }

  ngOnInit(): void {
  }

  onSaveData(){
    this.dataStore.storeRecipes();
  }

  onFetchRecipe(){
    this.dataStore.fetchRecipes();
  }
} 
