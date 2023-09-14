import { Component, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GroceryService } from 'src/app/services/grocery.service';
import { AppState } from 'src/app/store/app.reducers';
import { selectSelectedGroceries, selectSelectedGroceriesValue } from 'src/app/store/selectors/grocery.selectors';

export interface GroceryItem {
  id: number;
  name: string;
  category: Category;
}

export type Category =
  | 'Bakery'
  | 'Dairy'
  | 'Cereal'
  | 'Produce'
  | 'Meat'
  | 'Seafood'
  | 'Grains'
  | 'Canned Goods'
  | 'Condiments'
  | 'Cooking Essentials'
  | 'Snacks'
  | 'Beverages'
  | 'Frozen Foods'
  | 'Household'
  | 'Personal Care';

@Component({
  selector: 'app-list-side-bar',
  templateUrl: './list-side-bar.component.html',
  styleUrls: ['./list-side-bar.component.css']
})
export class ListSideBarComponent {
  private store = inject(Store<AppState>);
  groceryService = inject(GroceryService);

  selectedGroceriesListSubscription: Subscription = new Subscription();
  selectedGroceriesList: [string, GroceryItem[]][] | [] = [];


  ngOnInit() {
    this.selectedGroceriesListSubscription = this.store.pipe(select(selectSelectedGroceriesValue)).subscribe( (selectedGroceries) => {
      this.selectedGroceriesList = this.groceryService.groupItemsByCategory(selectedGroceries);
      console.log('selected??',selectedGroceries  );
    });
  }

}
