import { Component, inject } from '@angular/core';
import { GroceryItem } from '../list-side-bar/list-side-bar.component';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getAllGroceries } from 'src/app/store/actions';
import { GroceryService } from 'src/app/services/grocery.service';



@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent {

  private store = inject(Store<AppState>);
  private groceryService = inject(GroceryService);

  groceriesSubscription: Subscription = new Subscription();

  groupedGroceriesByCategory: [string, GroceryItem[]][] | [] = [];

  ngOnInit() {
    this.initAllGroceries();
    
    this.groceriesSubscription = this.store.select('groceries')
    .subscribe( groceries => {
      const {allGroceries} = groceries;
      this.groupedGroceriesByCategory = this.groceryService.groupItemsByCategory(allGroceries);
    });
  }

  ngOnDestroy() {
    this.groceriesSubscription.unsubscribe();
  }

  initAllGroceries() {
    this.store.dispatch( getAllGroceries() );
  }

}
