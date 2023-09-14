import { Component, inject } from '@angular/core';
import { GroceryItem } from '../list-side-bar/list-side-bar.component';
import { AppState } from 'src/app/store/app.reducers';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { createGrocery, getAllGroceries } from 'src/app/store/actions';
import { GroceryService } from 'src/app/services/grocery.service';
import { selectAllGroceriesValue } from 'src/app/store/selectors/grocery.selectors';



@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent {

  private store = inject(Store<AppState>);
  private groceryService = inject(GroceryService);

  groceriesSubscription: Subscription = new Subscription();
  allGroceriesSubscription: Subscription = new Subscription();

  groupedGroceriesByCategory: [string, GroceryItem[]][] | [] = [];

  ngOnInit() {
    this.initAllGroceries();

    this.groceriesSubscription = this.store.select('groceries')
    .subscribe( ({allGroceries}) => {
      // this.groupedGroceriesByCategory = this.groceryService.groupItemsByCategory(allGroceries);
    });
    this.allGroceriesSubscription = this.store.pipe(select(selectAllGroceriesValue)).subscribe( (allGroceries) => {
      this.groupedGroceriesByCategory = this.groceryService.groupItemsByCategory(allGroceries);
    });
  }

  ngOnDestroy() {
    this.groceriesSubscription.unsubscribe();
    this.allGroceriesSubscription.unsubscribe();
  }

  initAllGroceries() {
    this.store.dispatch( getAllGroceries() );
  }

  addItemToCart(item: GroceryItem) {
    this.store.dispatch(createGrocery({grocery: item}));
  } 

}
